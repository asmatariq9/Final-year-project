import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <>
      <div className="super_container">
	
	{/* <!-- Header --> */}

	<header className="header">

		{/* <!-- Top Bar --> */}

		<div className="top_bar">
			<div className="container">
				<div className="row">
					<div className="col d-flex flex-row">
						<div className="phone">+45 34</div>
						<div className="social">
							<ul className="social_list">
								<li className="social_list_item"><Link to="/"><i className="fa fa-pinterest" aria-hidden="true"></i></Link></li>
								<li className="social_list_item"><Link to="/"><i className="fa fa-facebook" aria-hidden="true"></i></Link></li>
								<li className="social_list_item"><Link to="/"><i className="fa fa-twitter" aria-hidden="true"></i></Link></li>
								<li className="social_list_item"><Link to="/"><i className="fa fa-dribbble" aria-hidden="true"></i></Link></li>
								<li className="social_list_item"><Link to="/"><i className="fa fa-behance" aria-hidden="true"></i></Link></li>
								<li className="social_list_item"><Link to="/"><i className="fa fa-linkedin" aria-hidden="true"></i></Link></li>
							</ul>
						</div>
						<div className="user_box ml-auto">
							<div className="user_box_login user_box_link"><Link to="/">login</Link></div>
							<div className="user_box_register user_box_link"><Link to="/">register</Link></div>
						</div>
					</div>
				</div>
			</div>		
		</div>

		{/* <!-- Main Navigation --> */}

		<nav className="main_nav">
			<div className="container">
				<div className="row">
					<div className="col main_nav_col d-flex flex-row align-items-center justify-content-start">
						<div className="logo_container">
							<div className="logo"><Link to="/"><img src="./images/logo.png" alt=""></img>travelix</Link></div>
						</div>
						<div className="main_nav_container ml-auto">
							<ul className="main_nav_list">
								<li className="main_nav_item"><Link to="/index">home</Link></li>
								<li className="main_nav_item"><Link to="/about">about us</Link></li>
								<li className="main_nav_item"><Link to="/offers">offers</Link></li>
								<li className="main_nav_item"><Link to="/blog">news</Link></li>
								<li className="main_nav_item"><Link to="/">contact</Link></li>
							</ul>
						</div>
						<div className="content_search ml-lg-0 ml-auto">
							<svg version="1.1" id="Layer_1" x="0px" y="0px" width="17px" height="17px" viewBox="0 0 512 512" enableBackground="new 0 0 512 512" xmlSpace="preserve">
								<g>
									<g>
										<g>
											<path className="mag_glass" fill="#FFFFFF" d="M78.438,216.78c0,57.906,22.55,112.343,63.493,153.287c40.945,40.944,95.383,63.494,153.287,63.494
											s112.344-22.55,153.287-63.494C489.451,329.123,512,274.686,512,216.78c0-57.904-22.549-112.342-63.494-153.286
											C407.563,22.549,353.124,0,295.219,0c-57.904,0-112.342,22.549-153.287,63.494C100.988,104.438,78.439,158.876,78.438,216.78z
											M119.804,216.78c0-96.725,78.69-175.416,175.415-175.416s175.418,78.691,175.418,175.416
											c0,96.725-78.691,175.416-175.416,175.416C198.495,392.195,119.804,313.505,119.804,216.78z"/>
										</g>
									</g>
									<g>
										<g>
											<path className="mag_glass" fill="#FFFFFF" d="M6.057,505.942c4.038,4.039,9.332,6.058,14.625,6.058s10.587-2.019,14.625-6.058L171.268,369.98
											c8.076-8.076,8.076-21.172,0-29.248c-8.076-8.078-21.172-8.078-29.249,0L6.057,476.693
											C-2.019,484.77-2.019,497.865,6.057,505.942z"/>
										</g>
									</g>
								</g>
							</svg>
						</div>

						<form id="search_form" className="search_form bez_1">
							<input type="search" className="search_content_input bez_1"></input>
						</form>
						
						<div className="hamburger">
							<i className="fa fa-bars trans_200"></i>
						</div>
					</div>
				</div>
			</div>	
		</nav>

	</header>

	<div className="menu trans_500">
		<div className="menu_content d-flex flex-column align-items-center justify-content-center text-center">
			<div className="menu_close_container"><div className="menu_close"></div></div>
			<div className="logo menu_logo"><Link to="/"><img src="./images/logo.png" alt=""></img></Link></div>
			<ul>
				<li className="menu_item"><Link to="/index">home</Link></li>
				<li className="menu_item"><Link to="/about">about us</Link></li>
				<li className="menu_item"><Link to="/offers">offers</Link></li>
				<li className="menu_item"><Link to="/blog">news</Link></li>
				<li className="menu_item"><Link to="/">contact</Link></li>
			</ul>
		</div>
	</div>

	{/* <!-- Home --> */}

	<div className="home">
		<div className="home_background parallax-window" data-parallax="scroll" data-image-src="./images/contact_background.jpg"></div>
		<div className="home_content">
			<div className="home_title">contact</div>
		</div>
	</div>

	{/* <!-- Contact --> */}

	<div className="contact_form_section">
		<div className="container">
			<div className="row">
				<div className="col">

					{/* <!-- Contact Form --> */}
					<div className="contact_form_container">
						<div className="contact_title text-center">get in touch</div>
						<form action="#" id="contact_form" className="contact_form text-center">
							<input type="text" id="contact_form_name" className="contact_form_name input_field" placeholder="Name" required="required" data-error="Name is required."></input>
							<input type="text" id="contact_form_email" className="contact_form_email input_field" placeholder="E-mail" required="required" data-error="Email is required."></input>
							<input type="text" id="contact_form_subject" className="contact_form_subject input_field" placeholder="Subject" required="required" data-error="Subject is required."></input>
							<textarea id="contact_form_message" className="text_field contact_form_message" name="message" rows="4" placeholder="Message" required="required" data-error="Please, write us a message."></textarea>
							<button type="submit" id="form_submit_button" className="form_submit_button button trans_200">send message<span></span><span></span><span></span></button>
						</form>
					</div>

				</div>
			</div>
		</div>
	</div>

	{/* <!-- About --> */}
	<div className="about">
		<div className="container">
			<div className="row">
				<div className="col-lg-5">
					
					{/* <!-- About - Image --> */}

					<div className="about_image">
						<img src="./images/man.png" alt=""></img>
					</div>

				</div>

				<div className="col-lg-4">
					
					{/* <!-- About - Content --> */}

					<div className="about_content">
						<div className="logo_container about_logo">
							<div className="logo"><Link to="/"><img src="./images/logo.png" alt=""></img>travelix</Link></div>
						</div>
						<p className="about_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis vu lputate eros, iaculis consequat nisl. Nunc et suscipit urna. Integer eleme ntum orci eu vehicula iaculis consequat nisl. Nunc et suscipit urna pretium.</p>
						<ul className="about_social_list">
							<li className="about_social_item"><Link to="/"><i className="fa fa-pinterest"></i></Link></li>
							<li className="about_social_item"><Link to="/"><i className="fa fa-facebook-f"></i></Link></li>
							<li className="about_social_item"><Link to="/"><i className="fa fa-twitter"></i></Link></li>
							<li className="about_social_item"><Link to="/"><i className="fa fa-dribbble"></i></Link></li>
							<li className="about_social_item"><Link to="/"><i className="fa fa-behance"></i></Link></li>
						</ul>
					</div>

				</div>

				<div className="col-lg-3">
					
					{/* <!-- About Info --> */}

					<div className="about_info">
						<ul className="contact_info_list">
							<li className="contact_info_item d-flex flex-row">
								<div><div className="contact_info_icon"><img src="./images/placeholder.svg" alt=""></img></div></div>
								<div className="contact_info_text">4127 Raoul Wallenber 45b-c Gibraltar</div>
							</li>
							<li className="contact_info_item d-flex flex-row">
								<div><div className="contact_info_icon"><img src="./images/phone-call.svg" alt=""></img></div></div>
								<div className="contact_info_text">2556-808-8613</div>
							</li>
							<li className="contact_info_item d-flex flex-row">
								<div><div className="contact_info_icon"><img src="./images/message.svg" alt=""></img></div></div>
								<div className="contact_info_text"><Link to="mailto:contactme@gmail.com?Subject=Hello" target="_top">contactme@gmail.com</Link></div>
							</li>
							<li className="contact_info_item d-flex flex-row">
								<div><div className="contact_info_icon"><img src="./images/planet-earth.svg" alt=""></img></div></div>
								<div className="contact_info_text"><Link to="https://colorlib.com">www.colorlib.com</Link></div>
							</li>
						</ul>
					</div>

				</div>

			</div>
		</div>
	</div>

	{/* <!-- Google Map --> */}
		
	<div className="travelix_map">
		<div id="google_map" className="google_map">
			<div className="map_container">
				<div id="map"></div>
			</div>
		</div>
	</div>

	{/* <!-- Footer --> */}

	<footer className="footer">
		<div className="container">
			<div className="row">

				{/* <!-- Footer Column --> */}
				<div className="col-lg-3 footer_column">
					<div className="footer_col">
						<div className="footer_content footer_about">
							<div className="logo_container footer_logo">
								<div className="logo"><Link to="/"><img src="./images/logo.png" alt=""></img>travelix</Link></div>
							</div>
							<p className="footer_about_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis vu lputate eros, iaculis consequat nisl. Nunc et suscipit urna. Integer eleme ntum orci eu vehicula pretium.</p>
							<ul className="footer_social_list">
								<li className="footer_social_item"><Link to="/"><i className="fa fa-pinterest"></i></Link></li>
								<li className="footer_social_item"><Link to="/"><i className="fa fa-facebook-f"></i></Link></li>
								<li className="footer_social_item"><Link to="/"><i className="fa fa-twitter"></i></Link></li>
								<li className="footer_social_item"><Link to="/"><i className="fa fa-dribbble"></i></Link></li>
								<li className="footer_social_item"><Link to="/"><i className="fa fa-behance"></i></Link></li>
							</ul>
						</div>
					</div>
				</div>

				{/* <!-- Footer Column --> */}
				<div className="col-lg-3 footer_column">
					<div className="footer_col">
						<div className="footer_title">blog posts</div>
						<div className="footer_content footer_blog">
							
							{/* <!-- Footer blog item --> */}
							<div className="footer_blog_item clearfix">
								<div className="footer_blog_image"><img src="./images/footer_blog_1.jpg" alt="https://unsplash.com/@avidenov"></img></div>
								<div className="footer_blog_content">
									<div className="footer_blog_title"><Link to="/blog">Travel with us this year</Link></div>
									<div className="footer_blog_date">Nov 29, 2017</div>
								</div>
							</div>
							
							{/* <!-- Footer blog item --> */}
							<div className="footer_blog_item clearfix">
								<div className="footer_blog_image"><img src="./images/footer_blog_2.jpg" alt="https://unsplash.com/@deannaritchie"></img></div>
								<div className="footer_blog_content">
									<div className="footer_blog_title"><Link to="/blog">New destinations for you</Link></div>
									<div className="footer_blog_date">Nov 29, 2017</div>
								</div>
							</div>

							{/* <!-- Footer blog item --> */}
							<div className="footer_blog_item clearfix">
								<div className="footer_blog_image"><img src="./images/footer_blog_3.jpg" alt="https://unsplash.com/@bergeryap87"></img></div>
								<div className="footer_blog_content">
									<div className="footer_blog_title"><Link to="/blog">Travel with us this year</Link></div>
									<div className="footer_blog_date">Nov 29, 2017</div>
								</div>
							</div>

						</div>
					</div>
				</div>

				{/* <!-- Footer Column --> */}
				<div className="col-lg-3 footer_column">
					<div className="footer_col">
						<div className="footer_title">tags</div>
						<div className="footer_content footer_tags">
							<ul className="tags_list clearfix">
								<li className="tag_item"><Link to="/">design</Link></li>
								<li className="tag_item"><Link to="/">fashion</Link></li>
								<li className="tag_item"><Link to="/">music</Link></li>
								<li className="tag_item"><Link to="/">video</Link></li>
								<li className="tag_item"><Link to="/">party</Link></li>
								<li className="tag_item"><Link to="/">photography</Link></li>
								<li className="tag_item"><Link to="/">adventure</Link></li>
								<li className="tag_item"><Link to="/">travel</Link></li>
							</ul>
						</div>
					</div>
				</div>

				{/* <!-- Footer Column --> */}
				<div className="col-lg-3 footer_column">
					<div className="footer_col">
						<div className="footer_title">contact info</div>
						<div className="footer_content footer_contact">
							<ul className="contact_info_list">
								<li className="contact_info_item d-flex flex-row">
									<div><div className="contact_info_icon"><img src="./images/placeholder.svg" alt=""></img></div></div>
									<div className="contact_info_text">4127 Raoul Wallenber 45b-c Gibraltar</div>
								</li>
								<li className="contact_info_item d-flex flex-row">
									<div><div className="contact_info_icon"><img src="./images/phone-call.svg" alt=""></img></div></div>
									<div className="contact_info_text">2556-808-8613</div>
								</li>
								<li className="contact_info_item d-flex flex-row">
									<div><div className="contact_info_icon"><img src="./images/message.svg" alt=""></img></div></div>
									<div className="contact_info_text"><Link to="mailto:contactme@gmail.com?Subject=Hello" target="_top">contactme@gmail.com</Link></div>
								</li>
								<li className="contact_info_item d-flex flex-row">
									<div><div className="contact_info_icon"><img src="./images/planet-earth.svg" alt=""></img></div></div>
									<div className="contact_info_text"><Link to="https://colorlib.com">www.colorlib.com</Link></div>
								</li>
							</ul>
						</div>
					</div>
				</div>

			</div>
		</div>
	</footer>

	{/* <!-- Copyright --> */}

	<div className="copyright">
		<div className="container">
			<div className="row">
				<div className="col-lg-3 order-lg-1 order-2  ">
					<div className="copyright_content d-flex flex-row align-items-center">
						<div>Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true"></i> by <Link to="https://colorlib.com" target="_blank">Colorlib</Link></div>
					</div>
				</div>
				<div className="col-lg-9 order-lg-2 order-1">
					<div className="footer_nav_container d-flex flex-row align-items-center justify-content-lg-end">
						<div className="footer_nav">
							<ul className="footer_nav_list">
								<li className="footer_nav_item"><Link to="/index">home</Link></li>
								<li className="footer_nav_item"><Link to="/about">about us</Link></li>
								<li className="footer_nav_item"><Link to="/offers">offers</Link></li>
								<li className="footer_nav_item"><Link to="/blog">news</Link></li>
								<li className="footer_nav_item"><Link to="/">contact</Link></li>
							</ul>
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