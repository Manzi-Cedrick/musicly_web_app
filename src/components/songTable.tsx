import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import DeleteSongData from './modals/deleteSongData';

const SongTable = ({ data }: { data: any }) => {
    const [modal, setModal] = useState({
        id: '',
        showModal: false
    });
    const navigate = useNavigate();
    return (
        <table className='w-full'>
            <thead className='border-solid border-b-2 h-12 border-gray-700 '>
                <tr className='text-gray-500 text-[14px]'>
                    <th>#</th>
                    <th>Name of Song</th>
                    <th>Artist </th>
                    <th>Time</th>
                    <th>Genre</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {data ? data.map((song: any, i: number) => (
                    <tr key={i} className="border-b-2 text-slate-200 font-light hover:bg-main text-center hover:cursor-pointer group hover:border-white duration-500 border-gray-500 text-[12px]">
                        <td className='text-center'>
                            # {i + 1}
                        </td>
                        <td className='flex font-bold gap-8 py-5 justify-start mx-20 place-items-center text-center'>
                            <span>{song?.title}</span>
                        </td>
                        <td className='text-left'>{song?.artist}</td>
                        <td className='text-left'>{song?.length}</td>
                        <td className='text-left'>{song?.genre}</td>
                        <td className='text-center justify-center'>
                            <button onClick={() => { navigate(`/albums/${song?.song_id}/update`) }} className='bg-main hover:bg-white hover:text-main duration-500 border-2 border-white opacity-95 mx-4 text-black py-1 px-6 text-[12px] rounded-md'>Update</button>
                            <button onClick={() => setModal({ ...modal, id: song?.song_id, showModal: true })} className='group-hover:bg-white group-hover:text-main bg-transparent hover:bg-slate-700 hover:text-main duration-500 border-2 border-main text-main py-1 px-6 text-[12px] rounded-md'>Delete</button>
                        </td>
                    </tr>
                )) :
                    <tr className='text-[14px] bg-slate-900 flex justify-center'>
                        <td className='p-6'>No Data Fetch</td>
                    </tr>
                }
            </tbody>
            <DeleteSongData id={modal.id} showModal={modal.showModal} onClose={() => setModal({ ...modal, showModal: false })} />
        </table>
    )
}

export default SongTable