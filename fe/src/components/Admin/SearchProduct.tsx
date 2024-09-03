import React, { useState } from 'react'
import { useProductSearch } from '../../hook/useProduct';
import SearchResults from './SearchResult';

const SearchProduct: React.FC = () => {
    const { searchProducts, searchResults, loading, error } = useProductSearch();
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (searchTerm.trim()) {
            searchProducts(searchTerm.trim());
        }
    };
    return (
        <>

            <form onSubmit={handleSearch} className=''>
                <input
                    type="text"
                    placeholder='Search Product'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className=' outline-none border-2 border-slate-700 rounded-md p-1 mr-2'
                />
                <button
                    type="submit"
                    className=' bg-blue-600 w-20 h-9 rounded-md text-white hover:bg-blue-500'
                >
                    Search
                </button>
                {loading && <div className='mt-2'><div className='loader'></div></div>}
                {error && <p className='text-red-500 mt-2'>{error}</p>}
            </form>
            <SearchResults searchResults={searchResults} loading={loading} error={error} />
        </>
    )
}

export default SearchProduct