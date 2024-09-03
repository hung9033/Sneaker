import React, { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { IProduct } from '../../interface/Product';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Loading from '../../components/Client/Loading';
import ProductForm from '../../components/ProductForm';
import { useProduct } from '../../hook/useProduct';



const ProductAdd = () => {
   const {addProduct} =useProduct();
    return (
        <>
            {/* <Loading isShow={loading} /> */}
            <div className="w-full h-screen overflow-x-hidden border-t flex flex-col">
                <main className="w-full flex-grow p-6">
                    <h1 className="w-full text-3xl text-black ">Add Product</h1>
                    <div className="flex flex-wrap">
                        <div className="w-full  my-6 pr-0 lg:pr-2">
                            
                            <ProductForm onSubmit={addProduct}/>
                        </div>
                      
                    </div>
                </main>
                
            </div>

        </>
    )
}
export default ProductAdd;