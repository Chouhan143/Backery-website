import React from 'react'

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
							<span className="item"><a href="index.html">Home /</a></span>
							<span className="item colored">About Us</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
  
  
  </>
  )
}

export default About