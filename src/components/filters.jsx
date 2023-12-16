import { useState } from "react"

export default function Filters({categories,handleButton}){
    const [minPrice,setMinPrice] = useState(0);
    const [maxPrice,setMaxPrice] = useState(100);
    const [category,setCategory] = useState();
    const [title,setTitle] = useState();


    function handclick({category,title}){
      setCategory(category);
      setTitle(title);
      handleButton({category,title,minPrice,maxPrice})
    }

    function handleRange(e){
      let newMaxPrice = parseInt(e.target.value)
      setMaxPrice(newMaxPrice);
      handleButton({category,title,minPrice,maxPrice})
    }

    return(
        <div className='filter'>
          <h2>Filters</h2>
          <div>
            <h3>Price</h3>
            <input type="range" onChange={handleRange} min={0} max={1000} defaultValue={maxPrice}/>
            <p>From <span>${minPrice}</span> To <span>${maxPrice}</span></p>
          </div>
          <div>
            <h3>Categories</h3>
            {categories && categories.map((category , index) =>
              <div key={`${category}-${index}`}>
                <input type="radio" onClick={(e) => handclick({category:e.target.id,title:e.target.id})} id={category} name="drone" />
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