import React, { useEffect } from 'react'

import { Heart, Search, ShoppingCart, UserRound } from 'lucide-react'
import { Badge } from '@mui/material'
import { useCart } from '../../context/Cart'
import { Link } from 'react-router-dom'

const Header = () => {
    const { cart } = useCart();

    return (
        <>

            <header className=" py-4 sticky z-50 top-0 bg-white">
                <div className="flex flex-wrap justify-between items-center px-4 md:px-32">
                    <a href='/' className="flex items-center space-x-4">
                        <img src="/public/icons/logo.png" width={50} alt="Logo" />
                        <div className="text-2xl font-bold">Sneakers</div>
                    </a>
                    <ul className="flex space-x-4 md:space-x-8 mt-4 md:mt-0">
                        <li>
                            <a href="#" className="text-gray-700 font-semibold hover:text-yellow-500">Home</a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-700 font-semibold hover:text-yellow-500">Shop</a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-700 font-semibold hover:text-yellow-500">About</a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-700 font-semibold hover:text-yellow-500">Contact</a>
                        </li>
                    </ul>
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <Link className="text-gray-700 hover:stroke-yellow-500" to="/register"><UserRound className='hover:stroke-yellow-500' /></Link>
                        <a className="text-gray-700 hover:stroke-yellow-500" href="#"><Search className='hover:stroke-yellow-500' /></a>
                        <a className="text-gray-700 hover:stroke-yellow-500" href="#"><Heart className='hover:stroke-yellow-500' /></a>
                        <Link className="text-gray-700 " to="/cart">
                            <Badge badgeContent={cart} color="primary">
                                <ShoppingCart className='hover:stroke-yellow-500' />
                            </Badge>
                        </Link>
                    </div>
                </div>
            </header >

        </>
    )
}

export default Header