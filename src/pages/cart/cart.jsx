import React, {useContext} from 'react'
import { ShopContext } from '../../context/shop-context'
import { PRODUCTS } from '../../products'
import { DEMAPRODUCTS } from '../../demaProducts'
import { CartItem } from './cart-item'
import { useNavigate} from 'react-router-dom'
import "./cart.css"


export const Cart = () => {
  const {cartItems, getTotalCartAmount} = useContext(ShopContext);
  const navigate = useNavigate();
  // const totalAmount = getTotalCartAmount(); 
  let isNotSelected = true;

  //Checking if any item is selected
  DEMAPRODUCTS.map(
    (product) => {
      if (cartItems[product.id] !== 0) {isNotSelected =false}; 
      return null;
    }
  )

  return (
    <div className='cart'>
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <section>
      {isNotSelected ? (
        <div className='noitems'>
          <h2> You have selected no items.</h2>
          <p>Please select an item from our Shop</p>
          </div>
         ) :
      (
          DEMAPRODUCTS.map ((product, index) =>
          {if(cartItems[product.id] !== 0) {
            return <CartItem  key={index} data={product}/>}
            return null;
            }
          )
      )}
      </section>
      {getTotalCartAmount()>0 && ( <div className='checkout'>
        <p id='subtotal'>Subtotal: ${getTotalCartAmount()} </p>
        <button onClick={() => navigate("/")}>Continue Shopping</button>
        <button>Checkout</button>
      </div>) }
     
    </div>
  )
}

 
//Checking about empty cart at the end insted of the beginning. Actually better!
// return (
//   <div className="cart">
//             <div>
//               <h1>Your Cart Items</h1>
//             </div>
//             <div className="cart">
//               {PRODUCTS.map((product) => {
//                 if (cartItems[product.id] !== 0) {
//                   return <CartItem data={product} />;
//                 }
//               })}
//             </div>
 
//             {totalAmount > 0 ? (
//               <div className="checkout">
//                 <p> Subtotal: ${totalAmount} </p>
//                 <button onClick={() => navigate("/")}> Continue Shopping </button>
//                 <button
//                   onClick={() => {
//                     checkout();
//                     navigate("/checkout");
//                   }}
//                 >
//                   {" "}
//                   Checkout{" "}
//                 </button>
//               </div>
//             ) : (
//               <h1> Your Shopping Cart is Empty</h1>
//             )}
//           </div>
//         );
// };
