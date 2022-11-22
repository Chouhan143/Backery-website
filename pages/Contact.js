
import React from 'react'
import Link from 'next/link'

const Contact = () => {
  return (
    <>
      <style jsx>
        {`

.site-banner{
  background: url(/banner.jpg) no-repeat;
  height:567px;
}
.site-banner .banner-content {
  display: flex;
  width: 100%;
  align-items: center;
  height: inherit;
  text-align: center;
}
.colored{
  color:#ce3c83;
  
}
.item_colored{
  color:#ef81b6;
  font-weight:700;
}


.breadcum-items a{
  color:black !important;
  text-decoration:none !important;  
  font-weight:700;                                                
}
.breadcum-items a:hover{
  color:#ef81b6 !important;
}

.mainheading{
  color:black;
  font-size:2rem;
}


`}
      </style>

      <div className="site-banner">
        <div className="banner-content">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="colored">
                  <h1>Contact Us</h1>
                  <div className="breadcum-items">
                    <Link href='/' > <a> Home / </a> </Link>
                    <span className="item_colored">Contact US</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className='contact_section'>
        <div className='container'>
          <div className='row d-flex justify-content-center'>

            <div className='col-md-6'>
              <div className='row mx-5'>
                <h2 className='mainheading'>Get in Touch</h2>
                <div className='col-md-6'>
                  <h2>Phones</h2>
                  <div>
                  <span>+91-78698-39871</span>
                  </div>
                  <div>
                  <span>+91-78698-39871</span>
                  </div>
                </div>
                <div className='col-md-6'>
                  <h2>Emails</h2>
                  <div>
                  <span>sunilchouhan773@gmail.com</span>
                  </div>
                  <div>
                  <span>sunilchouhan773@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-6'>
              <h2 className='mainheading'>Send A Message</h2>
            </div>
          </div>
        </div>
      </section>


    </>
  )
}

export default Contact