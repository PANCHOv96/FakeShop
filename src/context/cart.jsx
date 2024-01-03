import { createContext } from "react";
import { useCartReducer } from "../actions/cart";

export const CartContext = createContext();

export function CartProvider({children}){
    const {state , addToCart , removeToCart , clearCart} =  useCartReducer();

    return(
        <CartContext.Provider value={{cart:state ,addToCart , removeToCart ,clearCart}}>
            {children}
        </CartContext.Provider> 
    )
}