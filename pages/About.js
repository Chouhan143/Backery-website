import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const About = () => {
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

.about_content{
  text-align: center;
    align-self: center;
    flex-wrap: nowrap;


}

`}
      </style>

      <div className="site-banner">
        <div className="banner-content">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="colored">
                  <h1>About Us</h1>
                  <div className="breadcum-items">
                    <Link href='/'> <a> Home / </a> </Link>
                    <span className="item_colored">About Us</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <section className='hero_about mt-5'>

        <div className='container '>
          <div className='row d-flex'>
          <div className="single-image col-md-6">
					<img src="/ceo.jpg" alt="ceo" className="singleImg"/>
				</div>
				<div className="col-md-6 about_content ">
					<h2 className="section-title text-center mb-3">Mr X- CEO</h2>
					<p>Mr X is a Friendly, Hardworker and Good Person. Consectetur adipisit slit, sed do eisusmod tempor incididiunt ut labore et dolare manag aliqua. Ut enim ad ut labore et.</p>
				</div>
          </div>
        </div>
      </section>



      <section className="our-team bg-sand padding-large mt-5" style={{background:"#f5f5f5",}}>
	<h2 className="section-title text-center my-5 mt-5">Our Team</h2>
	<div className="container">
		<div className="row">

				<div className="col-md-3">

					<div className="team-member text-center">
						
						<figure>
							<a href="#"><img src="/team.jpg" alt="post" className="member-image"/></a>
						</figure>

						<div className="member-details text-center">
							<h4>Mrs. Nocole Sara</h4>
							<div className="designation colored">CEO-Founder</div>
							<p>Jelly topping halvah caramels sweet cake gumni nears gumni coffee.</p>
							<div className="social-links color-primary ">
								<a href="#" className="icon icon-facebook pr-10"></a>
								<a href="#" className="icon icon-twitter pr-10"></a>
								<a href="#" className="icon icon-pinterest-p"></a>
							</div>
						</div>

					</div>

				</div>

				<div className="col-md-3 text-center">

					<div className="team-member text-center">
						<figure>
							<img src="/team1.jpg" alt="post" className="member-image"/>
						</figure>
						<div className="member-details text-center">
							<h4>Ms Sienna Jolie</h4>
							<div className="designation colored">General Manager</div>
							<p>Jelly topping halvah caramels sweet cake gumni nears gumni coffee.</p>
							<div className="social-links color-primary">
								<a href="#" className="icon icon-facebook pr-10"></a>
								<a href="#" className="icon icon-twitter pr-10"></a>
								<a href="#" className="icon icon-pinterest-p"></a>
							</div>
						</div>
					</div>

				</div>

				<div className="col-md-3 text-center">

					<div className="team-member text-center">
						<figure>
							<img src="/team2.jpg" alt="post" className="member-image"/>
						</figure>
						<div className="member-details text-center">
							<h4>Ms Jenny Blacksmith</h4>
							<div className="designation colored">Assistant Manager</div>
							<p>Jelly topping halvah caramels sweet cake gumni nears gumni coffee.</p>
							<div className="social-links color-primary">
								<a href="#" className="icon icon-facebook pr-10"></a>
								<a href="#" className="icon icon-twitter pr-10"></a>
								<a href="#" className="icon icon-pinterest-p"></a>
							</div>
						</div>
					</div>

				</div>

				<div className="col-md-3 text-center">

					<div className="team-member text-center">
						<figure>
							<img src="/team3.jpg" alt="post" className="member-image"/>
						</figure>
						<div className="member-details text-center">
							<h4>Mrs Lora Inn</h4>
							<div className="designation colored">Staff</div>
							<p>Jelly topping halvah caramels sweet cake gumni nears gumni coffee.</p>
							<div className="social-links color-primary">
								<a href="#" className="icon icon-facebook pr-10"></a>
								<a href="#" className="icon icon-twitter pr-10"></a>
								<a href="#" className="icon icon-pinterest-p"></a>
							</div>
						</div>
					</div>

				</div>

		</div>
	</div>
</section>








    </>
  )
}

export default About