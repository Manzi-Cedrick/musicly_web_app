import React, { useState } from 'react'
import Logo from '../assets/logo'
import { FaPlay, FaChartPie, FaArrowDown, FaRegArrowAltCircleDown, FaRegCaretSquareDown, FaRegCaretSquareUp, FaRegArrowAltCircleUp, FaPlaystation, FaSignOutAlt } from 'react-icons/fa'
const Sidebar = () => {
    const [showDiscovery, setShowDiscovery] = useState(false)
    return (
        <aside className='bg-[##120C0D] fixed top-0 left-0 z-40 border-r-2 border-gray-800 w-[20vw] min-h-screen flex px-2 flex-col'>
            <div className='flex gap-4 px-4 place-items-center flex-row py-6'>
                <Logo />
                <span className='font-bold text-2xl text-white'>Music.ly</span>
            </div>
            <div className='py-4 flex flex-col group  gap-4'>
                <div className='py-4 hover:cursor-pointer bg-[#FB2576] text-white duration-500 flex place-items-center px-8 hover:font-semibold gap-8 rounded-md'>
                    <FaChartPie className='text-xl' />
                    <span>Home</span>
                </div>
                <div className='py-4 hover:cursor-pointer relative text-gray-500 duration-500 px-8 flex flex-col gap-4 font-semibold rounded-md'>
                    <div className='flex place-items-center gap-8 '>
                        <FaPlay className='text-lg' />
                        <span>Discover</span>
                        <div className='bg-white flex place-items-center duration-500' onClick={(prev:any) => setShowDiscovery((prev) => !prev)}>
                            {showDiscovery ? <FaRegCaretSquareUp className='text-xl absolute right-6' /> : <FaRegCaretSquareDown className='text-xl absolute right-6' />}
                        </div>
                    </div>
                    {showDiscovery &&
                        <>
                            <div className='flex hover:bg-main hover:text-white rounded-md place-items-center justify-center gap-8 py-2'>
                                <span>Artists</span>
                            </div>
                            <div className='flex hover:bg-main hover:text-white rounded-md place-items-center justify-center gap-8 py-2'>
                                <span>Album</span>
                            </div>
                        </>
                    }
                </div>
                <div className='py-4 hover:cursor-pointer hover:bg-[#FB2576] text-gray-500 hover:text-white duration-500 flex place-items-center px-8 hover:font-semibold gap-8 rounded-md'>
                    <FaPlaystation className='text-xl' />
                    <span>Playlist</span>
                </div>
                <div className='py-4 bottom-2 hover:cursor-pointer hover:bg-[#FB2576] text-gray-500 hover:text-white duration-500 flex place-items-center px-8 hover:font-semibold gap-8 rounded-md'>
                    <FaSignOutAlt className='text-xl' />
                    <span>Sign out</span>
                </div>
            </div>
        </aside>
    )
}

export default Sidebar