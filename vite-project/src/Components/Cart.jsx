import CartItem from "./CartItem";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import UseFetch from "./UseFetch";
import CartSlice from "./Utils/CartSlice";
import { clearCart } from "./Utils/CartSlice";


function Cart() {
    // to see what deta add in cart items of cartslice from when i hit add to cart button
    //Fetch the cart items from the Redux store

    const select = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();

    function handleClearCart() {
        dispatch(clearCart());
    };


    return (

        <div className="min-h-screen flex flex-col justify-between font-serif">
            <div className="cart-container font-serif flex-grow">
                {select.length > 0 ? (
                    <>
                        {select.map((data) => (
                            <CartItem key={data.id} cartProduct={data} />
                        ))}
                        <button
                            onClick={handleClearCart}
                            className="mt-4 px-4 py-2 bg-red-500 ml-8 text-white rounded-lg hover:bg-red-600"
                        >
                            Clear Cart
                        </button>
                    </>
                ) : (
                    <p className="text-orange-400 text-lg text-center font-extrabold">Your cart is empty.</p>
                )}
            </div>

        </div>



    )
}

export default Cart;