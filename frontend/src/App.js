import React from "react";
import logo from './images/logo.png';
import ProductScreen from './screens/ProductScreen';
import ProductItemScreen from './screens/ProductItemScreen';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	BrowserRouter
} from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";



function App() {
	return (
		<BrowserRouter>
			<div>
				<div>
					<div className="header">
						<div className="container">
							<div className="row">
								<div className="col-md-12">
									<div className="header-left">
										<div className="logo">
										<a href="/"><img src={logo} width="100" height="50" alt="" /></a>
										</div>
										<div className="menu">
											<ul className="nav" id="nav">
												<ul className="nav" id="nav">
												<li><a href="/products">Shop</a></li>
													<li><a href="team.html">Team</a></li>
													<li><a href="experiance.html">Media</a></li>
													<li><a href="shop.html">Company</a></li>
													<li><a href="contact.html">Contact</a></li>
													<div className="clear"> </div>
												</ul>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* May have to switch this to  <main> and put this in the productscreen screen */}
					<div className="main">
							<Route path="/product/:id" component={ProductItemScreen} />
							<Route path="/products" exact={true} component={ProductScreen} />
							<Route path="/" exact={true} component={HomeScreen} />
					</div>



					<div className="footer">
						<div className="container">
							<div className="row">
								<div className="col-md-3">
									<ul className="footer_box">
										<h4>Products</h4>
										<li><a href="#">Clothes</a></li>
										<li><a href="#">Accessory</a></li>
										<li><a href="#">Banners</a></li>
									</ul>
								</div>
								<div className="col-md-3">
									<ul className="footer_box">
										<h4>About</h4>
										<li><a href="#">Join Fully Sent</a></li>
										<li><a href="#">Sponserships</a></li>
										<li><a href="#">Team</a></li>
									</ul>
								</div>
								<div className="col-md-3">
									<ul className="footer_box">
										<h4>Customer Support</h4>
										<li><a href="#">Contact Us</a></li>
										<li><a href="#">Warranty</a></li>
									</ul>
								</div>
								<div className="col-md-3">
									<ul className="footer_box">
										<h4>Newsletter</h4>
										<div className="footer_search">
											<form>
												<input type="text" value="Enter your email" onfocus="this.value = '';"
													onblur="if (this.value == '') {this.value = 'Enter your email';}" />
												<input type="submit" value="Go" />

											</form>
										</div>
										<ul className="social">
											<li className="facebook"><a href="#"><span> </span></a></li>
											<li className="twitter"><a href="#"><span> </span></a></li>
											<li className="instagram"><a href="#"><span> </span></a></li>
											<li className="pinterest"><a href="#"><span> </span></a></li>
											<li className="youtube"><a href="#"><span> </span></a></li>
										</ul>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;

