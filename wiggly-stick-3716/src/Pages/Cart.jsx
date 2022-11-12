import React from 'react'
import './Cart.css'
function Cart({cartItems,handleRemove,handleProducts}) {
 
//  This is the total price by using hof(reduce)
const Total = cartItems.reduce((price,item)=>price + item.quantity * item.price,0)
  return (
    <>
    <div className="cart-items">
      <div className="cart-items-header">This is The Cart Page</div>
      {cartItems.length === 0 &&(
        <div className="cart-items-empty">No items Present In the Cart</div>
      )}
    
    {cartItems.map((items)=>(
      <div className="cart-items-list" key={items.id}>
        <img className="cart-items-image" src={items.image1} alt="" />
        <div className="cart-items-name">{items.title}</div>
        <div className="cart-items-function">
           <button className="cart-items-add" onClick={()=>handleProducts(items)}> + </button>
           <button  className="cart-items-remove" onClick={()=>handleRemove(items)}> - </button>
        </div>
        <div className='cart-items-price'>
          {items.quantity} * Rs.{items.price}
        </div>

      </div>
    ))}
    <div className="cart-item-total-price-name">
      Total Price
    <div className="cart-items-total-price">Rs.{Total}</div>
    </div>
    </div> 
    </>
  )
}

export default Cart