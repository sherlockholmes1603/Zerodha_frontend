import React from "react";

function LeftSection({
    imageURL,
    productName,
    productDescription,
    tryDemo,
    learnMore,
    googlePlay,
    appStore,
}) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-6 p-5 mr-5">
                    <img src={imageURL} alt="" className="img-fluid"/>
                </div>
                <div className="col-6 p-5 mt-5 ml-auto">
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <div>
                        <a href={tryDemo}>Try Demo</a>
                        <a href={learnMore} style={{ marginLeft: "50px" }}>
                            Learn More
                        </a>
                    </div>

                    <div className="mt-3">
                        <a href={googlePlay}>
                            <img
                                src="googlePlayBadge.svg"
                                alt="Google Play Store"
                            />
                        </a>
                        <a href={appStore} style={{ marginLeft: "50px" }}>
                            <img src="appstoreBadge.svg" alt="App Store" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftSection;
