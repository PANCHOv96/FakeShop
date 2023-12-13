import { useEffect, useState } from 'react'
import './App.css'

function useProducts(){
  const [getAPI,setGetApi] = useState();
  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=> setGetApi(json))
  }, []);
  return {getAPI};
}

function useSearch({getAPI}){
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

function useCategories({getAPI}){
  const [ categories , setCategories] = useState();
  useEffect(()=>{
    if (!getAPI) return ;
    let resultCategories = [... new Set(getAPI.map(product => product.category))]
    setCategories(resultCategories)
  },[getAPI]);
  return { categories }
}

function App() {
  const { getAPI } = useProducts();
  const { products , refreshProducts } = useSearch({getAPI})
  const { categories } = useCategories({getAPI})
  
  
  
  function handleButton(category){
    refreshProducts(category)
  }

  return (
    <>
      {products && products.map(product => 
        <div key={product.id}>
          {product.title}
        </div>)
      }
      {categories && categories.map((category , index) =>
        <div key={`${category}-${index}`}>
          <button onClick={() => handleButton(category)}>{category}</button>
        </div>)
      }
      <button onClick={() => handleButton()}>All</button>
    </>
  )
}

export default App
