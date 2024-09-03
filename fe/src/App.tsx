
import { Route, Routes } from 'react-router-dom'
import './App.css'

import LayoutUser from './Layout/layoutUser'
import HomePage from './pages/HomePage'
import ProductDetail from './pages/ProductDetail'
import Register from './pages/Register'
import Login from './pages/Login'
import LayoutAdmin from './Layout/LayoutAdmin'
import  Dashboard  from './pages/admin/Dashboard'
import { ToastContainer } from 'react-toastify'
import ProductsAdmin from './pages/admin/ProductsAdmin'
import ProductAdd from './pages/admin/ProductAdd'
import ProductEdit from './pages/admin/ProductEdit'
import Cart from './pages/Cart'
import CheckOut from './pages/CheckOut'

function App() {
 

  return (
    <>
       <Routes>
        
        <Route path="" element={<LayoutUser />}>
          <Route index element={<HomePage/>} />
          <Route path="product/:id" element={<ProductDetail />} />
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<CheckOut />} />
          
        </Route>
        <Route path='admin' element={<LayoutAdmin />}>
          <Route index  element={<Dashboard/>}/>
          <Route path='products'  element={<ProductsAdmin/>}/>
          <Route path='products/add'  element={<ProductAdd/>}/>
          <Route path='products/edit/:id'  element={<ProductEdit/>}/>
        </Route>
        <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
      </Routes>
      <ToastContainer/>
    </>
  )
}

export default App
