import React from "react";
import ReactDOM from "react-dom/client";
import HomePage from "./landing_page/home/HomePage";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css'
import './app.scss'
import './index.css'

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <HomePage />
    </React.StrictMode>
);
