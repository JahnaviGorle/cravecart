import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import { Route, Routes } from "react-router-dom";
import Add from "./pages/Add/Add";
import List from "./pages/List/List";
import Orders from "./pages/Orders/Orders";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const welcomeMessages = [
    "Welcome to Admin Panel",
    "Manage Your Menu Seamlessly",
    "Track Orders with Ease",
    "Add, Edit, and List Items Instantly",
  ];

  const [currentMsg, setCurrentMsg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMsg((prev) => (prev + 1) % welcomeMessages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="app">
      <ToastContainer />
      <Navbar />
      <hr />
      <div className="app-content" style={{ display: "flex" }}>
        <Sidebar />
        <div style={{ flexGrow: 1 }}>
          <Routes>
            <Route
              path="/"
              element={
                <div
                  style={{
                    padding: "4rem",
                    fontSize: "2rem",
                    textAlign: "center",
                    fontWeight: "bold",
                    transition: "opacity 0.5s ease-in-out",
                  }}
                >
                  {welcomeMessages[currentMsg]}
                </div>
              }
            />
            <Route path="/add" element={<Add />} />
            <Route path="/list" element={<List />} />
            <Route path="/orders" element={<Orders />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
