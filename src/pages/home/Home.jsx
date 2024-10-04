import React from 'react'
import Slider from '../../components/slider/Slider'
import FeaturedProduct from '../../components/featuredProducts/FeaturedProduct'
import Categories from '../../components/categories/Categories'
import Contact from '../../components/contact/Contact'

export default function Home() {
  return (
    <div className='home'>
      <Slider/>
      <FeaturedProduct type="Featured"/>
      <Categories/>
      <FeaturedProduct type="Trending"/>
      <Contact/>
    </div>
  )
}
