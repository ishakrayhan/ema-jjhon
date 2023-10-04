import React, { useEffect, useState } from 'react';
import './Shop.css'

const Shop = () => {
    const [products, setProducts]=useState([])
    useEffect(() =>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },)
    return (
        <div>
            <div className="shop-container">
                <div className="products-container">
                        <h2>Products comming here:{products.length}</h2>
                </div>
                <div className="card-container">
                    <h2>order now</h2>
                </div>
            </div>
        </div>
    );
};

export default Shop;