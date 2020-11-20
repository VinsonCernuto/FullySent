import React from 'react'
import $ from 'jquery'
import zHero from "../images/heros/Corey350Z.jpg";
import clutchkickers from "../images/heros/clutchkickers.gif";
import hat from "../images/fullysentProducts/Season1/FullySent5Panel/FullySent5Panel.jpg";
import hoddie from "../images/fullysentProducts/Season1/FullySentBoxLogoHoddie/FullySentBoxLogoHoddie-Black.jpg";
import popSocket from '../images/fullysentProducts/Season1/PopSocket/PopSocket-black.png';
import craftBeer from '../images/fullysentProducts/Season3[SpringBreakDro2019]/fullySentPremiumTee/Black/fullySentPremiumTee-front.jpg';
import tumbler from '../images/fullysentProducts/Season1/FullySentTumbler/FullySentTumbler-Black.png';

export default function HomeScreen() {
    return (
        <div>
            <div classname="banner">
		
		<div id="fwslider">
			<div classname="slider_container">
				<div classname="slide">
					
					<img src={zHero} class="img-responsive" alt="" />
					
					<div classname="slide_content">
						<div classname="slide_content_wrap">
							
							<h1 class="title"><br></br>
								Established 2017<br></br>
								Melbourne, Florida</h1>
							<div classname="button"><a href="#">See Details</a></div>
						</div>
					</div>
					
				</div>
				
				<div classname="slide">
					<img src={clutchkickers} class="img-responsive" alt="" />
					<div classname="slide_content">
						<div classname="slide_content_wrap">
							<h1 class="title">Shop New<br></br>Cloections</h1>
							<div classname="button"><a href="#">See Details</a></div>
						</div>
					</div>
				</div>
				
			</div>
			<div classname="timers"></div>
			<div classname="slidePrev"><span></span></div>
			<div classname="slideNext"><span></span></div>
		</div>
		
	</div>
	<div classname="main">
		<div classname="content-top">
			<h2>Best Sellers</h2>
			<p>Shop some of our top selling items</p>
			<div classname="close_but"><i class="close1"> </i></div>
			<ul id="flexiselDemo3">
				<li><img src={hoddie} /></li>
				<li><img src={hat} /></li>
				<li><img src={popSocket} /></li>
				<li><img src={craftBeer} /></li>
				<li><img src={tumbler} /></li>
			</ul>
			<script type="text/javascript">
				$(window).load(function () {
					$("#flexiselDemo3").flexisel({
						visibleItems: 5,
						animationSpeed: 1000,
						autoPlay: true,
						autoPlaySpeed: 3000,
						pauseOnHover: true,
						enableResponsiveBreakpoints: true,
						responsiveBreakpoints: {
							portrait: {
								changePoint: 480,
								visibleItems: 1
							},
							landscape: {
								changePoint: 640,
								visibleItems: 2
							},
							tablet: {
								changePoint: 768,
								visibleItems: 3
							}
						}
					})};

				);
			</script>
			<script type="text/javascript" src="js/jquery.flexisel.js"></script>
		</div>
	</div>
	<div classname="content-bottom">
		<div classname="container">
			<div classname="row content_bottom-text">
				<div classname="col-md-7">
					<h3>Fully Sent<br></br>About Us</h3>
					<p class="m_1">Fully Sent is a Drift Club & Social Club featured around extreme sports.
                    Founded by the stoke for anything on wheels, by a group of Florida natives, we wanted to create and share something new for the scene. 
                    By supporting FullySent you are enabling us to follow our passions and create content for you!
					</p>
				</div>
			</div>
		</div>
	</div>
	<div classname="features">
		<div classname="container">
			<h3 class="m_3">Featured Content</h3>
			<div classname="close_but"><i class="close1"> </i></div>
			<div classname="row">
				<div classname="col-md-6 top_box">
					<div classname="view view-ninth"><a href="https://www.youtube.com/embed/1HPbWEdfq3Q">
							<iframe width="560" height="315" src="https://www.youtube.com/embed/1HPbWEdfq3Q"
								frameborder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowfullscreen></iframe>
							<div classname="mask mask-1"> </div>
							<div classname="mask mask-2"> </div>
							<div classname="content">
							</div>
						</a> </div>
				</div>
				<div classname="col-md-6 top_box">
					<div classname="view view-ninth"><a href="https://www.youtube.com/embed/3-x9vjLXK-s">
							<iframe width="560" height="315" src="https://www.youtube.com/embed/3-x9vjLXK-s"
								frameborder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowfullscreen></iframe>
							<div classname="mask mask-1"> </div>
							<div classname="mask mask-2"> </div>
							<div classname="content">
							</div>
						</a> </div>
				</div>
				<div classname="col-md-6 top_box">
					<div classname="view view-ninth"><a href="https://www.youtube.com/embed/jxhfTDdXZMM">
							<iframe width="560" height="315" src="https://www.youtube.com/embed/jxhfTDdXZMM"
								frameborder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowfullscreen></iframe>
							<div classname="mask mask-1"> </div>
							<div classname="mask mask-2"> </div>
							<div classname="content">
							</div>
						</a> </div>
				</div>

			</div>
		</div>
	</div>
        </div>
    )
}
