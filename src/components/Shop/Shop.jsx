import React, { useEffect, useState } from 'react';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect( () =>{
        fetch('products.json')
        .then(res=> res.json())
        .then(data => setProducts(data))
    },[])

    return (
        <div className='shop-container'>
            <div className='products-container'>
                <h2>Products coming here: {products.length}</h2>
            </div>
            <div className='cart-container'>
                <h4>order summary</h4>
            </div>
            
        </div>
    );
};

export default Shop;