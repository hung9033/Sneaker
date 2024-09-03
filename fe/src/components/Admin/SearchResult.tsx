import React from 'react';
import { IProduct } from '../../interface/Product'; // Đảm bảo rằng IProduct có cấu trúc đúng

import { Link } from 'react-router-dom';

interface SearchResultsProps {
  searchResults: any[];
  loading: boolean;
  error: string | null;
}

const SearchResults: React.FC<SearchResultsProps> = ({ searchResults, error }) => {
console.log(searchResults);


  if (error) {
    return <p className='text-red-500'>{error}</p>;
  }
  return (
    <>
      <div className="bg-white overflow-auto  ml-6 mr-12">
        <table className="min-w-full bg-white">

          <tbody className="text-gray-700">
            {searchResults.map((product: IProduct, index) => {
              return (
                <tr className="hover:bg-gray-200" key={index + 1}>
                  <td className=" text-left py-3 px-4">{product.name}</td>
                  <td className=" text-left py-3 px-4"><img src={product.img} alt="" width={50} /></td>
                  <td className="text-left py-3 px-4"><a className="hover:text-blue-500" >{product.price}</a></td>
                  <td className="text-left py-3 px-4 truncate" style={{ maxWidth: '150px' }}><a className="hover:text-blue-500" >{product.description}</a></td>

                  <td className='text-left py-3 px-4'>
                    <button className='bg-red-500 p-1 rounded mr-5 text-white hover:bg-red-600'>Delette</button>
                    <Link to={`products/edit/${product._id}`} className='bg-blue-500 p-2 rounded w-16 text-white hover:bg-blue-600'>Edit</Link>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default SearchResults;
