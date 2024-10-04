import React from 'react'
import './cart.scss'
import DeleteIcon from '@mui/icons-material/Delete';
import { useSelector } from 'react-redux';
import { removeItem, resetCart } from '../../redux/cartReducer';
import { useDispatch } from 'react-redux';

const Cart = () => {
  const dispatch=useDispatch()
    const products=useSelector(state=>state.cart.products)

    const totalPrice=()=>{
      let total=0;
      products.forEach(item=>
      total+=item.quantity*item.newPrice
      )
      return total.toFixed(2);
    }
  return (
    <div className='cart'>
      <h3>Products in your cart</h3>
      {products.map(item=>(
        <div className="item" key={item.id}>
            <img src={process.env.REACT_APP_UPLOAD_URL+item.img} alt="" />
            <div className="details">
                <h3>{item.title}</h3>
                <p>{item.desc.substring(0,80)}</p>
                <div className="price">{item.quantity} x Rs. {item.newPrice}</div>
            </div>
            <DeleteIcon className='delete' onClick={()=>dispatch(removeItem(item.id))}/>
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>Rs. {totalPrice()}</span>
      </div>
      <div className="reset">
      <button>
        PROCEED TO CHECKOUT
      </button>
      <span onClick={()=>dispatch(resetCart())}>Reset</span>
      </div>
    </div>
  )
}

export default Cart
