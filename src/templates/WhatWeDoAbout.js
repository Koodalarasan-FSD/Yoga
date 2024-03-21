import React from 'react'
import WhatImage_1 from '../img/wwd-bg.jpg';
import '../bootstrap.min.css';
import '../style.css';
import { ProgressBar } from 'react-bootstrap';

//Inorder to set image in background
var sectionStyle = {
    backgroundImage: `url(${WhatImage_1})`
}

export const WhatWeDoAbout = () => {
    return (
        <div>
            {/*<!-- What we do Section -->*/}
            <section className="wwd-section spad set-bg" style={sectionStyle}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-7 ml-auto">
                            <div className="wwd-text">
                                <h3>What we do</h3>
                                <p>To be invited to the nearest Cali center and get free physical advice to learn more about the program.</p>
                                <div className="single-progress-item">
                                    
                                    <div className="progress-bar-style">
                                        <ProgressBar now={84} label="Breathing" variant="danger" />
                                    </div>
                                </div>
                                <div className="single-progress-item">
                                    
                                    <div className="progress-bar-style">
                                        <ProgressBar now={75} label="Metabolism" variant="danger" />
                                    </div>
                                </div>
                                <div className="single-progress-item">
                                    
                                    <div className="progress-bar-style" >
                                        <ProgressBar now={90} label="Flexibility" variant="danger" />
                                    </div>
                                </div>
                                <div className="single-progress-item">
                                    
                                    <div className="progress-bar-style" >
                                        <ProgressBar now={78} label="Strongness" variant="danger" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*<!-- What we do Section end -->*/}

        </div>
    )
}
