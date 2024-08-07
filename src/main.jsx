import React from "react";
import ReactDOM from "react-dom/client";
import HomePage from "./landing_page/home/HomePage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./app.scss";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./landing_page/signup/Signup";
import PricingPage from "./landing_page/pricing/PricingPage";
import SupportPage from "./landing_page/support/SupportPage";
import AboutPage from "./landing_page/about/AboutPage";
import ProductPage from "./landing_page/products/ProductPage";
import Navbar from "./landing_page/Navbar";
import Footer from "./landing_page/Footer";
import NotFound from "./landing_page/NotFound";

ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <Navbar />
        <div style={{ paddingTop: '100px' }}>
            <Routes>
                <Route exact path="/" element={<HomePage />} />
                <Route exact path="/signup" element={<SignUp />} />
                <Route exact path="/about" element={<AboutPage />} />
                <Route exact path="/product" element={<ProductPage />} />
                <Route exact path="/pricing" element={<PricingPage />} />
                <Route exact path="/support" element={<SupportPage />} />
                <Route exact path="*" element={<NotFound />} />
            </Routes>
        </div>
        <Footer />
    </BrowserRouter>
);
