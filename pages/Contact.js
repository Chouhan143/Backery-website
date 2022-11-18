
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
  
  
  </>
  )
}

export default Contact