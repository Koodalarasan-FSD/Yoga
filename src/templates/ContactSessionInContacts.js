import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa6'

export const ContactSessionInContacts = () => {
    return (
        <div>
            {/*<!-- Contact Section -->*/}
            <section className="contact-page-section spad overflow-hidden">
                <div className="container">
                    <div className="contact-map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d33245.297803635964!2d-73.76987401620775!3d40.704774398815005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1575866843291!5m2!1sen!2sbd" style={{ border: 0 }} title='iframe' allowfullscreen="">
                        </iframe>
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="con-info">
                                <h3>Visit the Yoga Ahana</h3>
                                <ul>
                                    <li><i className="material-icons">map</i>184 Main Collins Street</li>
                                </ul>
                            </div>
                            <div className="con-info">
                                <h3>Message Us</h3>
                                <ul>
                                    <li><i className="material-icons">map</i>(965) 436 3274</li>
                                    <li><i className="material-icons">map</i>ahana.yoga@gmail.com</li>
                                </ul>
                            </div>
                            <div className="con-info">
                                <h3>Opening Hours</h3>
                                <ul>
                                    <li><i className="material-icons">map</i>Mon - Fri:  6:30am - 07:45pm</li>
                                    <li><i className="material-icons">map</i>Sat - Sun:  8:30am - 05:45pm</li>
                                </ul>
                            </div>
                            <div className="contact-social">
                                <Link><FaFacebook/></Link>
                                <Link><FaInstagram/></Link>
                                <Link><FaTwitter/></Link>
                                <Link><FaLinkedin/></Link>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <form className="singup-form contact-form">
                                <div className="row">
                                    <div className="col-md-6">
                                        <input type="text" placeholder="First Name" required />
                                    </div>
                                    <div className="col-md-6">
                                        <input type="text" placeholder="Last Name" required/>
                                    </div>
                                    <div className="col-md-6">
                                        <input type='email' placeholder="Your Email" required/>
                                    </div>
                                    <div className="col-md-6">
                                        <input type="text" placeholder="Phone Number" required/>
                                    </div>
                                    <div className="col-md-12">
                                        <textarea placeholder="Message" required></textarea>
                                        <button type='submit' className="site-btn sb-gradient">Send message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            {/*<!--Contact Section end -->*/}

        </div>
    )
}
