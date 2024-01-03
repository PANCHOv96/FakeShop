import Categories from '../assets/Categories.svg'
import Login from '../assets/Login.svg'
import Cart from '../assets/Cart.svg'
import { CartContext } from '../context/cart'
import { useContext } from 'react';

export default function Navbar(){
    const {cart} = useContext(CartContext);

    return(
        <div className='navbar'>
            <div>
                <h1>FakeShop</h1>
                <input type="text" placeholder="Search" disabled/>
                <div className='button'>
                    <img src={Categories} alt='Icons Categories' />
                    <p>Categories</p>
                </div>
            </div>
            <div>
                <div className='button'>
                    <img src={Login} alt='Icon Login' />
                    <p>Login</p>
                </div>
                <div className='button cart'>
                    <img src={Cart} alt='Icon Cart' />
                    <p>Cart: {cart.length}</p>
                </div>
            </div>
        </div>
    )
}