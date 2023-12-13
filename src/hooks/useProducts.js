export function useProducts(){
    const [getAPI,setGetApi] = useState();
    useEffect(()=>{
      fetch('https://fakestoreapi.com/products')
              .then(res=>res.json())
              .then(json=> setGetApi(json))
    }, []);
    return {getAPI};
  }