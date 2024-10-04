import React from 'react'
import './featuredProduct.scss'
import Card from '../card/Card'

import useFetch from '../../hooks/useFetch'
const FeaturedProduct = ({type}) => {
    

    const {data,isLoading,error}=useFetch(`/products?populate=*&[filters][type][$eq]=${type}`)
  return (
    <div className='featuredProducts'>
      <div className="top">
        <h3>{type} Products</h3>
        <p>Discover top-notch products that combine quality and style on YourStore. From fashion apparel and innovative gadgets to must-have home essentials, we have everything for everyone. Shop now and experience the convenience of secure transactions and swift delivery. Elevate your online shopping with us today!
        </p>
      </div>
      <div className="bottom">
        {error?"Image not found":(isLoading?"loading":data.map(item=>(
            <Card item={item} key={item.id}/>
        )))}
      </div>
    </div>
  )
}

export default FeaturedProduct
