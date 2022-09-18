import React from 'react';
import "./SpecialOffer.css";
import {ProgressBar} from "react-bootstrap";
import Countdown from 'react-countdown';





function SpecialOffer(props) {
    return (
        <>
            <div className="Special-Offer">
            {/* Special-Offer-title */}
                <section className="Special-Offer-title">
                    <h3>Special Offer</h3>
                    <div className="Special-Offer-title-icon">
                       <div >
                            {/* <span>Save</span> */}
                            <p className="text-center">Save <br/>  $120</p>
                       </div>
                    </div>
                </section>
                <section className="Spacial-Offer-image"> <img width="100%" src="https://transvelo.github.io/electro-html/2.0/assets/img/320X300/img1.jpg" alt="..."/> </section>
                <section className="Special-Offer-content">
                    <a href="#special-offer-content"> <p>Game console controller + USB3.0 cable</p> </a>
                    <p> <s> $500</s> <span>$150</span> </p>
                </section>
                <section className="Special-Offer-progressbar">
                    <div className="Special-Offer-progressbar-title">
                        <p>Available: <strong>6</strong> </p>
                        <p>Already Sold: <strong>28</strong> </p>
                    </div>
                    <div className="Special-Offer-progressbar-bar">
                    <ProgressBar variant="success" now={40} />
                    </div>
                </section>
                <section className="Special-Offer-clock">
                    <p>Hurry Up! Offer ends in:</p>
                    <div id="Special-Offer-clock">
                        <strong><Countdown date={props.clockTime } /></strong>
                    </div>
                </section>
            </div>
        </>
    )
}

export default SpecialOffer
