import React, { useContext, useRef, useState } from 'react'
import "./Navbar.css"
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
import nav_drowp from "../Assets/image.png"
const Navbar = () => {
    const [menu, setMenu] = useState("shop");
    const {getTotalCart} = useContext(ShopContext);
    const menuRef = useRef();
    const dropDown = (e)=>{
      menuRef.current.classList.toggle('nav-menu-visible');
    }
  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt="logo" />
        <p>SHOPP</p>
        </div>
        <img src={nav_drowp} className="nav-dropdown" onClick={dropDown} alt="" />
        <ul ref={menuRef} className='nav-menu'>
            <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:'none'}} to='/'>Shop</Link> {menu==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("mens")}}><Link style={{textDecoration:'none'}} to='/mens'>Men</Link>{menu==="mens"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("womens")}}><Link style={{textDecoration:'none'}} to='/womens'>Womens</Link>{menu==="womens"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration:'none'}} to='/kids'>Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
        </ul>
        <div className='nav-login-cart'>
            
          {localStorage.getItem('auth-token')?<button onClick={()=>{localStorage.removeItem("auth-token"); window.location.replace("/")}}> Logout</button>:<Link style={{textDecoration:'none'}} to='/login'><button>Login</button></Link>}
            
            <Link style={{textDecoration:'none'}} to='/cart'><img src={cart_icon} alt="cart" /></Link>
            <div className='nav-cart-count'>{getTotalCart()}</div>
        </div>
      
    </div>
  )
}

export default Navbar
