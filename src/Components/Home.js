import React from 'react';
//header
import logo from '../images/logo.png';
//home
import homeSlider from '../images/home_slider.jpg';
//search bar
import suitcase from '../images/suitcase.png';
import bus from '../images/bus.png';
import departure from '../images/departure.png';
import island from '../images/island.png';
import cruise from '../images/cruise.png';
import diving from '../images/diving.png';
//intro
import intro1 from '../images/intro_1.jpg';
import intro2 from '../images/intro_2.jpg';
import intro3 from '../images/intro_3.jpg';
import cta from '../images/cta.jpg';
//offers
import offer1 from '../images/offer_1.jpg';
import offer2 from '../images/offer_2.jpg';
import offer3 from '../images/offer_3.jpg';
import offer4 from '../images/offer_4.jpg';
import post from '../images/post.png';
import compass from '../images/compass.png';
import bicycle from '../images/bicycle.png';
import sailboat from '../images/sailboat.png';
//trending
import trend1 from '../images/trend_1.png';
import trend2 from '../images/trend_2.png';
import trend3 from '../images/trend_3.png';
import trend4 from '../images/trend_4.png';
import trend5 from '../images/trend_5.png';
import trend6 from '../images/trend_6.png';
import trend7 from '../images/trend_7.png';
import trend8 from '../images/trend_8.png';
//contact
import contact from '../images/contact.png';
//footer
import footerB1 from '../images/footer_blog_1.jpg';
import footerB2 from '../images/footer_blog_2.jpg';
import footerB3 from '../images/footer_blog_3.jpg';
import placeholder from '../images/placeholder.svg';
import phoneCall from '../images/phone-call.svg';
import message from '../images/message.svg';
import planetEarth from '../images/planet-earth.svg';

import { Link } from 'react-router-dom';

