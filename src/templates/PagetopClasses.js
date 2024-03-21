import React from 'react'
import PagetopImageClasses from '../img/page-top-bg.jpg';

//Inorder to set image in background
var sectionStyle = {
    backgroundImage: `url(${PagetopImageClasses})`
 }

export const PagetopClasses = () => {
    return (
        <div>
            {/*<!-- Page top Section -->*/}
            <section className="page-top-section set-bg" style={sectionStyle}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 m-auto text-white">
                            <h2>Our classes</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                </div>
            </section>
            {/*<!-- Page top Section end -->*/}

        </div>
    )
}
