import { useProducts } from './hooks/useProducts';
import { useSearch } from './hooks/useSearch';
import { useCategories } from './hooks/useCategories';
import Navbar from './components/navbar';
import Filters from './components/filters';
import Products from './components/products';
import './App.css'
import { useState } from 'react';

function App() {
  const { getAPI } = useProducts();
  const { products , refreshProducts , listCart , cartShop} = useSearch({getAPI})
  const { categories } = useCategories({getAPI})
  const [ title,setTitle] = useState('All')
    
  function handleButton({category,title='All',cart}){
    refreshProducts({category,cart})
    setTitle(title.charAt(0).toUpperCase() + title.slice(1));
  }

  return (
    <>
      <Navbar ProductsOnCart={cartShop && cartShop.length} handleButton={handleButton}/>
      <h2>{title && title}</h2>
      <div className='container'>
        <Products products={products} listCart={listCart} cartShop={cartShop}/>
        <Filters categories={categories} handleButton={handleButton}/> 
      </div>
    </>
  )
}

export default App
