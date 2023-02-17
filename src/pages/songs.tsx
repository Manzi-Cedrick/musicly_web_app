import React, { useState } from 'react'
import { FaPlus } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar'
import { albumDataArr, albumInt } from '../utils/album.data'

const Songs = () => {
  const [albumData, setalbumData] = useState(albumDataArr);
  const navigate = useNavigate();
  const redirectSongPage = () =>{
      navigate('/songs/new')
  }
  return (
    <div className='bg-[#111111] min-h-screen min-w-screen flex justify-start'>
      <Sidebar />
      <div className='py-4 sm:ml-80 w-[80vw] lg:p-8'>
        <div className='bg-linear flex px-6  flex-col justify-center w-full h-[20vh] rounded-xl'>
          <div className='text-white'>
            <div className='py-6'>
              <h1 className='font-bold text-4xl'>Save new songs!</h1>
              <p className='text-gray-500'>Live Music,Albums,concerts and Podcasts in Kigali, Rwanda</p>
            </div>
          </div>
        </div>
        <div className='font-bold text-xl text-white w-[100%]'>
          <div className='flex justify-between'>
            <h1 className='py-6'>Lauren 's Playlist</h1>
            <div className='py-2 '>
            <button onClick={redirectSongPage} className='bg-white flex text-[12px] place-items-center gap-4 text-main py-3 px-6 hover:bg-main hover:text-white duration-500 rounded-md'>
             <FaPlus/> Add New Song
            </button>
            </div>
          </div>
          <table className=' w-full'>
            <tr className='text-gray-500 outline-2 outline-dashed h-12 border-gray-500 text-[14px]'>
              <th>#</th>
              <th>Name of Song</th>
              <th>Artist </th>
              <th>Time</th>
              <th>Like</th>
              <th>Actions</th>
            </tr>
            {albumData.map((album: albumInt, i: number) => (
              <tr className="border-b-2 hover:bg-slate-900 text-center hover:cursor-pointer border-gray-500 text-[12px] font-semibold">
                <td className='text-center'>
                  # {i}
                </td>
                <td className='flex gap-8 py-5 justify-center place-items-center text-center'>
                  <img className='w-8 h-8 object-cover rounded-full' src={`${album.cover_image}`} alt="" />
                  <span>{album.title}</span>
                </td>
                <td className='text-center'>{album.artist}</td>
                <td className='text-center'>{i}</td>
                <td className='text-center'>{i}</td>
                <td className='text-center justify-center'>
                  <button className='bg-main hover:bg-white hover:text-main duration-500 border-2 border-white opacity-95 mx-4 text-black py-1 px-6 text-[12px] rounded-md'>Update</button>
                  <button className='bg-transparent hover:bg-slate-700 hover:text-main duration-500 border-2 border-main text-main py-1 px-6 text-[12px] rounded-md'>Delete</button>
                </td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </div>
  )
}

export default Songs