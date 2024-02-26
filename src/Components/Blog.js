import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
  return (
    <>
      <div class="super_container">
	
	{/* <!-- Header --> */}

	<header class="header">

		{/* <!-- Top Bar --> */}

		<div class="top_bar">
			<div class="container">
				<div class="row">
					<div class="col d-flex flex-row">
						<div class="phone">+45 345 3324 56789</div>
						<div class="social">
							<ul class="social_list">
								<li class="social_list_item"><Link to="/"><i class="fa fa-pinterest" aria-hidden="true"></i></Link></li>
								<li class="social_list_item"><Link to="/"><i class="fa fa-facebook" aria-hidden="true"></i></Link></li>
								<li class="social_list_item"><Link to="/"><i class="fa fa-twitter" aria-hidden="true"></i></Link></li>
								<li class="social_list_item"><Link to="/"><i class="fa fa-dribbble" aria-hidden="true"></i></Link></li>
								<li class="social_list_item"><Link to="/"><i class="fa fa-behance" aria-hidden="true"></i></Link></li>
								<li class="social_list_item"><Link to="/"><i class="fa fa-linkedin" aria-hidden="true"></i></Link></li>
							</ul>
						</div>
						<div class="user_box ml-auto">
							<div class="user_box_login user_box_link"><Link to="/">login</Link></div>
							<div class="user_box_register user_box_link"><Link to="/">register</Link></div>
						</div>
					</div>
				</div>
			</div>		
		</div>

		{/* <!-- Main Navigation --> */}

		<nav class="main_nav">
			<div class="container">
				<div class="row">
					<div class="col main_nav_col d-flex flex-row align-items-center justify-content-start">
						<div class="logo_container">
							<div class="logo"><Link to="/"><img src="../images/logo.png" alt=""></img>travelix</Link></div>
						</div>
						<div class="main_nav_container ml-auto">
							<ul class="main_nav_list">
								<li class="main_nav_item"><Link to="/index">home</Link></li>
								<li class="main_nav_item"><Link to="/about">about us</Link></li>
								<li class="main_nav_item"><Link to="/offers">offers</Link></li>
								<li class="main_nav_item"><Link to="/">news</Link></li>
								<li class="main_nav_item"><Link to="/contact">contact</Link></li>
							</ul>
						</div>
						<div class="content_search ml-lg-0 ml-auto">
							<svg version="1.1" id="Layer_1" x="0px" y="0px" width="17px" height="17px" viewBox="0 0 512 512" enableBackground="new 0 0 512 512" xmlSpace="preserve">
								<g>
									<g>
										<g>
											<path class="mag_glass" fill="#FFFFFF" d="M78.438,216.78c0,57.906,22.55,112.343,63.493,153.287c40.945,40.944,95.383,63.494,153.287,63.494
											s112.344-22.55,153.287-63.494C489.451,329.123,512,274.686,512,216.78c0-57.904-22.549-112.342-63.494-153.286
											C407.563,22.549,353.124,0,295.219,0c-57.904,0-112.342,22.549-153.287,63.494C100.988,104.438,78.439,158.876,78.438,216.78z
											M119.804,216.78c0-96.725,78.69-175.416,175.415-175.416s175.418,78.691,175.418,175.416
											c0,96.725-78.691,175.416-175.416,175.416C198.495,392.195,119.804,313.505,119.804,216.78z"/>
										</g>
									</g>
									<g>
										<g>
											<path class="mag_glass" fill="#FFFFFF" d="M6.057,505.942c4.038,4.039,9.332,6.058,14.625,6.058s10.587-2.019,14.625-6.058L171.268,369.98
											c8.076-8.076,8.076-21.172,0-29.248c-8.076-8.078-21.172-8.078-29.249,0L6.057,476.693
											C-2.019,484.77-2.019,497.865,6.057,505.942z"/>
										</g>
									</g>
								</g>
							</svg>
						</div>

						<form id="search_form" class="search_form bez_1">
							<input type="search" class="search_content_input bez_1"></input>
						</form>
						
						<div class="hamburger">
							<i class="fa fa-bars trans_200"></i>
						</div>
					</div>
				</div>
			</div>	
		</nav>

	</header>

	<div class="menu trans_500">
		<div class="menu_content d-flex flex-column align-items-center justify-content-center text-center">
			<div class="menu_close_container"><div class="menu_close"></div></div>
			<div class="logo menu_logo"><Link to="/"><img src="../images/logo.png" alt=""></img></Link></div>
			<ul>
				<li class="menu_item"><Link to="/index">home</Link></li>
				<li class="menu_item"><Link to="/about">about us</Link></li>
				<li class="menu_item"><Link to="/offers">offers</Link></li>
				<li class="menu_item"><Link to="/">news</Link></li>
				<li class="menu_item"><Link to="/contact">contact</Link></li>
			</ul>
		</div>
	</div>

	{/* <!-- Home --> */}

	<div class="home">
		<div class="home_background parallax-window" data-parallax="scroll" data-image-src="../images/blog_background.jpg"></div>
		<div class="home_content">
			<div class="home_title">the blog</div>
		</div>
	</div>

	{/* <!-- Blog --> */}

	<div class="blog">
		<div class="container">
			<div class="row">

				{/* <!-- Blog Content --> */}

				<div class="col-lg-8">
					
					<div class="blog_post_container">

						{/* <!-- Blog Post --> */}
						
						<div class="blog_post">
							<div class="blog_post_image">
								<img src="../images/blog_1.jpg" alt="https://unsplash.com/@anniespratt"></img>
								<div class="blog_post_date d-flex flex-column align-items-center justify-content-center">
									<div class="blog_post_day">01</div>
									<div class="blog_post_month">Dec, 2017</div>
								</div>
							</div>
							<div class="blog_post_meta">
								<ul>
									<li class="blog_post_meta_item"><Link to="">by Lore Papp</Link></li>
									<li class="blog_post_meta_item"><Link to="">Uncategorized</Link></li>
									<li class="blog_post_meta_item"><Link to="">3 Comments</Link></li>
								</ul>
							</div>
							<div class="blog_post_title"><Link to="/">Try these new dream destinations</Link></div>
							<div class="blog_post_text">
								<p>Aenean in lacus ligula. Phasellus euismod gravida eros. Aenean nec ipsum aliquet, pharetra magna id, interdum sapien. Etiam id lorem eu nisl pellentesque semper. Nullam tincidunt metus placerat, suscipit leo ut, tempus nulla. Fusce at eleifend tellus. Ut eleifend dui nunc, non fermentum qua.</p>
							</div>
							<div class="blog_post_link"><Link to="/">read more</Link></div>
						</div>

						{/* <!-- Blog Post --> */}
						
						<div class="blog_post">
							<div class="blog_post_image">
								<img src="../images/blog_2.jpg" alt="https://unsplash.com/@tschax"></img>
								<div class="blog_post_date d-flex flex-column align-items-center justify-content-center">
									<div class="blog_post_day">01</div>
									<div class="blog_post_month">Dec, 2017</div>
								</div>
							</div>
							<div class="blog_post_meta">
								<ul>
									<li class="blog_post_meta_item"><Link to="">by Lore Papp</Link></li>
									<li class="blog_post_meta_item"><Link to="">Uncategorized</Link></li>
									<li class="blog_post_meta_item"><Link to="">3 Comments</Link></li>
								</ul>
							</div>
							<div class="blog_post_title"><Link to="/">Try these new dream destinations</Link></div>
							<div class="blog_post_text">
								<p>Aenean in lacus ligula. Phasellus euismod gravida eros. Aenean nec ipsum aliquet, pharetra magna id, interdum sapien. Etiam id lorem eu nisl pellentesque semper. Nullam tincidunt metus placerat, suscipit leo ut, tempus nulla. Fusce at eleifend tellus. Ut eleifend dui nunc, non fermentum qua.</p>
							</div>
							<div class="blog_post_link"><Link to="/">read more</Link></div>
						</div>

						{/* <!-- Blog Post --> */}
						
						<div class="blog_post">
							<div class="blog_post_image">
								<img src="../images/blog_3.jpg" alt="https://unsplash.com/@stilclassics"></img>
								<div class="blog_post_date d-flex flex-column align-items-center justify-content-center">
									<div class="blog_post_day">01</div>
									<div class="blog_post_month">Dec, 2017</div>
								</div>
							</div>
							<div class="blog_post_meta">
								<ul>
									<li class="blog_post_meta_item"><Link to="">by Lore Papp</Link></li>
									<li class="blog_post_meta_item"><Link to="">Uncategorized</Link></li>
									<li class="blog_post_meta_item"><Link to="">3 Comments</Link></li>
								</ul>
							</div>
							<div class="blog_post_title"><Link to="/">Try these new dream destinations</Link></div>
							<div class="blog_post_text">
								<p>Aenean in lacus ligula. Phasellus euismod gravida eros. Aenean nec ipsum aliquet, pharetra magna id, interdum sapien. Etiam id lorem eu nisl pellentesque semper. Nullam tincidunt metus placerat, suscipit leo ut, tempus nulla. Fusce at eleifend tellus. Ut eleifend dui nunc, non fermentum qua.</p>
							</div>
							<div class="blog_post_link"><Link to="/">read more</Link></div>
						</div>

					</div>
						
					<div class="blog_navigation">
						<ul>
							<li class="blog_dot active"><div></div>01.</li>
							<li class="blog_dot"><div></div>02.</li>
							<li class="blog_dot"><div></div>03.</li>
						</ul>
					</div>
				</div>

				{/* <!-- Blog Sidebar --> */}

				<div class="col-lg-4 sidebar_col">

					{/* <!-- Sidebar Search --> */}
					<div class="sidebar_search">
						<form action="#">
							<input id="sidebar_search_input" type="search" class="sidebar_search_input" placeholder="" required="required"></input>
							<button id="sidebar_search_button" type="submit" class="sidebar_search_button trans_300" value="Submit">
								<svg version="1.1" id="Layer_1" x="0px" y="0px" width="17px" height="17px" viewBox="0 0 512 512" enableBackground="new 0 0 512 512" xmlSpace="preserve">
									<g>
										<g>
											<g>
												<path class="mag_glass" fill="#FFFFFF" d="M78.438,216.78c0,57.906,22.55,112.343,63.493,153.287c40.945,40.944,95.383,63.494,153.287,63.494
												s112.344-22.55,153.287-63.494C489.451,329.123,512,274.686,512,216.78c0-57.904-22.549-112.342-63.494-153.286
												C407.563,22.549,353.124,0,295.219,0c-57.904,0-112.342,22.549-153.287,63.494C100.988,104.438,78.439,158.876,78.438,216.78z
												M119.804,216.78c0-96.725,78.69-175.416,175.415-175.416s175.418,78.691,175.418,175.416
												c0,96.725-78.691,175.416-175.416,175.416C198.495,392.195,119.804,313.505,119.804,216.78z"/>
											</g>
										</g>
										<g>
											<g>
												<path class="mag_glass" fill="#FFFFFF" d="M6.057,505.942c4.038,4.039,9.332,6.058,14.625,6.058s10.587-2.019,14.625-6.058L171.268,369.98
												c8.076-8.076,8.076-21.172,0-29.248c-8.076-8.078-21.172-8.078-29.249,0L6.057,476.693
												C-2.019,484.77-2.019,497.865,6.057,505.942z"/>
											</g>
										</g>
									</g>
								</svg>
							</button>
						</form>
					</div>
					
					{/* <!-- Sidebar Archives --> */}
					<div class="sidebar_archives">
						<div class="sidebar_title">Archives</div>
						<div class="sidebar_list">
							<ul>
								<li><Link to="/">March 2017</Link></li>
								<li><Link to="/">April 2017</Link></li>
								<li><Link to="/">May 2017</Link></li>
							</ul>
						</div>
					</div>
					
					{/* <!-- Sidebar Archives --> */}
					<div class="sidebar_categories">
						<div class="sidebar_title">Categories</div>
						<div class="sidebar_list">
							<ul>
								<li><Link to="/">Travel</Link></li>
								<li><Link to="/">Exotic Destinations</Link></li>
								<li><Link to="/">City Breaks</Link></li>
								<li><Link to="/">Travel Tips</Link></li>
								<li><Link to="/">Lifestyle & Travel</Link></li>
								<li><Link to="/">City Breaks</Link></li>
								<li><Link to="/">Uncategorized</Link></li>
							</ul>
						</div>
					</div>

					{/* <!-- Sidebar Latest Posts --> */}

					<div class="sidebar_latest_posts">
						<div class="sidebar_title">Latest Posts</div>
						<div class="latest_posts_container">
							<ul>

								{/* <!-- Latest Post --> */}
								<li class="latest_post clearfix">
									<div class="latest_post_image">
										<Link to="/"><img src="../images/latest_1.jpg" alt=""></img></Link>
									</div>
									<div class="latest_post_content">
										<div class="latest_post_title trans_200"><Link to="/">A simple blog post</Link></div>
										<div class="latest_post_meta">
											<div class="latest_post_author trans_200"><Link to="/">by Jane Smith</Link></div>
											<div class="latest_post_date trans_200"><Link to="/">Aug 25, 2016</Link></div>
										</div>
									</div>
								</li>

								{/* <!-- Latest Post --> */}
								<li class="latest_post clearfix">
									<div class="latest_post_image">
										<Link to="/"><img src="../images/latest_2.jpg" alt=""></img></Link>
									</div>
									<div class="latest_post_content">
										<div class="latest_post_title trans_200"><Link to="/">Dream destination for you</Link></div>
										<div class="latest_post_meta">
											<div class="latest_post_author trans_200"><Link to="/">by Jane Smith</Link></div>
											<div class="latest_post_date trans_200"><Link to="/">Aug 25, 2016</Link></div>
										</div>
									</div>
								</li>

								{/* <!-- Latest Post --> */}
								<li class="latest_post clearfix">
									<div class="latest_post_image">
										<Link to="/"><img src="../images/latest_3.jpg" alt=""></img></Link>
									</div>
									<div class="latest_post_content">
										<div class="latest_post_title trans_200"><Link to="/">Tips to travel light</Link></div>
										<div class="latest_post_meta">
											<div class="latest_post_author trans_200"><Link to="/">by Jane Smith</Link></div>
											<div class="latest_post_date trans_200"><Link to="/">Aug 25, 2016</Link></div>
										</div>
									</div>
								</li>

								{/* <!-- Latest Post --> */}
								<li class="latest_post clearfix">
									<div class="latest_post_image">
										<Link to="/"><img src="../images/latest_4.jpg" alt=""></img></Link>
									</div>
									<div class="latest_post_content">
										<div class="latest_post_title trans_200"><Link to="/">How to pick your vacation</Link></div>
										<div class="latest_post_meta">
											<div class="latest_post_author trans_200"><Link to="/">by Jane Smith</Link></div>
											<div class="latest_post_date trans_200"><Link to="/">Aug 25, 2016</Link></div>
										</div>
									</div>
								</li>

							</ul>
						</div>
					</div>

					{/* <!-- Sidebar Gallery --> */}
					<div class="sidebar_gallery">
						<div class="sidebar_title">Instagram</div>
						<div class="gallery_container">
							<ul class="gallery_items d-flex flex-row align-items-start justify-content-between flex-wrap">
								<li class="gallery_item">
									<a class="colorbox" href="https://images.unsplash.com/photo-1473625247510-8ceb1760943f?ixlib=rb-0.3.5&s=c0996cd16eda8c6f54c398de02d03cd3&auto=format&fit=crop&w=720&q=80">
										<img src="../images/gallery_1.jpg" alt="https://unsplash.com/@mantashesthaven"></img>
									</a>
								</li>
								<li class="gallery_item">
									<a class="colorbox" href="https://images.unsplash.com/photo-1495162048225-6b3b37b8a69e?ixlib=rb-0.3.5&s=861dd3c7b9d3e735d7fd7cbb1eefed64&auto=format&fit=crop&w=720&q=80">
										<img src="../images/gallery_2.jpg" alt="https://unsplash.com/@kensuarez"></img>
									</a>
								</li>
								<li class="gallery_item">
									<a class="colorbox" href="https://images.unsplash.com/photo-1502646275263-04be86afa386?ixlib=rb-0.3.5&s=682a41d7d9bf6e3feabc73a5fdd61dd2&auto=format&fit=crop&w=720&q=80">
										<img src="../images/gallery_3.jpg" alt="https://unsplash.com/@jakobowens1"></img>
									</a>
								</li>
								<li class="gallery_item">
									<a class="colorbox" href="https://images.unsplash.com/photo-1484820301304-0b43512779dc?ixlib=rb-0.3.5&s=7a3393e9f507fb4718c36337a8014c52&auto=format&fit=crop&w=720&q=80">
										<img src="../images/gallery_4.jpg" alt="https://unsplash.com/@seefromthesky"></img>
									</a>
								</li>
								<li class="gallery_item">
									<a class="colorbox" href="https://images.unsplash.com/photo-1490380169520-0a4b88d52565?ixlib=rb-0.3.5&s=7e6b68b1911fb4ffeea4c0750b8a5269&auto=format&fit=crop&w=720&q=80">
										<img src="../images/gallery_5.jpg" alt="https://unsplash.com/@deannaritchie"></img>
									</a>
								</li>
								<li class="gallery_item">
									<a class="colorbox" href="https://images.unsplash.com/photo-1504434026032-a7e440a30b68?ixlib=rb-0.3.5&s=2cc35bf903b78ba4f7f7ed69bc2abe3f&auto=format&fit=crop&w=720&q=80">
										<img src="../images/gallery_6.jpg" alt="https://unsplash.com/@benobro"></img>
									</a>
								</li>
							</ul>
						</div>
					</div>

				</div>
			</div>
		</div>
	</div>

	{/* <!-- Footer --> */}

	<footer class="footer">
		<div class="container">
			<div class="row">

				{/* <!-- Footer Column --> */}
				<div class="col-lg-3 footer_column">
					<div class="footer_col">
						<div class="footer_content footer_about">
							<div class="logo_container footer_logo">
								<div class="logo"><Link to="/"><img src="../images/logo.png" alt=""></img>travelix</Link></div>
							</div>
							<p class="footer_about_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis vu lputate eros, iaculis consequat nisl. Nunc et suscipit urna. Integer eleme ntum orci eu vehicula pretium.</p>
							<ul class="footer_social_list">
								<li class="footer_social_item"><Link to="/"><i class="fa fa-pinterest"></i></Link></li>
								<li class="footer_social_item"><Link to="/"><i class="fa fa-facebook-f"></i></Link></li>
								<li class="footer_social_item"><Link to="/"><i class="fa fa-twitter"></i></Link></li>
								<li class="footer_social_item"><Link to="/"><i class="fa fa-dribbble"></i></Link></li>
								<li class="footer_social_item"><Link to="/"><i class="fa fa-behance"></i></Link></li>
							</ul>
						</div>
					</div>
				</div>

				{/* <!-- Footer Column --> */}
				<div class="col-lg-3 footer_column">
					<div class="footer_col">
						<div class="footer_title">blog posts</div>
						<div class="footer_content footer_blog">
							
							{/* <!-- Footer blog item --> */}
							<div class="footer_blog_item clearfix">
								<div class="footer_blog_image"><img src="../images/footer_blog_1.jpg" alt="https://unsplash.com/@avidenov"></img></div>
								<div class="footer_blog_content">
									<div class="footer_blog_title"><Link to="/blog">Travel with us this year</Link></div>
									<div class="footer_blog_date">Nov 29, 2017</div>
								</div>
							</div>
							
							{/* <!-- Footer blog item --> */}
							<div class="footer_blog_item clearfix">
								<div class="footer_blog_image"><img src="../images/footer_blog_2.jpg" alt="https://unsplash.com/@deannaritchie"></img></div>
								<div class="footer_blog_content">
									<div class="footer_blog_title"><Link to="/blog">New destinations for you</Link></div>
									<div class="footer_blog_date">Nov 29, 2017</div>
								</div>
							</div>

							{/* <!-- Footer blog item --> */}
							<div class="footer_blog_item clearfix">
								<div class="footer_blog_image"><img src="../images/footer_blog_3.jpg" alt="https://unsplash.com/@bergeryap87"></img></div>
								<div class="footer_blog_content">
									<div class="footer_blog_title"><Link to="/blog">Travel with us this year</Link></div>
									<div class="footer_blog_date">Nov 29, 2017</div>
								</div>
							</div>

						</div>
					</div>
				</div>

				{/* <!-- Footer Column --> */}
				<div class="col-lg-3 footer_column">
					<div class="footer_col">
						<div class="footer_title">tags</div>
						<div class="footer_content footer_tags">
							<ul class="tags_list clearfix">
								<li class="tag_item"><Link to="/">design</Link></li>
								<li class="tag_item"><Link to="/">fashion</Link></li>
								<li class="tag_item"><Link to="/">music</Link></li>
								<li class="tag_item"><Link to="/">video</Link></li>
								<li class="tag_item"><Link to="/">party</Link></li>
								<li class="tag_item"><Link to="/">photography</Link></li>
								<li class="tag_item"><Link to="/">adventure</Link></li>
								<li class="tag_item"><Link to="/">travel</Link></li>
							</ul>
						</div>
					</div>
				</div>

				{/* <!-- Footer Column --> */}
				<div class="col-lg-3 footer_column">
					<div class="footer_col">
						<div class="footer_title">contact info</div>
						<div class="footer_content footer_contact">
							<ul class="contact_info_list">
								<li class="contact_info_item d-flex flex-row">
									<div><div class="contact_info_icon"><img src="../images/placeholder.svg" alt=""></img></div></div>
									<div class="contact_info_text">4127 Raoul Wallenber 45b-c Gibraltar</div>
								</li>
								<li class="contact_info_item d-flex flex-row">
									<div><div class="contact_info_icon"><img src="../images/phone-call.svg" alt=""></img></div></div>
									<div class="contact_info_text">2556-808-8613</div>
								</li>
								<li class="contact_info_item d-flex flex-row">
									<div><div class="contact_info_icon"><img src="../images/message.svg" alt=""></img></div></div>
									<div class="contact_info_text"><Link to="mailto:contactme@gmail.com?Subject=Hello" target="_top">contactme@gmail.com</Link></div>
								</li>
								<li class="contact_info_item d-flex flex-row">
									<div><div class="contact_info_icon"><img src="../images/planet-earth.svg" alt=""></img></div></div>
									<div class="contact_info_text"><Link to="https://colorlib.com">www.colorlib.com</Link></div>
								</li>
							</ul>
						</div>
					</div>
				</div>

			</div>
		</div>
	</footer>

	{/* <!-- Copyright --> */}

	<div class="copyright">
		<div class="container">
			<div class="row">
				<div class="col-lg-3 order-lg-1 order-2  ">
					<div class="copyright_content d-flex flex-row align-items-center">
						<div>Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i class="fa fa-heart-o" aria-hidden="true"></i> by <Link to="https://colorlib.com" target="_blank">Colorlib</Link>
</div>
					</div>
				</div>
				<div class="col-lg-9 order-lg-2 order-1">
					<div class="footer_nav_container d-flex flex-row align-items-center justify-content-lg-end">
						<div class="footer_nav">
							<ul class="footer_nav_list">
								<li class="footer_nav_item"><Link to="/index">home</Link></li>
								<li class="footer_nav_item"><Link to="/about">about us</Link></li>
								<li class="footer_nav_item"><Link to="/offers">offers</Link></li>
								<li class="footer_nav_item"><Link to="/">news</Link></li>
								<li class="footer_nav_item"><Link to="/contact">contact</Link></li>
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

export default Blog
