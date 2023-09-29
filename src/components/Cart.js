import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart} from "../utils/cartSlice";

const Cart = () =>{
    const cartItems = useSelector((store)=>store.cart.items);
     const dispatch = useDispatch();
    const andlerClearCart = ()=>{
        dispatch(clearCart())
       console.log('clicked')
    }
       return(
        <div className=" text-center">
            <h1 className=" font-bold text-2xl m-4">Cart Items: </h1>
            <div className=" w-6/12 m-auto">
            <button className=" bg-black text-white font-bold rounded-lg p-2" onClick={andlerClearCart}> Clear Items</button>
                <ItemList items={cartItems} />
            </div>
        </div>
    )
}

export default Cart;