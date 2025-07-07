import React, { useContext } from 'react'
import { BsCart2 } from "react-icons/bs";
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Title = ({title}) => {

  const cart = useSelector(state => state.cart);


  return (
    <div className='flex justify-between border border-b-amber-200 border-t-0 border-r-0 border-l-0'>
      <h1 className=' pb-[20px] text-4xl text-white italic'>{title}</h1>
      <NavLink to="/cart"><p className='text-white text-4xl pb-[20px] flex gap-[10px]'><BsCart2 /> <sup className='block text-xl text-amber-400 italic font-mono font-semibold'> {cart.totalQuantity} </sup></p></NavLink>
    </div>
  )
} 

export default Title
