import {
    Link
  } from 'react-router-dom'

  import React, { useState } from 'react';
  import ReactDOM from 'react-dom/client';
  import './shop.css';
  import PRODUCTS  from './products.js';
  import Product from './product.jsx'

const Shop = () => {
    console.log(PRODUCTS)
    console.log(Product)
    return (
        <div className='shop'>
            <div className='products'> {PRODUCTS.map((product) => (
                <Product key={product.id} data={product}/>
            ))}
            </div>
        </div>
    )
}

export default Shop;
