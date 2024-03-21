import React from 'react'
import SingleBlogImage_1 from '../img/blog/big.jpg';
import SingleBlogImage_2 from '../img/blog/blog-gallery/1.jpg';
import SingleBlogImage_3 from '../img/blog/blog-gallery/4.jpg';
import SingleBlogImage_4 from '../img/blog/blog-gallery/2.jpg';
import SingleBlogImage_5 from '../img/blog/blog-gallery/5.jpg';
import SingleBlogImage_6 from '../img/blog/blog-gallery/3.jpg';
import SingleBlogImage_7 from '../img/classes/author/4.jpg';
import SingleBlogImage_8 from '../img/classes/author/3.jpg';
import SingleBlogImage_9 from '../img/classes/author/2.jpg';
import SingleBlogImage_10 from '../img/classes/author/1.jpg';
import SingleBlogImage_11 from '../img/classes/author/1.jpg';
import SingleBlogImage_12 from '../img/blog/8.jpg';
import SingleBlogImage_13 from '../img/blog/3.jpg';
import SingleBlogImage_14 from '../img/blog/9.jpg';
import SingleBlogImage_15 from '../img/infor/1.jpg';
import SingleBlogImage_16 from '../img/infor/2.jpg';
import SingleBlogImage_17 from '../img/infor/3.jpg';
import SingleBlogImage_18 from '../img/infor/4.jpg';
import SingleBlogImage_19 from '../img/infor/5.jpg';
import SingleBlogImage_20 from '../img/infor/6.jpg';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import '../style.css';
import '../bootstrap.min.css';


var sectionstyles_1={
    backgroundImage:`url(${SingleBlogImage_12})`
}
var sectionstyles_2={
    backgroundImage:`url(${SingleBlogImage_13})`
}
var sectionstyles_3={
    backgroundImage:`url(${SingleBlogImage_14})`
}

