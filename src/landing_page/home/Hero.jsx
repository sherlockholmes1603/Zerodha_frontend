import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Hero() {
    console.log("Checking");
    return (
        <div className="container p-5 mb-5">
            <div className="row text-center">
                <img src="homeHero.png" alt="alt" className="mb-5" />
                <h1 className="mt-5">Invest in everything</h1>
                <p>
                    Online platform to invest in stocks, derivates, mutual funds
                    and more
                </p>
                <button
                    style={{ width: "20%", margin: "0 auto" }}
                    className="btn btn-primary p-2 fs-5"
                    type="button"
                >
                    SignUp Now
                </button>
            </div>
        </div>
    );
}

export default Hero;
