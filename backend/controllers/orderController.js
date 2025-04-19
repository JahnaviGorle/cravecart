import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import paypal from "@paypal/checkout-server-sdk";

// PayPal configuration
const environment = process.env.NODE_ENV === "production" 
  ? new paypal.core.LiveEnvironment(process.env.PAYPAL_CLIENT_ID, process.env.PAYPAL_CLIENT_SECRET)
  : new paypal.core.SandboxEnvironment(process.env.PAYPAL_CLIENT_ID, process.env.PAYPAL_CLIENT_SECRET);
const paypalClient = new paypal.core.PayPalHttpClient(environment);

// Config variables
const currency = "INR";
const deliveryCharge = 50;
const frontend_URL = 'https://cravecart-frontend.onrender.com';

// Create PayPal order and generate payment URL
const placeOrder = async (req, res) => {
    try {
        const newOrder = new orderModel({
            userId: req.body.userId,
            items: req.body.items,
            amount: req.body.amount,
            address: req.body.address,
        });
        await newOrder.save();
        await userModel.findByIdAndUpdate(req.body.userId, { cartData: {} });

        // Create PayPal order request
        const request = new paypal.orders.OrdersCreateRequest();
        request.prefer("return=representation");
        
        // Calculate total amount including delivery charge
        const totalAmount = req.body.amount + deliveryCharge;
        
        // Setup PayPal order
        request.requestBody({
            intent: "CAPTURE",
            purchase_units: [
                {
                    amount: {
                        currency_code: currency,
                        value: totalAmount.toString(),
                        breakdown: {
                            item_total: {
                                currency_code: currency,
                                value: req.body.amount.toString()
                            },
                            shipping: {
                                currency_code: currency,
                                value: deliveryCharge.toString()
                            }
                        }
                    },
                    items: req.body.items.map(item => ({
                        name: item.name,
                        unit_amount: {
                            currency_code: currency,
                            value: item.price.toString()
                        },
                        quantity: item.quantity.toString()
                    }))
                }
            ],
            application_context: {
                return_url: `${frontend_URL}/verify?success=true&orderId=${newOrder._id}`,
                cancel_url: `${frontend_URL}/verify?success=false&orderId=${newOrder._id}`
            }
        });

        // Execute PayPal order request
        const order = await paypalClient.execute(request);
        
        // Find and return the approval URL
        const approvalUrl = order.result.links.find(link => link.rel === "approve").href;
        
        res.json({ success: true, redirect_url: approvalUrl });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error creating PayPal order" });
    }
};

// Place order with Cash on Delivery (unchanged)
const placeOrderCod = async (req, res) => {
    try {
        const newOrder = new orderModel({
            userId: req.body.userId,
            items: req.body.items,
            amount: req.body.amount,
            address: req.body.address,
            payment: true,
        });
        await newOrder.save();
        await userModel.findByIdAndUpdate(req.body.userId, { cartData: {} });

        res.json({ success: true, message: "Order Placed" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
};

// List orders for admin panel (unchanged)
const listOrders = async (req, res) => {
    try {
        const orders = await orderModel.find({});
        res.json({ success: true, data: orders });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
};

// User orders for frontend (unchanged)
const userOrders = async (req, res) => {
    try {
        const orders = await orderModel.find({ userId: req.body.userId });
        res.json({ success: true, data: orders });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
};

// Update order status (unchanged)
const updateStatus = async (req, res) => {
    console.log(req.body);
    try {
        await orderModel.findByIdAndUpdate(req.body.orderId, { status: req.body.status });
        res.json({ success: true, message: "Status Updated" });
    } catch (error) {
        res.json({ success: false, message: "Error" });
    }
};

// Verify and capture PayPal payment
const verifyOrder = async (req, res) => {
    const { orderId, success, token, PayerID } = req.body;
    
    try {
        if (success === "true" && token && PayerID) {
            // Create capture request
            const request = new paypal.orders.OrdersCaptureRequest(token);
            request.requestBody({});
            
            // Execute the payment capture
            const capture = await paypalClient.execute(request);
            
            if (capture.result.status === "COMPLETED") {
                // Update order payment status
                await orderModel.findByIdAndUpdate(orderId, { 
                    payment: true,
                    paymentDetails: {
                        paypalOrderId: token,
                        payerId: PayerID,
                        captureId: capture.result.purchase_units[0].payments.captures[0].id
                    }
                });
                res.json({ success: true, message: "Payment Successful" });
            } else {
                res.json({ success: false, message: "Payment Incomplete" });
            }
        } else {
            // If payment was canceled or failed
            await orderModel.findByIdAndDelete(orderId);
            res.json({ success: false, message: "Payment Failed or Canceled" });
        }
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Payment Verification Error" });
    }
};

export { placeOrder, listOrders, userOrders, updateStatus, verifyOrder, placeOrderCod };
