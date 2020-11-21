import React, { useEffect } from 'react'
import Product from '../componets/Product'
import LoadingBox from '../componets/LoadingBox';
import MessageBox from '../componets/MessageBox';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';

export default function ProductScreen() {
    const dispatch = useDispatch();
    const productList = useSelector((state) => state.productList);
    const { loading, error, products } = productList
    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch]);
    return (
        <div>
            {loading ? (
                <LoadingBox></LoadingBox>
            ) : error ? (
                <MessageBox variant="danger">{error}</MessageBox>
            ) : (
                        <div className="shop_top">
                            <div className="container">
                                <div className="row shop_box-top">
                                    {products.map(product =>
                                        <Product key={product._id} product={product}></Product>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}
        </div>
    );
}
