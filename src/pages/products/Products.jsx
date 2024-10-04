import React, { useState } from 'react'
import Lists from '../../components/lists/Lists'
import { useParams } from 'react-router-dom'
import './products.scss'
import useFetch from '../../hooks/useFetch'

export default function Products() {

  const catId=parseInt(useParams().id)
  const [maxPrice,setMaxPrice]=useState(500)
  const [sort,setSort]=useState('asc');
  const [selectedSubCats,setSelectedSubCats]=useState([]);
  const {data,isLoading,error}=useFetch(`/sub-categories?[filters][categories][id][%eq]=${catId}`)
  console.log(data)


  const handleChange=(e)=>{
    const value=e.target.value;
    const isChecked=e.target.checked;
    setSelectedSubCats(isChecked?[...selectedSubCats,value]:selectedSubCats.filter((item)=>item!==value))
    
  }
  
  return (
    <div className='products'>
      <div className="left">
        <div className="filterItem">
          <h3>Product Categories</h3>

          {data?.map((item)=>(
            <div className="inputItem" key={item.id}>
            <input type="checkbox"  id={item.id} value={item.id} onChange={handleChange}/>
            <label htmlFor={item.id}>{item.attributes.title}</label>
          </div>
          ))}
        
        </div>
        <div className="filterItem">
          <h3>Filter by price</h3>
          <div className="inputItem">
            <span>500</span>
            <input type="range" min={500} max={10000} onChange={(e)=>setMaxPrice(e.target.value)}/>
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="filterItem">
          <h3>Sort by</h3>
          <div className="inputItem">
            <input type="radio" id='asc' value="asc" name='newPrice' onChange={(e)=>setSort('asc')}/>
            <label htmlFor="asc">Price (Lowest first)</label>
          </div>
          <div className="inputItem">
            <input type="radio" id='desc' value="desc" name='newPrice' onChange={(e)=>setSort('desc')}/>
            <label htmlFor="desc">Price (Highest first)</label>
          </div>
        </div>
      </div>
      <div className="right">
        <img src="https://www.aachho.com/cdn/shop/files/web-banner-4_b5067e59-7c68-40b4-baee-daf23468c333_1400x.png?v=1689398679" alt="" className='catImg'/>
        <Lists catId={catId} maxPrice={maxPrice} sort={sort} subCats={selectedSubCats}/>
      </div>
    </div>
  )
}
