import React from 'react'
import { Link } from 'react-router-dom'
import '../style.css';
import '../bootstrap.min.css';


export const PricingIndex = () => {
    return (
        <div>
            {/*<!-- Pricing Section -->*/}
            <section className="pricing-section spad">
                <div className="container">
                    <div className="section-title text-center">
                        <img src="img/icons/logo-icon.png" alt=""/>
                            <h2>Pricing plans</h2>
                            <p>Practice Yoga to perfect physical beauty, take care of your soul and enjoy life more fully!</p>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-sm-6">
                            <div className="pricing-item begginer">
                                <div className="pi-top">
                                    <h4>Begginer</h4>
                                </div>
                                <div className="pi-price">
                                    <h3>$59</h3>
                                    <p>Per month</p>
                                </div>
                                <ul>
                                    <li>Take Up To 7 Classes</li>
                                    <li>Available To Anyone</li>
                                    <li>Towels Included</li>
                                    <li>Never Expires</li>
                                </ul>
                                <Link className="site-btn sb-line-gradient">Get started</Link>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="pricing-item entermediate">
                                <div className="pi-top">
                                    <h4>Entermediate</h4>
                                </div>
                                <div className="pi-price">
                                    <h3>$99</h3>
                                    <p>Per month</p>
                                </div>
                                <ul>
                                    <li>Take Up To 7 Classes</li>
                                    <li>Available To Anyone</li>
                                    <li>Towels Included</li>
                                    <li>Never Expires</li>
                                </ul>
                                <Link className="site-btn sb-line-gradient">Get started</Link>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="pricing-item advanced">
                                <div className="pi-top">
                                    <h4>Advanced</h4>
                                </div>
                                <div className="pi-price">
                                    <h3>$159</h3>
                                    <p>Per month</p>
                                </div>
                                <ul>
                                    <li>Take Up To 7 Classes</li>
                                    <li>Available To Anyone</li>
                                    <li>Towels Included</li>
                                    <li>Never Expires</li>
                                </ul>
                                <Link className="site-btn sb-line-gradient">Get started</Link>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="pricing-item professional">
                                <div className="pi-top">
                                    <h4>Professional</h4>
                                </div>
                                <div className="pi-price">
                                    <h3>$199</h3>
                                    <p>Per month</p>
                                </div>
                                <ul>
                                    <li>Take Up To 7 Classes</li>
                                    <li>Available To Anyone</li>
                                    <li>Towels Included</li>
                                    <li>Never Expires</li>
                                </ul>
                                <Link className="site-btn sb-line-gradient">Get started</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*<!-- Pricing Section end -->*/}

        </div>
    )
}
