import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'


import { LoadingProvider } from './context/Loading.tsx'
import { CartProvider } from './context/Cart.tsx'
import { configAxios } from './config/axios.ts'
configAxios();
ReactDOM.createRoot(document.getElementById('root')!).render(
  // <Provider store={store}>
  <LoadingProvider>
    <React.StrictMode>
      <BrowserRouter>
        <CartProvider>
          <App />
        </CartProvider>
      </BrowserRouter>
    </React.StrictMode>
  </LoadingProvider>
  // </Provider>,
)
