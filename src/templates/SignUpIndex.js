import React from 'react'
import { Link } from 'react-router-dom'
import '../style.css';
import '../bootstrap.min.css';


export const SignUpIndex = () => {
    return (
        <div>
            {/*<!-- Sign up Section -->*/}
            <section class="signup-section spad">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="signup-map">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d33245.297803635964!2d-73.76987401620775!3d40.704774398815005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1575866843291!5m2!1sen!2sbd" style={{border:0}} title='iframe' allowfullscreen="">
                                </iframe>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="singup-text">
                                <h3>Sign Up for Our Classes</h3>
                                <p>To be invited to the nearest Cali center and get free physical advice to learn more about the program.</p>
                            </div>
                            <form class="singup-form">
                                <div class="row">
                                    <div class="col-md-6">
                                        <input type="text" placeholder="First Name" />
                                    </div>
                                    <div class="col-md-6">
                                        <input type="text" placeholder="Last Name" />
                                    </div>
                                    <div class="col-md-6">
                                        <input type="text" placeholder="Your Email" />
                                    </div>
                                    <div class="col-md-6">
                                        <input type="text" placeholder="Phone Number" />
                                    </div>
                                    <div class="col-md-12">
                                        <textarea placeholder="Message"></textarea>
                                        <Link class="site-btn sb-gradient">Get started</Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            {/*<!-- Sign up Section end -->*/}

        </div>
    )
}
