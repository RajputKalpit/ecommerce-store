import React, { useContext, useEffect, useState } from "react";
import StoreContext from "./StoreContext";

const StoreContextProvider = ({ children }) => {

  const [productsList, setProductsList] = useState([]);
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProductsList(data);
        setAllProducts(data);
      });
  }, []);

  const searchProducts = (text) => {
    if(!text.trim()){
        setProductsList(allProducts)
    }
    else{
        const filtered = allProducts.filter((item)=>(
            item.title.toLowerCase().includes(text.toLowerCase())
        ))
        setProductsList(filtered)
    }
  }

  const totalCount = allProducts.length;

  const sortProducts = (flag = false) => {
    console.log("Sort Function Called")
    let sortedProducts = productsList.toSorted((a, b)=>{
      return flag ? b.price - a.price : a.price - b.price;
    })
  
    setProductsList(sortedProducts)
  }



  return (
    <StoreContext value={{ productsList, searchProducts, totalCount, sortProducts}}>
      {children}
    </StoreContext>
  );
};

export default StoreContextProvider;
