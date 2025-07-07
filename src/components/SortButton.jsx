import React, { useContext, useState } from 'react'
import StoreContext from '../context/StoreContext'


const SortButton = ({activeFunction, active}) => {

    const {sortProducts} = useContext(StoreContext);
    

  return (
    <>
      <div className='flex gap-[10px] items-center me-[30px]'>
       <p className='text-2xl italic text-amber-50'>Sort By Price :- </p>
       <button onClick={()=> {sortProducts(false), activeFunction("low")}} className={`${active == "low" ? "bg-amber-400 text-gray-950" : ""} border rounded-xl hover:cursor-pointer border-amber-400 text-xl transition-all  text-amber-100 py-[10px] px-[30px] hover:bg-amber-400 hover:text-neutral-950 italic`}>Lowest</button>
       <button onClick={()=> {sortProducts(true), activeFunction("high")}} className={`${active == "high" ? "bg-amber-400 text-gray-950" : ""} border rounded-xl hover:cursor-pointer border-amber-400 text-xl transition-all  text-amber-100 py-[10px] px-[30px] hover:bg-amber-400 hover:text-neutral-950 italic`}>Highest</button>
      </div>
    </>
  )
}

export default SortButton
