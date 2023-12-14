import { useProducts } from './hooks/useProducts';
import { useSearch } from './hooks/useSearch';
import { useCategories } from './hooks/useCategories';
import Navbar from './components/navbar';
import Filters from './components/filters';
import './App.css'

function App() {
  const { getAPI } = useProducts();
  const { products , refreshProducts } = useSearch({getAPI})
  const { categories } = useCategories({getAPI})
    
  function handleButton(category){
    refreshProducts(category)
  }

  return (
    <>
      <Navbar/>
      <div className='container'>
        <div className='products'>
          {products && products.map(product => 
            <div key={product.id} className='product'>
              {product.rating.rate}
              <img src={product.image} alt="" />
              {product.title}
              ${product.price}
            </div>)
          }
        </div>
        <Filters categories={categories} handleButton={handleButton}/>
      </div>
    </>
  )
}

export default App
