import React, { useContext } from 'react'
import "./Cartitems.css"
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from "../Assets/cart_cross_icon.png"
const CartItem = () => {
    const {all_product, getTotal, cartItem, removeToCart} = useContext(ShopContext);
  return (
    <div className='cartitems'>
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quanity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e)=>{
        if(cartItem[e.id] > 0){
            return <div>
            <div className="cartitems-format cartitems-format-main">
                <img src={e.image} className='carticon-product-icon' alt="" />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className='cartitems-quantity'>{cartItem[e.id]}</button>
                <p>${e.new_price*cartItem[e.id]}</p>
                <img className='remove-icon' src={remove_icon} onClick={()=>{removeToCart(e.id)}}alt="" />
            </div>
          </div>
        }
        return null;
      })}
      <div className="cartitem-down">
        <div className="cartitem-total">
            <h1>cart Totals</h1>
            <div>
                <div className="cartitem-total-item">
                    <p>Subtatal</p>
                    <p>${getTotal()}</p>
                </div>
                <hr/>
                <div className="cartitem-total-item">
                    <p>Shipping Fee</p>
                    <p>Free</p>
                </div>
                <hr />
                <div className="cartitem-total-item">
                    <h3>Total</h3>
                    <h3>${getTotal()}</h3>
                </div>
            </div>
            <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartitem-promocode">
            <p>If you have a code Enter it here</p>
            <div className="cartitem-promobox">
                <input type="text" placeholder='promo code' />
                <button>Submit</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem
