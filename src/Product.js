import React from 'react';




const Product = (props) => {

    return (
        <div>

            <div className="product_price">
                {props.price}
            </div>

            <div className="product_name">
                {props.name}
            </div>


        </div>
    );
};

export default Product;