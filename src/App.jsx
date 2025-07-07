import React, { useContext } from 'react'
import Title from './components/Title'
import Product from './components/Product'
import SearchBox from './components/SearchBox'
import ProductList from './components/ProductList'
import StoreContextProvider from './context/StoreContextProvider'
import StoreContext from './context/StoreContext'
import { Provider } from 'react-redux'
import store from './redux/store'

const App = () => {
    return (
    <>
   
    <StoreContextProvider>
    <div className="w-full min-h-dvh h-vh bg-neutral-950 p-[50px]">
     <Title title="Products List"/>
     <div className='my-[50px]'>
      <SearchBox />
     </div>
     <div className='mt-[50px] flex gap-[20px] flex-wrap'>
      <ProductList />
     </div>

    </div>      
    </StoreContextProvider>
    </>
  )
}

export default App
