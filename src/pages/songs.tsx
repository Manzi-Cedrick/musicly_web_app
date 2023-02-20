import React, { useState } from 'react'
import { FaPlus } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import DeleteData from '../components/modals/deleteData';
import Sidebar from '../components/Sidebar'
import SongTable from '../components/songTable';
import { albumDataArr, albumInt } from '../utils/album.data'
import RouteProtection from '../utils/route_protection';
import UpdateSong from './updateSong';

const Songs = () => {
  const navigate = useNavigate();
  const redirectSongPage = () => {
    navigate('/songs/new')
  }
  return (
    <div className='bg-[#111111] min-h-screen min-w-screen flex justify-start'>
      <Sidebar />
      <div className='py-4 sm:ml-80 w-[80vw] lg:p-8'>
        <div className='bg-genre flex px-6  flex-col justify-center w-full h-[20vh] rounded-xl'>
          <div className='text-white'>
            <div className='py-6'>
              <h1 className='font-bold text-4xl'>Save new songs!</h1>
              <p className='text-slate-300'>Live Music,Albums,concerts and Podcasts in Kigali, Rwanda</p>
            </div>
          </div>
        </div>
        <div className='font-bold text-xl text-white w-[100%]'>
          <div className='flex justify-between'>
            <h1 className='py-6'>Lauren 's Playlist</h1>
            <div className='flex justify-center py-4 '>
              <button onClick={redirectSongPage} className='bg-white flex text-[12px] place-items-center gap-4 text-main py-2 px-6 hover:bg-main hover:text-white duration-500 rounded-md'>
                <FaPlus /> New Song
              </button>
            </div>
          </div>
          <SongTable/>
        </div>
      </div>
    </div>
  )
}

export default RouteProtection(Songs)