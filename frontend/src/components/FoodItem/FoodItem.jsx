import React, { useContext } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from "../../context/StoreContext"

const FoodItem = ({id, _id, name, image, price, description}) => {
    const {cartItems, addToCart, removeFromCart} = useContext(StoreContext)
    
    // Create an item object to pass to cart functions
    const item = { id, _id, name, image, price, description };
    const itemId = _id || id;

    return (
        <div className='food-item'>
            <div className="food-item-img-container">
                <img className="food-item-image" src={image} alt=""/>
                {!cartItems[itemId]
                    ? <img 
                        className="add" 
                        onClick={() => addToCart(item)} 
                        src={assets.add_icon_white} 
                        alt="Add to cart" 
                      />
                    : <div className="food-item-container">
                        <img 
                            src={assets.remove_icon_red} 
                            onClick={() => removeFromCart(item)} 
                            alt="Remove from cart" 
                        />
                        <p>{cartItems[itemId]}</p>
                        <img 
                            src={assets.add_icon_green} 
                            onClick={() => addToCart(item)} 
                            alt="Add more" 
                        />
                    </div>
                }
            </div>
            <div className="food-item-info">
                <div className="food-item-name-rating">
                    <p>{name}</p>
                    <img src={assets.rating_starts} alt="" />
                </div>
                <p className="food-item-desc">{description}</p>
                <p className="food-item-price">₹{price}</p>
            </div>
        </div>
    )
}

export default FoodItem