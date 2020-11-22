import React from "react";
import logo from './images/logos/logo.png';

import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	BrowserRouter
} from "react-router-dom";

// Screens
import HomeScreen from "./screens/HomeScreen";
import TeamScreen from "./screens/TeamScreen";
import MediaScreen from "./screens/MediaScreen";
import CompanyScreen from "./screens/CompanyScreen";
import ContactScreen from "./screens/ContactScreen";
import ProductScreen from './screens/ProductScreen';
import ProductItemScreen from './screens/ProductItemScreen';
import CartScreen from './screens/CartScreen';
import CommingSoonScreen from "./screens/CommingSoonScreen";


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
													<li><a href="/team">Team</a></li>
													<li><a href="/media">Media</a></li>
													<li><a href="/company">Company</a></li>
													<li><a href="/contact">Contact</a></li>
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
						<Route path="/" exact={true} component={HomeScreen} />
						<Route path="/products" exact={true} component={ProductScreen} />
						<Route path="/product/:id" component={ProductItemScreen} />
						<Route path="/cart/:id?" component={CartScreen}></Route>
						<Route path="/team" exact={true} component={TeamScreen} />
						<Route path="/media" exact={true} component={MediaScreen} />
						<Route path="/company" exact={true} component={CompanyScreen} />
						<Route path="/contact" exact={true} component={ContactScreen} />
						<Route path="/comingSoon" exact={true} component={CommingSoonScreen} />
					</div>



					<div class="footer">
						<div class="container">
							<div class="row">
								<div class="col-md-3">
									<ul class="footer_box">
										<h4>Products</h4>
										<li><a href="/comingSoon">Collections</a></li>
										<li><a href="/products">Apparel</a></li>
										<li><a href="/products">Accessories</a></li>
									</ul>
								</div>
								<div class="col-md-3">
									<ul class="footer_box">
										<h4>About</h4>
										<li><a href="/media">Media</a></li>
										<li><a href="/comingSoon">Sponserships</a></li>
										<li><a href="/team">Team</a></li>
									</ul>
								</div>
								<div class="col-md-3">
									<ul class="footer_box">
										<h4>Customer Support</h4>
										<li><a href="/contact">Contact Us</a></li>
										<li><a href="/comingSoon">Shipping and Order Tracking</a></li>
										<li><a href="/comingSoon">Easy Returns</a></li>
										<li><a href="/comingSoon">Warranty</a></li>
									</ul>
								</div>
								<div class="col-md-3">
									<ul class="footer_box">
										<h4>Newsletter</h4>
										<div class="footer_search">
											<form>
												<input type="text" value="Enter your email" onfocus="this.value = '';"
													onblur="if (this.value == '') {this.value = 'Enter your email';}" />
												<input type="submit" value="Go" />
											</form>
										</div>
										<ul class="social">
											<li class="facebook"><a href="https://www.facebook.com/FullySent" target="_blank"><span> </span></a></li>
											<li class="instagram"><a href="https://www.instagram.com/fllysnt/" target="_blank"><span> </span></a></li>
											<li class="youtube"><a href="https://www.youtube.com/channel/UCBmRiM8r5nf3wDWuQCCgH4g" target="_blank"><span> </span></a></li>
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

