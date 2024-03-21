import React from 'react'
import { Link } from 'react-router-dom'
import ClassImage_1 from '../img/classes/1.jpg';
import ClassImage_2 from '../img/classes/author/1.jpg';
import ClassImage_3 from '../img/classes/2.jpg';
import ClassImage_4 from '../img/classes/author/2.jpg';
import ClassImage_5 from '../img/classes/3.jpg';
import ClassImage_6 from '../img/classes/author/3.jpg';
import ClassImage_7 from '../img/classes/1.jpg';
import ClassImage_8 from '../img/classes/author/1.jpg';
import ClassImage_9 from '../img/classes/2.jpg';
import ClassImage_10 from '../img/classes/author/2.jpg';
import ClassImage_11 from '../img/classes/3.jpg';
import ClassImage_12 from '../img/classes/author/3.jpg';
import ClassImage_13 from '../img/event/1.jpg';
import ClassImage_14 from '../img/event/2.jpg';
import ClassImage_15 from '../img/video.jpg';
import ClassImage_16 from '../img/icons/play.png';


//Inorder to background Image
var sectionstyle_1 = {
    backgroundImage: `url(${ClassImage_13})`
}
var sectionstyle_2 = {
    backgroundImage: `url(${ClassImage_14})`
}

export const Class_Section_in_Class = () => {
    return (
        <div>
            {/*<!-- Classes Section -->*/}
            <section className="classes-page-section spad overflow-hidden">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9">
                            <div className="classes-top">
                                <div className="row">
                                    <div className="col-md-6">
                                        <p>Showing 8 classes of 30 classes</p>
                                    </div>
                                    <div className="col-md-6">
                                        <select className="circle-select">
                                            <option data-display="Default Sorting">Default Sorting</option>
                                            <option value="2">Oldest</option>
                                            <option value="2">Newest</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="classes-item-warp">
                                        <div className="classes-item">
                                            <div className="ci-img">
                                                <img src={ClassImage_1} alt="" />
                                            </div>
                                            <div className="ci-text">
                                                <h4>Artistic Yoga</h4>
                                                <div className="ci-metas">
                                                    <div className="ci-meta"><i className="material-icons">event_available</i>Mon, Wed, Fri</div>
                                                    <div className="ci-meta"><i className="material-icons">alarm_on</i>06:30pm - 07:45pm</div>
                                                </div>
                                                <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis</p>
                                            </div>
                                            <div className="ci-bottom">
                                                <div className="ci-author">
                                                    <img src={ClassImage_2} alt="" />
                                                    <div className="author-text">
                                                        <h6>Victoria Webb</h6>
                                                        <p>Yoga Trainer</p>
                                                    </div>
                                                </div>
                                                <Link className="site-btn sb-gradient">book now</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="classes-item-warp">
                                        <div className="classes-item">
                                            <div className="ci-img">
                                                <img src={ClassImage_3} alt="" />
                                            </div>
                                            <div className="ci-text">
                                                <h4>Traditional Hatha</h4>
                                                <div className="ci-metas">
                                                    <div className="ci-meta"><i className="material-icons">event_available</i>Mon, Wed, Fri</div>
                                                    <div className="ci-meta"><i className="material-icons">alarm_on</i>06:30pm - 07:45pm</div>
                                                </div>
                                                <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis</p>
                                            </div>
                                            <div className="ci-bottom">
                                                <div className="ci-author">
                                                    <img src={ClassImage_4} alt="" />
                                                    <div className="author-text">
                                                        <h6>Victoria Webb</h6>
                                                        <p>Yoga Trainer</p>
                                                    </div>
                                                </div>
                                                <Link className="site-btn sb-gradient">book now</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="classes-item-warp">
                                        <div className="classes-item">
                                            <div className="ci-img">
                                                <img src={ClassImage_5} alt="" />
                                            </div>
                                            <div className="ci-text">
                                                <h4>Yoga Therapy</h4>
                                                <div className="ci-metas">
                                                    <div className="ci-meta"><i className="material-icons">event_available</i>Mon, Wed, Fri</div>
                                                    <div className="ci-meta"><i className="material-icons">alarm_on</i>06:30pm - 07:45pm</div>
                                                </div>
                                                <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis</p>
                                            </div>
                                            <div className="ci-bottom">
                                                <div className="ci-author">
                                                    <img src={ClassImage_6} alt="" />
                                                    <div className="author-text">
                                                        <h6>Victoria Webb</h6>
                                                        <p>Yoga Trainer</p>
                                                    </div>
                                                </div>
                                                <Link className="site-btn sb-gradient">book now</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="classes-item-warp">
                                        <div className="classes-item">
                                            <div className="ci-img">
                                                <img src={ClassImage_7} alt="" />
                                            </div>
                                            <div className="ci-text">
                                                <h4>Artistic Yoga</h4>
                                                <div class="ci-metas">
                                                    <div className="ci-meta"><i className="material-icons">event_available</i>Mon, Wed, Fri</div>
                                                    <div className="ci-meta"><i className="material-icons">alarm_on</i>06:30pm - 07:45pm</div>
                                                </div>
                                                <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis</p>
                                            </div>
                                            <div className="ci-bottom">
                                                <div className="ci-author">
                                                    <img src={ClassImage_8} alt="" />
                                                    <div className="author-text">
                                                        <h6>Victoria Webb</h6>
                                                        <p>Yoga Trainer</p>
                                                    </div>
                                                </div>
                                                <Link className="site-btn sb-gradient">book now</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="classes-item-warp">
                                        <div className="classes-item">
                                            <div className="ci-img">
                                                <img src={ClassImage_9} alt="" />
                                            </div>
                                            <div className="ci-text">
                                                <h4>Traditional Hatha</h4>
                                                <div className="ci-metas">
                                                    <div className="ci-meta"><i className="material-icons">event_available</i>Mon, Wed, Fri</div>
                                                    <div className="ci-meta"><i className="material-icons">alarm_on</i>06:30pm - 07:45pm</div>
                                                </div>
                                                <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis</p>
                                            </div>
                                            <div className="ci-bottom">
                                                <div className="ci-author">
                                                    <img src={ClassImage_10} alt="" />
                                                    <div className="author-text">
                                                        <h6>Victoria Webb</h6>
                                                        <p>Yoga Trainer</p>
                                                    </div>
                                                </div>
                                                <Link className="site-btn sb-gradient">book now</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="classes-item-warp">
                                        <div className="classes-item">
                                            <div className="ci-img">
                                                <img src={ClassImage_11} alt="" />
                                            </div>
                                            <div className="ci-text">
                                                <h4>Yoga Therapy</h4>
                                                <div className="ci-metas">
                                                    <div className="ci-meta"><i className="material-icons">event_available</i>Mon, Wed, Fri</div>
                                                    <div className="ci-meta"><i className="material-icons">alarm_on</i>06:30pm - 07:45pm</div>
                                                </div>
                                                <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis</p>
                                            </div>
                                            <div className="ci-bottom">
                                                <div className="ci-author">
                                                    <img src={ClassImage_12} alt="" />
                                                    <div className="author-text">
                                                        <h6>Victoria Webb</h6>
                                                        <p>Yoga Trainer</p>
                                                    </div>
                                                </div>
                                                <Link className="site-btn sb-gradient">book now</Link>
                                            </div>
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
                        <div className="col-lg-3 col-md-5 col-sm-8 sidebar">
                            <div className="sb-widget">
                                <h2 className="sb-title">Search Classes</h2>
                                <form className="classes-filter">
                                    <select className="circle-select">
                                        <option data-display="Choose Category">Choose Category</option>
                                        <option value="1">Category 1</option>
                                        <option value="2">Category 2</option>
                                    </select>
                                    <select className="circle-select">
                                        <option data-display="Choose Level">Choose Level</option>
                                        <option value="1">Level 1</option>
                                        <option value="2">Level 2</option>
                                    </select>
                                    <select className="circle-select">
                                        <option data-display="Choose Trainer">Choose Trainer</option>
                                        <option value="2">Name</option>
                                    </select>
                                    <h3>Filter by Day</h3>
                                    <div class="cf-cal">
                                        <div className="cf-radio">
                                            <input type="checkbox" name="sc" id="monday" />
                                            <label for="monday">Monday</label>
                                        </div>
                                        <div className="cf-radio">
                                            <input type="checkbox" name="sc" id="tuesday" />
                                            <label for="tuesday">Tuesday</label>
                                        </div>
                                        <div className="cf-radio">
                                            <input type="checkbox" name="sc" id="wednesday" />
                                            <label for="wednesday">Wednesday</label>
                                        </div>
                                        <div className="cf-radio">
                                            <input type="checkbox" name="sc" id="thurstday" />
                                            <label for="thurstday">Thurstday</label>
                                        </div>
                                    </div>
                                    <div className="cf-cal">
                                        <div className="cf-radio">
                                            <input type="checkbox" name="sc" id="friday" />
                                            <label for="friday">Friday</label>
                                        </div>
                                        <div className="cf-radio">
                                            <input type="checkbox" name="sc" id="saturday" />
                                            <label for="saturday">Saturday</label>
                                        </div>
                                        <div className="cf-radio">
                                            <input type="checkbox" name="sc" id="sunday" />
                                            <label for="sunday">Sunday</label>
                                        </div>
                                    </div>
                                    <div className="clearfix"></div>
                                    <button className="site-btn sb-gradient">Filter now</button>
                                </form>
                            </div>
                            <div className="sb-widget">
                                <h2 className="sb-title">Popular Classes</h2>
                                <div className="popular-classes-widget owl-carousel">
                                    <div className="pc-item">
                                        <div className="pc-thumb set-bg" style={sectionstyle_1} ></div>
                                        <div className="pc-text">
                                            <h4><Link>Yoga Balance</Link></h4>
                                            <ul>
                                                <li><i class="material-icons">event_available</i>Mon, Wed, Fri</li>
                                                <li><i class="material-icons">alarm_on</i>06:30pm - 07:45pm</li>
                                                <li><i class="material-icons">person_outline</i>Carolyn Berry</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="pc-item">
                                        <div className="pc-thumb set-bg" style={sectionstyle_2} ></div>
                                        <div className="pc-text">
                                            <h4><Link>Yoga Balance</Link></h4>
                                            <ul>
                                                <li><i class="material-icons">event_available</i>Mon, Wed, Fri</li>
                                                <li><i class="material-icons">alarm_on</i>06:30pm - 07:45pm</li>
                                                <li><i class="material-icons">person_outline</i>Carolyn Berry</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sb-widget">
                                <div className="sb-video">
                                    <img src={ClassImage_15} alt="" />
                                    <Link to="https://www.youtube.com/watch?v=vgv-hzTl5FA" className="video-popup">
                                        <img src={ClassImage_16} alt="" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Classes Section end -->*/}

        </div>
    )
}
