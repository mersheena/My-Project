import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom';
import { ShopContext } from '../../context/ShopContent';

const Navbar = () => {

const [ menu,setMenu] = useState("shop");
const { getTotalCartItems }= useContext(ShopContext)


  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo} alt=""/>
            <p>My Fashion</p>
        </div>
        <ul className='nav-menu'>
            <li onClick={()=>{setMenu("shop")}}><Link to='/'>HOME</Link>{menu === "shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("mens")}}><Link to='/mens'>Mens</Link>{menu === "mens"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("womens")}}><Link to='/womens'>Women</Link>{menu === "womens"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("kids")}}><Link to='/kids'>Kids</Link>{menu === "kids"?<hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
            <Link to='/login'><button>login</button></Link>
            <Link to='/cart'><img src={cart_icon} alt=''/></Link>
            <div className='nav-cart-count'>{getTotalCartItems()}</div>
        </div>
    </div>
  )
}

export default Navbar