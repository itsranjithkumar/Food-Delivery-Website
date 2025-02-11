import { createContext, useState, useEffect } from "react"
import { food_list } from "../assets/assets"

export const StoreContext = createContext(null)

export const StoreContextProvider = (props) => {

    const [cartItems, setCartItems] = useState({});

    const addToCart = (item) => {
        const itemId = item.id || item._id;
        setCartItems((prev) => ({
            ...prev, 
            [itemId]: (prev[itemId] || 0) + 1
        }));
    }

    const removeFromCart = (item) => {
        const itemId = item.id || item._id;
        setCartItems((prev) => {
            const newCartItems = {...prev};
            if (newCartItems[itemId] > 1) {
                newCartItems[itemId] -= 1;
            } else {
                delete newCartItems[itemId];
            }
            return newCartItems;
        });
    }

    useEffect(() => {
        console.log(cartItems)
    }, [cartItems])

    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart
    }
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}