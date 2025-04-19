import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { StoreContext } from '../../Context/StoreContext';
import './Verify.css';

const Verify = () => {
  const { url, setCartItems } = useContext(StoreContext);
  const [searchParams] = useSearchParams();

  const success = searchParams.get("success");
  const orderId = searchParams.get("orderId");
  const token = searchParams.get("token");  // PayPal order ID
  const PayerID = searchParams.get("PayerID"); // 🟢 You forgot this!

  const navigate = useNavigate();

  const verifyPayment = async () => {
    try {
      const response = await axios.post(url + "/api/order/verify", {
        success,
        orderId,
        token,
        PayerID, // ← Now included
      });

      if (response.data.success) {
        setCartItems({});
        navigate("/myorders");
      } else {
        navigate("/");
      }
    } catch (err) {
      console.error("Verification failed:", err);
      navigate("/");
    }
  };

  useEffect(() => {
    if (orderId && token && PayerID) {
      verifyPayment();
    } else if (success === "false" && orderId) {
      navigate("/cart");
    }
  }, []);

  return (
    <div className='verify'>
      <div className="spinner"></div>
    </div>
  );
};

export default Verify;
