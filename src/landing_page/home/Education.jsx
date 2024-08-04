import { faLongArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Education() {
    return (
        <div className="container mt-5">
            <div className="row p-5">
                <div className="col-6 p-5">
                    <img
                        src="education.svg"
                        alt="education.svg"
                        className="img-fluid"
                    />
                </div>
                <div className="col-6 p-5">
                    <h1 className="mb-3 fs-2">
                        Free and open market education
                    </h1>
                    <p>
                        Varsity, the largest online stock market education book
                        in the world covering everything from the basics to
                        advanced trading.
                    </p>
                    <a href="" style={{ textDecoration: "none" }}>
                        Versity <FontAwesomeIcon icon={faLongArrowRight} />
                    </a>
                    <p className="mt-5">
                        TradingQ&A, the most active trading and investment
                        community in India for all your market related queries.
                    </p>
                    <a href="" style={{ textDecoration: "none" }}>
                        TradingQ&A <FontAwesomeIcon icon={faLongArrowRight} />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Education;
