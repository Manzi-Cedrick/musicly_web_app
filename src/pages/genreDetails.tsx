import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import GenreTable from '../components/genreTable'
import Sidebar from '../components/Sidebar'
import SongTable from '../components/songTable'
import GenreService from '../services/genre.service'
import RouteProtection from '../utils/route_protection'

const GenreDetails = () => {
  let [songGenreData, setSongGenreData] = useState([])
  const { id } = useParams();
  const genreService = new GenreService();
  useEffect(() => {
    const genreSongsFetch = async () => {
      const res = await genreService.getSongsByGenre(id);
      let data = res.data.songs
      setSongGenreData(data);
      console.log("The AUD DATA", songGenreData)
    }

    return () => {
      genreSongsFetch();
    }
  }, [])

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
          <h1 className='py-6'>Popular Songs</h1>
          <GenreTable data={songGenreData} />
        </div>
      </div>
    </div>
  )
}

export default RouteProtection(GenreDetails)