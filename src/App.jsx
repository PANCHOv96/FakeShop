import { useProducts } from './hooks/useProducts';
import { useSearch } from './hooks/useSearch';
import { useCategories } from './hooks/useCategories';
import Navbar from './components/navbar';
import Filters from './components/filters';
import Products from './components/products';
import Footer from './components/Footer/footer'
import './App.css'
import { useState } from 'react';

function App() {
  const { getAPI } = useProducts();
  const { products , refreshProducts , listCart , cartShop} = useSearch({getAPI})
  const { categories } = useCategories({getAPI})
  const [ title,setTitle] = useState('All')
    
  function handleButton({category,title='All',cart,minPrice=0,maxPrice=1000}){
    refreshProducts({category,cart,minPrice,maxPrice})
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
      <Footer/>
    </>
  )
}

export default App
