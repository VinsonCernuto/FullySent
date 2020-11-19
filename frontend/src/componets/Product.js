import React from 'react'


export default function Product(props) {
    const { product } = props;
    return (
        <div>
            <div key={product._id} className="col-md-12 shop_box"><a href={`/product/${product._id}`}>
                <img className="img-responsive" src={product.image} width="255" id="shop_img" alt={product.name} />
                <div className="shop_desc">
                    <h3><a href="#">{product.name}</a></h3>
                    <p>{product.description} </p>
                    <span>{product.price}</span><br />
                    <ul className="buttons">
                        <li className="cart"><a href="#">Add To Cart</a></li>
                        <li className="shop_btn"><a href="#">Read More</a></li>
                    </ul>
                </div>
            </a></div>
        </div>
    )
}
