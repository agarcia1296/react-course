import axios from "axios";
import { Routes, Route } from "react-router";
import { useState, useEffect } from "react";
import { HomePage } from "./pages/home/HomePage";
import { CheckoutPage } from "./pages/checkout/CheckoutPage";
import { OrdersPage } from "./pages/orders/OrdersPage";
import { TrackingPage } from "./pages/tracking/TrackingPage";
import { LoginPage } from "./pages/account/LoginPage";
import { SignupPage } from "./pages/account/SignupPage";
import { ForgotPasswordPage } from "./pages/account/ForgotPasswordPage";
import { ProductPage } from "./pages/product/ProductPage";
import { CommunityPage } from "./pages/account/CommunityPage";
import "./App.css";
import "./styles/theme.css";

function App() {
  const [cart, setCart] = useState([]);

  const loadCart = async () => {
    const response = await axios.get("/api/cart-items?expand=product");
    setCart(response.data);
  };

  useEffect(() => {
    loadCart();
  }, []);

  return (
    <Routes>
      <Route path="*" element={<p>Page not found</p>} />
      <Route index element={<HomePage cart={cart} loadCart={loadCart} />} />
      <Route
        path="checkout"
        element={<CheckoutPage cart={cart} loadCart={loadCart} />}
      />
      <Route path="orders" element={<OrdersPage cart={cart} />} />
      <Route path="tracking" element={<TrackingPage />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="login/signup" element={<SignupPage />} />
      <Route path="login/forgotpassword" element={<ForgotPasswordPage />} />
      <Route
        path="products/:productId"
        element={<ProductPage cart={cart} loadCart={loadCart} />}
      />
      <Route path="community" element={<CommunityPage cart={cart} />} />
    </Routes>
  );
}

export default App;
