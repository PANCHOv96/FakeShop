import { useContext, useRef, useState } from "react"
import { ProductsContext } from "../context/products";

export default function Filters({handleButton}){
    const {categories , filterCategory } = useContext(ProductsContext)
    const minPrice = useRef(0);
    const [maxPrice,setMaxPrice] = useState(100);
    const [title,setTitle] = useState();


    function handclick({title}){
      setTitle(title);
      handleButton({title})
      filterCategory({category:title,minPrice:minPrice.current,maxPrice})
    }

    function handleRange(e){
      let newMaxPrice = parseInt(e.target.value)
      setMaxPrice(newMaxPrice);
      handleButton({title})
      filterCategory({category:title,minPrice:minPrice.current,maxPrice})
    }

    return(
        <div className='filter'>
          <h2>Filters</h2>
          <div>
            <h3>Price</h3>
            <input type="range" onChange={handleRange} min={0} max={1000} defaultValue={maxPrice}/>
            <p>From <span>${minPrice.current}</span> To <span>${maxPrice}</span></p>
          </div>
          <div>
            <h3>Categories</h3>
            {categories && categories.map((category , index) =>
              <div key={`${category}-${index}`}>
                <input type="radio" onClick={(e) => handclick({title:e.target.id})} id={category} name="drone" />
                <label htmlFor={category}>{category}</label>
              </div>)
            }
            <div>
              <input type="radio" onClick={() => handclick({})} id='all' name="drone"  defaultChecked/>
              <label htmlFor="all">all</label>
            </div>
          </div>
        </div>
    )
}