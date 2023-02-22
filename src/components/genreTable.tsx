import React from 'react'

const GenreTable = ({ data }: { data: any }) => {
    return (
        <table className=' w-full'>
            <thead>
                <tr className='text-gray-500 outline-2 outline-dashed h-12 border-gray-500 text-[14px]'>
                    <th>#</th>
                    <th>Name of Song</th>
                    <th>Artist </th>
                    <th>Time</th>
                    <th>Genre</th>
                </tr>
            </thead>
            <tbody>
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
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default GenreTable