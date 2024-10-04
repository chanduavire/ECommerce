import React from 'react'
import './footer.scss'
export default function Footer() {
  return (
    <div className='footer'>
      <div className="top">
        <div className="item">
          <h4>Categories</h4>
          <span>Men</span>
          <span>Women</span>
          <span>Kids</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h4>Links</h4>
          <span>FaQ</span>
          <span>Stores</span>
          <span>Pages</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h4>About</h4>
          <span>Enjoy a seamless shopping experience with secure transactions and fast delivery. Find your perfect items and indulge in a convenient online shopping journey today! </span>
        </div>
        <div className="item">
          <h4>Contact</h4>
          <span>Have questions or need assistance? Our dedicated customer support team is here to help! Reach out to us via phone or email for prompt and friendly service</span>
        </div>
      </div>
      
      <div className="bottom">
        <div className="left">
          <span className='logo'>YourStore</span>
          <span className='copyright'>&copy; Copyright 2023 All copy rights received</span>
        </div>
        <div className="right">
          <img src="/img/footer.png" alt="" />
        </div>
      </div>
    </div>
  )
}
