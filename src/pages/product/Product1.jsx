import React, { useState } from 'react'
import './product.scss';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BalanceIcon from '@mui/icons-material/Balance';
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartReducer';
export default function Product1() {

  const dispatch=useDispatch()

  const id=useParams().id
  const [selectedImg,SetSelectedImg]=useState("img")
  const [quantity,SetQuantity]=useState(1)
  const {data,isLoading,error}=useFetch(`/products/${id}?populate=*`)
  console.log(data)
 

  // If data is not available or the selected image is not available, return an empty div
  if (!data || !data.attributes || !data.attributes[selectedImg]?.data?.attributes?.url) {
    return <div />;
  }
  return (
    <div className='product'>
      {isLoading?"loading":(<><div className="left">
        <div className="images">
          <img src={process.env.REACT_APP_UPLOAD_URL+data?.attributes?.img?.data?.attributes?.url} alt="" onClick={e=>SetSelectedImg("img")}/>
          <img src={process.env.REACT_APP_UPLOAD_URL+data?.attributes?.img2?.data?.attributes?.url} alt="" onClick={e=>SetSelectedImg("img2")}/>
        </div>
        <div className="mainImg">
          <img src={process.env.REACT_APP_UPLOAD_URL+data?.attributes[selectedImg]?.data?.attributes?.url} alt="" />
        </div>
      </div>
      <div className="right">
        <h2>{data?.attributes?.title}</h2>
        <span className='price'>Rs. {data?.attributes?.newPrice}</span>
        <p>{data?.attributes?.desc} </p>
        <div className="quantity">
          <button onClick={()=>SetQuantity((prev)=>(prev===0?0:prev-1))}>-</button>
          {quantity}
          <button onClick={()=>SetQuantity((prev)=>prev+1)}>+</button>
        </div>
        <button className='add' onClick={()=>dispatch(addToCart({
          id:data.id,
          title:data.attributes.title,
          desc:data.attributes.desc,
          newPrice:data.attributes.newPrice,
          img:data.attributes.img.data.attributes.url,
          quantity,
        }))}><AddShoppingCartIcon/>ADD TO CART</button>
        <div className="links">
        <div className="item">
          <FavoriteBorderIcon/>
          <span>ADD TO WISHLIST</span>
        </div>
        <div className="item">
          <BalanceIcon/>
          <span>ADD TO COMPARE</span>
        </div>
        </div>
        <div className="info">
          <span>Product From: Polo</span>
          <span>Product Type: Tops</span>
          <span>Tag: Women,Ladies</span>
          <hr />
        </div>
        
        <div className="details">
          <span>DESCRIPTION</span>
          <hr />
          <span>ADDITIONAL INFO</span>
          <hr />
          <span>FAQ</span>
        </div>
      </div></>)}
    </div>
  )
}
