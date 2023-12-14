import Categories from '../assets/Categories.svg'
import Login from '../assets/Login.svg'
import Cart from '../assets/Cart.svg'

export default function Navbar(){
    return(
        <div className='navbar'>
            <div>
                <h1>FakeShop</h1>
                <input type="text" placeholder="Search"/>
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
                    <p>Cart: 6</p>
                </div>
            </div>
        </div>
    )
}