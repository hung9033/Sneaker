import React, { useEffect, useState } from 'react';
import { IProduct } from '../interface/Product';

type CartItem = {
    product: IProduct;
    quantity: number;
};

const CartItemComponent: React.FC<CartItem> = ({ product, quantity }) => (
    <div className="flex items-start gap-4">
        <div className="w-32 h-28 max-lg:w-24 max-lg:h-24 flex p-3 shrink-0 bg-gray-300 rounded-md">
            <img src={product.img} className="w-full object-contain" />
        </div>
        <div className="w-full">
            <h3 className="text-base text-white">{product.name}</h3>
            <ul className="text-xs text-gray-300 space-y-2 mt-2">
                <li className="flex flex-wrap gap-4">Quantity <span className="ml-auto text-lg">{quantity}</span></li>
                <li className="flex flex-wrap gap-4">Price <span className="ml-auto text-lg">${product.price}</span></li>
                <li className="flex flex-wrap gap-4">Total Price <span className="ml-auto text-lg">${(product.price * quantity).toFixed(2)}</span></li>
            </ul>
        </div>
    </div>
);

const PersonalDetailsForm: React.FC = () => (
    <div>
        <h3 className="text-base text-gray-800 mb-4">Personal Details</h3>
        <div className="grid md:grid-cols-2 gap-4">
            <div>
                <input type="text" name="firstName" placeholder="First Name" className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600" />
            </div>
            <div>
                <input type="text" name="lastName" placeholder="Last Name" className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600" />
            </div>
            <div>
                <input type="email" name="email" placeholder="Email" className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600" />
            </div>
            <div>
                <input type="number" name="phone" placeholder="Phone No." className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600" />
            </div>
        </div>
    </div>
);

const ShippingAddressForm: React.FC = () => (
    <div className="mt-8">
        <h3 className="text-base text-gray-800 mb-4">Shipping Address</h3>
        <div className="grid md:grid-cols-2 gap-4">
            <div>
                <input type="text" name="addressLine" placeholder="Address Line" className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600" />
            </div>
            <div>
                <input type="text" name="city" placeholder="City" className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600" />
            </div>
            <div>
                <input type="text" name="state" placeholder="State" className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600" />
            </div>
            <div>
                <input type="text" name="zipCode" placeholder="Zip Code" className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600" />
            </div>
            <div>
                <input type="text" name="country" placeholder="Country" className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600" />
            </div>
        </div>
    </div>
);

const CheckOut = () => {
    const [carts, setCarts] = useState<CartItem[]>([]);

    useEffect(() => {
        const cartStorage = localStorage.getItem('carts') || "[]";
        const carts: CartItem[] = JSON.parse(cartStorage);
        setCarts(carts);
    }, []);

    const calculateTotal = () => {
        return carts.reduce((total, item) => total + (item.product.price * item.quantity), 0);
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        // Gather personal and shipping details
        const form = event.target as HTMLFormElement;
        const personalDetails = {
            firstName: form.firstName.value,
            lastName: form.lastName.value,
            email: form.email.value,
            phone: form.phone.value,
        };

        const shippingAddress = {
            addressLine: form.addressLine.value,
            city: form.city.value,
            state: form.state.value,
            zipCode: form.zipCode.value,
            country: form.country.value,
        };

        const orderData = {
            personalDetails,
            shippingAddress,
            products: carts.map(cartItem => ({
                productId: cartItem.product.id,
                quantity: cartItem.quantity,
            })),
        };

        // Send order data to the server
        try {
            const response = await fetch('http://localhost:4000/cart', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(orderData),
            });

            if (response.ok) {
                alert('Order placed successfully!');
                localStorage.removeItem('carts');  // Clear the cart from localStorage
                setCarts([]);  // Clear the cart state
            } else {
                alert('Failed to place order.');
            }
        } catch (error) {
            console.error('Error placing order:', error);
            alert('Failed to place order.');
        }
    };

    return (
        <div className="font-[sans-serif] bg-white">
            <div className="flex max-sm:flex-col gap-12 max-lg:gap-4 h-full">
                <div className="bg-gradient-to-r from-gray-500 via-gray-400 to-gray-500 sm:h-screen sm:sticky sm:top-0 lg:min-w-[370px] sm:min-w-[300px]">
                    <div className="relative h-full">
                        <div className="px-4 py-8 sm:overflow-auto sm:h-[calc(100vh-60px)]">
                            <div className="space-y-4">
                                {carts.map((item, index) => (
                                    <CartItemComponent key={index} product={item.product} quantity={item.quantity} />
                                ))}
                                <div className='flex mb-2 ml-16 text-white font-bold text-2xl'>
                                    <h1 className='w-1/2'>Subtotal</h1>
                                    <span className='w-1/2'>${calculateTotal().toFixed(2)}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="max-w-4xl w-full h-max rounded-md px-4 py-8 sticky top-0">
                    <h2 className="text-2xl font-bold text-gray-800">Complete your order</h2>
                    <form className="mt-8" onSubmit={handleSubmit}>
                        <PersonalDetailsForm />
                        <ShippingAddressForm />
                        <div className="flex gap-4 max-md:flex-col mt-8">
                            <button type="button" className="rounded-md px-6 py-3 w-full text-sm tracking-wide bg-transparent hover:bg-gray-100 border border-gray-300 text-gray-800 max-md:order-1">Cancel</button>
                            <button type="submit" className="rounded-md px-6 py-3 w-full text-sm tracking-wide bg-blue-600 hover:bg-blue-700 text-white">Complete Purchase</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;
