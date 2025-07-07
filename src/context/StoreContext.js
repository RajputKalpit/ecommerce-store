import React from "react";

const StoreContext = React.createContext({
    productsList : [],
    searchProducts: (text)=> {},
    totalCount : "",
    sortProducts: (flag)=>{}
});

export default StoreContext;