export const SingleBlogDetails = () => {
    return (
        <div>
            {/*<!-- Blog Details Section -->*/}
            <section className="blog-details-section spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9">
                            <div className="blog-details">
                                <div className="blog-preview">
                                    <img src={SingleBlogImage_1} alt=""/>
                                </div>
                                <h2>Yoga Therapy</h2>
                                <div className="blog-meta"><p><i className="material-icons"></i>120 Mins </p></div>
                                <div className="blog-meta"><p><i className="material-icons"></i>250 People Registered</p></div>
                                <p>With so many long-term benefits for health and beauty, many people choose Yoga as a form of daily exercise and sports. However, for those who want to practice Yoga, especially beginners, the choice of location is extremely important. It is impossible to count how many gyms with a variety of quality and prices. Some of the following questions will be answered by Ahana Yoga to help you find the best practice room.</p>
                                <blockquote>Yoga is now one of the most popular practice in the world. It is not simply the movement of the four limbs, Yoga is the product of a massive culture, a special "religion" that brings great value.</blockquote>

                                <div className="blog-gallery">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <img src={SingleBlogImage_2} alt=""/>
                                                <img src={SingleBlogImage_3} alt=""/>
                                                </div>
                                                <div className="col-md-4">
                                                    <img src={SingleBlogImage_4} alt=""/>
                                                        <img src={SingleBlogImage_5} alt=""/>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <img src={SingleBlogImage_6} alt=""/>
                                                        </div>
                                                </div>
                                        </div>
                                        <h3>What reasons do we need to practice Yoga?</h3>
                                        <p>Update the trend of 12 yoga exercises to help you lose weight effectively at home, help strengthen your exercise ability. Besides impacting weight loss effects, it also helps to repel diseases, enhance the body's resistance. Have a toned body with just 8 steps of yoga every day, helping to lose weight quickly combined with a reasonable diet.</p>
                                        <div className="row">
                                            <div className="col-sm-7">
                                                <div className="ed-cata"><p><i className="material-icons">local_offer</i>Health & Beauty</p></div>
                                            </div>
                                            <div className="col-sm-5 text-left text-sm-right pt-4 pt-sm-0">
                                                <div className="ed-social">
                                                    <Link><FaFacebook/></Link>
                                                    <Link><FaInstagram/></Link>
                                                    <Link><FaTwitter/></Link>
                                                    <Link><FaLinkedin/></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="blog-author-card">
                                        <div className="blog-author">
                                            <img src={SingleBlogImage_7} alt=""/>
                                                <div className="ba-text">
                                                    <h3>Dorothy Newman</h3>
                                                    <p>Let Yoga bring you perfect body, health and flexibility and a spirit of relaxation. Choose the nearest gym at Ahana Yoga and start this amazing journey!</p>
                                                    <div className="ba-social">
                                                        <Link><FaFacebook/></Link>
                                                        <Link><FaInstagram/></Link>
                                                        <Link><FaTwitter/></Link>
                                                        <Link><FaLinkedin/></Link>
                                                    </div>
                                                </div>
                                        </div>
                                    </div>
                                    <div className="blog-nav-warp text-center text-sm-left">
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <Link className="blog-nav bn-prev">
                                                    <i className="material-icons">keyboard_arrow_left</i>
                                                    <h3>Movements for Slim</h3>
                                                    <p>Previous Post</p>
                                                </Link>
                                            </div>
                                            <div className="col-sm-6 text-center text-sm-right">
                                                <Link className="blog-nav bn-next">
                                                    <i className="material-icons">keyboard_arrow_right</i>
                                                    <h3>The Perfect Dose</h3>
                                                    <p>Next Post</p>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <h3 className="comment-title">Comments</h3>
                                    <ul className="comment-list">
                                        <li>
                                            <img src={SingleBlogImage_8} className="comment-pic" alt=""/>
                                                <div className="comment-text">
                                                    <h3>Beverly Price </h3>
                                                    <div className="comment-date"><i className="material-icons">alarm_on</i>June 28, 2019 at 3:18 pm</div>
                                                    <p>Just practicing yoga for more than 3 months, I dropped from 64 kg to 58 kg. I have used many weight loss measures such as medication, diet, but the effects are slow and low. </p>
                                                    <Link className="reply"><i className="material-icons">reply</i>Reply</Link>
                                                </div>
                                                <ul className="comment-sub-list">
                                                    <li>
                                                        <img src={SingleBlogImage_9} className="comment-pic" alt=""/>
                                                            <div className="comment-text">
                                                                <h3>Jacqueline Watkins</h3>
                                                                <div className="comment-date"><i className="material-icons">alarm_on</i>June 28, 2019 at 3:18 pm</div>
                                                                <p>Just practicing yoga for more than 3 months, I dropped from 64 kg to 58 kg. I have used many weight loss measures such as medication, diet, but the effects are slow and low. </p>
                                                                <Link className="reply"><i className="material-icons">reply</i>Reply</Link>
                                                            </div>
                                                    </li>
                                                </ul>
                                        </li>
                                        <li>
                                            <img src={SingleBlogImage_10} className="comment-pic" alt=""/>
                                                <div className="comment-text">
                                                    <h3>Lori Gonzales</h3>
                                                    <div className="comment-date"><i className="material-icons">alarm_on</i>June 28, 2019 at 3:18 pm</div>
                                                    <p>Just practicing yoga for more than 3 months, I dropped from 64 kg to 58 kg. I have used many weight loss measures such as medication, diet, but the effects are slow and low. </p>
                                                    <Link className="reply"><i className="material-icons">reply</i>Reply</Link>
                                                </div>
                                        </li>
                                    </ul>
                                    <h3 className="comment-title">Leave a Reply</h3>
                                    <form className="singup-form">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <input type="text" placeholder="First Name"/>
                                            </div>
                                            <div className="col-md-6">
                                                <input type="text" placeholder="Last Name"/>
                                            </div>
                                            <div className="col-md-6">
                                                <input type="text" placeholder="Your Email"/>
                                            </div>
                                            <div className="col-md-6">
                                                <input type="text" placeholder="Phone Number"/>
                                            </div>
                                            <div className="col-md-12">
                                                <textarea placeholder="Message"></textarea>
                                                <Link className="site-btn sb-gradient">Send message</Link>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="col-lg-3 col-md-5 col-sm-8 sidebar">
                                    <div className="sb-widget">
                                        <form className="search-form">
                                            <input type="text" placeholder="Search"/>
                                                <button><i className="material-icons">search</i></button>
                                        </form>
                                    </div>
                                    <div className="sb-widget">
                                        <h2 className="sb-title">About instructor</h2>
                                        <div className="about-instructor-widget">
                                            <img src={SingleBlogImage_11} alt=""/>
                                                <h4>Lori Kennedy</h4>
                                                <h6>Yoga Trainer</h6>
                                                <p>Yoga & Therapy Certificate of Uttarakhand University</p>
                                                <div className="ai-social">
                                                    <Link><FaFacebook/></Link>
                                                    <Link><FaInstagram/></Link>
                                                    <Link><FaTwitter/></Link>
                                                    <Link><FaLinkedin/></Link>
                                                </div>
                                        </div>
                                    </div>
                                    <div className="sb-widget">
                                        <h2 className="sb-title">Categories</h2>
                                        <ul className="sb-list">
                                            <li><Link>Health<span>(5)</span></Link></li>
                                            <li><Link>Nature<span>(7)</span></Link></li>
                                            <li><Link>Beauty<span>(3)</span></Link></li>
                                            <li><Link>Challenge<span>(10)</span></Link></li>
                                            <li><Link>Training<span>(12)</span></Link></li>
                                            <li><Link>Progress<span>(4)</span></Link></li>
                                        </ul>
                                    </div>
                                    <div className="sb-widget">
                                        <h2 className="sb-title">Latest post</h2>
                                        <div className="latest-post-widget">
                                            <div className="lp-item">
                                                <div className="lp-thumb set-bg" style={sectionstyles_1}></div>
                                                <div className="lp-text">
                                                    <h3>Rapid Weight Loss</h3>
                                                    <p><i className="material-icons">event_available</i>June 28, 2019</p>
                                                </div>
                                            </div>
                                            <div className="lp-item">
                                                <div className="lp-thumb set-bg" style={sectionstyles_2} ></div>
                                                <div className="lp-text">
                                                    <h3>Flexible Body</h3>
                                                    <p><i className="material-icons">event_available</i>June 28, 2019</p>
                                                </div>
                                            </div>
                                            <div className="lp-item">
                                                <div className="lp-thumb set-bg" style={sectionstyles_3} ></div>
                                                <div className="lp-text">
                                                    <h3>Healthy Eating Mode</h3>
                                                    <p><i className="material-icons">event_available</i>June 28, 2019</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sb-widget">
                                        <h2 className="sb-title">Latest post</h2>
                                        <div className="insta-widget">
                                            <div className="insta-item">
                                                <div className="insta-img">
                                                    <img src={SingleBlogImage_15} alt=""/>
                                                        <div className="insta-hover">
                                                            <FaInstagram/>
                                                        </div>
                                                </div>
                                            </div>
                                            <div className="insta-item">
                                                <div className="insta-img">
                                                    <img src={SingleBlogImage_16} alt=""/>
                                                        <div className="insta-hover">
                                                            <FaInstagram/>
                                                        </div>
                                                </div>
                                            </div>
                                            <div className="insta-item">
                                                <div className="insta-img">
                                                    <img src={SingleBlogImage_17} alt=""/>
                                                        <div className="insta-hover">
                                                            <FaInstagram/>
                                                        </div>
                                                </div>
                                            </div>
                                            <div className="insta-item">
                                                <div className="insta-img">
                                                    <img src={SingleBlogImage_18} alt=""/>
                                                        <div className="insta-hover">
                                                            <FaInstagram/>
                                                        </div>
                                                </div>
                                            </div>
                                            <div className="insta-item">
                                                <div className="insta-img">
                                                    <img src={SingleBlogImage_19} alt=""/>
                                                        <div className="insta-hover">
                                                            <FaInstagram/>
                                                        </div>
                                                </div>
                                            </div>
                                            <div className="insta-item">
                                                <div className="insta-img">
                                                    <img src={SingleBlogImage_20} alt=""/>
                                                        <div className="insta-hover">
                                                            <FaInstagram/>
                                                        </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sb-widget">
                                        <h2 className="sb-title">Latest post</h2>
                                        <div className="sb-tags">
                                            <Link>Nature</Link>
                                            <Link>Health</Link>
                                            <Link>Yoga</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/*<!-- Blog Details Section end -->*/}

                </div>
                )
}
