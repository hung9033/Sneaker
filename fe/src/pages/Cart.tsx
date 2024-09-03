import { CheckCheck, Headset, Trash2, Trophy, Truck } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { CartItem, IProduct } from '../interface/Product';
import { Link } from 'react-router-dom';

type CartItem = {
    product: IProduct;
    quantity: number;
}

const Cart = () => {
    const [carts, setCarts] = useState<CartItem[]>([]);
    useEffect(() => {
        const cartStorage = localStorage.getItem('carts') || "[]";
        const carts: CartItem[] = JSON.parse(cartStorage);
        setCarts(carts);
    }, []);

    const handleRemoveItem = (index: number) => {
        const updatedCarts = carts.filter((_, i) => i !== index);
        setCarts(updatedCarts);
        localStorage.setItem('carts', JSON.stringify(updatedCarts));
    };

    const handleQuantityChange = (index: number, increment: boolean) => {
        const updatedCarts = [...carts];
        if (increment) {
            updatedCarts[index].quantity += 1;
        } else {
            if (updatedCarts[index].quantity > 1) {
                updatedCarts[index].quantity -= 1;
            }
        }
        setCarts(updatedCarts);
        localStorage.setItem('carts', JSON.stringify(updatedCarts));
    };

    const calculateTotal = () => {
        return carts.reduce((total, item) => total + (item.product.price * item.quantity), 0);
    };

    return (
        <main>
            <div className='px-32 grid grid-cols-3 gap-8 mt-10'>
                {/* Danh sách sản phẩm trong giỏ hàng */}
                <div className='overflow-x-auto col-span-2 border-solid border-2 border-black-600'>
                    <table className='table-fixed w-full divide-y divide-gray-200'>
                        <thead>
                            <tr>
                                <th className='w-1/12 px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'></th>
                                <th className='w-1/4 px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Product</th>
                                <th className='w-1/5 px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Price</th>
                                <th className='w-1/5 px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Quantity</th>
                                <th className='w-1/6 px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Subtotal</th>
                                <th className='px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'></th>
                            </tr>
                        </thead>
                        <tbody>
                            {carts.map((item, index) => (
                                <tr key={index}>
                                    <td className='px-4 py-3 w-1/12'>
                                        <img src={item.product.img} alt="" className='w-full h-auto' />
                                    </td>
                                    <td className='px-4 py-3 w-1/4 break-words whitespace-normal'>{item.product.name}</td>
                                    <td className='px-4 py-3 w-1/5 break-words whitespace-normal'>{item.product.price}</td>
                                    <td className='px-4 py-3 w-1/5 break-words whitespace-normal'>
                                        <div className='flex items-center'>
                                            <button onClick={() => handleQuantityChange(index, false)} className='px-2 py-1 border rounded'>-</button>
                                            <span className='mx-2'>{item.quantity}</span>
                                            <button onClick={() => handleQuantityChange(index, true)} className='px-2 py-1 border rounded'>+</button>
                                        </div>
                                    </td>
                                    <td className='px-4 py-3 w-1/6 break-words whitespace-normal'>{item.product.price * item.quantity}</td>
                                    <td className='px-4 py-3'>
                                        <button onClick={() => handleRemoveItem(index)}>
                                            <Trash2 strokeWidth={1.2} className='hover:stroke-red-500' />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Phần tổng kết và checkout */}
                <div className='border-solid border-2 border-black-600 overflow-hidden py-3'>
                    <h1 className='text-center text-2xl'>Cart total</h1>
                    <div>
                        <div className='flex flex-col mt-3'>
                            <div className='flex mb-2 ml-16'>
                                <span className='w-1/2'>Subtotal</span>
                                <span className='w-1/2'>{calculateTotal().toFixed(2)}</span>
                            </div>
                            <div className='flex mb-2 ml-16'>
                                <span className='w-1/2'>Total</span>
                                <span className='w-1/2'>{calculateTotal().toFixed(2)}</span>
                            </div>
                        </div>
                        <div className='flex items-center justify-center mt-6'>
                            <Link to="/checkout" className='bg-green-500 p-2 rounded hover:bg-yellow-500 hover:text-white'>Check out</Link>
                        </div>
                    </div>
                </div>
                
            </div>

            {/* Phần thông tin chất lượng */}
            <div className='flex justify-between px-32 mt-32 py-12'>
                <div className='flex items-center'>
                    <Trophy strokeWidth={1.2} size={80} />
                </div>
                <div className='flex flex-col justify-center'>
                    <div>High Quality</div>
                    <div>Crafted from top materials</div>
                </div>
                <div className='flex items-center'>
                    <CheckCheck strokeWidth={1.2} size={80} />
                </div>
                <div className='flex flex-col justify-center'>
                    <div>High Quality</div>
                    <div>Crafted from top materials</div>
                </div>
                <div className='flex items-center'>
                    <Truck strokeWidth={1.2} size={80} />
                </div>
                <div className='flex flex-col justify-center'>
                    <div>High Quality</div>
                    <div>Crafted from top materials</div>
                </div>
                <div className='flex items-center'>
                    <Headset strokeWidth={1.2} size={80} />
                </div>
                <div className='flex flex-col justify-center'>
                    <div>High Quality</div>
                    <div>Crafted from top materials</div>
                </div>
            </div>
        </main>
    );
}

export default Cart;
