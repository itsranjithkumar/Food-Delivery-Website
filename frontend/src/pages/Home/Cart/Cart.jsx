import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../../context/StoreContext'

const Cart = () => {
  const { cartItems, food_list, removeFromCart } = useContext(StoreContext)

  return (
    <div className='cart'>
      <div className='cart-items'>
        <div className='cart-item-title'>
          <p>Item</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <hr />
        {food_list.map((item, index) => (
          cartItems[item._id] > 0 ? (
            <div key={index} className='cart-item-title cart-item-item'>
              <p>{item.name}</p>
            </div>
          ) : null
        ))}
      </div>
    </div>
  )
}

export default Cart 