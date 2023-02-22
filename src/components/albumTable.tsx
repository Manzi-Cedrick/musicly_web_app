import Cookies from 'js-cookie';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { albumInt } from '../utils/album.data';
import DeleteData from './modals/deleteData'

const AlbumTable = ({data}:{data:any}) => {
    const navigate = useNavigate();
    const [modal, setModal] = useState({
        id: '',
        showModal: false
    });
    return (
        <table className='w-full'>
            <thead className='border-solid border-b-2 h-12 border-gray-700 '>
                <tr className='text-gray-500 text-[14px]'>
                    <th>#</th>
                    <th>Album Name</th>
                    <th>Short Description </th>
                    <th>Release date</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {data.map((album: albumInt, i: number) => (
                        <tr key={i} className="border-b-2 text-slate-200 font-light hover:bg-main text-center hover:cursor-pointer group hover:border-white duration-500 border-gray-500 text-[12px]">
                            <td className='text-center'>
                                # {i + 1}
                            </td>
                            <td className='flex font-bold gap-8 py-5 justify-start mx-20 place-items-center text-center'>
                                <img className='w-8 h-8 object-cover rounded-sm' src={`${album.cover_image}`} alt="" />
                                <span>{album.title}</span>
                            </td>
                            <td className='text-left'>{album?.description}</td>
                            <td className='text-left'>{album?.release_date}</td>
                            <td className='text-center justify-center'>
                                <button onClick={() => { navigate(`/albums/${album.album_id}/update`) }} className='bg-main hover:bg-white hover:text-main duration-500 border-2 border-white opacity-95 mx-4 text-black py-1 px-6 text-[12px] rounded-md'>Update</button>
                                <button onClick={() => setModal({ ...modal, id: album.album_id, showModal: true })} className='group-hover:bg-white group-hover:text-main bg-transparent hover:bg-slate-700 hover:text-main duration-500 border-2 border-main text-main py-1 px-6 text-[12px] rounded-md'>Delete</button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
            <DeleteData id={modal.id} showModal={modal.showModal} onClose={() => setModal({ ...modal, showModal: false })} />
        </table>
    )
}

export default AlbumTable