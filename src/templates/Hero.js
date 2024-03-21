import React from 'react'


import '../bootstrap.min.css';


import { Carousel } from 'react-bootstrap';


import carouselimg_1 from '../img/icons/arrows-buttom.png'
import carouselimg_2 from '../img/hero-slider/1.png'
import carouselimg_3 from '../img/hero-slider/2.png'
import carouselimg_4 from '../img/hero-slider/3.png'

import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa6'
import { FaInstagram } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import '../style.css';



export const Hero = () => {

    return (
        <div>
            {/*<!-- Hero Section -->*/}
            <section className="hero-section">
                <div className="hero-social-warp">
                    <div className="hero-social">
                        <Link><FaFacebook /></Link>
                        <Link><FaInstagram /></Link>
                        <Link><FaTwitter /></Link>
                        <Link><FaLinkedin /></Link>
                    </div>
                </div>

                <div className="arrow-buttom">
                    <img src={carouselimg_1} alt="" />
                </div>
                <Carousel interval={2000} /* set the interval to 2 seconds */controls={false} indicators={false}>
                    <Carousel.Item>
                        <div className="hero-slider owl-carousel">
                            <div className="hs-item">
                                <div className="hs-style-1 text-center">
                                    <img src={carouselimg_2} alt="" />
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="hero-slider owl-carousel">
                            <div className="hs-item">
                                <div className="hs-style-2">
                                    <div className="container-fluid h-100">
                                        <div className="row h-100">
                                            <div className="col-lg-6 h-100 d-none d-lg-flex align-items-xl-end align-items-lg-center">
                                                <div className="hs-img">
                                                    <img src={carouselimg_3} alt="" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 d-flex align-items-center">
                                                <div className="hs-text-warp">
                                                    <div className="hs-text">
                                                        <h2>Get slim and toned with yoga</h2>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nos-trud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                                                        <div className="site-btn sb-white">Register now</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="hero-slider owl-carousel">
                            <div className="hs-item">
                                <div className="hs-img-1 text-center" >
                                    <img src={carouselimg_4} alt="" />
                                </div>
                            </div>
                        </div>

                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="hero-slider owl-carousel">
                            <div class="hs-item">
                                <div class="hs-style-3 text-center">
                                    <div class="container">
                                        <div class="hs-text">
                                            <h2>Reduce your stress</h2>
                                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi.</p>
                                            <div class="site-btn sb-white">Register now</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>

                </Carousel>
            </section>
            {/*<!-- Hero Section end -->*/}

        </div >
    )
}
