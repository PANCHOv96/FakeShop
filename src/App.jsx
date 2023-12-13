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

function useCategory({getAPI}){
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

function App() {
  const { getAPI } = useProducts();
  const { products , refreshProducts } = useCategory({getAPI})
  
  
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
      <button onClick={() => handleButton(`men's clothing`)}>MEN</button>
      <button onClick={() => handleButton(`women's clothing`)}>WOMEN</button>
      <button onClick={() => handleButton()}>All</button>
    </>
  )
}

export default App
