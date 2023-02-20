import AddAlbumForm from '../components/addAlbumForm'
import Sidebar from '../components/Sidebar'
import RouteProtection from '../utils/route_protection'

const CreateAlbum = () => {
    return (
        <div className='bg-[#111111] min-h-screen min-w-screen flex justify-start'>
            <Sidebar />
            <div className='py-4 sm:ml-80 w-[80vw] lg:p-8'>
                <div className='bg-linear flex px-6  flex-col justify-center w-full h-[20vh] rounded-xl'>
                    <div className='text-white'>
                        <div className='py-6'>
                            <h1 className='font-bold text-4xl'>Enjoy latest Albums!</h1>
                            <p className='text-gray-500'>Live Music,Albums,concerts and Podcasts in Kigali, Rwanda</p>
                        </div>
                    </div>
                </div>
                <div className='font-bold text-xl text-white w-[100%]'>
                    <h1 className='py-6 text-main text-[16px]'>New album.</h1>
                    <AddAlbumForm />
                </div>
            </div>
        </div>
    )
}

export default RouteProtection(CreateAlbum)