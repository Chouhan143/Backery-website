
import Link from 'next/link'
import React from 'react'
import Blogcart from '../components/Blogcart';
import Sdata from '../components/Sdata';

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

.cart_section{
  border-bottom:1px solid #999592;
  padding-bottom:60px;
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
{/* cart section start here */}
      <section className='cart_section'>
        <div className='container'>
          <div className='row my-5'>
            <div className='col-md-4'>
              <Blogcart image={Sdata[0].image}
                title={Sdata[0].title}
                para={Sdata[0].para}
                link={Sdata[0].link} />
            </div>

            <div className='col-md-4'>
              <Blogcart image={Sdata[1].image}
                title={Sdata[1].title}
                para={Sdata[1].para}
                link={Sdata[1].link} />
            </div>

            <div className='col-md-4'>
              <Blogcart image={Sdata[2].image}
                title={Sdata[2].title}
                para={Sdata[2].para}
                link={Sdata[2].link} />
            </div>
            </div>
            <div className='row my-4 gy-2'>
            <div className='col-md-4' >
              <Blogcart image={Sdata[3].image}
                title={Sdata[3].title}
                para={Sdata[3].para}
                link={Sdata[3].link} />
            </div>

            <div className='col-md-4'>
              <Blogcart image={Sdata[4].image}
                title={Sdata[4].title}
                para={Sdata[4].para}
                link={Sdata[4].link} />
            </div>


            <div className='col-md-4'>
              <Blogcart image={Sdata[5].image}
                title={Sdata[5].title}
                para={Sdata[5].para}
                link={Sdata[5].link} />
            </div>

          </div>
        </div>
      </section>
{/* cart section end */}



    </>
  )
}

export default Blog