import { useEffect, useState } from 'react'

export function useSearch({getAPI}){
    const [ products , setProducts ] = useState();
    const [ cartShop , setCartShop ] = useState([]);

    function listCart(productId){
      let newCartShop = [...cartShop]
      let product = getAPI.find(product => product.id == productId)
      newCartShop.push(product)
      if(cartShop.includes(product)){
        newCartShop = cartShop.filter(product => product.id != productId)
      }
      setCartShop(newCartShop);
      return
    }

    function refreshProducts({category,cart}){
      if(cart){
        setProducts(cartShop);
        return
      }
      let result = getAPI;
      if (category){
        result = getAPI.filter( product => product.category === category)
      }
      setProducts(result)
    }
    useEffect(()=>{
      setProducts(getAPI)
    },[getAPI]);
    return { products , refreshProducts , cartShop , listCart}
  }