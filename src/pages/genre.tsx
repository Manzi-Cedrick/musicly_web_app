import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar'
import { albumDataArr } from '../utils/album.data'
import RouteProtection from '../utils/route_protection';

const Genre = () => {
  const [albumData, setalbumData] = useState(albumDataArr);
  const navigate = useNavigate();
  return (
    <div className='bg-[#111111] min-h-screen min-w-screen flex justify-start'>
      <Sidebar />
      <div className='py-4 sm:ml-80 w-[80vw] lg:p-8'>
        <div className='bg-genre flex px-6  flex-col justify-center w-full h-[20vh] rounded-xl'>
          <div className='text-white'>
            <div className='py-6'>
              <h1 className='font-bold text-4xl'>Enjoy latest Categories!</h1>
              <p className='text-slate-300'>Live Music,Albums,concerts and Podcasts in Kigali, Rwanda</p>
            </div>
          </div>
        </div>
        <div className='font-bold text-xl text-white w-[100%]'>
          <h1 className='py-6'>Popular categories</h1>
          <div className='grid grid-cols-6 gap-2'>
            {albumData.map((genre: any, i: number) => (
              <div onClick={() => navigate(`/genre/${i}/details`)} className={`bg-blue-400 hover:bg-main hover:scale-105 hover:shadow-slate-700 hover:-translate-y-4 hover:shadow-2xl duration-700 group min-h-[25vh] rounded-lg flex justify-center place-items-center hover:cursor-pointer max-w-[14vw]`}>
                <h1 className='group-hover:text-x duration-500'>{genre.category}</h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default RouteProtection(Genre)