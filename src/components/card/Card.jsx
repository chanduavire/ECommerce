import React from 'react'
import './card.scss'
import {Link} from 'react-router-dom'
const Card = ({item}) => {
  return (
    <Link className='link' to={`/product/${item.id}`}>
    <div className='card'>
      <div className="image">
        {item?.attributes.isNew && <span className='newSeason'>New Season</span>}
        <img src={process.env.REACT_APP_UPLOAD_URL+item.attributes?.img?.data?.attributes?.url} alt="" className='mainImg'/>
        <img src={process.env.REACT_APP_UPLOAD_URL+item.attributes?.img2?.data?.attributes?.url} alt="" className='secondImg'/>
      </div>
      <span className='title'>{item?.attributes.title}</span>
      <div className="prices">
        <span className='old'>Rs.{item?.attributes.oldPrice} </span>
        <span className='new'>Rs.{item?.attributes.newPrice} </span>
      </div>
    </div>
    </Link>
  )
}

export default Card
