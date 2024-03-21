import React from 'react'

import ReviewPic_1 from "../img/classes/author/1.jpg";
import ReviewPic_2 from '../img/classes/author/2.jpg';
import ReviewPic_3 from '../img/classes/author/3.jpg';

import { Carousel } from 'react-bootstrap';
import '../style.css';
import '../bootstrap.min.css';


export const TestimonialIndex = () => {
    return (
        <div>
            {/*<!-- Review Section -->*/}
            <section className="review-section spad set-bg" data-setbg="img/review-bg.jpg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 m-auto">
                            <Carousel interval={3000} /* set the interval to 3 seconds */ controls={false} indicators={false}>
                                <Carousel.Item>
                                    <div className="review-slider owl-carousel">
                                        <div className="review-item">
                                            <div className="ri-img">
                                                <img src={ReviewPic_1} alt="" />
                                            </div>
                                            <div className="ri-text text-white">
                                                <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness.</p>
                                                <h4>Denise Thomas</h4>
                                                <h6>Designer</h6>
                                            </div>
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="review-slider owl-carousel">

                                        <div className="review-item">
                                            <div className="ri-img">
                                                <img src={ReviewPic_2} alt="" />
                                            </div>
                                            <div className="ri-text text-white">
                                                <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness.</p>
                                                <h4>Denise Thomas</h4>
                                                <h6>Designer</h6>
                                            </div>
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="review-slider owl-carousel">

                                        <div className="review-item">
                                            <div className="ri-img">
                                                <img src={ReviewPic_3} alt="" />
                                            </div>
                                            <div className="ri-text text-white">
                                                <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness.</p>
                                                <h4>Denise Thomas</h4>
                                                <h6>Designer</h6>
                                            </div>
                                        </div>
                                    </div>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </section >
            {/*<!-- Review Section end -->*/}

        </div >
    )
}
