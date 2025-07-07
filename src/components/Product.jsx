import React from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { removeFromCart } from '../redux/slices/cartSlice'

const Product = ({img, title, price, id, cartItem, count}) => {

  const dispatch = useDispatch();

  return (
    <div className='flex flex-col rounded-xl overflow-clip border border-amber-200 card w-[430px]'>
      <div className='card__image grow flex flex-col w-full'>
        <img className="w-full h-[300px] shrink-0 object-contain bg-white" src={img} alt="dummy" />
        <div className='card__content p-[30px] flex flex-col h-full justify-between'>
          <p className='text-2xl text-amber-50 mb-[10px]'>{title}</p>
          <p className='text-3xl text-amber-500 mt-auto'><i><span className='font-semibold'>{price}</span> <span className='text-lg'>INR</span></i></p>
          <NavLink to={`/product/${id}`} className="mt-[30px] px-[60px] py-[10px] rounded-xl  transition duration-300 inline-block max-w-fit border border-amber-400 text-amber-50 font-medium hover:bg-amber-400 hover:text-neutral-950">
            Details
          </NavLink>

          {cartItem ? 
          
          <button className="mt-[20px] px-[60px] py-[10px] min-w-full rounded-xl cursor-pointer transition duration-300 inline-block max-w-fit border border-amber-400 text-amber-50 font-medium hover:bg-amber-400 hover:text-neutral-950"
          onClick={()=> dispatch(removeFromCart({id: id}))}
          >
           Remove From Cart - <span>( {count} )</span>
          </button>

          

           : ""}

        </div>
      </div>
    </div>
  )
}

export default Product
