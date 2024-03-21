import React from 'react'
import '../bootstrap.min.css';
//import '../font-awesome.min.css';
/*import '../owl.carousel.min.css';
import '../nice-select.css';
import '../magnific-popup.css';

import '../animate.css';
*/
import '../slicknav.min.css';
import '../style.css';

import logo from '../3.jpg';

import { NavLink } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

export const Header = () => {
    return (
        <header className="header-section">
            <div className="header-top">
                <div className="row m-0">
                    <div className="col-md-6 d-none d-md-block p-0">
                        <div className="header-info">
                            <i className="material-icons">map</i>
                            <p>184 Main Colns Street</p>
                        </div>
                        <div className="header-info">
                            <i className="material-icons">phone</i>
                            <p>(965) 436 3274</p>
                        </div>
                    </div>
                    <div className="col-md-6 text-left text-md-right p-0">
                        <div className="header-info ">
                            <i className="material-icons">alarm_on</i>
                            <p>Mon - Fri:  6:30am - 07:45pm</p>
                        </div>
                        <div className="header-info">
                            <i className="material-icons">language</i>
                            <select id="language" className="language-select">
                                <option data-display="Language">EN</option>
                                <option data-display="Language" value="1">ES</option>
                                <option data-display="Language" value="2">JA</option>
                                <option data-display="Language" value="2">AR</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className="header-bottom" >
                <Container>
                    <Navbar.Brand as={NavLink} to="/" className="site-logo">
                        <div style={{ marginRight: '70px' }}><img src={logo} alt="" /></div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <div style={{ marginRight: '40px' }}>
                                <NavLink to="/" exact className="nav-link">Home</NavLink></div>
                            <div style={{ marginRight: '40px' }}>
                                <NavLink to="/About" className="nav-link"> About</NavLink>
                            </div>
                            <div style={{ marginRight: '40px' }}>
                                <NavLink to="/Classes" className="nav-link">Classes</NavLink>
                            </div>
                            <div style={{ marginRight: '40px' }}>
                                <NavLink to="/Trainers" className="nav-link" >Trainers</NavLink>
                            </div>
                            <div style={{ marginRight: '40px' }}>
                                <NavLink to="/Events" className="nav-link" >Events</NavLink>
                            </div>
                            <div style={{ marginRight: '40px' }}>
                                <NavLink to="/Blog" className="nav-link">Blog</NavLink>
                            </div>
                            <div style={{ marginRight: '40px' }}>
                                <NavLink to="/Contact" className="nav-link" >Contact</NavLink>
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}