import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Product from '../componets/Product'
import LoadingBox from '../componets/LoadingBox';
import MessageBox from '../componets/MessageBox';

export default function ProductScreen() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const { data } = await axios.get('/api/products');
                setLoading(false);
                setProducts(data);
            } catch (err) {
                setError(err.message);
                setLoading()
            }
        }
        fetchData();
    }, [])
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
