import React from 'react'
import {FaSearch} from 'react-icons/fa'
const SearchInput = () => {
    return (
        <div className='border-2 border-gray-500 rounded-full flex min-w-[32vw]'>
            <input type="text" className='bg-transparent text-white border-none outline-none py-2 px-4 w-full' placeholder='Search Album' />
            <div className='hover:bg-[#FB2576] duration-500 hover:cursor-pointer px-4 flex justify-center place-items-center rounded-r-full text-gray-500 hover:text-white'>
                <FaSearch className='text-[14px]' />
            </div>
        </div>
    )
}

export default SearchInput