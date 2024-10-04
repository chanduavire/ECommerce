import React from 'react'
import Card from '../card/Card'
import './lists.scss';
import useFetch from '../../hooks/useFetch';
const Lists = ({subCats,maxPrice,sort,catId}) => {
    const {data,isLoading,error}=useFetch(`/products?populate=*&[filters][categories][id]=${catId}${subCats.map(item=>`&[filters][sub_categories][id][$eq]=${item}`)}&[filters][newPrice][$lte]=${maxPrice}&sort=newPrice:${sort}`)
    
  return (
    <div className='list'>
      {isLoading?"loading":data?.map(item=>(
        <Card item={item} key={item.id}/>
      ))}
    </div>
  )
}

export default Lists
