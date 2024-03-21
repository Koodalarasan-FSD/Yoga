import React from 'react'
import BlogImage_1 from '../img/icons/logo-icon.png';
import BlogImage_2 from '../img/blog/1.jpg';
import BlogImage_3 from '../img/blog/2.jpg';
import BlogImage_4 from '../img/blog/3.jpg';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa6';

export const BlogAbout = () => {
    return (
        <div>
            {/*<!-- Blog Section -->*/}
            <section class="about-blog-section spad">
                <div class="container">
                    <div class="section-title text-center">
                        <img src={BlogImage_1} alt=""/>
                            <h2>Course benefits</h2>
                            <p>Practice Yoga to perfect physical beauty, take care of your soul and enjoy life more fully!</p>
                    </div>
                    <div class="row">
                        <div class="col-lg-4 col-md-6">
                            <div class="blog-item">
                                <img src={BlogImage_2} alt=""/>
                                    <div class="bi-text">
                                        <h2><Link to='/SingleBlog'>Yoga for Slim Physique</Link></h2>
                                        <p>Regular practice with breathing tech-niques in Yoga will help you get a toned body, this is the perfect choice</p>
                                    </div>
                                    <div class="bi-footer">
                                        <div class="bi-cata">Health & Beauty</div>
                                        <div class="bi-social">
                                            <Link><FaFacebook/></Link>
                                            <Link><FaInstagram/></Link>
                                            <Link><FaTwitter/></Link>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="blog-item">
                                <img src={BlogImage_3} alt=""/>
                                    <div class="bi-text">
                                        <h2><Link to="/SingleBlog">The Perfect Dose</Link></h2>
                                        <p>To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain</p>
                                    </div>
                                    <div class="bi-footer">
                                        <div class="bi-cata">Health & Beauty</div>
                                        <div class="bi-social">
                                            <Link><FaFacebook/></Link>
                                            <Link><FaInstagram/></Link>
                                            <Link><FaTwitter/></Link>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="blog-item">
                                <img src={BlogImage_4} alt=""/>
                                    <div class="bi-text">
                                        <h2><Link to="/SingleBlog">Flexible Body</Link></h2>
                                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis prae-sentium voluptatum deleniti</p>
                                    </div>
                                    <div class="bi-footer">
                                        <div class="bi-cata">Health & Beauty</div>
                                        <div class="bi-social">
                                            <Link><FaFacebook/></Link>
                                            <Link><FaInstagram/></Link>
                                            <Link><FaTwitter/></Link>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*<!-- Blog Section end -->*/}
        </div>
    )
}
