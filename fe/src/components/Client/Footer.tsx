
function Footer() {
  return (
    <footer>

                <div className=' text-white px-28 grid grid-cols-4 mt-2 py-16 gap-4 bg-black border-t-2 border-black '>
                    <div>
                        <h1 className='text-3xl font-bold pb-10'>Sneakers</h1>
                        <div>16 Xuân Phương, Phương Canh, Nam Từ Liêm, Hà  Nội</div>
                    </div>
                    <div>
                        <div className=' text-xl opacity-55 pb-10'>Link</div>
                        <li className='list-none pb-1'>
                            <a >Home</a>
                        </li>
                        <li className='list-none pb-1'>
                            <a>Shop</a>
                        </li>
                        <li className='list-none pb-1'>
                            <a href=''>About</a>
                        </li>
                        <li className='list-none pb-1'>
                            <a>Contact</a>
                        </li>
                    </div>
                    <div>
                        <div className=' text-xl opacity-55 pb-10'>Help</div>
                        <div className='pb-1'>Payment option</div>
                        <div className='pb-1'>Returns</div>
                        <div className='pb-1'>Privacy</div>
                        <div className='pb-1'>Policies</div>
                    </div>
                    <div>
                        <div className=' text-xl opacity-55 pb-10'>Newsietter</div>
                        <div className='pb-1'>
                            <input className='border-b-2 border-gray-300 outline-none p-1 text-black' type="text" placeholder='Enter your email address' />
                            <button className='ml-2 border-b-2 border-gray-300 hover:text-red-600'>Subscribe</button>
                        </div>
                    </div>
                </div>
                <hr className='border-black' />
            </footer>
  )
}

export default Footer
