import React, { useEffect, useState } from 'react'
import { IProduct } from '../interface/Product'
import axios from "axios";
import { Link } from 'react-router-dom';
import Loading from '../components/Client/Loading';
import { useSelector, useDispatch } from 'react-redux';
import { startLoading, stopLoading, selectLoading } from '../redux/loadingSlice';
import { useProduct } from '../hook/useProduct';
import { Heart, ListCollapse, Share2 } from 'lucide-react';
const HomePage = () => {
    // const [product, setProduct] = useState<IProduct[]>([]);
    // const [loading, setLoading] = useState<boolean>(false)
    // const isLoading = useSelector(selectLoading);
    // const dispatch = useDispatch();
    // useEffect(() => {
    //     (async () => {
    //         try {
    //             dispatch(startLoading());
    //             const { data } = await axios.get("http://localhost:3000/products")
    //             setProduct(data)
    //         } catch (error) {
    //             console.log(error);
    //         } finally {
    //             dispatch(stopLoading());
    //         }

    //     })()
    // }, [])
    const { products } = useProduct();
    return (
        <>
        
            
            <div className="relative h-48 md:h-96">
                <img src="/public/images/banner.webp" alt="Banner" className="object-cover w-full h-full" />
            </div>
            <main className='px-4 md:px-32 mt-5'>
                {/* -------------------------CATEGORY--------------------- */}
                <h1 className='font-bold text-2xl mt-16 mb-6'>CATEGORY</h1>
                <hr className="border-gray-800 mb-16" />
                <div className='grid grid-cols-5 gap-8 px-4 mb-12'>
                    <div className='bg-white shadow-lg  hover:shadow-2xl transition-shadow duration-300 rounded-lg overflow-hidden w-full h-28 '>
                        <a href='' className=' p-4 h-full flex items-center justify-center'>
                            <img src="https://inkythuatso.com/uploads/thumbnails/800/2021/09/logo-adidas-vector-inkythuatso-01-29-09-08-58.jpg" alt="" className="max-w-full max-h-full" />
                        </a>
                    </div>
                    <div className='bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300 rounded-lg overflow-hidden w-full h-28 '>
                        <div className=' p-4  h-full flex items-center justify-center'>
                            <img src="https://thumbs.dreamstime.com/z/web-192037117.jpg?w=992" alt="" className="max-w-full max-h-full" />
                        </div>
                    </div>
                    <div className='bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300 rounded-lg overflow-hidden w-full h-28 '>
                        <div className=' p-4  h-full flex items-center justify-center'>
                            <img src="https://pos.nvncdn.com/be5dfe-25943/art/artCT/20210308_NPNr3lpLYRF9pbWobDy2FWHO.png" alt="" className="max-w-full max-h-full" />
                        </div>
                    </div>
                    <div className='bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300 rounded-lg overflow-hidden w-full h-28 '>
                        <div className=' p-4 h-full flex items-center justify-center'>
                            <img src="https://inkythuatso.com/uploads/thumbnails/800/2021/11/logo-lv-inkythuatso-01-02-13-52-56.jpg" alt="" className="max-w-full max-h-full" />
                        </div>
                    </div>
                    <div className='bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300 rounded-lg overflow-hidden w-full h-28 '>
                        <div className=' p-4  h-full flex items-center justify-center'>
                            <img src="https://vudigital.co/wp-content/uploads/2021/08/lich-su-hinh-thanh-va-phat-trien-cua-thiet-ke-logo-gucci-1921-2021-6.jpg" alt="" className="max-w-full max-h-full" />
                        </div>
                    </div>

                </div>

                <h1 className='font-bold text-2xl mb-6'>NEW</h1>
                <hr className="border-gray-800 mb-16" />

                {/* --------------------------BOX  PRODUCTS----------------------- */}

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-32">
                    { products.map((product, index) => {
                        return (
                            <div key={index+1} className=" shadow-lg rounded-lg overflow-hidden h-96 px-3 relative group">

                                <a href='' className=" p-4">
                                    <img src={product.img} alt="Product 1"
                                        className="w-full h-56 object-cover transition-transform duration-300 transform group-hover:scale-110 rounded " />
                                </a>
                                <div className='' >
                                    <div className="p-4">
                                        <div className="text-lg font-semibold text-gray-900 hover:underline">{product.name}</div>
                                        <p className="text-xl font-bold text-gray-900 mt-2">$ {product.price}</p>
                                    </div>

                                    <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                                    <div className="absolute inset-0 flex flex-col items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white bg-opacity-90">
                                        <button className=" border-solid mb-3 p-2 rounded  bg-slate-200  hover:bg-yellow-500 hover:text-white">
                                            Add to cart
                                        </button>
                                        <div className="flex space-x-4">
                                            <a href={`product/${product._id}`} className="flex space-x-1 items-center text-gray-700 hover:text-yellow-500" ><ListCollapse/> <span>Detail</span></a>
                                            <a href='' className="flex space-x-1 items-center text-gray-700  hover:text-yellow-500" ><Share2 /> <span>Share</span></a>
                                            <a href='' className="flex space-x-1 items-center text-gray-700 hover:text-yellow-500" ><Heart /> <span>Like</span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>)
                    })}
                </div>
            </main>
        </>
    )
}

export default HomePage