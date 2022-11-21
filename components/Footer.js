import React from 'react'


const Footer = () => {
    return (
        <>


            <footer id="footer">
                <div className="container">
                    <div className="row ">

                        <div className="wrap flex-container d-flex justify-content-center">

                            <div className="col-md-4 footer-logo text-center mb-3">
                                <img src="/main-logo.png" className="mb-3" />
                                <p>Bakery is a free HTML CSS Template by Templates Jungle specially crafted for Bakeries.</p>
                            </div>

                            <div className="col-md-5 mr-5 mb-3">
                                <div className="widget-newsletter mb-5">
                                    <h4 className="widget-title">Subscribe To Our Newletter</h4>
                                    <div className="newsletter-button d-flex">
                                        <input type="text" name="Subscribe" placeholder="Your Email Address" />
                                        <button className="btn-hvr-effects">Subscribe</button>
                                    </div>

                                </div>

                                <div className="working-schedule">
                                    <h4 className="widget-title">Our Work Time</h4>
                                    <div className="time-list d-flex">
                                        <ul className="list-unstyled mr-5">
                                            <li>Monday - Friday</li>
                                            <li>8:00am - 8:30 pm</li>
                                        </ul>
                                        <ul className="list-unstyled">
                                            <li>Saturday - Sunday</li>
                                            <li>10:00am - 16:00 pm</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-3">
                                <div className="quick-links">
                                    <h4 className="widget-title">Quick Links</h4>
                                    <div className="footer-menu">
                                        <ul className="list-unstyled">
                                            <li><a href="index.html">Home</a></li>
                                            <li><a href="#">About us</a></li>
                                            <li><a href="#">Gallery</a></li>
                                            <li><a href="#">Shop</a></li>
                                            <li><a href="blog.html">Blogs</a></li>
                                            <li><a href="contact.html">Contact us</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </footer>
           

        </>
    )
}

export default Footer;