import { useProducts } from './hooks/useProducts';
import { useSearch } from './hooks/useSearch';
import { useCategories } from './hooks/useCategories';
import Navbar from './components/navbar';
import Filters from './components/filters';
import Products from './components/products';
import Footer from './components/Footer/footer'
import './App.css'
import { useState } from 'react';
import { CartProvider } from './context/cart';
import { ProductsProvider } from './context/products';

function App() {
  const [ title,setTitle] = useState('All')
    
  function handleButton({title='All'}){
    setTitle(title.charAt(0).toUpperCase() + title.slice(1));
  }

  return (
    <>
      <CartProvider>
        <Navbar/>
        <h2>{title && title}</h2>
        <div className='container'>
          <ProductsProvider>
            <Products/>
            <Filters handleButton={handleButton}/> 
          </ProductsProvider>   
        </div>
      </CartProvider>
      <Footer/>
    </>
  )
}

export default App
