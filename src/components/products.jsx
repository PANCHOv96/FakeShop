import Star from '../assets/Star.svg'
import CartAdd from '../assets/CartAdd.svg'
import { useContext } from 'react'
import { CartContext } from '../context/cart'
import { ProductsContext } from '../context/products'

export default function Products(){
    const {cart, addToCart , removeToCart } = useContext(CartContext)
    const {products} = useContext(ProductsContext)
    
    function verificar(id){
        return cart.some(item => item.product.id == id)
    }

    return(
        <div className='products'>
          {products && products.map(product =>
                <div key={product.id} className={`product ${verificar(product.id) && 'add'}`}>
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
                            <img src={CartAdd} alt="" className='cart' onClick={() => verificar(product.id) ? removeToCart(product.id) :addToCart(product)} id={product.id}/>
                        </div>
                    </div>
                </div>

            )
          }
        </div>
    )
}