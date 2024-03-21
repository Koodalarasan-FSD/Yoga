import React from 'react'
import { Link } from 'react-router-dom'
import TrainerImage_1 from '../img/trainer/1.png';
import TrainerImage_2 from '../img/trainer/2.png';
import TrainerImage_3 from '../img/trainer/3.png';
import TrainerImage_4 from '../img/trainer/4.png';
import TrainerImage_5 from '../img/trainer/5.png';
import TrainerImage_6 from '../img/trainer/6.png';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa6';

export const Trainers_Section_In_Trainers = () => {
  return (
    <div>
      {/*<!-- Trainers Section -->*/}
      <section className="trainers-page-section spad overflow-hidden">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="trainer-item">
                <div className="ti-img">
                  <img src={TrainerImage_1} alt=""/>
                </div>
                <div className="ti-text">
                  <h4>Lori Kennedy</h4>
                  <h6>Yoga Trainer</h6>
                  <p>Yoga & Therapy Certificate of Uttarakhand University Sanskrit</p>
                  <div className="ti-social">
                    <Link><FaFacebook/></Link>
                    <Link><FaInstagram/></Link>
                    <Link><FaTwitter/></Link>
                    <Link><FaLinkedin/></Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="trainer-item">
                <div className="ti-img">
                  <img src={TrainerImage_2} alt=""/>
                </div>
                <div className="ti-text">
                  <h4>Lori Kennedy</h4>
                  <h6>Yoga Trainer</h6>
                  <p>Yoga & Therapy Certificate of Uttarakhand University Sanskrit</p>
                  <div className="ti-social">
                    <Link><FaFacebook/></Link>
                    <Link><FaInstagram/></Link>
                    <Link><FaTwitter/></Link>
                    <Link><FaLinkedin/></Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="ts-item">
                <div className="trainer-item">
                  <div className="ti-img">
                    <img src={TrainerImage_3} alt=""/>
                  </div>
                  <div className="ti-text">
                    <h4>Rebecca James</h4>
                    <h6>Yoga Trainer</h6>
                    <p>Yoga & Therapy Certificate of Uttarakhand University Sanskrit</p>
                    <div className="ti-social">
                      <Link><FaFacebook/></Link>
                      <Link><FaInstagram/></Link>
                      <Link><FaTwitter/></Link>
                      <Link><FaLinkedin/></Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="ts-item">
                <div className="trainer-item">
                  <div className="ti-img">
                    <img src={TrainerImage_4} alt=""/>
                  </div>
                  <div className="ti-text">
                    <h4>Cynthia McCoy</h4>
                    <h6>Yoga Trainer</h6>
                    <p>Yoga & Therapy Certificate of Uttarakhand University Sanskrit</p>
                    <div className="ti-social">
                      <Link><FaFacebook/></Link>
                      <Link><FaInstagram/></Link>
                      <Link><FaTwitter/></Link>
                      <Link><FaLinkedin/></Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="ts-item">
                <div className="trainer-item">
                  <div className="ti-img">
                    <img src={TrainerImage_5} alt=""/>
                  </div>
                  <div className="ti-text">
                    <h4>Olivia Richards</h4>
                    <h6>Yoga Trainer</h6>
                    <p>Yoga & Therapy Certificate of Uttarakhand University Sanskrit</p>
                    <div className="ti-social">
                      <Link><FaFacebook/></Link>
                      <Link><FaInstagram/></Link>
                      <Link><FaTwitter/></Link>
                      <Link><FaLinkedin/></Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="ts-item">
                <div className="trainer-item">
                  <div className="ti-img">
                    <img src={TrainerImage_6} alt=""/>
                  </div>
                  <div className="ti-text">
                    <h4>Emily Walker</h4>
                    <h6>Yoga Trainer</h6>
                    <p>Yoga & Therapy Certificate of Uttarakhand University Sanskrit</p>
                    <div className="ti-social">
                      <Link><FaFacebook/></Link>
                      <Link><FaInstagram/></Link>
                      <Link><FaTwitter/></Link>
                      <Link><FaLinkedin/></Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="site-pagination">
            <Link className="active">1</Link>
            <Link>2</Link>
            <Link><i className="material-icons">keyboard_arrow_right</i></Link>
          </div>
        </div>
      </section>
      {/*<!-- Trainers Section end -->*/}

    </div>
  )
}
