
# 🍔 CraveCart - Full Stack Food Ordering App

CraveCart is a complete full-stack food ordering website and admin dashboard built using the **MERN** stack with **PayPal** payment integration. Customers can browse food items, add them to cart, pay online, and track their orders — while admins can manage menu items and fulfill orders.

## 🌐 Live Demo

- 🛍️ Frontend Website: [https://cravecart-frontend.onrender.com](https://cravecart-frontend.onrender.com)
- 🧑‍🍳 Admin Panel: [https://cravecart-admin.onrender.com](https://cravecart-admin.onrender.com)

---

## 🧩 Tech Stack

- **Frontend:** React JS
- **Backend:** Node.js, Express
- **Database:** MongoDB
- **Authentication:** JWT & Bcrypt
- **Payments:** Stripe & PayPal

---

## 📦 Features

### 👥 User

- Register and login securely
- Browse food menu by category
- Add/remove items from cart
- Checkout with Stripe or PayPal
- View and track order status

### 🛒 Cart & Payments

- Real-time cart updates
- Quantity management
- Automatic price calculations
- Stripe and PayPal integration

### 🛠️ Admin Panel

- Add/edit/delete food items
- Upload product images
- Manage categories
- View and update orders
- Change order statuses (e.g., Preparing, On the way, Delivered)

---

## 🚀 Folder Structure

```
CRAVECART/
├── admin/               # React-based Admin Dashboard
│   └── src/
├── backend/             # Node.js + Express API
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── middleware/
│   └── config/
├── frontend/            # User-facing React website
│   └── src/
├── .env
└── README.md

```

---

## 🛠️ Setup Guide

### 📁 Clone the Repo

```bash
git clone https://github.com/jahnavigorle/cravecart.git
cd cravecart
```

### 🔌 Backend Setup

```bash
cd server
npm install
# Create a .env file with:
# MONGO_URI=your_mongodb_uri
# JWT_SECRET=your_jwt_secret
# PAYPAL_CLIENT_ID=your_paypal_client_id
npm run dev
```

### 💻 Frontend Setup

```bash
cd client
npm install
npm start
```

### 🧑‍🍳 Admin Panel Setup

```bash
cd admin
npm install
npm start
```

---

## 💳 Payment Integrations

- **Stripe** for secure card payments
- **PayPal** for account-based transactions

> Note: Payment credentials are managed via environment variables.

---

## 📈 Future Enhancements

- Admin analytics dashboard
- User reviews and ratings
- Email/SMS order notifications
- Delivery tracking system
- Progressive Web App (PWA) support

---

Made with ❤️ for food lovers by the CraveCart
