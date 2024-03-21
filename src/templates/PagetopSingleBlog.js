import React from 'react'
import PagetopSingleBlogImage from '../img/page-top-bg.jpg';

var sectionstyles={
    backgroundImage:`url(${PagetopSingleBlogImage})`
}

export const PagetopSingleBlog = () => {
    return (
        <div>
            {/*<!-- Page top Section -->*/}
            <section className="page-top-section set-bg" style={sectionstyles} >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 m-auto text-white">
                            <h2>Blog details</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                </div>
            </section>
            {/*<!-- Page top Section end --> */}

        </div>
    )
}
