import React , {useState} from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'
import logo from '../Assets/logofinall.jpg'
import cart_icon from '../Assets/cart_icon.png'
import {useContext} from 'react';
import {ShopContext} from '../../Context/ShopContext'

const Navbar = () => {

  const [menu,setMenu]=useState("shop");
  const {getTotalCartItems}=useContext(ShopContext);
  return (
    <div className='navbar'>
        <div className= "nav-logo">
            <img src={logo} alt =""/>
            <p>SWOOSH</p>
        </div>
        <ul className="nav-menu">
            <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration: 'none'}} to ='/'>HOME</Link>{menu==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("bats")}}><Link style={{textDecoration: 'none'}} to ='/bats'>BATS</Link>{menu==="bats"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("balls")}}><Link style={{textDecoration: 'none'}} to ='/balls'>BALLS</Link>{menu==="balls"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("clothes")}}><Link style={{textDecoration: 'none'}} to ='/clothes'>CLOTHING</Link>{menu==="clothes"?<hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
            <Link to ='/login'><button>Login </button></Link>

            <Link to='/cart'><img src={cart_icon} alt=" "/></Link>
            <div className="nav-cart-count"> {getTotalCartItems()}</div>
        </div>
    </div>
  )
}


export default Navbar



