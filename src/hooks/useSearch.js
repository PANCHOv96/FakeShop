import { useEffect, useState } from 'react'

export function useSearch({getAPI}){
    const [ products , setProducts ] = useState();
    function refreshProducts(category){
      let result = getAPI;
      if (category){
        result = getAPI.filter( product => product.category === category)
      }
      setProducts(result)
    }
    useEffect(()=>{
      setProducts(getAPI)
    },[getAPI]);
    return { products , refreshProducts}
  }