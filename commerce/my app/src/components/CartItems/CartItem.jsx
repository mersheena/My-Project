import React, { useContext } from 'react'
import './CartItem.css'
import { ShopContext } from '../../context/ShopContent'
import remove_icon from '../Assets/cart_cross_icon.png'

const CartItem = () => {
    const {getTotalCartAmount,all_product,cartItem,removeFromCart} = useContext(ShopContext);
  return (
    <div className='cartitems'>
        <div className="cartitems-format-main">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr />
        {all_product.map((e)=>{
            if(cartItem[e.id]>0)
            {
                return <div>
                <div className="cartitems-format cartitems-format-main">
                    <img src={e.image} alt='' className='carticon-product-icon'/>
                    <p>{e.name}</p>
                    <p>Rs.{e.new_price}</p>
                    <button className='cartitems-quantity'>{cartItem[e.id]}</button>
                    <p>Rs.{e.new_price*cartItem[e.id]}</p>
                    <img className ='cartitems-remove-icon' src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt=""/>
                </div>
                <hr />
                </div>
            }
            return null;
        })}
        <div className="cartitems-down">
            <div className='cartitems-total'>
                <h1>cart totals</h1>
                <div>
                    <div className='cartitems-total-item'>
                        <p>Subtotal</p>
                        <p>Rs.{getTotalCartAmount()}</p>
                    </div>
                    <hr />
                    <div className='cartitems-total-item'>
                        <p>Shippping Fees</p>
                        <p>Free</p>
                    </div>
                    <hr />
                    <div className="cartitems-total-item">
                        <h3>Total</h3>
                        <h3>Rs.{getTotalCartAmount()}</h3>
                    </div>
                </div>
                <button>PROCEED TO CHECKOUT</button>
            </div>
            <div className='cartitems-promocode'>
                <p>If You have a promo code ,Enter It here</p>
                <div className='cartitems-promobox'>
                    <input type="text" placeholder='promo code' />
                    <button>Submit</button>
                </div>
            </div>
        </div>



    </div>
  )
}

export default CartItem