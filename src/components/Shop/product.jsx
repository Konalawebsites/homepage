import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

const Product = (props) => {
    const { id, productName, price, productImage } = props.data;
    const { addToCart, cartItems } = useContext(ShopContext);

    const cartItemAmount = cartItems[id]

    return (
        <div className="product"> 
            <img className="image-shop" src={productImage} />
            <div className="description-shop"> 
            <p> 
                <b>{productName}</b>
            </p>
            <p> {price},00 € </p>
            <button className="AddToCartBttn" onClick={() => addToCart(id)}>
                Add to Cart {cartItemAmount >0 && <> ({cartItemAmount}) </>}
                </button>
            </div>

        </div>
        
    )
};

export default Product;

