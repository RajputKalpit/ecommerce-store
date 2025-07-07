import React, { useEffect, useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom';
import Title from './Title';
import { useDispatch } from 'react-redux';
import { addToCart }  from '../redux/slices/cartSlice';

const ProductDetail = () => {

  let product = useLoaderData();

  const dispatch = useDispatch();
    

  return (
    <div className="w-full min-h-dvh h-vh bg-neutral-950 p-[50px] flex flex-col">
      <div className='grow-1 shrink-0  w-full flex flex-col'>
        <Title title="Product Details" />
        <div className='border mt-[50px] border-amber-200 rounded-xl shrink-0 grow-1 p-[50px] bg-white flex gap-[50px]'>
        <img className='h-full w-[600px] rounded-[6px] p-[100px] my-[auto]' src={product.image} alt="image" />
        <div className=' border-slate-950 w-full p-[100px]'>
          <p className='text-5xl italic font-semibold font-serif'>{product.title}</p>
          <p className='text-2xl font-normal font-extralight mt-[32px]'>{product.description}</p>
          <p className='text-2xl mt-[48px] italic inline-block'><span className='bg-amber-50 p-[16px] font-serif font-semibold'>{product.category}</span></p>
          <p className='text-7xl mt-[48px] font-bold font-serif italic'>{product.price} <span className='text-3xl font-semibold'>₹</span></p>
          <button 
          onClick={()=> dispatch(addToCart({product}))}
          className='mt-[48px] font-semibold border border-2 rounded-xl hover:cursor-pointer border-neutral-950 text-xl transition-all  text-neutral-950 py-[10px] px-[30px] hover:bg-amber-400 hover:text-neutral-950 italic'>Add to cart</button>
        </div>

        </div>

      </div>
    </div>
  )
}

export default ProductDetail;


export const fetchProductDetails = async ({params}) => {
  let res  = await fetch(`https://fakestoreapi.com/products/${params.id}`);
  let data = await res.json();
  return data;
}