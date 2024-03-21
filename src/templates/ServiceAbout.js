import React from 'react'
import ServiceImage_1 from '../img/icons/about-1.png';
import ServiceImage_2 from '../img/icons/about-2.png';
import ServiceImage_3 from '../img/icons/about-3.png';
import ServiceImage_4 from '../img/icons/about-4.png';
import '../bootstrap.min.css';
import '../style.css';

export const ServiceAbout = () => {
    return (
        <div>
            {/*<!-- Service Section -->*/}
            <section className="service-section spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-sm-6">
                            <div className="about-item icon-box">
                                <div className="ai-icon">
                                    <img src={ServiceImage_1} alt=""/>
                                </div>
                                <div className="ai-text">
                                    <h4>Full Rejuvenation</h4>
                                    <p>Excepteur sint occaecat cupidatat non proident sunt</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="about-item icon-box">
                                <div className="ai-icon">
                                    <img src={ServiceImage_2} alt=""/>
                                </div>
                                <div className="ai-text">
                                    <h4>Extension of Spring</h4>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="about-item icon-box">
                                <div className="ai-icon">
                                    <img src={ServiceImage_3} alt=""/>
                                </div>
                                <div className="ai-text">
                                    <h4>Against Aging</h4>
                                    <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="about-item icon-box">
                                <div className="ai-icon">
                                    <img src={ServiceImage_4} alt=""/>
                                </div>
                                <div className="ai-text">
                                    <h4>Slim Body</h4>
                                    <p>Neque porro quisquam est, qui dolorem ipsum quia dolor</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*<!-- Service Section end -->*/}

        </div>
    )
}
