
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { detailsProduct } from '../actions/productActions';
import LoadingBox from '../componets/LoadingBox';
import MessageBox from '../componets/MessageBox';


export default function ProductItemScreen(props) {
    const dispatch = useDispatch();
    const productId = props.match.params.id;
    const [qty, setQty] = useState(1);
    const productDetails = useSelector((state) => state.productDetails);
    const { loading, error, product } = productDetails;

    useEffect(() => {
        dispatch(detailsProduct(productId));
    }, [dispatch, productId]);
    const addToCartHandler = () => {
        props.history.push(`/cart/${productId}?qty=${qty}`);
    };





    return (
        <div>
            {loading ? (
                <LoadingBox></LoadingBox>
            ) : error ? (
                <MessageBox variant="danger">{error}</MessageBox>
            ) : (
                        <div className="main">
                            <div className="shop_top">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-9 single_left">
                                            <div className="single_image">
                                                <ul id="etalage">
                                                    <img src={product.image} width="500" height="500" className="img-responsive"
                                                        alt="" />

                                                </ul>
                                            </div>
                                            <div className="single_right">
                                                <h3>{product.name}</h3>
                                                <p className="m_10">{product.descriptionLong}</p>
                                                <ul className="options">
                                                    <h4 className="m_12">Select a Size</h4>
                                                    <li><a href="#">X-Small</a></li>
                                                    <li><a href="#">Small</a></li>
                                                    <li><a href="#">Med</a></li>
                                                    <li><a href="#">Large</a></li>
                                                    <li><a href="#">X-Large</a></li>
                                                    <li><a href="#">XX-Large</a></li>
                                                </ul>
                                            </div>
                                            <div className="clear"> </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="box-info-product">
                                                <p className="price2">${product.price}</p>
                                                <div>Status</div>
                                                <div>
                                                    {product.countInStock > 0 ? (
                                                        <span className="alert-success">In Stock</span>
                                                    ) : (
                                                            <span className="alert-danger">Unavailable</span>
                                                        )}
                                                </div>
                                                {product.countInStock > 0 && (
                                                    <>
                                                        <ul className="prosuct-qty">
                                                            <span>Quantity:</span>
                                                            <select
                                                                value={qty}
                                                                onChange={(e) => setQty(e.target.value)}
                                                            >
                                                                {[...Array(product.countInStock).keys()].map(
                                                                    (x) => (
                                                                        <option key={x + 1} value={x + 1}>
                                                                            {x + 1}
                                                                        </option>
                                                                    )
                                                                )}
                                                            </select>
                                                        </ul>
                                                        <button onClick={addToCartHandler} name="Submit" className="exclusive">
                                                            <span>Add to cart</span>
                                                        </button>
                                                    </>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="desc">
                                        <h4>Description</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt
                                        ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
                                        tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum
                                        iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu
                                        feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent
                                        luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta
                                        nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum.
                                        Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem.
						Investigationes demonstraverunt lectores</p>
                                    </div>
                                    <div className="row">
                                        <h4 className="m_11">Related Products in the same Category</h4>
                                        <div className="col-md-4 product1">
                                            <img src="./images/redboxlogo.jpg" width="400" className="img-responsive" id="image-single" alt="" />
                                            <div className="shop_desc"><a href="single.html">
                                            </a>
                                                <h3><a href="single.html"></a><a href="#">FLLYSNT Red Tee</a></h3>
                                                <p>Lorem ipsum consectetuer adipiscing </p>
                                                <span className="actual">$25.00</span><br />
                                                <ul className="buttons">
                                                    <li className="cart"><a href="#">Add To Cart</a></li>
                                                    <li className="shop_btn"><a href="#">Read More</a></li>
                                                    <div className="clear"> </div>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-md-4 product1">
                                            <img src="./images/boxhoddie.jpg" width="400" className="img-responsive" id="image-single" alt="" />
                                            <div className="shop_desc"><a href="single.html">
                                            </a>
                                                <h3><a href="single.html"></a><a href="#">FLLYSNT Hoodie</a></h3>
                                                <p>Lorem ipsum consectetuer adipiscing </p>
                                                <span className="actual">$50.00</span><br />
                                                <ul className="buttons">
                                                    <li className="cart"><a href="#">Add To Cart</a></li>
                                                    <li className="shop_btn"><a href="#">Read More</a></li>
                                                    <div className="clear"> </div>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <img src="./images/hat.jpg" width="400" className="img-responsive" id="image-single" alt="" />
                                            <div className="shop_desc"><a href="single.html">
                                            </a>
                                                <h3><a href="single.html"></a><a href="#">FLLYSNT Hat</a></h3>
                                                <p>Lorem ipsum consectetuer adipiscing </p>
                                                <span className="actual">$20.00</span><br />
                                                <ul className="buttons">
                                                    <li className="cart"><a href="#">Add To Cart</a></li>
                                                    <li className="shop_btn"><a href="#">Read More</a></li>
                                                    <div className="clear"> </div>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
        </div>
    )
}