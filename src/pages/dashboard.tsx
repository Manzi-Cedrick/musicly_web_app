import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import albumService from '../services/album.service'
import authService from '../services/auth.service'
import songService from '../services/song.service'
import { albumDataArr, albumInt, songAlbumArr } from '../utils/album.data'
import RouteProtection from '../utils/route_protection'

const Dashboard = () => {
    const [albumData, setalbumData] = useState<any>(albumDataArr)
    const [songData, setSongData] = useState<any>(songAlbumArr)

    const fetchAlbums = async () => {
        const albums = await albumService.showAlbum();
        setalbumData(albums?.data?.albums);
        console.log("albums", albums)
    }
    const fetchSongs = async () => {
        const songs = await songService.displaySongs();
        setSongData(songs?.data?.songs);
        console.log("Songs", songs)
    }
    useEffect(() => {
        try {
            fetchAlbums();
            fetchSongs()
        } catch (error: any) {
            return error;
        }
    }, [])

    return (
        <div className='bg-[#111111] min-h-screen min-w-screen flex justify-start'>
            <Sidebar />
            <div className='py-4 sm:ml-80 w-[80vw] lg:p-8'>
                <Header />
                <div className='py-12'>
                    <div className='bg-music flex px-6  flex-col justify-center w-full h-[30vh] rounded-xl'>
                        <div className='text-white'>
                            <div className='py-6'>
                                <h1 className='font-bold text-4xl'>Music Celebration is back!</h1>
                                <p className='text-gray-500'>Live Music,Albums,concerts and Podcasts in Kigali, Rwanda</p>
                            </div>
                            <div className='py-4'>
                                <button className='bg-white text-main px-6 py-3 hover:bg-main hover:text-white duration-500 rounded-md'>
                                    More Information
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='text-white'>
                        <div className='font-bold text-xl w-full'>
                            <h1 className='py-6'>Top Albums</h1>
                            <div className='grid lg:grid-cols-8 pr-4 w-full gap-4'>
                                {albumData ? albumData.map((album: any) => (
                                    <div className='w-[8vw] cursor-pointer'>
                                        <div className='w-full h-[60%] rounded-sm'>
                                            <img className='h-full w-full object-fill rounded-sm' src={`${album.cover_image}`} alt="" />
                                        </div>
                                        <div className='text-white text-center py-4'>
                                            <h1 className='text-[14px] font-semibold'>{album.title}</h1>
                                            <p className='text-gray-500 text-[12px]'>{album.category}</p>
                                        </div>
                                    </div>
                                )) : (
                                    <p>No Albums Defined !</p>
                                )}
                            </div>
                        </div>
                        <div className='flex gap-4'>
                            <div className='font-bold text-xl w-[74%]'>
                                <h1 className='py-6'>Lauren 's Playlist</h1>
                                <table className=' w-full'>
                                    <tr className='text-gray-500 outline-2 outline-dashed h-12 border-gray-500 text-[14px]'>
                                        <th>#</th>
                                        <th>Name of Song</th>
                                        <th>Artist </th>
                                        <th>Time</th>
                                        <th>Genre</th>
                                    </tr>
                                    {songData.map((song: any, i: number) => (
                                        <tr key={i} className="border-b-2 hover:bg-slate-900 hover:cursor-pointer border-gray-500 text-[12px] font-semibold">
                                            <td className='text-center'>
                                                # {i}
                                            </td>
                                            <td className='flex gap-8 py-3 justify-center place-items-center text-center'>
                                                <img className='w-8 h-8 object-cover rounded-full' src={`${song.cover_image}`} alt="" />
                                                <span>{song.title}</span>
                                            </td>
                                            <td className='text-center'>{song.artist}</td>
                                            <td className='text-center'>{song.length}</td>
                                            <td className='text-center'>{song.genre}</td>
                                        </tr>
                                    ))}
                                </table>
                            </div>
                            <div className=' w-[28%]'>
                                <h1 className='py-6 text-xl font-bold'>Hot Track</h1>
                                <div className='flex bg-slate-900 py-4 flex-col px-4 w-full'>
                                    <div className='w-[18vw] cursor-pointer'>
                                        <div className='w-full h-[60%] rounded-sm'>
                                            <img className='h-full w-full object-fill rounded-sm' src={`https://people.com/thmb/YC7DQECGLdGPQYm1wOJsSJ8pocI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(999x0:1001x2)/taylor-swift-albums-4-431520e5189f42ff81a638580d5ac8a2.jpg`} alt="" />
                                        </div>
                                        <div className='text-white text-center py-4'>
                                            <h1 className='text-[14px] font-semibold'>{'The RED'}</h1>
                                            <p className='text-gray-500 text-[12px]'>{'Rock & Roll'}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default RouteProtection(Dashboard)