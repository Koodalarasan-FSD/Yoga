import React from 'react'
import { Link } from 'react-router-dom'
import EventImages_1 from '../img/event/1.jpg';
import EventImages_2 from '../img/event/2.jpg';
import EventImages_3 from '../img/event/3.jpg';
import EventImages_4 from '../img/event/4.jpg';
import EventImages_5 from '../img/event/5.jpg';
import EventImages_6 from '../img/event/6.jpg';
import EventImages_7 from '../img/event/7.jpg';
import EventImages_8 from '../img/event/8.jpg';

export const EventSectioninEvent = () => {
    return (
        <div>
            <div className="container">
                <div className="event-filter-warp">
                    <div className="row">
                        <div className="col-xl-3">
                            <p>Showing 8 classes of 30 classes</p>
                        </div>
                        <div className="col-xl-9">
                            <form className="event-filter-form">
                                <div className="ef-item">
                                    <input type="text" placeholder="Event Date" className="event-date"/>
                                        <i className="material-icons">event_available</i>
                                </div>
                                <div className="ef-item">
                                    <input type="text" placeholder="Search"/>
                                        <i className="material-icons">search</i>
                                </div>
                                <div className="ef-item">
                                    <input type="text" placeholder="Location"/>
                                        <i className="material-icons">map</i>
                                </div>
                                <button className="site-btn sb-gradient">Find Event</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>


            {/*<!-- Events Section -->*/}
            <section className="events-page-section spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="event-item">
                                <div className="ei-img">
                                    <img src={EventImages_1} alt=""/>
                                </div>
                                <div className="ei-text">
                                    <h4><Link >Lole White Yoga Tour</Link></h4>
                                    <ul>
                                        <li><i className="material-icons">person</i>Kelly Alexander</li>
                                        <li><i className="material-icons">event_available</i>15 January, 2019</li>
                                        <li><i className="material-icons">map</i>184 Main Collins Street</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="event-item">
                                <div className="ei-img">
                                    <img src={EventImages_2} alt=""/>
                                </div>
                                <div className="ei-text">
                                    <h4>Free Yoga Madrid</h4>
                                    <ul>
                                        <li><i className="material-icons">person</i>Kelly Alexander</li>
                                        <li><i className="material-icons">event_available</i>15 January, 2019</li>
                                        <li><i className="material-icons">map</i>184 Main Collins Street</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="event-item">
                                <div className="ei-img">
                                    <img src={EventImages_3} alt=""/>
                                </div>
                                <div className="ei-text">
                                    <h4>One Love Dallas</h4>
                                    <ul>
                                        <li><i className="material-icons">person</i>Kelly Alexander</li>
                                        <li><i className="material-icons">event_available</i>15 January, 2019</li>
                                        <li><i className="material-icons">map</i>184 Main Collins Street</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="event-item">
                                <div className="ei-img">
                                    <img src={EventImages_4} alt=""/>
                                </div>
                                <div className="ei-text">
                                    <h4>Get on Your Mat</h4>
                                    <ul>
                                        <li><i className="material-icons">person</i>Kelly Alexander</li>
                                        <li><i className="material-icons">event_available</i>15 January, 2019</li>
                                        <li><i className="material-icons">map</i>184 Main Collins Street</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="event-item">
                                <div className="ei-img">
                                    <img src={EventImages_5} alt=""/>
                                </div>
                                <div className="ei-text">
                                    <h4>Solstice in Times Square</h4>
                                    <ul>
                                        <li><i className="material-icons">person</i>Kelly Alexander</li>
                                        <li><i className="material-icons">event_available</i>15 January, 2019</li>
                                        <li><i className="material-icons">map</i>184 Main Collins Street</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="event-item">
                                <div className="ei-img">
                                    <img src={EventImages_6} alt=""/>
                                </div>
                                <div className="ei-text">
                                    <h4>Athleta Mind Over</h4>
                                    <ul>
                                        <li><i className="material-icons">person</i>Kelly Alexander</li>
                                        <li><i className="material-icons">event_available</i>15 January, 2019</li>
                                        <li><i className="material-icons">map</i>184 Main Collins Street</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="event-item">
                                <div className="ei-img">
                                    <img src={EventImages_7} alt=""/>
                                </div>
                                <div className="ei-text">
                                    <h4>Mega-Yoga classNamees</h4>
                                    <ul>
                                        <li><i className="material-icons">person</i>Kelly Alexander</li>
                                        <li><i className="material-icons">event_available</i>15 January, 2019</li>
                                        <li><i className="material-icons">map</i>184 Main Collins Street</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="event-item">
                                <div className="ei-img">
                                    <img src={EventImages_8} alt=""/>
                                </div>
                                <div className="ei-text">
                                    <h4>Yoga Festivals</h4>
                                    <ul>
                                        <li><i className="material-icons">person</i>Kelly Alexander</li>
                                        <li><i className="material-icons">event_available</i>15 January, 2019</li>
                                        <li><i className="material-icons">map</i>184 Main Collins Street</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="site-pagination pt-3">
                        <Link className="active">1</Link>
                        <Link>2</Link>
                        <Link><i className="material-icons">keyboard_arrow_right</i></Link>
                    </div>
                </div>
            </section>
            {/*<!-- Events Section end -->*/}

        </div>
    )
}
