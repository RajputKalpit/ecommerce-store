import React, { useContext, useEffect, useState } from 'react'
import Product from './Product';
import StoreContext from '../context/StoreContext';

const ProductList = () => {
    
    const {productsList} = useContext(StoreContext);

  return (
    <>
      {productsList.map((data, index)=>{
        return <Product key={index} img={data.image} title={data.title} price={data.price} id={data.id}/>
      })}
    </>
  )
}

export default ProductList
