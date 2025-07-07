import React, { useContext, useState } from 'react'
import Title from './Title';
import StoreContext from '../context/StoreContext';
import SortButton from './SortButton';

const SearchBox = () => {

  const [title, setTitle] = useState('');
  const [active, setActive] = useState('');

  const {productsList,searchProducts, totalCount} = useContext(StoreContext);

  const formSubmit = (e) =>{
    e.preventDefault();
    searchProducts(title)
    setActive("")
  }

  return (
    <div className='flex flex-wrap justify-between items-center'>
      <form onSubmit={(e)=>{ formSubmit(e) }} className='flex flex-wrap gap-5 grow-1 me-75'>
        <input 
        className={`placeholder:text-amber-50 placeholder:italic italic p-[10px] rounded-xl  transition duration-300 focus:placeholder:text-slate-950 focus:bg-amber-400 min-w-1/4 border-2 border-amber-400 focus:outline-0 text-2xl font-semibold text-slate-950 grow-1 shrink-0 ${title ? "bg-amber-400" : "bg-transparent"}`}
        placeholder='Search...' 
        type='text'
        value={title}
        onChange={(e)=>{ setTitle(e.target.value) }}
      />
      <button className="px-[30px] italic py-[10px] border-2 border-amber-400 rounded-xl text-2xl text-amber-50 cursor-pointer block aspect-square h-[70px] transition duration-500 font-semibold hover:bg-amber-400 hover:text-slate-950">Apply</button>
      </form>
      <SortButton activeFunction={setActive} active={active}/>
      <p className='text-2xl text-amber-400'><i className='text-amber-50'>Products :-</i> {productsList.length} <i className='text-amber-100'>of</i> {totalCount}</p>
    </div>
  )
}

export default SearchBox
