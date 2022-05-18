import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

export const Footer = () => {
  return (
    <footer>
		<div className="container-fluid mt-5">
			<div className="container">
				<div className="row">
					<div className="col-lg-7 col-md-7 col-sm-12 col-12">
						<div className="footer-pt-1" data-aos="fade-up" data-aos-duration="1500">
							<h5><b>About Tech Blogs</b></h5>
							<p>We empower people with web development literacy, so they can read beginner friendly blogs about web development technologies, ask better questions and make better sense of the world. This passion powers our work and our community service.</p>
							<h5>Thank you for your support! &#10084;&#65039;</h5>
						</div>
					</div>
					<div className="col-lg-5 col-md-5 col-sm-12 col-12">
						<div className="footer-pt-2" data-aos="fade-up" data-aos-duration="1500">
							<div className="site-pages">
								<h5><b>Site pages</b></h5>
								<ul className='ps-0'>
									<li><Link to="/about">About us</Link></li>
									<li><Link to="/contact">Contact us</Link></li>
									<li><Link to="#">Privacy Policy</Link></li>
									<li><Link to="#">Sitemap</Link></li>
								</ul>
							</div>
							<div className="follow">
								<h5><b>Follow us on :</b></h5>
								<i className="fab fa-facebook-square"></i>
								<i className="fab fa-instagram"></i>
								<i className="fab fa-twitter"></i>
								<i className="fab fa-pinterest"></i>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="footer-bottom">
				<p>Copyright &copy; 2022 | Tech blogs</p>
			</div>
		</div>
	</footer>
  )
}
