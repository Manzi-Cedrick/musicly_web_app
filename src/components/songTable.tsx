import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { albumDataArr, albumInt } from '../utils/album.data';
import DeleteData from './modals/deleteData'
import DeleteSongData from './modals/deleteSongData';

const SongTable = ({data}:{data:any}) => {
    const [modal, setModal] = useState({
        id:'',
        showModal:false
    });
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
                <th>Genre</th>
                <th>Actions</th>
            </tr>
            {data.map((song: any, i: number) => (
                <tr key={song.song_id} className="border-b-2 hover:bg-slate-900 text-center hover:cursor-pointer border-gray-500 text-[12px] font-semibold">
                    <td className='text-center'>
                        # {i}
                    </td>
                    <td className='flex gap-8 py-5 justify-center place-items-center text-center'>
                        <span>{song.title}</span>
                    </td>
                    <td className='text-center'>{song.artist}</td>
                    <td className='text-center'>{song.length}</td>
                    <td className='text-center'>{song.genre}</td>
                    <td className='text-center justify-center'>
                        <button onClick={() => handleUpdate(i)} className='bg-main hover:bg-white hover:text-main duration-500 border-2 border-white opacity-95 mx-4 text-black py-1 px-6 text-[12px] rounded-md'>Update</button>
                        <button onClick={() => setModal({ ...modal, id: song.song_id, showModal: true })} className='bg-transparent hover:bg-slate-700 hover:text-main duration-500 border-2 border-main text-main py-1 px-6 text-[12px] rounded-md'>Delete</button>
                    </td>
                </tr>
            ))}
            <DeleteSongData id={modal.id} showModal={modal.showModal} onClose={() => setModal({ ...modal, showModal: false })} />
        </table>
    )
}

export default SongTable