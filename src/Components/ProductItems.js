import React from 'react';
import { useParams } from 'react-router-dom';
import Shoes from './../shoes.json';

function ProductItems() {

    const { id } = useParams();
    const shoe = Shoes[id];

    if (!shoe)
        return <h2>Product Not Found!</h2>

    return (
        <div>
            <h1>Welcome to Product Items</h1>
            <div className="link">
                <h4>{shoe.name}</h4>
                <img src={shoe.img} height={500} />
            </div>

        </div>
    );
}

export default ProductItems;
