import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Button from 'react-bootstrap/Button'
import InfiniteCarousel from 'react-leaf-carousel';


import zHero from "../images/heros/Corey350Z.jpg";
import clutchkickers from "../images/heros/clutchkickers.gif";

import hoodie from '../images/fullysentProducts/Season1/FullySentBoxLogoHoddie/FullySentBoxLogoHoddie-Black.jpg';
import hat from '../images/fullysentProducts/Season1/FullySent5Panel/FullySent5Panel-black.jpg';
import tee from '../images/fullysentProducts/Season1/FullySentBoxLogoShirt/FullySentBoxLogoShirt-Black.jpg';
import yetti from '../images/fullysentProducts/Season1/FullySentTumbler/FullySentTumbler-Black.png';
import boxTee from '../images/fullysentProducts/Season1/FullySentBoxLogoShirt/FullySentBoxLogoShirt-Black.jpg';
import grimHoodie from '../images/fullysentProducts/Season3[SpringBreakDro2019]/grimHoodie/grimHoodieFront.jpg'

export default function HomeScreen() {
	return (
		<div>
			<Carousel>
				<Carousel.Item interval={2500}>
					<img
						className="d-block w-100"
						src={zHero}
						alt="First slide"
					/>
					<Carousel.Caption>
						<h3>Shop The New Collections!</h3>
						<p><Button variant="primary" src='./screens/ProductScreen'>Shop Now</Button></p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item interval={9500}>
					<img
						className="d-block w-100"
						src={clutchkickers}
						alt="Third slide"
					/>
					<Carousel.Caption>
						<h3>Shop The New Collections!</h3>
						<p><Button variant="primary" src='./screens/ProductScreen'>Shop Now</Button></p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>

			<div className="product-slider">
				<h2>Best Sellers</h2>
				<br></br>
				<p>Shop some of our top selling items</p>
				<br></br>
				<br></br>
				<br></br>
				<InfiniteCarousel
					breakpoints={[
						{
							breakpoint: 500,
							settings: {
								slidesToShow: 2,
								slidesToScroll: 2,
							},
						},
						{
							breakpoint: 768,
							settings: {
								slidesToShow: 3,
								slidesToScroll: 3,
							},
						},
					]}
					dots={true}
					showSides={true}
					sidesOpacity={.5}
					sideSize={.1}
					slidesToScroll={4}
					slidesToShow={4}
					scrollOnDevice={true}
				>
					<div>
						<img
							alt=''
							src={yetti}
						/>
					</div>
					<div>
						<img
							alt=''
							src={boxTee}
						/>
					</div>
					<div>
						<img
							alt=''
							src={hoodie}
						/>
					</div>
					<div>
						<img
							alt=''
							src={hat}
						/>
					</div>
					<div>
						<img
							alt=''
							src={tee}
						/>
					</div>
					<div>
						<img
							alt=''
							src={grimHoodie}
						/>
					</div>
				</InfiniteCarousel>
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
