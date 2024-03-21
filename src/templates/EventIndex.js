import React from 'react'
import { Link } from 'react-router-dom'

import EventImage_1 from '../img/icons/logo-icon.png';
import EventImage_2 from '../img/video.jpg';
import EventImage_3 from '../img/event/1.jpg';
import EventImage_4 from '../img/event/2.jpg';
import EventImage_5 from '../img/event/3.jpg';
import EventImage_6 from '../img/icons/play.png';

export const EventIndex = () => {
    return (
        <div>
            {/*<!-- Event Section -->*/}
            <section className="event-section spad">
                <div className="container">
                    <div className="section-title text-center">
                        <img src={EventImage_1} alt=""/>
                            <h2>Upcoming Events</h2>
                            <p>Practice Yoga to perfect physical beauty, take care of your soul and enjoy life more fully!</p>
                    </div>
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="event-video">
                                <img src={EventImage_2} alt=""/>
                                    <Link to="https://www.youtube.com/watch?v=vgv-hzTl5FA" className="video-popup"><img src={EventImage_6} alt=""/></Link>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="event-item">
                                <div className="ei-img">
                                    <img src={EventImage_3} alt=""/>
                                </div>
                                <div className="ei-text">
                                    <h4><Link>Lole White Yoga Tour</Link></h4>
                                    <ul>
                                        <li><i className="material-icons">person</i>Kelly Alexander</li>
                                        <li><i className="material-icons">event_available</i>15 January, 2019</li>
                                        <li><i className="material-icons">map</i>184 Main Collins Street</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="event-item">
                                <div className="ei-img">
                                    <img src={EventImage_4} alt=""/>
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
                            <div className="event-item">
                                <div className="ei-img">
                                    <img src={EventImage_5} alt=""/>
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
                    </div>
                </div>
            </section>
            {/*<!-- Event Section end -->*/}

        </div>
    )
}
