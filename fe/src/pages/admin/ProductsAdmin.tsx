import React, { FC, useEffect, useState } from 'react'
import { IProduct } from '../../interface/Product'
import axios from 'axios';
import Loading from '../../components/Client/Loading';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useProduct, useProductSearch } from '../../hook/useProduct';
import SearchResults from '../../components/Admin/SearchResult';
import SearchProduct from '../../components/Admin/SearchProduct';



const ProductsAdmin = () => {

    const { products, deleteProduct } = useProduct()


    return (
        <>
           
            <div className="w-full overflow-x-hidden border-t flex flex-col ">
                <main className="w-full flex-grow p-6 " >
                    <div className='sticky top-0 z-20s bg-white p-2'>
                        <h1 className="text-3xl text-black ">All Products</h1>
                        <div className="flex flex-wrap mt-6">
                            <div className="mr-3 mt-1">
                                <Link to={'add'} className=" text-white bg-blue-600 p-2 w-32 rounded hover:bg-blue-500">
                                    Add Product
                                </Link>
                            </div>
                            <div className=''>
                                <SearchProduct />
                            </div>
                        </div>
                    </div>
                    <div className="w-full mt-6">
                        {/* <p className="text-xl pb-3 flex items-center">
                            <i className="fas fa-list mr-3" /> Latest Reports
                        </p> */}

                        <div className="bg-white overflow-auto">
                            <table className="min-w-full bg-white">
                                <thead className="bg-gray-800 text-white">
                                    <tr>
                                        <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Name</th>
                                        <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Image</th>
                                        <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Price</th>
                                        <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Category</th>
                                        <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Description</th>
                                        <th className="text-left py-3 px-4 uppercase font-semibold text-sm"></th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-700">
                                    {products.map((product: IProduct, index) => {
                                        return (
                                            <tr className="hover:bg-gray-200" key={index + 1}>
                                                <td className="text-left py-3 px-4">{product.name}</td>
                                                <td className="text-left py-3 px-4">
                                                    <img src={product.img} alt="" width={50} />
                                                </td>
                                                <td className="text-left py-3 px-4">
                                                    <a className="hover:text-blue-500">{product.price}</a>
                                                </td>
                                                <td className="text-left py-3 px-4">
                                                    <a className="hover:text-blue-500">{product.category}</a>
                                                </td>
                                                <td className="text-left py-3 px-4 truncate" style={{ maxWidth: '150px' }}>
                                                    <a className="hover:text-blue-500">{product.description}</a>
                                                </td>
                                                <td className="text-left py-3 px-4">
                                                    <button
                                                        onClick={() => deleteProduct(product._id)}
                                                        className="bg-red-500 p-1 rounded mr-5 text-white hover:bg-red-600"
                                                    >
                                                        Delete
                                                    </button>
                                                    <Link
                                                        to={`edit/${product._id}`}
                                                        className="bg-blue-500 p-2 rounded w-16 text-white hover:bg-blue-600"
                                                    >
                                                        Edit
                                                    </Link>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>

                    </div>

                </main>

            </div>

        </>
    )
}

export default ProductsAdmin