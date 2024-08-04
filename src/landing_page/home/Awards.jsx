import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faSmile } from "@fortawesome/free-solid-svg-icons";
// import 'bootstrap/dist/css/bootstrap.min.css';

function Awards() {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-lg-6 col-sm-12 p-5">
                    <img src="largestBroker.svg" alt="" />
                </div>
                <div className="col-lg-6 col-sm-12 p-5 mt-5">
                    <h1>Largest stock broker in India</h1>
                    <p className="mb-5">
                        2+ million Zerodha clients contribute to over 15% of all
                        retail order volumes in India by trading and investing
                        in:{" "}
                    </p>
                    <div className="row">
                        <div className="col-6">
                            <ul>
                                <li>Futures and Options</li>
                                <li>Stocks & IPOs</li>
                                <li>Commodity derivatives</li>
                            </ul>
                        </div>
                        <div className="col-6">
                            <ul>
                                <li>Direct Mutual Funds</li>
                                <li>Currency derivatives</li>
                                <li>Bonds and Govt. Securities</li>
                            </ul>
                        </div>
                    </div>
                    <img src="pressLogos.png" alt="" />
                </div>
            </div>
        </div>
    );
}

export default Awards;
