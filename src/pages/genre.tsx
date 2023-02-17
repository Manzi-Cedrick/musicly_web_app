import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import { albumDataArr } from '../utils/album.data'

const Genre = () => {
  const [albumData, setalbumData] = useState(albumDataArr);
  return (
    <div className='bg-[#111111] min-h-screen min-w-screen flex justify-start'>
      <Sidebar />
      <div className='py-4 sm:ml-80 w-[80vw] lg:p-8'>
        <div className='bg-linear flex px-6  flex-col justify-center w-full h-[20vh] rounded-xl'>
          <div className='text-white'>
            <div className='py-6'>
              <h1 className='font-bold text-4xl'>Enjoy latest Categories!</h1>
              <p className='text-gray-500'>Live Music,Albums,concerts and Podcasts in Kigali, Rwanda</p>
            </div>
          </div>
        </div>
        <div className='font-bold text-xl text-white w-[100%]'>
          <h1 className='py-6'>Popular categories</h1>
          <div className='grid grid-cols-6 gap-2'>
            {albumData.map((genre: any) => (
              <div className={`bg-blue-400 duration-500 group min-h-[25vh] rounded-lg flex justify-center place-items-center hover:cursor-pointer max-w-[14vw]`}>
                <h1 className='group-hover:scale-150 group-hover:text-x duration-500'>{genre.category}</h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Genre