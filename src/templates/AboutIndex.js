import React from 'react'
import { Link } from 'react-router-dom'

import aboutpic_1 from '../img/icons/logo-icon.png'
import aboutpic_2 from '../img/about.png'
import aboutpic_3 from '../img/icons/about-1.png'
import aboutpic_4 from '../img/icons/about-2.png'
import aboutpic_5 from '../img/icons/about-3.png'

import '../style.css'

export const AboutIndex = () => {
    return (
        <div>
            {/*<!-- About Section -->*/}
            <section className="about-section spad">
                <div className="container">
                    <div className="section-title text-center">
                        <img src={aboutpic_1} alt=""/>
                            <h2>Welcome to Ahana</h2>
                            <p>Practice Yoga to perfect physical beauty, take care of your soul and enjoy life more fully!</p>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="about-img">
                                <img src={aboutpic_2} alt=""/>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-item">
                                <div className="ai-icon">
                                    <img src={aboutpic_3} alt=""/>
                                </div>
                                <div className="ai-text">
                                    <h4>Full Rejuvenation</h4>
                                    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                </div>
                            </div>
                            <div className="about-item">
                                <div className="ai-icon">
                                    <img src={aboutpic_4} alt=""/>
                                </div>
                                <div className="ai-text">
                                    <h4>Extension of Spring</h4>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem a cusantium doloremque.</p>
                                </div>
                            </div>
                            <div className="about-item">
                                <div className="ai-icon">
                                    <img src={aboutpic_5} alt=""/>
                                </div>
                                <div className="ai-text">
                                    <h4>Against Aging</h4>
                                    <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</p>
                                </div>
                            </div>
                            <Link className="site-btn sb-gradient mt-5">explore more</Link>
                        </div>
                    </div>
                </div>
            </section>
            {/*<!-- About Section end -->*/}

        </div>
    )
}
