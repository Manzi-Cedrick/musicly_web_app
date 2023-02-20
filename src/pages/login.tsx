import React, { useState } from 'react'
import { FaEye, FaEyeSlash, FaFacebook, FaGoogle } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import Logo from '../assets/logo'
import authService from '../services/auth.service'
import { notifyInfo, notifySuccess } from '../utils/alerts'

const Login = () => {
    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [isValid, setIsValid] = useState<Boolean>(true);

    const validate = async (e: React.FormEvent<HTMLFormElement>) => {
        if (formData.email === '') {
            setIsValid(false);
        }
        if (formData.password === '') {
            setIsValid(false)
        }
        if (isValid) {
            handleSubmit(e);
        }
    }
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const data = await authService.login(formData);
            let message = data?.data?.message;
            let token = data?.data?.token;
            if (message === 'Authentication successful') {
                authService.setToken(token)
                notifySuccess(message);
                navigate('/');
            } else {
                notifyInfo(message);
            }
        } catch (error: any) {
            console.log(error)
            return;
        }
    }
    return (
        <div className='bg-[#020202] flex min-h-screen text-white'>
            <div className='min-w-[40vw] h-screen p-10 px-20 bg-slate-900 '>
                <div className='bg-logo justify-center flex gap-6 font-bold text-white place-items-center'>
                    <Logo />
                    <h1 className='text-2xl'>Music.ly</h1>
                </div>
                <form onSubmit={validate}>
                    <div className='py-6'>
                        <h1 className='text-main text-md font-bold py-4'>Login </h1>
                        <div className='flex flex-col gap-4 py-2'>
                            <div>
                                <input
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full px-8 text-white py-4 rounded-lg shadow-xl font-medium bg-slate-600 border border-main placeholder-gray-500 text-sm focus:outline-none "
                                    type="email"
                                    placeholder="Email"
                                />
                            </div>
                            <div>
                                <div className='flex text-white h-14 rounded-lg shadow-xl font-medium bg-slate-600 border border-main placeholder-gray-500 text-sm focus:outline-none '>
                                    <input
                                        value={formData.password}
                                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                        className="w-full bg-transparent border-none outline-none px-8 "
                                        type={`${!showPassword ? 'text' : 'password'}`}
                                        placeholder="Password"
                                    />
                                    <div className='bg-slate-500 h-full flex place-items-center justify-center px-3 rounded-r-lg'>
                                        {!showPassword ? <FaEye onClick={() => setShowPassword((prev) => !prev)} className='text-md' /> : <FaEyeSlash onClick={() => setShowPassword((prev) => !prev)} className='text-md' />}
                                    </div>
                                </div>
                                <div className="flex py-2 items-center">
                                    <input defaultChecked id="checked-checkbox" type="checkbox" value="" className="w-4 h-4 bg-main" />
                                    <label htmlFor="checked-checkbox" className="ml-2 text-sm font-medium text-main">Remember the password</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='bg-footer'>
                        <div>
                            <button className='w-full bg-main text-white font-semibold py-5 rounded-md text-[12px] '>
                                Login
                            </button>
                        </div>
                        <div>
                            <div className='w-full'>
                                <p className='text-slate-500 text-center py-3'> Or </p>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <button className='w-full group flex place-items-center gap-8 justify-center bg-slate-800 hover:bg-indigo-500 duration-500 text-white font-semibold py-5 rounded-md text-[12px] '>
                                    <FaGoogle className='text-md group-hover:scale-150 duration-500 hover:text-xl' />
                                    Sign in with google
                                </button>
                                <button className='w-full group flex place-items-center gap-8 justify-center bg-slate-800 hover:bg-indigo-500 duration-500 text-white font-semibold py-5 rounded-md text-[12px] '>
                                    <FaFacebook className='text-md group-hover:scale-150 duration-500 hover:text-xl' />
                                    Sign in with facebook
                                </button>
                            </div>
                        </div>
                        <div className='text-center py-3'>
                            <p className='text-slate-600 text-[12px]'>Already have an account <Link to='/auth/signup' className='text-indigo-500'>Sign In</Link></p>
                        </div>
                    </div>
                </form>
            </div>
            <div className='bg-slate-800 flex justify-center place-items-center'>
                <div className="md:w-8/12 lg:w-4/6 mb-12 md:mb-0">
                    <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                        className="w-full"
                        alt={'login-svg'}
                    />
                </div>
            </div>
        </div>
    )
}

export default Login