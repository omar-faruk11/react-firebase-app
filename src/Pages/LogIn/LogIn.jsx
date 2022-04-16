import React from 'react';
import { Link } from 'react-router-dom';

const LogIn = () => {
    return (
        <div className='flex justify-center items-center flex-col h-screen'>
            <div className=' w-96 shadow p-5 rounded-lg' >
                <form>
                    <p className='text-2xl font-bold text-center mb-2'>Log in to continue</p>
                    <input className='my-2 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500  w-full rounded-md sm:text-sm focus:ring-1' type="email" name="email" id="email" placeholder='Enter your email'  required/>

                    <input className='my-2 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500  w-full rounded-md sm:text-sm focus:ring-1' type="password" name="password" id="password" placeholder='Enter your password'  required/>
                    
                    <input className='w-full bg-rose-500 cursor-pointer text-white rounded py-2 my-3 hover:bg-rose-600' type="submit" value="Register" />
                </form>
                <div>
                    <p>New heare <Link className=' text-purple-600' to='/register'>please, Register</Link></p>
                </div>
                <div className="flex justify-center items-center">
                    <div className=' h-[1px] w-80 bg-black'></div>
                    <span className='mx-2 mb-2'>Or</span>
                    <div className='h-[1px] w-80 bg-black'></div>
                </div>
                <div className=' bg-sky-500 text-white p-1 rounded cursor-pointer mb-3'>
                    <img className='inline mr-1' src="https://img.icons8.com/color/30/000000/google-logo.png" alt="google-logo" />
                    <span>Log In With Google</span>
                </div>
                <div className=' bg-sky-500 text-white p-1 rounded cursor-pointer'>
                    <img className='inline mr-1' src="https://img.icons8.com/color/30/000000/facebook-new.png" alt="google-logo" />
                    <span>Log In With Facebook</span>
                </div>
            </div>
        </div>
    );
};

export default LogIn;