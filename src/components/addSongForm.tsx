import React from 'react'

const AddSongForm = () => {
  return (
    <div className='bg-zinc-900 pt-8 px-8 rounded-md overflow-auto'>
      <div className="relative z-0 w-full mb-6 group ">
        <input type="text" name="song_name" id="song_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-main focus:outline-none focus:ring-0 focus:border-main peer" placeholder=" " required />
        <label htmlFor="song_name" className="pee-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-main  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 -translate-y-8">Song Name</label>
      </div>
      <div className="relative z-0 w-full mb-6 group">
        <textarea defaultValue={'Song description'} name="song_description" id="song_description" className="block resize-none bg-slate-700 border-none outline-none rounded-lg p-2 px-4 w-full h-[20vh] text-white text-[12px]">
        </textarea>
        <label htmlFor="song_description" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-main  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8">Description</label>
      </div>
      <div className="relative z-0 w-full mb-6 group">
      <input type="text" name="song_genre" id="song_genre" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-main focus:outline-none focus:ring-0 focus:border-main peer" placeholder=" " required />
        <label htmlFor="song_genre" className="pee-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-main  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 -translate-y-6">Song Genre</label>
      </div>
      <div className="grid md:grid-cols-2 md:gap-6">
        <div className="relative z-0 w-full mb-6 group">
          <input type="text" name="song_album" id="song_album" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-main focus:outline-none focus:ring-0 focus:border-main peer" placeholder=" " required />
          <label htmlFor="song_album" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-main  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8">Album</label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input type="number" name="song_length" id="song_length" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-main focus:outline-none focus:ring-0 focus:border-main peer" placeholder=" " required />
          <label htmlFor="song_length" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-main  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8">Time lane</label>
        </div>
      </div>
      <div className="grid md:grid-cols-2 md:gap-6">
        <div className="relative z-0 w-full mb-6 group">
          <input type="date" name="release_date" id="release_date" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-main focus:outline-none focus:ring-0 focus:border-main peer" placeholder=" " required />
          <label htmlFor="release_date" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-main  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8">Release date</label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input type="text" name="production_company" id="production_company" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-main focus:outline-none focus:ring-0 focus:border-main peer" placeholder=" " required />
          <label htmlFor="production_company" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-main  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8">Production Co-</label>
        </div>
      </div>
      <div className='flex justify-between py-6'>
      <button type="submit" className="text-white hover:font-bold bg-main px-20 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto py-4 text-center dark:bg-main dark:hover:bg-teal-900 duration-500 dark:focus:ring-slate-50">Submit</button>
      <button type="button" className="text-white hover:font-bold bg-slate-500 px-20 hover:bg-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto py-4 text-center dark:bg-slate-500 dark:hover:bg-slate-800 dark:focus:ring-slate-600 duration-500">Cancel</button>
      </div>
    </div>
  )
}

export default AddSongForm