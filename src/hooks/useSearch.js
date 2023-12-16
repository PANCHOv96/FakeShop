import { useEffect, useState } from 'react'

export function useSearch({getAPI}){
    const [ products , setProducts ] = useState();
    const [ cartShop , setCartShop ] = useState([]);

    // Agrega o remueve los los productos del carrito.
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

    // Actualiza los productos que se tienen que mostrar , dependiendo la categoria 
    // o si quieren ver el carrito de compras.
    function refreshProducts({category,cart,minPrice,maxPrice}){
      if(cart){
        setProducts(cartShop);
        return
      }
      let result = getAPI.filter( product => product.price >= minPrice && product.price <= maxPrice);
      if (category){
        result = getAPI.filter( product => 
          (
            product.category === category &&
            product.price >= minPrice &&
            product.price <= maxPrice
          )
        )
      }
      setProducts(result)
    }
    useEffect(()=>{
      setProducts(getAPI)
    },[getAPI]);
    return { products , refreshProducts , cartShop , listCart}
  }