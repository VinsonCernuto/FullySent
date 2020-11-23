import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './images/logos/logo.png';
import { useDispatch, useSelector } from 'react-redux';
import { signout } from './actions/userActions';


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
import SigninScreen from './screens/SigninScreen';
import RegisterScreen from './screens/RegisterScreen';


function App() {

	const cart = useSelector((state) => state.cart);
	const { cartItems } = cart;

	const userSignin = useSelector((state) => state.userSignin);
	const { userInfo } = userSignin;
	const dispatch = useDispatch();
	const signoutHandler = () => {
		dispatch(signout());
	};


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
											<Link to="/"><img src={logo} width="100" height="50" alt="" /></Link>
										</div>
										<div className="menu">
											<ul className="nav" id="nav">
												<ul className="nav" id="nav">
													<li><Link to="/products">Shop</Link></li>
													<li><Link to="/team">Team</Link></li>
													<li><Link to="/media">Media</Link></li>
													<li><Link to="/company">Company</Link></li>
													<li><Link to="/contact">Contact</Link></li>
												</ul>
											</ul>
										</div>
										<div class="header_right">
											<ul class="icon1 sub-icon1 profile_img">
												<li><Link class="active-icon c1" to="/cart">
													{cartItems.length > 0 && (
														<span className="badge">{cartItems.length}</span>
													)}
													<br />
												</Link>
													{userInfo ? (
														<div className="dropdown">
															<Link to="#">
																{userInfo.name} <i className="fa fa-caret-down"></i>{' '}
															</Link>
															<ul className="dropdown-content">
																<li>
																	<Link to="#signout" onClick={signoutHandler}>
																		Sign Out
                   		 											</Link>
																</li>
															</ul>
														</div>
													) : (
															<Link to="/signin">Sign In</Link>
														)}
												</li>
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
						<Route path="/signin" component={SigninScreen}></Route>
						<Route path="/register" component={RegisterScreen}></Route>
					</div>



					<div class="footer">
						<div class="container">
							<div class="row">
								<div class="col-md-3">
									<ul class="footer_box">
										<h4>Products</h4>
										<li><Link to="/comingSoon">Collections</Link></li>
										<li><Link to="/products">Apparel</Link></li>
										<li><Link to="/products">Accessories</Link></li>
									</ul>
								</div>
								<div class="col-md-3">
									<ul class="footer_box">
										<h4>About</h4>
										<li><Link to="/media">Media</Link></li>
										<li><Link to="/comingSoon">Sponserships</Link></li>
										<li><Link to="/team">Team</Link></li>
									</ul>
								</div>
								<div class="col-md-3">
									<ul class="footer_box">
										<h4>Customer Support</h4>
										<li><Link to="/contact">Contact Us</Link></li>
										<li><Link to="/comingSoon">Shipping and Order Tracking</Link></li>
										<li><Link to="/comingSoon">Easy Returns</Link></li>
										<li><Link to="/comingSoon">Warranty</Link></li>
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
											<li class="facebook"><Link to="https://www.facebook.com/FullySent" target="_blank"><span> </span></Link></li>
											<li class="instagram"><Link to="https://www.instagram.com/fllysnt/" target="_blank"><span> </span></Link></li>
											<li class="youtube"><Link to="https://www.youtube.com/channel/UCBmRiM8r5nf3wDWuQCCgH4g" target="_blank"><span> </span></Link></li>
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

