import React from 'react'
import zHero from "../images/heros/Corey350Z.jpg";
import clutchkickers from "../images/heros/clutchkickers.gif";


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

									<h1 class="title"><br />
								Established 2017<br />
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
				<div classname="content-bottom">
					<div classname="container">
						<div classname="row content_bottom-text">
							<div classname="col-md-7">
								<h3>Fully Sent<br></br>About Us</h3>
								<p class="m_1">
								Fully Sent is a Drift Club & Social Club featured around extreme sports.
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
		</div>
	)
}
