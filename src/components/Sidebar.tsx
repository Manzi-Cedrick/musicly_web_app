import React, { useEffect , useState} from 'react'
import Logo from '../assets/logo'
import { Link, useLocation } from 'react-router-dom'
import { sideBarArr } from '../utils/pagedata'
import authService from '../services/auth.service'
const Sidebar = () => {
  
    const linkSet = sideBarArr;
    const route = useLocation();
    const changeHeader = (path: string) => {
        if (path === route.pathname) {
            return ` bg-main text-white font-bold`
        }
    }
    return (
        <aside className='bg-[##120C0D] fixed top-0 left-0 z-40 border-r-2 border-gray-800 w-[20vw] min-h-screen flex px-2 flex-col'>
            <div className='flex gap-4 px-4 place-items-center flex-row py-6'>
                <Logo />
                <span className='font-bold text-2xl text-white'>Music.ly</span>
            </div>
            <div className='py-4 flex flex-col group text-gray-500 gap-4'>
                {linkSet.map((link: any) => (
                    <Link key={link.link_id} to={`${link.link_url}`} className={` py-4 hover:cursor-pointer duration-500 flex place-items-center px-8 hover:font-semibold gap-8 rounded-md ${changeHeader(link.link_url)}`}>
                        {link.link_icon_name}
                        <span>{link.link_name}</span>
                    </Link>
                ))}
            </div>
        </aside>
    )
}

export default Sidebar