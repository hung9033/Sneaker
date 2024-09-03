import React, { useState } from 'react';
import SearchResults from './SearchResult';
import { useProductSearch } from '../../hook/useProduct';

const Header = () => {
  return (
    <>
    
      <div className='flex items-center justify-between sticky top-0 z-50   '>
        <div className='flex-1 flex justify-center'>
        </div>

        <div className='w-14 h-14 border-4 mt-2 mb-2 mr-3 bg-slate-00 p-1 rounded-full hover:bg-slate-500 overflow-hidden ml-4'>
          <img
            className='rounded-full'
            src="https://product.hstatic.net/200000255805/product/z4473710787586_dd16ee0e88eafe7b9f63a6bbb58a10ac_fe0467cf864e4ad4ad20d8c1a87b30e3_master.jpg"
            alt="Profile"
          />
        </div>
      </div>


    </>
  );
};

export default Header;
