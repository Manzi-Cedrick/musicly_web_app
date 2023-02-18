import React, { useState } from 'react'
import { FaEye, FaEyeSlash, FaFacebook, FaGoogle } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Logo from '../assets/logo'
const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false)
    return (
        <div className='bg-[#020202] flex min-h-screen text-white'>
            <div className='min-w-[40vw] h-screen p-10 px-20 bg-slate-900 '>
                <div className='bg-logo justify-center flex gap-6 font-bold text-white place-items-center'>
                    <Logo />
                    <h1 className='text-2xl'>Music.ly</h1>
                </div>
                <div className='py-6'>
                    <h1 className='text-main text-md font-bold py-4'>Get Started </h1>
                    <div className='flex flex-col gap-4 py-2'>
                        <div>
                            <input
                                className="w-full px-8 text-white py-4 rounded-lg shadow-xl font-medium bg-slate-600 border border-main placeholder-gray-500 text-sm focus:outline-none "
                                type="text"
                                placeholder="Username"
                            />
                        </div>
                        <div>
                            <input
                                className="w-full px-8 text-white py-4 rounded-lg shadow-xl font-medium bg-slate-600 border border-main placeholder-gray-500 text-sm focus:outline-none "
                                type="email"
                                placeholder="Email"
                            />
                        </div>
                        <div>
                            <div className='flex text-white h-14 rounded-lg shadow-xl font-medium bg-slate-600 border border-main placeholder-gray-500 text-sm focus:outline-none '>
                                <input
                                    className="w-full bg-transparent border-none outline-none px-8 "
                                    type={`${!showPassword ? 'text' : 'password'}`}
                                    placeholder="Password"
                                />
                                <div className='bg-slate-500 h-full flex place-items-center justify-center px-3 rounded-r-lg'>
                                    {!showPassword ? <FaEye onClick={() => setShowPassword((prev) => !prev)} className='text-md' /> : <FaEyeSlash onClick={() => setShowPassword((prev) => !prev)} className='text-md' />}
                                </div>
                            </div>
                            <div className="flex py-2 items-center">
                                <input checked id="checked-checkbox" type="checkbox" value="" className="w-4 h-4 bg-main" />
                                <label htmlFor="checked-checkbox" className="ml-2 text-sm font-medium text-main">Remember the password</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-footer'>
                    <div>
                        <button className='w-full bg-main text-white font-semibold py-5 rounded-md text-[12px] '>
                            Get Started
                        </button>
                    </div>
                    <div className='text-center py-3'>
                        <p className='text-slate-600 text-[12px]'>Already have an account <Link to='/signup' className='text-indigo-500'>Sign In</Link></p>
                    </div>
                </div>
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

export default SignUp