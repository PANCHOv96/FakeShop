export default function Filters({categories,handleButton}){
    return(
        <div className='filter'>
          <h2>Filters</h2>
          <div>
            <h3>Price</h3>
            <input type="range" />
            <p>From <span>$0</span> To <span>$100</span></p>
          </div>
          <div>
            <h3>Categories</h3>
            {categories && categories.map((category , index) =>
              <div key={`${category}-${index}`}>
                <input type="radio" onClick={() => handleButton({category:category,title:`${category}`})} id={category} name="drone" />
                <label htmlFor={category}>{category}</label>
              </div>)
            }
            <div>
              <input type="radio" onClick={() => handleButton({})} id='all' name="drone"  defaultChecked/>
              <label htmlFor="all">all</label>
            </div>
          </div>
        </div>
    )
}