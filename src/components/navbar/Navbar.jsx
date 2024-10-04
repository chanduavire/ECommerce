import React, { useState } from 'react'
import './navbar.scss'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import {Link} from 'react-router-dom'
import Cart from '../cart/Cart';
import { useSelector } from 'react-redux';
export default function Navbar() {
    const [open,setOpen]=useState(false)
    const products=useSelector(state=>state.cart.products)

    const totalItems=()=>{
      let total=0;
      products.forEach(item=>
      total+=item.quantity
      )
      return total;
    }
  return (
    <div className='navbar'>
        <div className="wrapper">
            <div className="left">
                <div className="item">
                    <img src="/img/Ind.png" alt="" />
                    <KeyboardArrowDownIcon/>
                </div>
                <div className="item">
                    <span>IND</span>
                    <KeyboardArrowDownIcon/>
                </div>
                <div className="item">
                    <Link className='link' to="/products/1">Women</Link>
                </div>
                <div className="item">
                    <Link className='link' to="/products/2">Men</Link>
                </div>
                <div className="item">
                    <Link className='link' to="/products/3">Kids</Link>
                </div>
            </div>
            <div className="center">
                <Link className='link' to="/">YourStore</Link>
            </div>
            <div className="right">
                <div className="item">
                    <Link className='link' to="/">HomePage</Link>
                </div>
                <div className="item">
                    <Link className='link' to="/">About</Link>
                </div>
                <div className="item">
                    <Link className='link' to="/">Contact</Link>
                </div>
                <div className="item">
                    <Link className='link' to="/">Stores</Link>
                </div>
                <div className="icons">
                    <SearchOutlinedIcon/>
                    <Person2OutlinedIcon/>
                    <FavoriteBorderOutlinedIcon/>
                    <div className="cartIcon" onClick={()=>setOpen(!open)}>
                        <ShoppingBagOutlinedIcon/>
                        <span>{products.length}</span>
                    </div>
                    
                </div>
            </div>
        </div>
        {open && <Cart/>}
      
    </div>
  )
}
