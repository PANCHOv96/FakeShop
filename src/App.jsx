import { useProducts } from './hooks/useProducts';
import { useSearch } from './hooks/useSearch';
import { useCategories } from './hooks/useCategories';
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
