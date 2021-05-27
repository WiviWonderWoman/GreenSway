import React from "react";
import "./card.css";
import logo from "../../images/recycle.png";
import ReuseButton from "../reuse-button";

export default class Card extends React.Component {
    render() {
        return (
            <>
                <div className="row">
                    <div className="column">
                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <h1 className="user">Nyheter</h1>
                                    <hr />
                                    <img src={logo} alt="logo" style={{ width: 300, height: 300 }} />
                                </div>
                                <div className="flip-card-back">
                                    <h1 className="user">Nyheter</h1>
                                    <h2>Kv. App-Demo</h2>
                                    <hr />
                                    <p>Nu ska grillplatsen och lekutrustningen på innergården rustas upp inför sommaren. Arbetet pågår v. 22-23</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <h1 className="user">Driftinformation</h1>
                                    <hr />
                                    <img src={logo} alt="logo" style={{ width: 300, height: 300 }} />
                                </div>
                                <div className="flip-card-back">
                                    <h1 className="user">Driftinformation</h1>
                                    <h2>Kv. App-Demo</h2>
                                    <hr />
                                    <p>Förtillfället är tvättmaskin 1 ur funktion, reservdelar väntas 1/6.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <h1 className="user">Felanmälan</h1>
                                    <hr />
                                    <img src={logo} alt="logo" style={{ width: 300, height: 300 }} />
                                </div>
                                <div className="flip-card-back">
                                    <h1 className="user">Felanmälan</h1>
                                    <h2>Pågående</h2>
                                    <hr />
                                    <p>Du har inga aktiva felanmälningar.</p>
                                    <p>Visa historik: </p>
                                    <ReuseButton text="Avslutade" />
                                    <p>Gör en ny:</p>
                                    <ReuseButton text="Felanmälan" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <h1 className="user">Städrapport</h1>
                                    <hr />
                                    <img src={logo} alt="logo" style={{ width: 300, height: 300 }} />
                                </div>
                                <div className="flip-card-back">
                                    <h1 className="user">Städrapport</h1>
                                    <h2>Kv. App-Demo</h2>
                                    <hr />
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt officiis modi repellendus nihil, culpa illum. Deserunt commodi perspiciatis neque aliquid voluptas dolorem blanditiis suscipit pariatur porro, temporibus nisi autem sint.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}