import React, {createContext, useState} from 'react'
import { PRODUCTS } from '../products';
import { DEMAPRODUCTS } from '../demaProducts';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i =1; i < DEMAPRODUCTS.length +1; i++) {
    cart[i]=0;
  }
  return cart;
}

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    setCartItems((prev)=>({...prev, [itemId]: prev[itemId]+1}));
  }

  const removeFromCart = (itemId) => {
    setCartItems((prev)=>({...prev, [itemId]: prev[itemId]-1}));
  }

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev)=>({...prev, [itemId]: newAmount}));
  }

  const getTotalCartAmount = () =>{
    let totalAmount =0;
    for (const item in cartItems) {
      if (cartItems[item]>0) {
        let itemInfo = DEMAPRODUCTS.find((product) => product.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.price
      }
    }
    return totalAmount;
  }


  return (
    <ShopContext.Provider value={{
      addToCart, 
      removeFromCart, 
      cartItems, 
      updateCartItemCount,
      getTotalCartAmount}}>{props.children}</ShopContext.Provider>
  )
}
