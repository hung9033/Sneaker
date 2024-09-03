import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { IProduct, ProductInputs } from '../interface/Product';


type ProductFormProps = {
    product?: IProduct;
    onSubmit: (value: ProductInputs) => void;
};
const ProductForm = ({ onSubmit, product }: ProductFormProps) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<ProductInputs>();    
    useEffect(() => {
        if (!product) return;
        reset(product);
    }, [product]);


    return (
        <>
            <div className="leading-loose">
                <form onSubmit={handleSubmit(onSubmit)} className="p-10 bg-white rounded shadow-xl">
                    <div >
                        <label className="block text-sm text-gray-600" htmlFor="name">Name</label>
                        <input {...register("name",
                            {
                                required: "Name is required",

                            })}
                            className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" name="name" type="text" placeholder="Name Product" aria-label="Name" />
                        {errors.name && <span className='text-red-500'>{errors.name.message}</span>}
                    </div>
                    <div >
                        <label className="block text-sm text-gray-600" htmlFor="name">Image</label>
                        <input {...register("img", { required: " Image is required" })} className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" name="img" type="text" placeholder="Image Product" aria-label="Name" />
                        {errors.img && <span className='text-red-500'>{errors.img.message}</span>}
                    </div>
                    <div >
                        <label className="block text-sm text-gray-600" htmlFor="name">Price</label>
                        <input {...register("price", {
                            required: "Price is requird",
                            pattern: {
                                value: /^\d+$/,
                                message: "Please enter ony digits"
                            },
                            min: {
                                value: 10,
                                message: "Price must be at least 10"
                            }
                        })} className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" name="price" type="text" placeholder="Price Product" aria-label="Name" />
                        {errors.price && <span className='text-red-500'>{errors.price.message}</span>}
                    </div>
                    <div>
                        <label className="block text-sm text-gray-600" htmlFor="category">Category</label>
                        <select
                            {...register("category", {
                                required: "Category is required",
                            })}
                            className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                            
                            aria-label="Category"
                        >
                            <option value="">Select Category</option>
                            <option value="Adidas">Adidas</option>
                            <option value="Nike">Nike</option>
                            <option value="MLB">MLB</option>
                        </select>
                        {errors.category && <span className='text-red-500'>{errors.category.message}</span>}
                    </div>
                    <div className="mt-2">
                        <label className=" block text-sm text-gray-600" htmlFor="message">Description</label>
                        <textarea {...register("description", {
                            required: "Description is required",
                            minLength: {
                                value: 10,
                                message: "Description must be at least 10 characters"
                            }
                        })} className="w-full px-5 py-2 text-gray-700 bg-gray-200 rounded" name="description" rows={6} placeholder="Description.." aria-label="Email" defaultValue={""} />
                        {errors.description && <span className='text-red-500'>{errors.description.message}</span>}
                    </div>
                    <div className="mt-6">
                        <button className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded" type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default ProductForm