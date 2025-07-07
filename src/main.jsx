import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ProductDetail, { fetchProductDetails } from './components/ProductDetail.jsx'
import Layout from './pages/Layout.jsx'
import ErrorPage from './pages/ErrorPage.jsx'
import { Provider } from 'react-redux'
import store from './redux/store.jsx'
import Cart from './components/Cart.jsx'

const routes = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <App />
      },
      {
        path:"/product/:id",
        element: <ProductDetail />,
        loader: fetchProductDetails
      },
      {
        path: "/cart",
        element: <Cart />
      },
      {
        path: "*",
        element: <ErrorPage />
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={routes}/>
    </Provider>
  </StrictMode>
)
