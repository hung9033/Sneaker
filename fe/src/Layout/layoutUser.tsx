import React, { useEffect } from 'react'
import Header from '../components/Client/Header'
import Footer from '../components/Client/Footer'
import { Outlet } from 'react-router-dom'
import Banner from '../components/Client/Banner'
import { CartProvider, useCart } from '../context/Cart'
import Loading from '../components/Client/Loading'
import { useLoading } from '../context/Loading'

const LayoutUser = () => {
  const { loading } = useLoading();
  const { setCart } = useCart();
  useEffect(() => {
    const cartStorage = localStorage.getItem('carts') || "[]";
    const carts = JSON.parse(cartStorage);
    setCart(carts.length)
  }, [setCart])
  return (
    <>
      <Loading isShow={loading} />
      <Header />
      <Banner />
      <Outlet />
      <Footer />

    </>
  )
}

export default LayoutUser