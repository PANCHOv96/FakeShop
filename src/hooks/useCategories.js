import { useMemo } from 'react'

export function useCategories({getAPI}){
    // se utilizo useMemo para memorizar todas las categorias y de esta forma evitar que se calcule de nuevo
    const categories = useMemo(()=>{
      if (!getAPI) return ;
      let resultCategories = [... new Set(getAPI.map(product => product.category))]
      return resultCategories
    },[getAPI])

    return { categories }
  }