export function useCategories({getAPI}){
    const [ categories , setCategories] = useState();
    useEffect(()=>{
      if (!getAPI) return ;
      let resultCategories = [... new Set(getAPI.map(product => product.category))]
      setCategories(resultCategories)
    },[getAPI]);
    return { categories }
  }