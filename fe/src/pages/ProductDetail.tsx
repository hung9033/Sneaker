import { useState } from 'react';

import Loading from '../components/Client/Loading';
import { Facebook, Heart, Instagram, Share2, Twitter } from 'lucide-react';
import { useProduct } from '../hook/useProduct';
import { useCart } from '../context/Cart';
import { IProduct } from '../interface/Product';
import { useLoading } from '../context/Loading';
import { toast } from 'react-toastify';

type CartItem = {
  product: IProduct;
  quantity: number;
}

const ProductDetail = () => {
  const [quantity, setQuantity] = useState<number>(1); // Default quantity is 1
  const { product } = useProduct();
  const { setCart } = useCart();
  const { loading, setLoading } = useLoading();

  const handleAddToCart = (product: IProduct) => {

    if (!product || !product._id) {
      console.error('Product or Product ID is missing');
      return;
    }
    const cartStorage = localStorage.getItem('carts') || "[]";
    const carts: CartItem[] = JSON.parse(cartStorage) || [];
    const existingItem = carts.find((item: CartItem) => item.product._id === product._id);
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      if (quantity > 0) {
        carts.push({ product, quantity });
      } else {
        console.error('Quantity must be a positive number');
        return;
      }
    }

    localStorage.setItem('carts', JSON.stringify(carts));
    setCart(carts.length);
    toast.success('Thêm vào giỏ hàng thành công!');
  };

  return (
    <>

      <main>
        <div className=' grid grid-cols-2 mx-32 mt-20   '>
          <div className='grid grid-cols-6  '>
            <div className='max-w-20 rounded h-96 '>
              <img className='mb-4 rounded' src="https://product.hstatic.net/200000255805/product/z4473710787586_dd16ee0e88eafe7b9f63a6bbb58a10ac_fe0467cf864e4ad4ad20d8c1a87b30e3_master.jpg" alt="" />
              <img className='mb-4 rounded' src="https://product.hstatic.net/200000255805/product/z4473710787586_dd16ee0e88eafe7b9f63a6bbb58a10ac_fe0467cf864e4ad4ad20d8c1a87b30e3_master.jpg" alt="" />
              <img className='mb-4 rounded' src="https://product.hstatic.net/200000255805/product/z4473710787586_dd16ee0e88eafe7b9f63a6bbb58a10ac_fe0467cf864e4ad4ad20d8c1a87b30e3_master.jpg" alt="" />
              <img className='mb-4 rounded' src="https://product.hstatic.net/200000255805/product/z4473710787586_dd16ee0e88eafe7b9f63a6bbb58a10ac_fe0467cf864e4ad4ad20d8c1a87b30e3_master.jpg" alt="" />
            </div>
            <div className='w-96 h-96  bg-slate-500 object-cover'>
              <img src="https://product.hstatic.net/200000255805/product/z4473710787586_dd16ee0e88eafe7b9f63a6bbb58a10ac_fe0467cf864e4ad4ad20d8c1a87b30e3_master.jpg" alt="" />
            </div>
          </div>
          {product && (
            <div className=' '>
              <div className='text-4xl mb-4'>
                {product.name}
              </div>
              <div className='text-3xl text-red-500 mb-4 '>
                $ {product.price}
              </div>
              <div className='text-sm mb-4'>
                Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, \stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.
              </div>
              <div>
                <div className='opacity-50'>
                  Size
                </div>
                <div className='flex space-x-4'>
                  <label className='flex items-center space-x-2'>
                    <input type='radio' name='size' value='S' className='form-radio text-blue-500' />
                    <span>S</span>
                  </label>
                  <label className='flex items-center space-x-2'>
                    <input type='radio' name='size' value='S' className='form-radio text-blue-500' />
                    <span>S</span>
                  </label>
                </div>
                <div className="flex items-center space-x-2 mt-2">
                  <button onClick={() => setQuantity(quantity === 0 ? 0 : quantity - 1)} id="decrement" className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
                    -
                  </button>
                  <input id="quantity" type="number" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} className="text-center w-16 border border-gray-300 py-2 px-4 focus:outline-none" />
                  <button onClick={() => setQuantity(quantity + 1)} id="increment" className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">
                    +
                  </button>

                  <button
                    className=' px-5 py-2 rounded border-solid border-2 border-slate-500 hover:bg-yellow-500 hover:text-white hover:text-red-500'
                    onClick={() => handleAddToCart(product)}>
                    Add to cart
                  </button>
                </div>
                <hr className="border-gray-800 mt-6" />
                <div className='grid  grid-cols-4  mt-6'>
                  <div className='overflow-hidden opacity-50'>
                    <div className='mb-2'>Category</div>
                    <div className='mb-2'>Tag</div>
                    <div  >Category</div>
                  </div>
                  <div className=''>
                    <div className='opacity-50  mb-2' >: {product.category}</div>
                    <div className='opacity-50 mb-2'>: Sofa , Home, Shop</div>
                    <div className='flex '>
                      : <Facebook strokeWidth={1} className='mr-2' />
                      <Instagram strokeWidth={1} className='mr-3' />
                      <Twitter strokeWidth={1} className='mr-2' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <hr className="border-gray-800 mt-16 " />

        <div className='mt-10 mb-20'>
          <div className='flex justify-center space-x-7  text-2xl'>
            <div>Description</div>
            <div>Additional Information</div>
            <div>Reviews [5]</div>
          </div>
          {product && (
            <p className='mx-60  mt-8 opacity-60'>
              {product.description}
            </p>
          )}
          <div className='flex justify-center items-center mx-32 mt-10 space-x-6 mb-10 overflow-hidden '>
            <div className="w-full h-96 overflow-hidden ">
              <img src="https://hoangphucphoto.com/wp-content/uploads/2024/06/anh-giay-thumb.jpeg" alt="Image description" className="object-contain w-full h-full" />
            </div>
            <div className="w-full h-96 overflow-hidden ">
              <img src="https://hoangphucphoto.com/wp-content/uploads/2024/06/anh-giay-thumb.jpeg" alt="Image description" className="object-contain w-full h-full" />
            </div>

          </div>
        </div>

        <hr className="border-gray-800 mt-16 mb-20 " />

        <h1 className='text-center text-4xl  mb-6 '>Related Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mx-32  mb-28">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden h-96  relative group">

            <div className="bg-slate-100 p-4">
              <img src="https://bizweb.dktcdn.net/100/446/826/files/logo-nike-3.png?v=1656926601220" alt="Product 1"
                className="w-full h-56 object-cover transition-transform duration-300 transform group-hover:scale-110" />
            </div>
            <div className='' >
              <div className="p-4">
                <a href="#" className="text-lg font-semibold text-gray-900 hover:underline">GIÀY ADIDAS ADIFOM SUPERSTAR</a>
                <p className="text-xl font-bold text-gray-900 mt-2">$3000</p>
              </div>

              <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white bg-opacity-90">
                <button className=" border-solid mb-3 p-2 rounded  bg-yellow-500  hover:bg-yellow-600">
                  Add to cart
                </button>
                <div className="flex space-x-4">
                  <a className="flex space-x-1 items-center text-gray-700 hover:text-gray-900" href="#"><Share2 /> <span>Share</span></a>
                  <a className="flex space-x-1 items-center text-gray-700 hover:text-gray-900" href="#"><Heart /> <span>Like</span></a>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden h-96  relative group">

            <div className="bg-slate-100 p-4">
              <img src="https://bizweb.dktcdn.net/100/446/826/files/logo-nike-3.png?v=1656926601220" alt="Product 1"
                className="w-full h-56 object-cover transition-transform duration-300 transform group-hover:scale-110" />
            </div>
            <div className='' >
              <div className="p-4">
                <a href="#" className="text-lg font-semibold text-gray-900 hover:underline">GIÀY ADIDAS ADIFOM SUPERSTAR</a>
                <p className="text-xl font-bold text-gray-900 mt-2">$3000</p>
              </div>

              <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white bg-opacity-90">
                <button className=" border-solid mb-3 p-2 rounded  bg-yellow-500  hover:bg-yellow-600">
                  Add to cart
                </button>
                <div className="flex space-x-4">
                  <a className="flex space-x-1 items-center text-gray-700 hover:text-gray-900" href="#"><Share2 /> <span>Share</span></a>
                  <a className="flex space-x-1 items-center text-gray-700 hover:text-gray-900" href="#"><Heart /> <span>Like</span></a>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden h-96  relative group">

            <div className="bg-slate-100 p-4">
              <img src="https://bizweb.dktcdn.net/100/446/826/files/logo-nike-3.png?v=1656926601220" alt="Product 1"
                className="w-full h-56 object-cover transition-transform duration-300 transform group-hover:scale-110" />
            </div>
            <div className='' >
              <div className="p-4">
                <a href="#" className="text-lg font-semibold text-gray-900 hover:underline">GIÀY ADIDAS ADIFOM SUPERSTAR</a>
                <p className="text-xl font-bold text-gray-900 mt-2">$3000</p>
              </div>

              <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white bg-opacity-90">
                <button className=" border-solid mb-3 p-2 rounded  bg-yellow-500  hover:bg-yellow-600">
                  Add to cart
                </button>
                <div className="flex space-x-4">
                  <a className="flex space-x-1 items-center text-gray-700 hover:text-gray-900" href="#"><Share2 /> <span>Share</span></a>
                  <a className="flex space-x-1 items-center text-gray-700 hover:text-gray-900" href="#"><Heart /> <span>Like</span></a>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden h-96  relative group">

            <div className="bg-slate-100 p-4">
              <img src="https://bizweb.dktcdn.net/100/446/826/files/logo-nike-3.png?v=1656926601220" alt="Product 1"
                className="w-full h-56 object-cover transition-transform duration-300 transform group-hover:scale-110" />
            </div>
            <div className='' >
              <div className="p-4">
                <a href="#" className="text-lg font-semibold text-gray-900 hover:underline">GIÀY ADIDAS ADIFOM SUPERSTAR</a>
                <p className="text-xl font-bold text-gray-900 mt-2">$3000</p>
              </div>

              <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white bg-opacity-90">
                <button className=" border-solid mb-3 p-2 rounded  bg-yellow-500  hover:bg-yellow-600">
                  Add to cart
                </button>
                <div className="flex space-x-4">
                  <a className="flex space-x-1 items-center text-gray-700 hover:text-gray-900" href="#"><Share2 /> <span>Share</span></a>
                  <a className="flex space-x-1 items-center text-gray-700 hover:text-gray-900" href="#"><Heart /> <span>Like</span></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default ProductDetail