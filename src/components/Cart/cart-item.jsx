import React, {useContext} from "react";
import { ShopContext } from "../../context/shop-context";


export const CartItem = (props) => {
    const { id, productName, price, productImage } = props.data;
    const { cartItems, addToCart, removeFromCart, updateCartItemCount} = useContext(ShopContext);
    const cartItemAmount = cartItems[id];

    return (
        <div className="cartItem">
            <img className="image" src={productImage}></img>
            <div className="description">
                <p> 
                    <b>{productName}</b>
                </p>
                <p> {price},00 €</p>
            </div>
            <div className="amount">
                <p> 
                    <b>AMOUNT</b>
                </p>

            <div className="countHandler">
                <button onClick={() => removeFromCart(id)}>-</button>
                <input value ={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value, id))}/>
                <button onClick={() => addToCart(id)}>+</button>

            </div>
            </div>
            <div className="amount">
                <p> 
                    <b>PRICE</b>
                </p>
                <p> {{price}*{cartItemAmount}} </p>
            </div>
            
        </div>
    );
};