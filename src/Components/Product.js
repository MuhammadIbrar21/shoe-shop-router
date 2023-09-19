import React from 'react';
import { Link } from 'react-router-dom';
import Shoes from './../shoes.json';
import './../App.css';

function Product() {

    console.log(Shoes);

    return (
        <div>
            <h1>Welcome to Product</h1>
            <div className="productContainer">
                {Object.keys(Shoes).map(keyName => {
                    const shoe = Shoes[keyName];
                    return (
                        <Link key={keyName} 
                        className="link" 
                        to={`/product/${keyName}`}>
                            <h4>{shoe.name}</h4>
                            <img src={shoe.img} height={150} />
                        </Link>)
                })}
            </div>
        </div>
    );
}

export default Product;
