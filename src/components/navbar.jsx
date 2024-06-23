import React from 'react';
import {Link}  from "react-router-dom";
import {ShoppingCart } from 'phosphor-react';
import logo from '../assets/demaPhotos/logo.png'
import '../components/navbar.css'

export const Navbar = () => {
  return (

    <div className='navbar'>
        <img src={logo} alt=''/>
        <div className='links'>
            <Link to='/'>Shop</Link>
            <Link to='/cart'> <ShoppingCart size={32}/></Link>
        </div>
    </div>
  )
}