const Home = () => {
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
						<div className="phone">+92 301 0000000</div>
						<div className="social">
							<ul className="social_list">
								<li className="social_list_item"><Link to="/"><i className="fa fa-pinterest" aria-hidden="true"></i></Link></li>
								<li className="social_list_item"><Link to="/"><i className="fa fa-facebook" aria-hidden="true"></i></Link></li>
								<li className="social_list_item"><Link to="/"><i className="fa fa-twitter" aria-hidden="true"></i></Link></li>
								<li className="social_list_item"><Link to="/"><i className="fa fa-dribbble" aria-hidden="true"></i></Link></li>
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
							<div className="logo"><Link to="/"><img src={logo} alt=""></img>Travel Marketplace</Link></div>
						</div>
						<div className="main_nav_container ml-auto">
							<ul className="main_nav_list">
								<li className="main_nav_item"><Link to="/">home</Link></li>
								<li className="main_nav_item"><Link to="/about">about us</Link></li>
								<li className="main_nav_item"><Link to="/offers">offers</Link></li>
								<li className="main_nav_item"><Link to="/blog">news</Link></li>
								<li className="main_nav_item"><Link to="/contact">contact</Link></li>
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
			<div className="logo menu_logo"><Link to="/"><img src={logo} alt=""></img></Link></div>
			<ul>
                <li className="main_nav_item"><Link to="/">home</Link></li>
                <li className="main_nav_item"><Link to="/about">about us</Link></li>
                <li className="main_nav_item"><Link to="/offers">offers</Link></li>
                <li className="main_nav_item"><Link to="/blog">news</Link></li>
                <li className="main_nav_item"><Link to="/contact">contact</Link></li>
			</ul>
		</div>
	</div>

	{/* <!-- Home --> */}

	<div className="home">
		
		{/* <!-- Home Slider --> */}

		<div className="home_slider_container">
			
			<div className="owl-carousel owl-theme home_slider">

				{/* <!-- Slider Item --> */}
				<div className="owl-item home_slider_item">
					<div className="home_slider_background" style={{ backgroundImage: `url(${homeSlider})` }}></div>

					<div className="home_slider_content text-center">
						<div className="home_slider_content_inner" data-animation-in="flipInX" data-animation-out="animate-out fadeOut">
							<h1>discover</h1>
							<h1>the world</h1>
							<div className="button home_slider_button"><div className="button_bcg"></div><Link to="/">explore now<span></span><span></span><span></span></Link></div>
						</div>
					</div>
				</div>

				{/* <!-- Slider Item --> */}
				<div className="owl-item home_slider_item">
					<div className="home_slider_background" style={{ backgroundImage: `url(${homeSlider})` }}></div>

					<div className="home_slider_content text-center">
						<div className="home_slider_content_inner" data-animation-in="flipInX" data-animation-out="animate-out fadeOut">
							<h1>discover</h1>
							<h1>the world</h1>
							<div className="button home_slider_button"><div className="button_bcg"></div><Link to="/">explore now<span></span><span></span><span></span></Link></div>
						</div>
					</div>
				</div>

				{/* <!-- Slider Item --> */}
				<div className="owl-item home_slider_item">
					<div className="home_slider_background" style={{ backgroundImage: `url(${homeSlider})` }}></div>

					<div className="home_slider_content text-center">
						<div className="home_slider_content_inner" data-animation-in="flipInX" data-animation-out="animate-out fadeOut">
							<h1>discover</h1>
							<h1>the world</h1>
							<div className="button home_slider_button"><div className="button_bcg"></div><Link to="/">explore now<span></span><span></span><span></span></Link></div>
						</div>
					</div>
				</div>

			</div>
			
			{/* <!-- Home Slider Nav - Prev --> */}
			<div className="home_slider_nav home_slider_prev">
				<svg version="1.1" id="Layer_2" x="0px" y="0px" width="28px" height="33px" viewBox="0 0 28 33" enableBackground="new 0 0 28 33" xmlSpace="preserve">
					<defs>
						<linearGradient id='home_grad_prev'>
							<stop offset='0%' stop-color='#fa9e1b'/>
							<stop offset='100%' stop-color='#8d4fff'/>
						</linearGradient>
					</defs>
					<path className="nav_path" fill="#F3F6F9" d="M19,0H9C4.029,0,0,4.029,0,9v15c0,4.971,4.029,9,9,9h10c4.97,0,9-4.029,9-9V9C28,4.029,23.97,0,19,0z
					M26,23.091C26,27.459,22.545,31,18.285,31H9.714C5.454,31,2,27.459,2,23.091V9.909C2,5.541,5.454,2,9.714,2h8.571
					C22.545,2,26,5.541,26,9.909V23.091z"/>
					<polygon className="nav_arrow" fill="#F3F6F9" points="15.044,22.222 16.377,20.888 12.374,16.885 16.377,12.882 15.044,11.55 9.708,16.885 11.04,18.219 
					11.042,18.219 "/>
				</svg>
			</div>
			
			{/* <!-- Home Slider Nav - Next --> */}
			<div className="home_slider_nav home_slider_next">
				<svg version="1.1" id="Layer_3" x="0px" y="0px" width="28px" height="33px" viewBox="0 0 28 33" enableBackground="new 0 0 28 33" xmlSpace="preserve">
					<defs>
						<linearGradient id='home_grad_next'>
							<stop offset='0%' stop-color='#fa9e1b'/>
							<stop offset='100%' stop-color='#8d4fff'/>
						</linearGradient>
					</defs>
				<path className="nav_path" fill="#F3F6F9" d="M19,0H9C4.029,0,0,4.029,0,9v15c0,4.971,4.029,9,9,9h10c4.97,0,9-4.029,9-9V9C28,4.029,23.97,0,19,0z
				M26,23.091C26,27.459,22.545,31,18.285,31H9.714C5.454,31,2,27.459,2,23.091V9.909C2,5.541,5.454,2,9.714,2h8.571
				C22.545,2,26,5.541,26,9.909V23.091z"/>
				<polygon className="nav_arrow" fill="#F3F6F9" points="13.044,11.551 11.71,12.885 15.714,16.888 11.71,20.891 13.044,22.224 18.379,16.888 17.048,15.554 
				17.046,15.554 "/>
				</svg>
			</div>

			{/* <!-- Home Slider Dots --> */}

			<div className="home_slider_dots">
				<ul id="home_slider_custom_dots" className="home_slider_custom_dots">
					<li className="home_slider_custom_dot active"><div></div>01.</li>
					<li className="home_slider_custom_dot"><div></div>02.</li>
					<li className="home_slider_custom_dot"><div></div>03.</li>
				</ul>
			</div>
			
		</div>

	</div>

	{/* <!-- Search --> */}

	<div className="search">
		

		{/* <!-- Search Contents --> */}
		
		<div className="container fill_height">
			<div className="row fill_height">
				<div className="col fill_height">

					{/* <!-- Search Tabs --> */}

					<div className="search_tabs_container">
						<div className="search_tabs d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-lg-between justify-content-start">
							<div className="search_tab active d-flex flex-row align-items-center justify-content-lg-center justify-content-start"><img src={suitcase} alt=""></img><span>hotels</span></div>
							<div className="search_tab d-flex flex-row align-items-center justify-content-lg-center justify-content-start"><img src={bus} alt=""></img>car rentals</div>
							<div className="search_tab d-flex flex-row align-items-center justify-content-lg-center justify-content-start"><img src={departure} alt=""></img>flights</div>
							<div className="search_tab d-flex flex-row align-items-center justify-content-lg-center justify-content-start"><img src={island} alt=""></img>trips</div>
							<div className="search_tab d-flex flex-row align-items-center justify-content-lg-center justify-content-start"><img src={cruise} alt=""></img>cruises</div>
							<div className="search_tab d-flex flex-row align-items-center justify-content-lg-center justify-content-start"><img src={diving} alt=""></img>activities</div>
						</div>		
					</div>

					{/* <!-- Search Panel --> */}

					<div className="search_panel active">
						<form action="#" id="search_form_1" className="search_panel_content d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-lg-between justify-content-start">
							<div className="search_item">
								<div>destination</div>
								<input type="text" className="destination search_input" required="required"></input>
							</div>
							<div className="search_item">
								<div>check in</div>
								<input type="text" className="check_in search_input" placeholder="YYYY-MM-DD"></input>
							</div>
							<div className="search_item">
								<div>check out</div>
								<input type="text" className="check_out search_input" placeholder="YYYY-MM-DD"></input>
							</div>
							<div className="search_item">
								<div>adults</div>
								<select name="adults" id="adults_1" className="dropdown_item_select search_input">
									<option>01</option>
									<option>02</option>
									<option>03</option>
								</select>
							</div>
							<div className="search_item">
								<div>children</div>
								<select name="children" id="children_1" className="dropdown_item_select search_input">
									<option>0</option>
									<option>02</option>
									<option>03</option>
								</select>
							</div>
							<button className="button search_button">search<span></span><span></span><span></span></button>
						</form>
					</div>

					{/* <!-- Search Panel --> */}

					<div className="search_panel">
						<form action="#" id="search_form_2" className="search_panel_content d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-lg-between justify-content-start">
							<div className="search_item">
								<div>destination</div>
								<input type="text" className="destination search_input" required="required"></input>
							</div>
							<div className="search_item">
								<div>check in</div>
								<input type="text" className="check_in search_input" placeholder="YYYY-MM-DD"></input>
							</div>
							<div className="search_item">
								<div>check out</div>
								<input type="text" className="check_out search_input" placeholder="YYYY-MM-DD"></input>
							</div>
							<div className="search_item">
								<div>adults</div>
								<select name="adults" id="adults_2" className="dropdown_item_select search_input">
									<option>01</option>
									<option>02</option>
									<option>03</option>
								</select>
							</div>
							<div className="search_item">
								<div>children</div>
								<select name="children" id="children_2" className="dropdown_item_select search_input">
									<option>0</option>
									<option>02</option>
									<option>03</option>
								</select>
							</div>
							<button className="button search_button">search<span></span><span></span><span></span></button>
						</form>
					</div>

					{/* <!-- Search Panel --> */}

					<div className="search_panel">
						<form action="#" id="search_form_3" className="search_panel_content d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-lg-between justify-content-start">
							<div className="search_item">
								<div>destination</div>
								<input type="text" className="destination search_input" required="required"></input>
							</div>
							<div className="search_item">
								<div>check in</div>
								<input type="text" className="check_in search_input" placeholder="YYYY-MM-DD"></input>
							</div>
							<div className="search_item">
								<div>check out</div>
								<input type="text" className="check_out search_input" placeholder="YYYY-MM-DD"></input>
							</div>
							<div className="search_item">
								<div>adults</div>
								<select name="adults" id="adults_3" className="dropdown_item_select search_input">
									<option>01</option>
									<option>02</option>
									<option>03</option>
								</select>
							</div>
							<div className="search_item">
								<div>children</div>
								<select name="children" id="children_3" className="dropdown_item_select search_input">
									<option>0</option>
									<option>02</option>
									<option>03</option>
								</select>
							</div>
							<button className="button search_button">search<span></span><span></span><span></span></button>
						</form>
					</div>

					{/* <!-- Search Panel --> */}

					<div className="search_panel">
						<form action="#" id="search_form_4" className="search_panel_content d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-lg-between justify-content-start">
							<div className="search_item">
								<div>destination</div>
								<input type="text" className="destination search_input" required="required"></input>
							</div>
							<div className="search_item">
								<div>check in</div>
								<input type="text" className="check_in search_input" placeholder="YYYY-MM-DD"></input>
							</div>
							<div className="search_item">
								<div>check out</div>
								<input type="text" className="check_out search_input" placeholder="YYYY-MM-DD"></input>
							</div>
							<div className="search_item">
								<div>adults</div>
								<select name="adults" id="adults_4" className="dropdown_item_select search_input">
									<option>01</option>
									<option>02</option>
									<option>03</option>
								</select>
							</div>
							<div className="search_item">
								<div>children</div>
								<select name="children" id="children_4" className="dropdown_item_select search_input">
									<option>0</option>
									<option>02</option>
									<option>03</option>
								</select>
							</div>
							<button className="button search_button">search<span></span><span></span><span></span></button>
						</form>
					</div>

					{/* <!-- Search Panel --> */}

					<div className="search_panel">
						<form action="#" id="search_form_5" className="search_panel_content d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-lg-between justify-content-start">
							<div className="search_item">
								<div>destination</div>
								<input type="text" className="destination search_input" required="required"></input>
							</div>
							<div className="search_item">
								<div>check in</div>
								<input type="text" className="check_in search_input" placeholder="YYYY-MM-DD"></input>
							</div>
							<div className="search_item">
								<div>check out</div>
								<input type="text" className="check_out search_input" placeholder="YYYY-MM-DD"></input>
							</div>
							<div className="search_item">
								<div>adults</div>
								<select name="adults" id="adults_5" className="dropdown_item_select search_input">
									<option>01</option>
									<option>02</option>
									<option>03</option>
								</select>
							</div>
							<div className="search_item">
								<div>children</div>
								<select name="children" id="children_5" className="dropdown_item_select search_input">
									<option>0</option>
									<option>02</option>
									<option>03</option>
								</select>
							</div>
							<button className="button search_button">search<span></span><span></span><span></span></button>
						</form>
					</div>

					{/* <!-- Search Panel --> */}

					<div className="search_panel">
						<form action="#" id="search_form_6" className="search_panel_content d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-lg-between justify-content-start">
							<div className="search_item">
								<div>destination</div>
								<input type="text" className="destination search_input" required="required"></input>
							</div>
							<div className="search_item">
								<div>check in</div>
								<input type="text" className="check_in search_input" placeholder="YYYY-MM-DD"></input>
							</div>
							<div className="search_item">
								<div>check out</div>
								<input type="text" className="check_out search_input" placeholder="YYYY-MM-DD"></input>
							</div>
							<div className="search_item">
								<div>adults</div>
								<select name="adults" id="adults_6" className="dropdown_item_select search_input">
									<option>01</option>
									<option>02</option>
									<option>03</option>
								</select>
							</div>
							<div className="search_item">
								<div>children</div>
								<select name="children" id="children_6" className="dropdown_item_select search_input">
									<option>0</option>
									<option>02</option>
									<option>03</option>
								</select>
							</div>
							<button className="button search_button">search<span></span><span></span><span></span></button>
						</form>
					</div>
				</div>
			</div>
		</div>		
	</div>

	{/* <!-- Intro --> */}
	
	<div className="intro">
		<div className="container">
			<div className="row">
				<div className="col">
					<h2 className="intro_title text-center">We have the best tours</h2>
				</div>
			</div>
			<div className="row">
				<div className="col-lg-10 offset-lg-1">
					<div className="intro_text text-center">
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu convallis tortor. Suspendisse potenti. In faucibus massa arcu, vitae cursus mi hendrerit nec. </p>
					</div>
				</div>
			</div>
			<div className="row intro_items">

				{/* <!-- Intro Item --> */}

				<div className="col-lg-4 intro_col">
					<div className="intro_item">
						<div className="intro_item_overlay"></div>
						<div className="intro_item_background" style={{ backgroundImage: `url(${intro1})` }}></div>
						<div className="intro_item_content d-flex flex-column align-items-center justify-content-center">
							<div className="intro_date">May 25th - June 01st</div>
							<div className="button intro_button"><div className="button_bcg"></div><Link to="/">see more<span></span><span></span><span></span></Link></div>
							<div className="intro_center text-center">
								<h1>Mauritius</h1>
								<div className="intro_price">From $1450</div>
								<div className="rating rating_4">
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* <!-- Intro Item --> */}

				<div className="col-lg-4 intro_col">
					<div className="intro_item">
						<div className="intro_item_overlay"></div>
						<div className="intro_item_background" style={{ backgroundImage: `url(${intro2})` }}></div>
						<div className="intro_item_content d-flex flex-column align-items-center justify-content-center">
							<div className="intro_date">May 25th - June 01st</div>
							<div className="button intro_button"><div className="button_bcg"></div><Link to="/">see more<span></span><span></span><span></span></Link></div>
							<div className="intro_center text-center">
								<h1>Greece</h1>
								<div className="intro_price">From $1450</div>
								<div className="rating rating_4">
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* <!-- Intro Item --> */}

				<div className="col-lg-4 intro_col">
					<div className="intro_item">
						<div className="intro_item_overlay"></div>
						<div className="intro_item_background" style={{ backgroundImage: `url(${intro3})` }}></div>
						<div className="intro_item_content d-flex flex-column align-items-center justify-content-center">
							<div className="intro_date">May 25th - June 01st</div>
							<div className="button intro_button"><div className="button_bcg"></div><Link to="/">see more<span></span><span></span><span></span></Link></div>
							<div className="intro_center text-center">
								<h1>Scotland</h1>
								<div className="intro_price">From $1450</div>
								<div className="rating rating_4">
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
								</div>
							</div>
						</div>
					</div>
				</div>

			</div>
		</div>
	</div>

	{/* <!-- CTA --> */}

	<div className="cta">
		<div className="cta_background" style={{ backgroundImage: `url(${cta})` }}></div>
		
		<div className="container">
			<div className="row">
				<div className="col">

					{/* <!-- CTA Slider --> */}

					<div className="cta_slider_container">
						<div className="owl-carousel owl-theme cta_slider">

							{/* <!-- CTA Slider Item --> */}
							<div className="owl-item cta_item text-center">
								<div className="cta_title">maldives deluxe package</div>
								<div className="rating_r rating_r_4">
									<i></i>
									<i></i>
									<i></i>
									<i></i>
									<i></i>
								</div>
								<p className="cta_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu convallis tortor. Suspendisse potenti. In faucibus massa arcu, vitae cursus mi hendrerit nec. Proin bibendum, augue faucibus tincidunt ultrices, tortor augue gravida lectus, et efficitur enim justo vel ligula.</p>
								<div className="button cta_button"><div className="button_bcg"></div><Link to="/">book now<span></span><span></span><span></span></Link></div>
							</div>

							{/* <!-- CTA Slider Item --> */}
							<div className="owl-item cta_item text-center">
								<div className="cta_title">maldives deluxe package</div>
								<div className="rating_r rating_r_4">
									<i></i>
									<i></i>
									<i></i>
									<i></i>
									<i></i>
								</div>
								<p className="cta_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu convallis tortor. Suspendisse potenti. In faucibus massa arcu, vitae cursus mi hendrerit nec. Proin bibendum, augue faucibus tincidunt ultrices, tortor augue gravida lectus, et efficitur enim justo vel ligula.</p>
								<div className="button cta_button"><div className="button_bcg"></div><Link to="/">book now<span></span><span></span><span></span></Link></div>
							</div>

							{/* <!-- CTA Slider Item --> */}
							<div className="owl-item cta_item text-center">
								<div className="cta_title">maldives deluxe package</div>
								<div className="rating_r rating_r_4">
									<i></i>
									<i></i>
									<i></i>
									<i></i>
									<i></i>
								</div>
								<p className="cta_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu convallis tortor. Suspendisse potenti. In faucibus massa arcu, vitae cursus mi hendrerit nec. Proin bibendum, augue faucibus tincidunt ultrices, tortor augue gravida lectus, et efficitur enim justo vel ligula.</p>
								<div className="button cta_button"><div className="button_bcg"></div><Link to="/">book now<span></span><span></span><span></span></Link></div>
							</div>
							
						</div>

						{/* <!-- CTA Slider Nav - Prev --> */}
						<div className="cta_slider_nav cta_slider_prev">
							<svg version="1.1" id="Layer_4" x="0px" y="0px" width="28px" height="33px" viewBox="0 0 28 33" enableBackground="new 0 0 28 33" xmlSpace="preserve">
								<defs>
									<linearGradient id='cta_grad_prev'>
										<stop offset='0%' stop-color='#fa9e1b'/>
										<stop offset='100%' stop-color='#8d4fff'/>
									</linearGradient>
								</defs>
								<path className="nav_path" fill="#F3F6F9" d="M19,0H9C4.029,0,0,4.029,0,9v15c0,4.971,4.029,9,9,9h10c4.97,0,9-4.029,9-9V9C28,4.029,23.97,0,19,0z
								M26,23.091C26,27.459,22.545,31,18.285,31H9.714C5.454,31,2,27.459,2,23.091V9.909C2,5.541,5.454,2,9.714,2h8.571
								C22.545,2,26,5.541,26,9.909V23.091z"/>
								<polygon className="nav_arrow" fill="#F3F6F9" points="15.044,22.222 16.377,20.888 12.374,16.885 16.377,12.882 15.044,11.55 9.708,16.885 11.04,18.219 
								11.042,18.219 "/>
							</svg>
						</div>
						
						{/* <!-- CTA Slider Nav - Next --> */}
						<div className="cta_slider_nav cta_slider_next">
							<svg version="1.1" id="Layer_5" x="0px" y="0px" width="28px" height="33px" viewBox="0 0 28 33" enableBackground="new 0 0 28 33" xmlSpace="preserve">
								<defs>
									<linearGradient id='cta_grad_next'>
										<stop offset='0%' stop-color='#fa9e1b'/>
										<stop offset='100%' stop-color='#8d4fff'/>
									</linearGradient>
								</defs>
							<path className="nav_path" fill="#F3F6F9" d="M19,0H9C4.029,0,0,4.029,0,9v15c0,4.971,4.029,9,9,9h10c4.97,0,9-4.029,9-9V9C28,4.029,23.97,0,19,0z
							M26,23.091C26,27.459,22.545,31,18.285,31H9.714C5.454,31,2,27.459,2,23.091V9.909C2,5.541,5.454,2,9.714,2h8.571
							C22.545,2,26,5.541,26,9.909V23.091z"/>
							<polygon className="nav_arrow" fill="#F3F6F9" points="13.044,11.551 11.71,12.885 15.714,16.888 11.71,20.891 13.044,22.224 18.379,16.888 17.048,15.554 
							17.046,15.554 "/>
							</svg>
						</div>

					</div>

				</div>
			</div>
		</div>
					
	</div>

	{/* <!-- Offers --> */}

	<div className="offers">
		<div className="container">
			<div className="row">
				<div className="col text-center">
					<h2 className="section_title">the best offers with rooms</h2>
				</div>
			</div>
			<div className="row offers_items">

				{/* <!-- Offers Item --> */}
				<div className="col-lg-6 offers_col">
					<div className="offers_item">
						<div className="row">
							<div className="col-lg-6">
								<div className="offers_image_container">
									<div className="offers_image_background" style={{ backgroundImage: `url(${offer1})` }}></div>
									<div className="offer_name"><Link to="/">grand castle</Link></div>
								</div>
							</div>
							<div className="col-lg-6">
								<div className="offers_content">
									<div className="offers_price">$70<span>per night</span></div>
									<div className="rating_r rating_r_4 offers_rating">
										<i></i>
										<i></i>
										<i></i>
										<i></i>
										<i></i>
									</div>
									<p className="offers_text">Suspendisse potenti. In faucibus massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu convallis tortor.</p>
									<div className="offers_icons">
										<ul className="offers_icons_list">
                                        <li className="offers_icons_item"><img src={post} alt=""></img></li>
                                        <li className="offers_icons_item"><img src={compass} alt=""></img></li>
                                        <li className="offers_icons_item"><img src={bicycle} alt=""></img></li>
                                        <li className="offers_icons_item"><img src={sailboat} alt=""></img></li>
										</ul>
									</div>
									<div className="offers_link"><Link to="/offers">read more</Link></div>
								</div>
							</div>
						</div>
					</div>
				</div>
				
				{/* <!-- Offers Item --> */}
				<div className="col-lg-6 offers_col">
					<div className="offers_item">
						<div className="row">
							<div className="col-lg-6">
								<div className="offers_image_container">
									{/* <!-- Image by Egzon Bytyqi --> */}
									<div className="offers_image_background" style={{ backgroundImage: `url(${offer2})` }}></div>
									<div className="offer_name"><Link to="/">turkey hills</Link></div>
								</div>
							</div>
							<div className="col-lg-6">
								<div className="offers_content">
									<div className="offers_price">$50<span>per night</span></div>
									<div className="rating_r rating_r_4 offers_rating">
										<i></i>
										<i></i>
										<i></i>
										<i></i>
										<i></i>
									</div>
									<p className="offers_text">Suspendisse potenti. In faucibus massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu convallis tortor.</p>
									<div className="offers_icons">
										<ul className="offers_icons_list">
                                            <li className="offers_icons_item"><img src={post} alt=""></img></li>
                                            <li className="offers_icons_item"><img src={compass} alt=""></img></li>
                                            <li className="offers_icons_item"><img src={bicycle} alt=""></img></li>
                                            <li className="offers_icons_item"><img src={sailboat} alt=""></img></li>
										</ul>
									</div>
									<div className="offers_link"><Link to="/offers">read more</Link></div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* <!-- Offers Item --> */}
				<div className="col-lg-6 offers_col">
					<div className="offers_item">
						<div className="row">
							<div className="col-lg-6">
								<div className="offers_image_container">
									<div className="offers_image_background" style={{ backgroundImage: `url(${offer3})` }}></div>
									<div className="offer_name"><Link to="/">island dream</Link></div>
								</div>
							</div>
							<div className="col-lg-6">
								<div className="offers_content">
									<div className="offers_price">$90<span>per night</span></div>
									<div className="rating_r rating_r_4 offers_rating">
										<i></i>
										<i></i>
										<i></i>
										<i></i>
										<i></i>
									</div>
									<p className="offers_text">Suspendisse potenti. In faucibus massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu convallis tortor.</p>
									<div className="offers_icons">
										<ul className="offers_icons_list">
                                            <li className="offers_icons_item"><img src={post} alt=""></img></li>
                                            <li className="offers_icons_item"><img src={compass} alt=""></img></li>
                                            <li className="offers_icons_item"><img src={bicycle} alt=""></img></li>
                                            <li className="offers_icons_item"><img src={sailboat} alt=""></img></li>
										</ul>
									</div>
									<div className="offers_link"><Link to="/offers">read more</Link></div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* <!-- Offers Item --> */}
				<div className="col-lg-6 offers_col">
					<div className="offers_item">
						<div className="row">
							<div className="col-lg-6">
								<div className="offers_image_container">
									<div className="offers_image_background" style={{ backgroundImage: `url(${offer4})` }}></div>
									<div className="offer_name"><Link to="/">travel light</Link></div>
								</div>
							</div>
							<div className="col-lg-6">
								<div className="offers_content">
									<div className="offers_price">$30<span>per night</span></div>
									<div className="rating_r rating_r_4 offers_rating">
										<i></i>
										<i></i>
										<i></i>
										<i></i>
										<i></i>
									</div>
									<p className="offers_text">Suspendisse potenti. In faucibus massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu convallis tortor.</p>
									<div className="offers_icons">
										<ul className="offers_icons_list">
                                            <li className="offers_icons_item"><img src={post} alt=""></img></li>
                                            <li className="offers_icons_item"><img src={compass} alt=""></img></li>
                                            <li className="offers_icons_item"><img src={bicycle} alt=""></img></li>
                                            <li className="offers_icons_item"><img src={sailboat} alt=""></img></li>
										</ul>
									</div>
									<div className="offers_link"><Link to="/offers">read more</Link></div>
								</div>
							</div>
						</div>
					</div>
				</div>

			</div>
		</div>
	</div>

	{/* <!-- Testimonials --> */}

	<div className="testimonials">
		<div className="test_border"></div>
		<div className="container">
			<div className="row">
				<div className="col text-center">
					<h2 className="section_title">what our clients say about us</h2>
				</div>
			</div>
			<div className="row">
				<div className="col">
					
					{/* <!-- Testimonials Slider --> */}

					<div className="test_slider_container">
						<div className="owl-carousel owl-theme test_slider">

							{/* <!-- Testimonial Item --> */}
							<div className="owl-item">
								<div className="test_item">
									<div className="test_image"><img src="../images/test_1.jpg" alt=""></img></div>
									<div className="test_icon"><img src="../images/backpack.png" alt=""></img></div>
									<div className="test_content_container">
										<div className="test_content">
											<div className="test_item_info">
												<div className="test_name">carla smith</div>
												<div className="test_date">May 24, 2017</div>
											</div>
											<div className="test_quote_title">" Best holliday ever "</div>
											<p className="test_quote_text">Nullam eu convallis tortor. Suspendisse potenti. In faucibus massa arcu, vitae cursus mi hendrerit nec.</p>
										</div>
									</div>
								</div>
							</div>

							{/* <!-- Testimonial Item --> */}
							<div className="owl-item">
								<div className="test_item">
									<div className="test_image"><img src="../images/test_2.jpg" alt=""></img></div>
									<div className="test_icon"><img src="../images/island_t.png" alt=""></img></div>
									<div className="test_content_container">
										<div className="test_content">
											<div className="test_item_info">
												<div className="test_name">carla smith</div>
												<div className="test_date">May 24, 2017</div>
											</div>
											<div className="test_quote_title">" Best holliday ever "</div>
											<p className="test_quote_text">Nullam eu convallis tortor. Suspendisse potenti. In faucibus massa arcu, vitae cursus mi hendrerit nec.</p>
										</div>
									</div>
								</div>
							</div>

							{/* <!-- Testimonial Item --> */}
							<div className="owl-item">
								<div className="test_item">
									<div className="test_image"><img src="../images/test_3.jpg" alt=""></img></div>
									<div className="test_icon"><img src="../images/kayak.png" alt=""></img></div>
									<div className="test_content_container">
										<div className="test_content">
											<div className="test_item_info">
												<div className="test_name">carla smith</div>
												<div className="test_date">May 24, 2017</div>
											</div>
											<div className="test_quote_title">" Best holliday ever "</div>
											<p className="test_quote_text">Nullam eu convallis tortor. Suspendisse potenti. In faucibus massa arcu, vitae cursus mi hendrerit nec.</p>
										</div>
									</div>
								</div>
							</div>

							{/* <!-- Testimonial Item --> */}
							<div className="owl-item">
								<div className="test_item">
									<div className="test_image"><img src="../images/test_2.jpg" alt=""></img></div>
									<div className="test_icon"><img src="../images/island_t.png" alt=""></img></div>
									<div className="test_content_container">
										<div className="test_content">
											<div className="test_item_info">
												<div className="test_name">carla smith</div>
												<div className="test_date">May 24, 2017</div>
											</div>
											<div className="test_quote_title">" Best holliday ever "</div>
											<p className="test_quote_text">Nullam eu convallis tortor. Suspendisse potenti. In faucibus massa arcu, vitae cursus mi hendrerit nec.</p>
										</div>
									</div>
								</div>
							</div>

							{/* <!-- Testimonial Item --> */}
							<div className="owl-item">
								<div className="test_item">
									<div className="test_image"><img src="../images/test_1.jpg" alt=""></img></div>
									<div className="test_icon"><img src="../images/backpack.png" alt=""></img></div>
									<div className="test_content_container">
										<div className="test_content">
											<div className="test_item_info">
												<div className="test_name">carla smith</div>
												<div className="test_date">May 24, 2017</div>
											</div>
											<div className="test_quote_title">" Best holliday ever "</div>
											<p className="test_quote_text">Nullam eu convallis tortor. Suspendisse potenti. In faucibus massa arcu, vitae cursus mi hendrerit nec.</p>
										</div>
									</div>
								</div>
							</div>

							{/* <!-- Testimonial Item --> */}
							<div className="owl-item">
								<div className="test_item">
									<div className="test_image"><img src="../images/test_3.jpg" alt=""></img></div>
									<div className="test_icon"><img src="../images/kayak.png" alt=""></img></div>
									<div className="test_content_container">
										<div className="test_content">
											<div className="test_item_info">
												<div className="test_name">carla smith</div>
												<div className="test_date">May 24, 2017</div>
											</div>
											<div className="test_quote_title">" Best holliday ever "</div>
											<p className="test_quote_text">Nullam eu convallis tortor. Suspendisse potenti. In faucibus massa arcu, vitae cursus mi hendrerit nec.</p>
										</div>
									</div>
								</div>
							</div>

						</div>

						{/* <!-- Testimonials Slider Nav - Prev --> */}
						<div className="test_slider_nav test_slider_prev">
							<svg version="1.1" id="Layer_6" x="0px" y="0px" width="28px" height="33px" viewBox="0 0 28 33" enableBackground="new 0 0 28 33" xmlSpace="preserve">
								<defs>
									<linearGradient id='test_grad_prev'>
										<stop offset='0%' stop-color='#fa9e1b'/>
										<stop offset='100%' stop-color='#8d4fff'/>
									</linearGradient>
								</defs>
								<path className="nav_path" fill="#F3F6F9" d="M19,0H9C4.029,0,0,4.029,0,9v15c0,4.971,4.029,9,9,9h10c4.97,0,9-4.029,9-9V9C28,4.029,23.97,0,19,0z
								M26,23.091C26,27.459,22.545,31,18.285,31H9.714C5.454,31,2,27.459,2,23.091V9.909C2,5.541,5.454,2,9.714,2h8.571
								C22.545,2,26,5.541,26,9.909V23.091z"/>
								<polygon className="nav_arrow" fill="#F3F6F9" points="15.044,22.222 16.377,20.888 12.374,16.885 16.377,12.882 15.044,11.55 9.708,16.885 11.04,18.219 
								11.042,18.219 "/>
							</svg>
						</div>
						
						{/* <!-- Testimonials Slider Nav - Next --> */}
						<div className="test_slider_nav test_slider_next">
							<svg version="1.1" id="Layer_7" x="0px" y="0px" width="28px" height="33px" viewBox="0 0 28 33" enableBackground="new 0 0 28 33" xmlSpace="preserve">
								<defs>
									<linearGradient id='test_grad_next'>
										<stop offset='0%' stop-color='#fa9e1b'/>
										<stop offset='100%' stop-color='#8d4fff'/>
									</linearGradient>
								</defs>
							<path className="nav_path" fill="#F3F6F9" d="M19,0H9C4.029,0,0,4.029,0,9v15c0,4.971,4.029,9,9,9h10c4.97,0,9-4.029,9-9V9C28,4.029,23.97,0,19,0z
							M26,23.091C26,27.459,22.545,31,18.285,31H9.714C5.454,31,2,27.459,2,23.091V9.909C2,5.541,5.454,2,9.714,2h8.571
							C22.545,2,26,5.541,26,9.909V23.091z"/>
							<polygon className="nav_arrow" fill="#F3F6F9" points="13.044,11.551 11.71,12.885 15.714,16.888 11.71,20.891 13.044,22.224 18.379,16.888 17.048,15.554 
							17.046,15.554 "/>
							</svg>
						</div>

					</div>
					
				</div>
			</div>

		</div>
	</div>

	<div className="trending">
		<div className="container">
			<div className="row">
				<div className="col text-center">
					<h2 className="section_title">trending now</h2>
				</div>
			</div>
			<div className="row trending_container">

				{/* <!-- Trending Item --> */}
				<div className="col-lg-3 col-sm-6">
					<div className="trending_item clearfix">
						<div className="trending_image"><img src={trend1} alt=""></img></div>
						<div className="trending_content">
							<div className="trending_title"><Link to="/">grand hotel</Link></div>
							<div className="trending_price">From $182</div>
							<div className="trending_location">madrid, spain</div>
						</div>
					</div>
				</div>

				{/* <!-- Trending Item --> */}
				<div className="col-lg-3 col-sm-6">
					<div className="trending_item clearfix">
						<div className="trending_image"><img src={trend2} alt=""></img></div>
						<div className="trending_content">
							<div className="trending_title"><Link to="/">mars hotel</Link></div>
							<div className="trending_price">From $182</div>
							<div className="trending_location">madrid, spain</div>
						</div>
					</div>
				</div>

				{/* <!-- Trending Item --> */}
				<div className="col-lg-3 col-sm-6">
					<div className="trending_item clearfix">
						<div className="trending_image"><img src={trend3} alt=""></img></div>
						<div className="trending_content">
							<div className="trending_title"><Link to="/">queen hotel</Link></div>
							<div className="trending_price">From $182</div>
							<div className="trending_location">madrid, spain</div>
						</div>
					</div>
				</div>

				{/* <!-- Trending Item --> */}
				<div className="col-lg-3 col-sm-6">
					<div className="trending_item clearfix">
						<div className="trending_image"><img src={trend4} alt=""></img></div>
						<div className="trending_content">
							<div className="trending_title"><Link to="/">mars hotel</Link></div>
							<div className="trending_price">From $182</div>
							<div className="trending_location">madrid, spain</div>
						</div>
					</div>
				</div>

				{/* <!-- Trending Item --> */}
				<div className="col-lg-3 col-sm-6">
					<div className="trending_item clearfix">
						<div className="trending_image"><img src={trend5} alt=""></img></div>
						<div className="trending_content">
							<div className="trending_title"><Link to="/">grand hotel</Link></div>
							<div className="trending_price">From $182</div>
							<div className="trending_location">madrid, spain</div>
						</div>
					</div>
				</div>

				{/* <!-- Trending Item --> */}
				<div className="col-lg-3 col-sm-6">
					<div className="trending_item clearfix">
						<div className="trending_image"><img src={trend6} alt=""></img></div>
						<div className="trending_content">
							<div className="trending_title"><Link to="/">mars hotel</Link></div>
							<div className="trending_price">From $182</div>
							<div className="trending_location">madrid, spain</div>
						</div>
					</div>
				</div>

				{/* <!-- Trending Item --> */}
				<div className="col-lg-3 col-sm-6">
					<div className="trending_item clearfix">
						<div className="trending_image"><img src={trend7} alt=""></img></div>
						<div className="trending_content">
							<div className="trending_title"><Link to="/">queen hotel</Link></div>
							<div className="trending_price">From $182</div>
							<div className="trending_location">madrid, spain</div>
						</div>
					</div>
				</div>

				{/* <!-- Trending Item --> */}
				<div className="col-lg-3 col-sm-6">
					<div className="trending_item clearfix">
						<div className="trending_image"><img src={trend8} alt=""></img></div>
						<div className="trending_content">
							<div className="trending_title"><Link to="/">mars hotel</Link></div>
							<div className="trending_price">From $182</div>
							<div className="trending_location">madrid, spain</div>
						</div>
					</div>
				</div>

			</div>
		</div>
	</div>

	<div className="contact">
		<div className="contact_background" style={{ backgroundImage: `url(${contact})` }}></div>

		<div className="container">
			<div className="row">
				<div className="col-lg-5">
					<div className="contact_image">
						
					</div>
				</div>
				<div className="col-lg-7">
					<div className="contact_form_container">
						<div className="contact_title">get in touch</div>
						<form action="#" id="contact_form" className="contact_form">
							<input type="text" id="contact_form_name" className="contact_form_name input_field" placeholder="Name" required="required" data-error="Name is required."></input>
							<input type="text" id="contact_form_email" className="contact_form_email input_field" placeholder="E-mail" required="required" data-error="Email is required."></input>
							<input type="text" id="contact_form_subject" className="contact_form_subject input_field" placeholder="Subject" required="required" data-error="Subject is required."></input>
							<textarea id="contact_form_message" className="text_field contact_form_message" name="message" rows="4" placeholder="Message" required="required" data-error="Please, write us a message."></textarea>
							<button type="submit" id="form_submit_button" className="form_submit_button button">send message<span></span><span></span><span></span></button>
						</form>
					</div>
				</div>
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
								<div className="logo"><Link to="/"><img src={logo} alt=""></img>travelix</Link></div>
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
								<div className="footer_blog_image"><img src={footerB1} alt=""></img></div>
								<div className="footer_blog_content">
									<div className="footer_blog_title"><Link to="/Blog">Travel with us this year</Link></div>
									<div className="footer_blog_date">Nov 29, 2017</div>
								</div>
							</div>
							
							{/* <!-- Footer blog item --> */}
							<div className="footer_blog_item clearfix">
								<div className="footer_blog_image"><img src={footerB2} alt=""></img></div>
								<div className="footer_blog_content">
									<div className="footer_blog_title"><Link to="/Blog">New destinations for you</Link></div>
									<div className="footer_blog_date">Nov 29, 2017</div>
								</div>
							</div>

							{/* <!-- Footer blog item --> */}
							<div className="footer_blog_item clearfix">
								<div className="footer_blog_image"><img src={footerB3} alt=""></img></div>
								<div className="footer_blog_content">
									<div className="footer_blog_title"><Link to="/Blog">Travel with us this year</Link></div>
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
									<div><div className="contact_info_icon"><img src={placeholder} alt=""></img></div></div>
									<div className="contact_info_text">4127 Raoul Wallenber 45b-c Gibraltar</div>
								</li>
								<li className="contact_info_item d-flex flex-row">
									<div><div className="contact_info_icon"><img src={phoneCall} alt=""></img></div></div>
									<div className="contact_info_text">2556-808-8613</div>
								</li>
								<li className="contact_info_item d-flex flex-row">
									<div><div className="contact_info_icon"><img src={message} alt=""></img></div></div>
									<div className="contact_info_text"><Link to="mailto:contactme@gmail.com?Subject=Hello" target="_top">contactme@gmail.com</Link></div>
								</li>
								<li className="contact_info_item d-flex flex-row">
									<div><div className="contact_info_icon"><img src={planetEarth} alt=""></img></div></div>
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
								<li className="footer_nav_item"><Link to="/">home</Link></li>
								<li className="footer_nav_item"><Link to="/about">about us</Link></li>
								<li className="footer_nav_item"><Link to="/offer">offers</Link></li>
								<li className="footer_nav_item"><Link to="/blog">news</Link></li>
								<li className="footer_nav_item"><Link to="/contact">contact</Link></li>
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

export default Home
