import React from 'react'
import PagetopTrainerImage from '../img/page-top-bg.jpg'

var sectionstyle={
    backgroundImage:`url(${PagetopTrainerImage})`
}
export const PagetopTrainers = () => {
    return (
        <div>
            {/*<!-- Page top Section -->*/}
            <section className="page-top-section set-bg" style={sectionstyle}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 m-auto text-white">
                            <h2>Our Trainers</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                </div>
            </section>
            {/*<!-- Page top Section end -->*/}

        </div>
    )
}
