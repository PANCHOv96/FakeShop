import { useEffect, useState } from 'react'

export function useSearch({getAPI}){
    const [ products , setProducts ] = useState();

    useEffect(()=>{
      setProducts(getAPI)
    },[getAPI]);

    return { products , setProducts}
  }