import React from 'react'
import { Link } from 'react-router-dom'

import TrainerPic_1 from '../img/icons/logo-icon.png';
import TrainerPic_2 from '../img/trainer/1.png';
import TrainerPic_3 from '../img/trainer/2.png';
import TrainerPic_4 from '../img/trainer/3.png';
import { Carousel } from 'react-bootstrap';
import '../style.css';
import '../bootstrap.min.css';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa6';

export const TrainerIndex = () => {
    return (
        <div>
            {/*<!-- Trainer Section -->*/}
            <section className="trainer-section overflow-hidden spad">
                <div className="container">
                    <div className="section-title text-center">
                        <img src={TrainerPic_1} alt="" />
                        <h2>Our Trainer Yoga</h2>
                        <p>Practice Yoga to perfect physical beauty, take care of your soul and enjoy life more fully!</p>
                    </div>
                    <Carousel interval={2000} /* set the interval to 2 seconds */ controls={false} indicators={false}>
                        <Carousel.Item>
                            <div className="trainer-slider owl-carousel">
                                <div className="ts-item">
                                    <div className="trainer-item">
                                        <div className="ti-img">
                                            <img src={TrainerPic_2} alt="" />
                                        </div>
                                        <div className="ti-text">
                                            <h4>Lori Kennedy</h4>
                                            <h6>Yoga Trainer</h6>
                                            <p>Yoga & Therapy Certificate of Uttarakhand University Sanskrit</p>
                                            <div className="ti-social">
                                                <Link><FaFacebook/></Link>
                                                <Link><FaInstagram/></Link>
                                                <Link><FaTwitter/></Link>
                                                <Link><FaLinkedin/></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="trainer-slider owl-carousel">

                                <div className="ts-item">
                                    <div className="trainer-item">
                                        <div className="ti-img">
                                            <img src={TrainerPic_3} alt="" />
                                        </div>
                                        <div className="ti-text">
                                            <h4>Lori Kennedy</h4>
                                            <h6>Yoga Trainer</h6>
                                            <p>Yoga & Therapy Certificate of Uttarakhand University Sanskrit</p>
                                            <div className="ti-social">
                                                <Link><FaFacebook/></Link>
                                                <Link><FaInstagram/></Link>
                                                <Link><FaTwitter/></Link>
                                                <Link><FaLinkedin/></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="trainer-slider owl-carousel">
                                <div className="ts-item">
                                    <div className="trainer-item">
                                        <div className="ti-img">
                                            <img src={TrainerPic_4} alt="" />
                                        </div>
                                        <div className="ti-text">
                                            <h4>Rebecca James</h4>
                                            <h6>Yoga Trainer</h6>
                                            <p>Yoga & Therapy Certificate of Uttarakhand University Sanskrit</p>
                                            <div className="ti-social">
                                                <Link><FaFacebook/></Link>
                                                <Link><FaInstagram/></Link>
                                                <Link><FaTwitter/></Link>
                                                <Link><FaLinkedin/></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Carousel.Item>
                    </Carousel>
                    </div>
            </section >
            {/*<!-- Trainer Section end --> */}

        </div >
    )
}
