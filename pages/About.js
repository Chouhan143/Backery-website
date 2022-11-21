import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const About = () => {





	return (
		<>

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
							<img src="/ceo.jpg" alt="ceo" className="singleImg" />
						</div>
						<div className="col-md-6 about_content ">
							<h2 className="section-title text-center mb-3">Mr X- CEO</h2>
							<p>Mr X is a Friendly, Hardworker and Good Person. Consectetur adipisit slit, sed do eisusmod tempor incididiunt ut labore et dolare manag aliqua. Ut enim ad ut labore et.</p>
						</div>
					</div>
				</div>
			</section>
			{/* ---------------------hero section end --------------  */}

			<section className="our-team bg-sand padding-large mt-5" style={{ background: "#f5f5f5" }}>
				<h2 className="section-title text-center ">Our Team</h2>
				<div className="container teamcontainer">
					<div className="row">
						<div className="col-md-3">
							<div className="team-member text-center">
								<figure>
									<a href="#"><img src="/team.jpg" alt="post" className="member-image" /></a>
								</figure>
								<div className="member-details text-center">
									<h4>Mrs. Nocole Sara</h4>
									<div className="designation colored">CEO-Founder</div>
									<p>Jelly topping halvah caramels sweet cake gumni nears gumni coffee.</p>
									<div className="social-links color-primary ">
										<a href="#"><i class="fa-brands fa-facebook-f pr-5"></i></a>
										<a href="#" ><i class="fa-brands fa-twitter pr-5" ></i></a>
										<a href="#"><i class="fa-brands fa-pinterest"></i></a>
									</div>
								</div>
							</div>
						</div>

						<div className="col-md-3 text-center">

							<div className="team-member text-center">
								<figure>
									<img src="/team1.jpg" alt="post" className="member-image" />
								</figure>
								<div className="member-details text-center">
									<h4>Ms Sienna Jolie</h4>
									<div className="designation colored">General Manager</div>
									<p>Jelly topping halvah caramels sweet cake gumni nears gumni coffee.</p>
									<div className="social-links color-primary">
										<a href="#"><i class="fa-brands fa-facebook-f pr-5"></i></a>
										<a href="#" ><i class="fa-brands fa-twitter pr-5" ></i></a>
										<a href="#"><i class="fa-brands fa-pinterest"></i></a>
									</div>
								</div>
							</div>

						</div>

						<div className="col-md-3 text-center">

							<div className="team-member text-center">
								<figure>
									<img src="/team2.jpg" alt="post" className="member-image" />
								</figure>
								<div className="member-details text-center">
									<h4>Ms Jenny Blacksmith</h4>
									<div className="designation colored">Assistant Manager</div>
									<p>Jelly topping halvah caramels sweet cake gumni nears gumni coffee.</p>
									<div className="social-links color-primary">
										<a href="#"><i class="fa-brands fa-facebook-f pr-5"></i></a>
										<a href="#" ><i class="fa-brands fa-twitter pr-5" ></i></a>
										<a href="#"><i class="fa-brands fa-pinterest"></i></a>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-3 text-center">

							<div className="team-member text-center">
								<figure>
									<img src="/team3.jpg" alt="post" className="member-image" />
								</figure>
								<div className="member-details text-center">
									<h4>Mrs Lora Inn</h4>
									<div className="designation colored">Staff</div>
									<p>Jelly topping halvah caramels sweet cake gumni nears gumni coffee.</p>
									<div className="social-links color-primary">
										<a href="#"><i class="fa-brands fa-facebook-f pr-5"></i></a>
										<a href="#" ><i class="fa-brands fa-twitter pr-5" ></i></a>
										<a href="#"><i class="fa-brands fa-pinterest"></i></a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>



			<section className="our-target">
				<h2 className="section-title text-center ">Our Target</h2>
				<div className="container targetcontainer">
					<div className="row">
						<figure>
							<img src='flower-bg.jpg' className='target_img w-100 h-auto pt-5' />
						</figure>
						<div className='target_content'>
							<a><h3 className='target_heading'>Providing Quality Products For All to be happy and peace</h3></a>
							<p className='pt-5 target_para'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste.</p>
						
							<a><h3 className='target_heading border_style'>Providing Quality Products For All to be happy and peace</h3></a>
							<a><h3 className='target_heading pb-5'>Providing Quality Products For All to be happy and peace</h3></a>
						
						</div>

					</div>
				</div>
			</section>

			<section className="our-achivement bg-sand padding-large pt-5"  style={{ background: "#f5f5f5" }}>
	<div className="container">
			<h2 className="section-title text-center mb-5">Our Best Moments</h2>

		<div className="row">

			<div className="achivement-block text-center col-md-4">
				<img src="/badge.png" alt="badge"/>
				<div className="mt-3">
					<h3>Bakery of the Month</h3>
					<span className="date">2018 - 2020</span>
					<p>Bakery is a free HTML CSS Template by Templates Jungle specially crafted for Bakeries.</p>
				</div>
			</div>
			<div className="achivement-block text-center col-md-4">
				<img src="/badge1.png" alt="badge"/>
				<div className="mt-3">
					<h3>Bakery of the Month</h3>
					<span className="date">2018 - 2020</span>
					<p>Bakery is a free HTML CSS Template by Templates Jungle specially crafted for Bakeries.</p>
				</div>
			</div>
			<div className="achivement-block text-center col-md-4">
				<img src="/badge2.png" alt="badge"/>
				<div className="mt-3">
					<h3>Bakery of the Month</h3>
					<span className="date">2018 - 2020</span>
					<p>Bakery is a free HTML CSS Template by Templates Jungle specially crafted for Bakeries.</p>
				</div>
			</div>

		</div>
	</div>
</section>


		</>
	)
}

export default About