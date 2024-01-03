import { useReducer } from "react";
import { cartReducer, initialState } from "../reducers/cart";

export function useCartReducer(){
    const [state,dispatch] = useReducer(cartReducer,initialState)

    function addToCart(product){
        dispatch({actionType: 'ADD',product})
    }
    function removeToCart(id){
        dispatch({actionType: 'REMOVE',id})
    }
    function clearCart(){
        dispatch({actionType: 'CLEAR'})
    }
    return {state,addToCart,removeToCart,clearCart}
}