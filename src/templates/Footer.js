import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import '../style.css';
import '../bootstrap.min.css';
import footerimage from '../3.jpg';
import footerimage_1 from '../img/icons/send.png';

export const Footer = () => {
    return (
        <div>
            {/*<!-- Footer Section -->*/}
            <footer class="footer-section">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-3 col-sm-6">
                            <div class="footer-widget">
                                <div class="about-widget">
                                    <img src={footerimage} alt=""/>
                                        <p>Lorem ipsum dolor sit amet, consec-tetur adipiscing elit sed.</p>
                                        <ul>
                                            <li><i class="material-icons">phone</i>(965) 436 3274</li>
                                            <li><i class="material-icons">email</i>ahana.yoga@gmail.com</li>
                                            <li><i class="material-icons">map</i>184 Main Collins Street</li>
                                        </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-6">
                            <div class="footer-widget pl-0 pl-lg-5">
                                <h2 class="fw-title">Company</h2>
                                <ul>
                                    <li><Link>Online Education</Link></li>
                                    <li><Link>Gallery</Link></li>
                                    <li><Link>Special Issues</Link></li>
                                    <li><Link>Privacy Policy</Link></li>
                                    <li><Link>Contact Us</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-2 col-sm-6">
                            <div class="footer-widget">
                                <h2 class="fw-title">About Us</h2>
                                <ul>
                                    <li><Link>Our Vision</Link></li>
                                    <li><Link>Our Mission</Link></li>
                                    <li><Link>Meet The Team</Link></li>
                                    <li><Link>Introduce</Link></li>
                                    <li><Link>Customer Service</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-4 col-sm-6">
                            <div class="footer-widget pl-0 pl-lg-5">
                                <h2 class="fw-title">Open time</h2>
                                <ul>
                                    <li><i class="material-icons">alarm_on</i>Mon - Fri:  6:30am - 07:45pm</li>
                                    <li><i class="material-icons">alarm_on</i>Sat - Sun:  8:30am - 05:45pm</li>
                                </ul>
                                <form class="infor-form">
                                    <input type="email" placeholder="Your Email" required/>
                                        <button><img src={footerimage_1} alt=""/></button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="footer-bottom">
                        <div class="row">
                            <div class="col-md-4">
                                <div class="footer-social">
                                    <Link><FaFacebook/></Link>
                                    <Link><FaInstagram/></Link>
                                    <Link><FaTwitter/></Link>
                                    <Link><FaLinkedin/></Link>
                                </div>
                            </div>
                            <div class="col-md-8 text-md-right">
                                <div class="copyright">
                                    {/*<!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->*/}
                                    {/*Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved |*/}
                                    I Created these sites by using ReactJS but I took all contents from <i class="fa fa-heart-o" aria-hidden="true"></i> from <Link to="https://colorlib.com">Colorlib</Link>
                                    {/*<!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            {/*<!-- Footer Section end -->*/}

        </div>
    )
}
