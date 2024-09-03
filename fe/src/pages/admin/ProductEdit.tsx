import React, { useEffect, useState } from 'react'
import ProductForm from '../../components/ProductForm';
import { useProduct } from '../../hook/useProduct';



const ProductEdit = () => {

  const {editProduct, product} =useProduct();

    return (
        <>
        
            <div className="w-full h-screen overflow-x-hidden border-t flex flex-col">
                <main className="w-full flex-grow p-6">
                    <h1 className="w-full text-3xl text-black pb-6">Edit Product</h1>
                    <div className="flex flex-wrap">
                        <div className="w-full  my-6 pr-0 lg:pr-2">
                            <p className="text-xl pb-6 flex items-center">
                                <i className="fas fa-list mr-3" /> Contact Form
                            </p>
                            <ProductForm onSubmit={editProduct}  product={product}/>
                        </div>
                        
                    </div>
                </main>
               
            </div>

        </>
    )
}
export default ProductEdit;