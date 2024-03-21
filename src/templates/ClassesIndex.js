import React from 'react'
import { Link } from 'react-router-dom'

import Classpic_1 from '../img/icons/logo-icon.png';
import Classpic_2 from '../img/classes/1.jpg';
import Classpic_3 from '../img/classes/author/1.jpg';
import Classpic_4 from '../img/classes/2.jpg';
import Classpic_5 from '../img/classes/author/2.jpg'
import Classpic_6 from '../img/classes/3.jpg';
import Classpic_7 from '../img/classes/author/3.jpg';
import Classpic_8 from '../img/classes/2.jpg';
import Classpic_9 from '../img/classes/author/2.jpg';

import { Carousel } from 'react-bootstrap';


import '../style.css';
import '../bootstrap.min.css';

export const ClassesIndex = () => {
    return (
        <div>
            {/*<!-- Classes Section -->*/}
            <section className="classes-section spad">
                <div className="container">
                    <div className="section-title text-center">
                        <img src={Classpic_1} alt="" />
                        <h2>Popular Classes</h2>
                        <p>Practice Yoga to perfect physical beauty, take care of your soul and enjoy life more fully!</p>
                    </div>
                    <Carousel interval={2000} /* set the interval to 2 seconds */ controls={false} indicators={false}>
                        <Carousel.Item>
                            <div className="classes-slider owl-carousel">
                                <div className="classes-item">
                                    <div className="ci-img">
                                        <img src={Classpic_2} alt="" />
                                    </div>
                                    <div className="ci-text">
                                        <h4><Link to='/ClassesDetails'>Artistic Yoga</Link></h4>
                                        <div className="ci-metas">
                                            <div className="ci-meta"><i className="material-icons">event_available</i>Mon, Wed, Fri</div>
                                            <div className="ci-meta"><i className="material-icons">alarm_on</i>06:30pm - 07:45pm</div>
                                        </div>
                                        <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis</p>
                                    </div>
                                    <div className="ci-bottom">
                                        <div className="ci-author">
                                            <img src={Classpic_3} alt="" />
                                            <div className="author-text">
                                                <h6>Victoria Webb</h6>
                                                <p>Yoga Trainer</p>
                                            </div>
                                        </div>
                                        <Link className="site-btn sb-gradient">book now</Link>
                                    </div>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="classes-slider owl-carousel">
                                <div className="classes-item">
                                    <div className="ci-img">
                                        <img src={Classpic_4} alt="" />
                                    </div>
                                    <div className="ci-text">
                                        <h4>Traditional Hatha</h4>
                                        <div className="ci-metas">
                                            <div className="ci-meta"><i className="material-icons">event_available</i>Mon, Wed, Fri</div>
                                            <div className="ci-meta"><i className="material-icons">alarm_on</i>06:30pm - 07:45pm</div>
                                        </div>
                                        <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis</p>
                                    </div>
                                    <div className="ci-bottom">
                                        <div className="ci-author">
                                            <img src={Classpic_5} alt="" />
                                            <div className="author-text">
                                                <h6>Victoria Webb</h6>
                                                <p>Yoga Trainer</p>
                                            </div>
                                        </div>
                                        <Link className="site-btn sb-gradient">book now</Link>
                                    </div>
                                </div>
                            </div>
                        </Carousel.Item>

                        <Carousel.Item>
                            <div className="classes-slider owl-carousel">
                                <div className="classes-item">
                                    <div className="ci-img">
                                        <img src={Classpic_6} alt="" />
                                    </div>
                                    <div className="ci-text">
                                        <h4>Yoga Therapy</h4>
                                        <div className="ci-metas">
                                            <div className="ci-meta"><i className="material-icons">event_available</i>Mon, Wed, Fri</div>
                                            <div className="ci-meta"><i className="material-icons">alarm_on</i>06:30pm - 07:45pm</div>
                                        </div>
                                        <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis</p>
                                    </div>
                                    <div className="ci-bottom">
                                        <div className="ci-author">
                                            <img src={Classpic_7} alt="" />
                                            <div className="author-text">
                                                <h6>Victoria Webb</h6>
                                                <p>Yoga Trainer</p>
                                            </div>
                                        </div>
                                        <Link className="site-btn sb-gradient">book now</Link>
                                    </div>
                                </div>
                            </div>
                        </Carousel.Item>

                        <Carousel.Item>
                            <div className="classes-slider owl-carousel">
                                <div className="classes-item">
                                    <div className="ci-img">
                                        <img src={Classpic_8} alt="" />
                                    </div>
                                    <div className="ci-text">
                                        <h4>Traditional Hatha</h4>
                                        <div className="ci-metas">
                                            <div className="ci-meta"><i className="material-icons">event_available</i>Mon, Wed, Fri</div>
                                            <div className="ci-meta"><i className="material-icons">alarm_on</i>06:30pm - 07:45pm</div>
                                        </div>
                                        <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis</p>
                                    </div>
                                    <div className="ci-bottom">
                                        <div className="ci-author">
                                            <img src={Classpic_9} alt="" />
                                            <div className="author-text">
                                                <h6>Victoria Webb</h6>
                                                <p>Yoga Trainer</p>
                                            </div>
                                        </div>
                                        <Link className="site-btn sb-gradient">book now</Link>
                                    </div>
                                </div>
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </section >
            {/*<!-- classNamees Section end -->*/}

        </div >
    )
}
