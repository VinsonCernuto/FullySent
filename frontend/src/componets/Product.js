import React from 'react'
import { Link } from 'react-router-dom';

export default function Product(props) {
    const { product } = props;
    return (
        <div>
            <div key={product._id} className="col-md-12 shop_box"><Link to={`/product/${product._id}`}>
                <img className="img-responsive" src={product.image} width="255" id="shop_img" alt={product.name} />
                <div className="shop_desc">
                    <h3><Link to="#">{product.name}</Link></h3>
                    <p>{product.description} </p>
                    <span>${product.price}</span><br />                    
                </div>
            </Link></div>
        </div>
    )
}
