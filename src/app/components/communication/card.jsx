import React from "react";
import "./card.css";
import ReuseButton from "../reuse-button";

export default class Card extends React.Component {
    render() {
        return (
            <>
                <div className="row">
                    <div className="column">
                        <div style={{ width: 300, height: 150 }} >
                        </div>
                    </div>
                    <div className="column">
                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <h1 className="user">Felanmälan</h1>
                                    <hr />
                                    <i className="fas fa-exclamation-circle"></i>
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
                                    <br/>
                                    <br/>
                                    <br/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div style={{ width: 300, height: 150 }} >
                        </div>
                    </div>
                    <div className="column">
                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <h1 className="user">Städrapport</h1>
                                    <hr />
                                    <i className="fas fa-star"></i>
                                </div>
                                <div className="flip-card-back">
                                    <h1 className="user">Städrapport</h1>
                                    <h2>Kv. App-Demo</h2>
                                    <hr />
                                    <i className="fas fa-grin-stars" id="review0"></i>
                                    <p></p>
                                    <i className="fas fa-smile" id="review1"></i>
                                    <p></p>
                                    <i className="fas fa-meh" id="review2"></i>
                                    <p></p>
                                    <i className="fas fa-frown" id="review3"></i>
                                    <p></p>
                                    <i className="fas fa-angry" id="review4"></i>
                                    <br/>
                                    <br/>
                                    <br/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="column">
                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <h1 className="user">Nyheter</h1>
                                    <hr />
                                    <i className="fas fa-info-circle"></i>
                                </div>
                                <div className="flip-card-back">
                                    <h1 className="user">Nyheter</h1>
                                    <h2>Kv. App-Demo</h2>
                                    <hr />
                                    <p>Nu ska grillplatsen och lekutrustningen på innergården rustas upp inför sommaren. Arbetet pågår v. 22-23</p>
                                    <br/>
                                    <br/>
                                    <br/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div style={{ width: 300, height: 150 }} >
                        </div>
                    </div>
                    <div className="column">
                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <h1 className="user">Driftinformation</h1>
                                    <hr />
                                    <i className="fas fa-times"></i>
                                </div>
                                <div className="flip-card-back">
                                    <h1 className="user">Driftinformation</h1>
                                    <h2>Kv. App-Demo</h2>
                                    <hr />
                                    <p>Förtillfället är tvättmaskin 1 ur funktion, reservdelar väntas 1/6.</p>
                                    <br/>
                                    <br/>
                                    <br/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div style={{ width: 300, height: 150 }} >
                        </div>
                    </div>
                </div>
            </>
        )
    }
}