import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { albumDataArr, albumInt } from '../utils/album.data';
import DeleteData from './modals/deleteData'

const SongTable = () => {
    const [albumData, setalbumData] = useState(albumDataArr);
    const [modal, setModal] = useState(false);
    const navigate = useNavigate();
    const handleUpdate = (id: number) => {
        navigate(`/songs/${id}/update`);
    }
    return (
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
                        <button onClick={() => handleUpdate(i)} className='bg-main hover:bg-white hover:text-main duration-500 border-2 border-white opacity-95 mx-4 text-black py-1 px-6 text-[12px] rounded-md'>Update</button>
                        <button onClick={() => setModal(true)} className='bg-transparent hover:bg-slate-700 hover:text-main duration-500 border-2 border-main text-main py-1 px-6 text-[12px] rounded-md'>Delete</button>
                    </td>
                </tr>
            ))}
            <DeleteData id={"2312323"} showModal={modal} onClose={() => setModal(false)} />
        </table>
    )
}

export default SongTable