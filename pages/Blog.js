
import Link from 'next/link'
import React from 'react'

const Blog = () => {
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



`}
      </style>

      <div className="site-banner">
        <div className="banner-content">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="colored">
                  <h1>Blogs</h1>
                  <div className="breadcum-items">
                    <Link href='/' > <a> Home / </a> </Link>
                    <span className="item_colored">Blogs</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className='card_dataSection'>
        <div className='container'>
          <div className='row'>
          <div className='cards'>
            <div className='card'>
              <img src='' alt='' className='card_img' />
              <div className='card_info'>
                <span></span>
                <h3 className='card_title'>How to Make a Cake with Great Delicious Chocolate</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eisusmod tempor incidunt ut elit et.</p>
                <a href='' target="blank"><button> Read More</button></a>
              </div>

            </div>

          </div>
          </div>
        </div>





      </section>


    </>
  )
}

export default Blog