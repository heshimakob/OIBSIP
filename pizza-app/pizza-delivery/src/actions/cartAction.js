import {dispatch  } from "react-redux";
export const addToCart=(pizza,quantity,varient)=>(dispatch,getState)=>{
    var cartItem={
        name:pizza.name,
        _id:pizza._id,
        image:pizza.image,
        varient:varient,
        quantity:quantity,
        prices:pizza.prices,
        price:pizza.prices[0][varient]*quantity,
    };
    dispatch({type:"ADD_TO_CART", payload:cartItem});
    localStorage.setItem("cartItems" ,JSON.stringify(getState().cartReducer.cartItems));
};