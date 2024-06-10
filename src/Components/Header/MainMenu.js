import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Logo from '../images/logo.png';
import BgImage from '../images/bg-1.jpg';


function HeaderArea() {
    return (
        <div className="containerWrapper"  style={{backgroundImage: `url(${BgImage})`, backgroundSize: 'cover', minHeight: '100vh'}}> 
        <Container>
            <div classzName="header-area">
            <Row>
                <Col md={2}><img src={Logo} alt="Logo" /></Col>
                <Col md={10}>
                {/* collapse */}
                    <div className="main-menu navbar-collapse clearfix" id="navbarSupportedContent">
                        <ul class="navigation clearfix">
                        <li class="current dropdown"><Link to="/about">About</Link>
                            {/* <ul>
                                <li><a href="index.html">Home Classic</a></li>
                                <li><a href="index-2.html">Home Conference</a></li>
                                <li><a href="index-3.html">Home Meetup</a></li>
                                <li><a href="index-4.html">Home Page Four</a></li>
                                <li><a href="index-5.html">Home Page Five</a></li>
                                <li class="dropdown"><a href="#">Header Styles</a>
                                    <ul>
                                        <li><a href="index.html">Header Style One</a></li>
                                        <li><a href="index-2.html">Header Style Two</a></li>
                                        <li><a href="index-3.html">Header Style Three</a></li>
                                        <li><a href="index-4.html">Home Page Four</a></li>
                                        <li><a href="index-5.html">Home Page Five</a></li>
                                    </ul>
                                <div class="dropdown-btn"><span class="fa fa-angle-down"></span></div></li>
                            </ul>
                        <div class="dropdown-btn"><span class="fa fa-angle-down"></span></div> */}
                        </li>
                        <li class="dropdown"><a href="about-us.html">About</a>
                            {/* <ul>
                                <li><a href="about-us.html">About Us</a></li>
                                <li><a href="pricing.html">Pricing</a></li>
                                <li><a href="faqs.html">FAQ's</a></li>
                                <li><a href="gallery.html">Gallery</a></li>
                                <li><a href="coming-soon.html">Coming Soon</a></li>
                            </ul>
                        <div class="dropdown-btn"><span class="fa fa-angle-down"></span></div> */}
                        </li>
                        <li class="dropdown"><a href="speakers.html">Speakers</a>
                            {/* <ul>
                                <li><a href="speakers.html">Speakers</a></li>
                                <li><a href="speakers-detail.html">Speakers Detail</a></li>
                            </ul>
                        <div class="dropdown-btn"><span class="fa fa-angle-down"></span></div> */}
                        </li>
                        <li class="dropdown"><a href="schedule.html">Schedule</a>
                            {/* <ul>
                                <li><a href="schedule.html">Schedule</a></li>
                                <li><a href="event-detail.html">Event Detail</a></li>
                                <li><a href="buy-ticket.html">Buy Ticket</a></li>
                            </ul>
                        <div class="dropdown-btn"><span class="fa fa-angle-down"></span></div> */}
                        </li>
                        <li class="dropdown"><a href="blog-sidebar.html">Blog</a>
                            {/* <ul>
                                <li><a href="blog-sidebar.html">Blog With Sidebar</a></li>
                                <li><a href="blog-grid.html">Blog Grid</a></li>
                                <li><a href="blog-single.html">Blog Single</a></li>
                                <li><a href="error-page.html">404 Error</a></li>
                            </ul>
                        <div class="dropdown-btn"><span class="fa fa-angle-down"></span></div> */}
                        </li>
                        <li><a href="contact.html">Contact</a></li>
                        </ul>
                    </div>
                </Col>
                </Row>
            </div>
        </Container>
        </div>
    );
}
export default HeaderArea;
