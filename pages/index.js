import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Index.module.css'

import "@fortawesome/fontawesome-free/css/all.min.css";

const index = () => {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta name="description" content="Free Web tutorials" />
        <meta name="keywords" content="HTML, CSS, JavaScript" />
        <meta name="author" content="Sunil Chouhan" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Bakery</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/fontawesome.min.css" integrity="sha512-RvQxwf+3zJuNwl4e0sZjQeX7kUa3o82bDETpgVCH2RiwYSZVDdFJ7N/woNigN/ldyOOoKw8584jM4plQdt8bhA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      </Head>
      <style jsx>
        {`

        .carousel-item{
          position:relative;
          max-height: 800px;
        }
        .text-content{
          position: absolute;
          max-width: 620px;
          left: 20%;
          top: 30%;
          background: rgba(255,255,255,0.9);
          padding: 55px 50px;
          z-index: 1; 
        }
        h2{
          margin:20px 0px;
          font-weight: bold;
          font-family:Merriweather;
          text-align:center;
      }
      .section-title{
        color:#000!important;
      }

      .pix_btn{
      margin-top:0.5rem;
      padding: 0.7em 1em;
      display: inline-block;
      background: #ce3c83;
      border-radius: 10px;
      border-color: transparent;
    }
   
a{
  color: #fff!important;
  font-size: 1rem;
  text-transform: uppercase;
  text-decoration: none;
  font-weight: 600;
}

@media (max-width: 575px) {
 h2{
    font-size: 1.7em;
}
 .text-content{ 
  left: 0;
  margin: 0;
  position: inherit;
}

}

.nav-tabs .nav-link.active{
  border: none;
  margin: 0 10px;
   font-size: 1.3rem;
   color: black !important;
}

 .nav.nav-tabs .nav-link:focus, 
 .nav.nav-tabs .nav-link:hover,
 .nav.nav-tabs .nav-link.active {
   color: #ce3c83;
 }
   
 .text-content2{
      background-color: #F7F0F4!important;
    }
 
  

   
  
    .products-slider {
      width: 100%;
    }
    .product-item p{
    text-transform: uppercase;
    font-size: 12px;
    margin: 0;
    }
    .product-item .price{
    font-size: 20px;
    font-weight: bold;
    color: #ce3c83;
    }
    .product-item a.product-image {
      display: block;
      overflow: hidden;
    }
    .product-item a.product-image img {
      transition: 0.3s ease-out;
    }
    .product-item a.product-image:hover img {
      transform: scale(1.1);
    }
    
    .products-slider{
      display: flex !important;
      justify-content: center !important;
      flex-direction: row;
    }
    
   .product-item{
      display: block;
    }

    .slick-dots{
      text-align:center;
      margin: 30px 0 10px;
    }

  .slick-dots li{
    position: relative;
    display: inline-block;
    width: 10px;
    height: 10px;
    margin: 0 5px;
    padding: 0;
    cursor: pointer;
    border: 2px solid transparent;
    border-radius: 50%;
    background-color: #7e7676;
  }

  .text-hover a {
    position: relative;
}
 h5 a{
  font-weight: inherit;
  color: inherit !important;
  text-decoration: none;
}
.pt-4{
  padding-top: 1.5rem !important;
}

.special-items {
  background: url(/special-item.jpg) no-repeat;
}
.special-items .item-content {
  display: flex;
  height: 600px;
  align-items: center;
}
.color-white{
  text-align:justify;
}

.color-white h2{
  color:white !important;
}
.color-white p{
  color:white !important;
}
.btn-outline-light span{
  background: transparent !important ;
    border-color: #f4ebf2 !important ;
    color: #f4ebf2 !important;
    border-radius: inherit;
    padding: 10px 20px;

}

.btn-outline-light span:hover{
  color:black;
  background-color:white;
}

img.galleryImg {
  width: 100%;
  height: 432px;
  object-fit: cover;
}
a.magnific-popup{
  position: relative;
  text-align: center;
}
.magnific-popup .icon {
   position: absolute;
   top: 50%;
   left: 50%;
   opacity: 0;
   color: #fff;
   font-size: 30px;
   z-index: 3;
   transform: translate(-50%, -50%);
}
.magnific-popup:hover .icon {
   opacity: 1;
}

.overlay {
   position: absolute;
   top: 0;
   right: 0;
   bottom: 0;
   left: 0;
   background: rgb(0,0,0,0.4);
   overflow: hidden;
   width: 100%;
   height: 430px;
   transition: .3s ease;
   z-index: 2;
   margin-top: -202px;
   opacity: 0;
}


a.magnific-popup:hover .overlay {
   opacity: 1;
}




.carousel-indicators [data-bs-target] {

width:10px;
height:10px;
border-radius:50%;
margin-right:15px
padding: 20px 0px 50px;

}
.carousel-control-prev-icon,
.carousel-control-next-icon {
  display: none;
}

.section-Testimonial,
.animated{
  color:white;

}



.latest-blogs .post-content{
  position: relative;
}
.post-content:after {
  content: '';
  display: block;
  position: absolute;
  width:100%
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 3;
}

.content span{
  background-color:#ce3c83;
  color:white;
  padding:5px 10px;
  border-radius:4.5px;
}


.latest-blogs .content{
  position: absolute;
  bottom: 0;
  padding: 2em;
  z-index: 3;
}
.content h3>a{
  color: #fff;
  text-transform: none;
  background:black;
  background:rgba(0,0,0,0.8);
  border-radius:5px;
  padding:5px 10px; 
}

@media screen and (max-width: 575px){
.latest-blogs .content h3 {
    font-size: 1.5rem;
}
}





    `}
      </style>


      <section>
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="/banner1.jpg" className="d-block w-100" alt="banner1" />
              <div className="text-content col-md-8">
                <span>- FRESHLY BAKED EVERY MORNING</span>
                <h2 className="text-uppercase">delicious cupcakes for you</h2>
                <p>A gorgeous selection of our favorites for a client to send as a new year’s gift.A gorgeous selection of our favorites for a client to send as a new year’s gift</p>
                <div className="pix_btn">
                  <a href="#" className="btn-hvr-effects mt-3">Shop Now</a>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img src="/banner2.jpg " className="d-block w-100" alt="banner2" />
              <div className="text-content col-md-8">
                <span>- FRESHLY BAKED EVERY MORNING</span>
                <h2 className="text-uppercase">delicious cupcakes for you</h2>
                <p>A gorgeous selection of our favorites for a client to send as a new year’s gift.A gorgeous selection of our favorites for a client to send as a new year’s gift</p>
                <div className="pix_btn">
                  <a href="#" className="btn-hvr-effects mt-3">Shop Now</a>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img src="banner1.jpg" className="d-block w-100" alt="banner3" />
              <div className="text-content col-md-8">
                <span>- FRESHLY BAKED EVERY MORNING</span>
                <h2 className="text-uppercase">delicious cupcakes for you </h2>
                <p>A gorgeous selection of our favorites for a client to send as a new year’s gift.A gorgeous selection of our favorites for a client to send as a new year’s gift</p>
                <div className="pix_btn">
                  <a href="#" className="btn-hvr-effects mt-3">Shop Now</a>
                </div>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

      </section>

      <section className="about-us margin-medium">
        <div className="container">
          <div className="row">
            <div className="nav-tabs-wrap products-tab">

              <h2 className="section-title text-center">About Us</h2>

              <nav>
                <div className="nav nav-tabs padding-small d-flex justify-content-center text-hover" id="nav-tab" role="tablist">
                  <a className="nav-link active" id="nav-missions-tab" data-bs-toggle="tab" data-bs-target="#nav-missions" role="tab" aria-controls="nav-missions" aria-selected="true">Our Missions</a>
                  <a className="nav-link" id="nav-values-tab" data-bs-toggle="tab" data-bs-target="#nav-values" role="tab" aria-controls="nav-values" aria-selected="false">Our Values
                  </a>
                  <a className="nav-link" id="nav-goals-tab" data-bs-toggle="tab" data-bs-target="#nav-goals" role="tab" aria-controls="nav-goals" aria-selected="false">Our Goals</a>
                </div>
              </nav>

              <div className="tab-content" id="nav-tabContent">
                <div className="tab-pane fade show active" role="tabpanel" id="nav-missions" aria-labelledby="nav-missions-tab">
                  <div className="col-md-12">
                    <div className="row my-4">

                      <div className="col-md-6  parent_img">
                        {/* <div className="product-image" style={{background-image: url(/tabimg.jpg);background-size: cover;}}></div> */}
                        <Image src="/tabimg.jpg " width="540" height="455" />
                      </div>

                      <div className="text-content2 col-md-6 bg-Peach p-5">
                        <h3 className="mb-4">
                          Providing quality products for all be happy and peace
                        </h3>
                        <p>A gorgeous selection of our favorites for a client to send as a new year’s gift. A gorgeous selection of our favorites for a client to send as a new year’s gift.
                          A gorgeous selection of our favorites for a client to send as a new year’s gift.</p>
                        <p>A gorgeous selection of our favorites for a client to send as a new year’s gift. A gorgeous selection of our favorites for a client to send as a new year’s gift.</p>
                        <div className="pix_btn mt-4">
                          <a href="#" className="btn-hvr-effects">read more</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="tab-pane fade" role="tabpanel" id="nav-values" aria-labelledby="nav-values-tab">
                  <div className="col-md-12">
                    <div className="row my-4">

                      <div className="col-md-6">
                        <Image src="/tabimg1.jpg " width="540" height="455" />
                      </div>

                      <div className="text-content2 col-md-6 bg-Peach p-5">
                        <h3 className="mb-4">
                          This products for all be happy and peace
                        </h3>
                        <p>A gorgeous selection of our favorites for a client to send as a new year’s gift. A gorgeous selection of our favorites for a client to send as a new year’s gift. A gorgeous selection of our favorites for a client to send as a new year’s gift.</p>
                        <div className="pix_btn mt-4">
                          <a href="#" className="btn-hvr-effects">read more</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="tab-pane fade" role="tabpanel" id="nav-goals" aria-labelledby="nav-goals-tab">
                  <div className="col-md-12">
                    <div className="row my-4">

                      <div className="col-md-6">
                        <Image src="/tabimg.jpg " width="540" height="455" />
                      </div>

                      <div className="text-content2 col-md-6 bg-Peach p-5">
                        <h3 className="mb-4">
                          A gorgeous selection of our favorites for a client to send as a new year’s gift.
                        </h3>
                        <p>A gorgeous selection of our favorites for a client to send as a new year’s gift. A gorgeous selection of our favorites for a client to send as a new year’s gift. A gorgeous selection of our favorites for a client to send as a new year’s gift.</p>
                        <div className="pix_btn mt-4">
                          <a href="#" className="btn-hvr-effects">read more</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>

      </section>








      <section className="best-products margin-large">
        <div className="container">
          <h2 className="section-title text-center mb-4">Best Product</h2>
          <div className="row d-flex flex-md-row">
            <div className="d-flex gap-3 justify-content-center flex-md-row">
              <div className="product-item  col-md-3 pl-0">
                <a href="single-product.html" className="product-image"><img src="/cake-item1.jpg" /></a>
                <div className="text-comtent text-center text-hover">
                  <h5 className="pt-4"><a href="single-product.html">Black Forest Pastry</a></h5>
                  <p>Cake - Pastries</p>
                  <span className="price colored">$12</span>
                </div>
              </div>
              <div className="product-item  col-md-3 pl-0">
                <a href="single-product.html" className="product-image"><img src="/cake-item2.jpg" /></a>
                <div className="text-comtent text-center text-hover">
                  <h5 className="pt-4"><a href="single-product.html">Sprinkled Donuts</a></h5>
                  <p>Cake - Pastries</p>
                  <span className="price colored">$12</span>
                </div>
              </div>
              <div className="product-item  col-md-3 pl-0">
                <a href="single-product.html" className="product-image"><img src="/cake-item3.jpg" /></a>
                <div className="text-comtent text-center text-hover">
                  <h5 className="pt-4"><a href="single-product.html">Black Forest Cupcake</a></h5>
                  <p>Cake - Pastries</p>
                  <span className="price colored">$12</span>
                </div>
              </div>
              <div className="product-item  col-md-3 pl-0">
                <a href="single-product.html" className="product-image"><img src="/cake-item4.jpg" /></a>
                <div className="text-comtent text-center text-hover">
                  <h5 className="pt-4"><a href="single-product.html">Macarons with Berries</a></h5>
                  <p>Cake - Pastries</p>
                  <span className="price colored">$12</span>
                </div>
              </div>
              {/* <div className="product-item  col-md-3 pl-0">
                <a href="single-product.html" className="product-image"><img src="/cake-item1.jpg" /></a>
                <div className="text-comtent text-center text-hover">
                  <h5 className="pt-4"><a href="single-product.html">Macarons with Berries</a></h5>
                  <p>Cake - Pastries</p>
                  <span className="price colored">$12</span>
                </div>
              </div> */}

            </div>
            <ul className='slick-dots d-block' role="tablist ">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
      </section>



      <section className="special-items mb-5">
        <div className="item-content">
          <div className="container">
            {/* <img src='/special-item.jpg' alt='chocolate'/> */}
            <div className="row">
              <div className="col-md-6 color-white">
                <h2 className="section-title color-white mb-4">
                  Our Special Chocolate Mousse
                </h2>
                <p>All of our products are made from scratch using family recipes with the highest quality ingredients. We bake and sell fresh daily to ensure only the best products are sold to our customers.</p>

                <div className="pix_btn1 mt-4">
                  <a className="btn btn-outline-light">
                    <span>Shop Now</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>




      <section className="section-title gallery-wrap margin-medium">
        <div className="container">
          <h2> View Our Gallary </h2>
          <div className="row">
            <div className="d-flex  flex-wrap col-md-12">
              <figure className="col-md-4 mb-3 pl-0">
                <a className="magnific-popup" href="/blackforest.jpg">
                  <img src="/blackforest.jpg" alt="cake" className="galleryImg" />
                  <div className="overlay">
                    <i className="icon icon-search-plus"></i>
                  </div>
                </a>
              </figure>
              <figure className="col-md-4 mb-3 pl-0">
                <a className="magnific-popup" href="/macarons.jpg">
                  <img src="/macarons.jpg" alt="cake" className="galleryImg" />
                  <div className="overlay">
                    <i className="icon icon-search-plus"></i>
                  </div>
                </a>
              </figure>
              <figure className="col-md-4 mb-3 pl-0">
                <a className="magnific-popup" href="/blackforest.jpg">
                  <img src="/blackforest.jpg" alt="cake" className="galleryImg" />
                  <div className="overlay">
                    <i className="icon icon-search-plus"></i>
                  </div>
                </a>
              </figure>
              <figure className="col-md-4 mb-3 pl-0">
                <a className="magnific-popup" href="/cakeitem.jpg">
                  <img src="/blackforest.jpg" alt="cake" className="galleryImg" />
                  <div className="overlay">
                    <i className="icon icon-search-plus"></i>
                  </div>
                </a>
              </figure>
              <figure className="col-md-4 mb-3 pl-0">
                <a className="magnific-popup" href="/macarons.jpg">
                  <img src="/macarons.jpg" alt="cake" className="galleryImg" />
                  <div className="overlay">
                    <i className="icon icon-search-plus"></i>
                  </div>
                </a>
              </figure>
              <figure className="col-md-4 mb-3 pl-0">
                <a className="magnific-popup" href="/sprinkleddonuts.jpg">
                  <img src="/sprinkleddonuts.jpg" alt="cake" className="galleryImg" />
                  <div className="overlay">
                    <i className="icon icon-search-plus"></i>
                  </div>
                </a>
              </figure>
            </div>
            <div className="view_btn">
              <a href="#" className="btn-hvr-effects mt-3">View All</a>
            </div>
          </div>
        </div>

      </section>


      <section className="testimonials-wrap padding-medium">
        <div className="container">
          <div className="row">
            <div className="reviews-content col-md-12 light text-center">
              <h2 className="section-Testimonial">Testimonials</h2>

              <div id="carouselExampleIndicators" className="carousel slide testimonial-slider" data-bs-ride="carousel">
                <div className="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="testimonials-inner carousel-inner">
                  <div className='carousel-item active'>
                    <div className="rating padding-small">
                    <i class="fa-thin fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i> 
                   <i class="fa-solid fa-star"></i>
                   <i class="fa-solid fa-star"></i>
                    </div>
                    <p className="animated zoomIn">“Bakery is ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.”</p>
                    <div className="testimonial-author">
                      <img src="/default.png" alt="jane" />
                      <span className="name d-flex justify-content-center p-3 " style={{color:"white"}}>Jane Marie</span>
                    </div>
                  </div>


                  <div className="testimonials-inner carousel-item">
                    <div className="rating padding-small">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i> 
                   <i class="fa-solid fa-star"></i>
                   <i class="fa-solid fa-star"></i>
                    </div>
                    <p className="animated zoomIn">This is absolute best product adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.”</p>
                    <div className="testimonial-author">
                      <img src="/default.png" alt="simran" />
                      <span className="name d-flex justify-content-center p-3 " style={{color:"white"}}>Simran</span>
                    </div>
                  </div>

                  <div className="testimonials-inner carousel-item">
                    <div className="rating padding-small">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i> 
                   <i class="fa-solid fa-star"></i>
                   <i class="fa-solid fa-star"></i>
                    </div>
                    <p className="animated zoomIn">“I really love this product sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.”</p>
                    <div className="testimonial-author">
                      <img src="/default.png" alt="jane" />
                      <span className="name d-flex justify-content-center p-3 " style={{color:"white"}} >John Marie</span>
                    </div>
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>

              </div>


            </div>
          </div>
        </div>
      </section>

      <section className="latest-blogs margin-medium">
	<h2 className="section-title text-center mb-5">Latest Blogs</h2>
	<div className="container">
		<div className="row  gx-5">
			<div className="col-md-6 left-post pl-0 mb-3">
				<div className="post-content">
				<a href="single-post.html"><img src="/postImg1.jpg" alt="cake" className="largeImg"/></a>
        <div className='overlay_div'></div>
				<div className="content light">
					<span className="highlight text-weight-bold">March 10, 2020</span>
					<h3 className="mt-3"><a href="single-post.html">How to Make a Cake with Great Delicious Chocolate</a></h3>
				</div>
				</div>
			</div>

			<div className="col-md-6 right-post pl-0">
				<div className="post-content mb-3">
					<a href="single-post.html"><img src="/postLong.jpg" alt="cake" className="horizontalImg"/></a>
					<div className="content light">
						<span className="highlight">March 10, 2020</span>
						<h3 className="mt-3"><a href="single-post.html">How to Make a Cake with Great Delicious Chocolate</a></h3>
					</div>
				</div>

				<div className="post-content">
					<a href="single-post.html"><img src="/postLong.jpg" alt="cake" className="horizontalImg"/></a>
					<div className="content light">
						<span className="highlight">March 10, 2020</span>
						<h3 className="mt-3"><a href="single-post.html">How to Make a Cake with Great Delicious Chocolate</a></h3>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div className="pix_btn text-center">
		<a href="#" className="btn-hvr-effects mt-5">read more</a>
	</div>
</section>






    </>
  )
}

export default index