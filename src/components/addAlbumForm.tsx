import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import albumService from '../services/album.service';
import { notifyInfo, notifySuccess } from '../utils/alerts';
import axios from 'axios';
import AlbumService from '../services/album.service';
const AddAlbumForm = () => {
    const [formData, setformData] = useState({
        title: '',
        description: '',
        artist: '',
        genre: '',
        cover_image: '',
        release_date: '',
        production_company: ''
    });
    const navigate = useNavigate();
    const [selectedFile, setSelectedFile] = useState<File>();
    let dataUrl = ""
    const uploadCoverImage = async (file:any) =>{
        const formInfo = new FormData()
        formInfo.append("file",file) 
        formInfo.append("upload_preset",'musicly');
        await axios.post("https://api.cloudinary.com/v1_1/real-service-ltd/image/upload",
            formInfo
        ).then((response:any)=>{
            dataUrl = response?.data['secure_url'];
        });
        formData.cover_image = dataUrl
        return dataUrl;
    } 
    
    const selectFile = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { files } = event.target;
        const selectedFiles = files as FileList;
        setSelectedFile(selectedFiles?.[0]);
      };
    
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            uploadCoverImage(selectedFile);
            const albumService = new AlbumService();
            const data = await albumService.createAlbum(formData);
            let message = data?.data?.message;
            if (message === 'Album created successfully') {
                notifySuccess(message);
                navigate('/albums');
            } else {
                notifyInfo(message);
            }
        } catch (error: any) {
            console.log(error)
            return;
        }
    }
    return (
        <form onSubmit={handleSubmit} className='bg-zinc-900 pt-8 px-8 rounded-md overflow-auto'>
            <div className="relative z-0 w-full mb-6 group ">
                <input value={formData.title} onChange={(e) => { setformData({ ...formData, title: e.target.value }) }} type="text" name="title" id="title" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-main focus:outline-none focus:ring-0 focus:border-main peer" placeholder=" " required />
                <label htmlFor="title" className="pee-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-main  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 -translate-y-8">Title </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
                <textarea onChange={(e) => { setformData({ ...formData, description: e.target.value }) }} defaultValue={formData.description} name="song_description" id="song_description" className="block resize-none bg-slate-700 border-none outline-none rounded-lg p-2 px-4 w-full h-[20vh] text-white text-[12px]">
                </textarea>
                <label htmlFor="song_description" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-main  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8">Description</label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
                <input value={formData.artist} onChange={(e) => { setformData({ ...formData, artist: e.target.value }) }} type="text" name="song_artist" id="song_artist" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-main focus:outline-none focus:ring-0 focus:border-main peer" placeholder=" " required />
                <label htmlFor="song_artist" className="pee-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-main  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 -translate-y-6">Artist</label>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-6 group">
                    <input value={formData.genre} onChange={(e) => { setformData({ ...formData, genre: e.target.value }) }} type="text" name="song_category" id="song_category" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-main focus:outline-none focus:ring-0 focus:border-main peer" placeholder=" " required />
                    <label htmlFor="song_category" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-main  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8">Category</label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <input onChange={selectFile} type="file" name="cover_image" id="cover_image" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-main focus:outline-none focus:ring-0 focus:border-main peer" placeholder=" " required accept='image/*' />
                    <label htmlFor="cover_image" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-main  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8">Cover Image</label>
                </div>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-6 group">
                    <input value={formData.release_date} onChange={(e) => { setformData({ ...formData, release_date: e.target.value }) }} type="date" name="release_date" id="release_date" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-main focus:outline-none focus:ring-0 focus:border-main peer" placeholder=" " required />
                    <label htmlFor="release_date" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-main  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8">Release date</label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <input value={formData.production_company} onChange={(e) => { setformData({ ...formData, production_company: e.target.value }) }} type="text" name="production_company" id="production_company" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-main focus:outline-none focus:ring-0 focus:border-main peer" placeholder=" " required />
                    <label htmlFor="production_company" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-main  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8">Production Co-</label>
                </div>
            </div>
            <div className='flex justify-between py-6'>
                <button type="submit" className="text-white hover:font-bold bg-main px-20 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto py-4 text-center dark:bg-main dark:hover:bg-teal-900 duration-500 dark:focus:ring-slate-50">Submit</button>
                <button type="button" className="text-white hover:font-bold bg-slate-500 px-20 hover:bg-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto py-4 text-center dark:bg-slate-500 dark:hover:bg-slate-800 dark:focus:ring-slate-600 duration-500">Cancel</button>
            </div>
        </form>
    )
}

export default AddAlbumForm