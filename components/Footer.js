import React from 'react'


const Footer = () => {
    return (
        <>
        <style jsx>
{`

footer-logo p{

    text-alig:justify;
}

.widget-newsletter{
text-align:center;

}


.working-schedule{
    display:grid;
    align-items:center;
    text-align:left;
    padding-left:20px;
}

.newsletter-button inpute{
    width:20px;
}

.btn-hvr-effects{
    background-color: #ce3c83;
    padding:15px;
    color:white;
    font-weight:bold;
    border-radius:0px 10px 10px 0px;
    border:1px solid transparent;

}
inpute{
    border: 1px solid gray !important;
}

.widget-title{
    color: #ce3c83;
}


 li a{
    list-style:none !important;
    color:black;
    text-decoration:none!important;
     
}

.quick-links{
   
    padding-left:50px;
}

.work_title{
    padding-left:20px;
    margin-left:20px;
}

`}




        </style>


            <footer id="footer">
                <div className="container pt-5">
                    <div className="row ">

                        <div className="wrap flex-container d-flex justify-content-center">

                            <div className="col-md-4 footer-logo text-center mb-3">
                                <img src="/main-logo.png" className="mb-3" />
                                <p>Bakery is a free HTML CSS Template by Templates Jungle specially crafted for Bakeries.</p>
                            </div>

                            <div className="col-md-5 mr-5 mb-3">
                                <div className="widget-newsletter mb-5">
                                    <h4 className="widget-title">Subscribe To Our Newletter</h4>
                                    <div className="newsletter-button d-flex justify-content-center">
                                        <input type="text" name="Subscribe" placeholder="Your Email Address"  className='inpute-lg'/>
                                        <button className="btn-hvr-effects">Subscribe</button>
                                    </div>

                                </div>

                                <div className="working-schedule">
                                    <h4 className="widget-title work_title">Our Work Time</h4>
                                    <div className="time-list d-flex justify-content-left gap-3" >
                                        <div className='times'>
                                        <ul className="list-unstyled mr-5">
                                            <li>Monday - Friday</li>
                                            <li>8:00am - 8:30 pm</li>
                                        </ul>
                                        </div>
                                        <div className='times2'>
                                        <ul className="list-unstyled">
                                            <li>Saturday - Sunday</li>
                                            <li>10:00am - 16:00 pm</li>
                                        </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-3">
                                <div className="quick-links ">
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