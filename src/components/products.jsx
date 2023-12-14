import Star from '../assets/Star.svg'
import CartAdd from '../assets/CartAdd.svg'

export default function Products({products,listCart,cartShop}){
    
    function handleclick(e){
        listCart(e.target.id)
    }

    return(
        <div className='products'>
          {products && products.map(product => 
            <div key={product.id} className={`product ${cartShop.includes(product) && 'add'}`}>
                <div className='rate'>
                    <img src={Star} alt="Icon Star" />
                    {product.rating.rate}
                </div>
                <img src={product.image} alt="Img Product" />
                <div className='info'>
                    {product.title}
                    <div className='price'>
                        <span>
                            ${product.price}
                        </span>
                        <img src={CartAdd} alt="" className='cart' onClick={handleclick} id={product.id}/>
                    </div>
                </div>
            </div>)
          }
        </div>
    )
}