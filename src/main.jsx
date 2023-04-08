import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home/Home';
import Shop from './Shop/Shop';
import OrderReview from './OrderRiview/OrderReview';
import Inventory from './Inventory/Inventory';
import Login from './Login/Login';
import loadData from './Data/Data';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: '/',
        element: <Shop></Shop>
      },
      {
        path: '/shop',
        element: <Shop></Shop>
      },
      {
        path: '/order-review',
        element: <OrderReview></OrderReview>,
        loader: loadData
      },
      {
        path: '/manage-Inventory',
        element: <Inventory></Inventory>
      },
      {
        path: '/login',
        element: <Login></Login>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
