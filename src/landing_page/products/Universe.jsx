import React from "react";
import "./universe.css"; // Import the custom CSS

function Universe() {
    return (
        <div className="container">
            <div className="row text-center">
                <h1>The Zerodha Universe</h1>
                <p>
                    Extend your trading and investment experience even further
                    with our partner platforms
                </p>
                <div className="col-4 p-3 mt-5">
                    <img
                        src="smallcaseLogo.png"
                        alt="smallcaseLogo.png"
                        className="img-fluid universe-img"
                    />
                    <p className="text-small text-muted">
                        Thematic investment platform
                    </p>
                </div>
                <div className="col-4 p-3 mt-5">
                    <img
                        src="streakLogo.png"
                        alt="streakLogo.png"
                        className="img-fluid universe-img"
                    />
                    <p className="text-small text-muted">
                        Algo & strategy platform
                    </p>
                </div>
                <div className="col-4 p-3 mt-5">
                    <img
                        src="sensibullLogo.svg"
                        alt="sensibullLogo.svg"
                        className="img-fluid universe-img"
                    />
                    <p className="text-small text-muted">
                        Options trading platform
                    </p>
                </div>
                <div className="col-4 p-3 mt-5">
                    <img
                        src="zerodhaFundhouse.png"
                        alt="zerodhaFundhouse.png"
                        className="img-fluid universe-img"
                    />
                    <p className="text-small text-muted">Asset management</p>
                </div>
                <div className="col-4 p-3 mt-5">
                    <img
                        src="goldenpiLogo.png"
                        alt="goldenpiLogo.png"
                        className="img-fluid universe-img"
                    />
                    <p className="text-small text-muted">
                        Bonds trading platform
                    </p>
                </div>
                <div className="col-4 p-3 mt-5">
                    <img
                        src="dittoLogo.png"
                        alt="dittoLogo.png"
                        className="img-fluid universe-img"
                    />
                    <p className="text-small text-muted">Insurance</p>
                </div>
                <button
                    className="p-2 btn btn-primary fs-5 mb-5"
                    style={{ width: "20%", margin: "0 auto" }}
                >
                    Signup Now
                </button>
            </div>
        </div>
    );
}

export default Universe;
