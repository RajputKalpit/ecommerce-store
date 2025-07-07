import React from 'react'
import Title from './Title'
import { useSelector } from 'react-redux'
import Product from './Product';

const Cart = () => {

  const cart = useSelector(state => state.cart); 

  return (
    <>
      <div className="w-full min-h-dvh h-vh bg-neutral-950 p-[50px] flex flex-col">

        <Title title="Cart Details" />

        <div className='mt-[50px] flex gap-[20px] flex-wrap'>
        
        {cart.cartItems.length ?
          cart.cartItems.map((prod, index)=>{
            return <Product  key={index} img={prod.product.image} title={prod.product.title} price={prod.product.price} id={prod.product.id} cartItem={true} count={prod.quantity}/>
          })
        : <p className='text-4xl font-semibold font-serif text-amber-50'>There is no items in cart</p>
        }

        </div>

      </div>
    </>
  )
}

export default Cart
