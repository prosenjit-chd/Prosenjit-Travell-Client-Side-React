import React from 'react';
import { Calendar2DayFill, HouseDoorFill, JournalBookmarkFill, Safe2Fill } from 'react-bootstrap-icons';
// External CSS Style Added here 
import './Footer.css'

// Here use all are non bootstrao component 
const Footer = () => {
    return (
        
        <div className="mt-4">
        <div>
        <section className="container-fluid about-us-container">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="shop-departments">
                            <ul>
                                <li>
                                    <h5>Our Agrement Country</h5>
                                </li>
                                <li>India</li>
                                <li>Nepal</li>
                                <li>USA</li>
                                <li>Indenosia</li>
                                <li>Sapogitor</li>
                                <li>Vacine</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="account-shipping-info">
                            <ul>
                                <li>
                                    <h5>Account & journey info</h5>
                                </li>
                                <li>Your account</li>
                                <li>Travell rates & policies</li>
                                <li>Refunds & replacements</li>
                            </ul>
                        </div>
                        <div className="about-us">
                            <ul>
                                <li>
                                    <h5>About us</h5>
                                </li>
                                <li>About company</li>
                                <li>Our team</li>
                                <li>Careers</li>
                                <li>News</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="stay-informed">
                            <h5>Download our app</h5>
                            <div className="app">
                                <div className="ios">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Apple-logo.png"
                                        alt=""/>
                                    <div className="ios-detail">
                                        <small>Download on the</small>
                                        <h6>App Store</h6>
                                    </div>
                                </div>
                                <div className="android">
                                    <img src="https://cdn.freebiesupply.com/logos/thumbs/2x/google-play-store-logo.png"
                                        alt=""/>
                                    <div className="android-detail">
                                        <small>Download on the</small>
                                        <h6>Google Play</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="container-fluid why-us-container">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="why-us">
                            <div className="why-us-logo">
                                <Calendar2DayFill/>
                            </div>
                            <div className="why-us-detail">
                                <h5>Personal Schedule</h5>
                                <p>We have our own self shedule for our every journey</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="why-us">
                            <div className="why-us-logo">
                               <HouseDoorFill/>
                            </div>
                            <div className="why-us-detail">
                                <h5>Luxury Interiors</h5>
                                <p>All the places are new and we maintain this</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="why-us">
                            <div className="why-us-logo">
                                <Safe2Fill/>
                            </div>
                            <div className="why-us-detail">
                                <h5>Safe & Confidential</h5>
                                <p>We provide Friendly 24/7 customer support</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="why-us">
                            <div className="why-us-logo">
                                <JournalBookmarkFill/>
                            </div>
                            <div className="why-us-detail">
                                <h5>Professional Crew</h5>
                                <p>We have personal Professional —Āertificate</p>
                            </div>
                        </div>
                    </div>
                </div>
                <hr/>
                <p className="copyright">© All rights reserved. Prosenjit Chowdhury. 2021</p>
            </div>
        </section>
        </div>

        </div>
    );
};

export default Footer;