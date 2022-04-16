import React from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
      const navigate = useNavigate();
    const handleFormSubint = (e) =>{
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email ,password)
        createUserWithEmailAndPassword(email,password)
        e.preventDefault()
    }
    if(user){
        navigate('/home')
    }
    if(loading){
        return <p>Loading..</p>
    }
    return (
        <div className='flex justify-center items-center flex-col h-screen'>
            <div className=' w-96 shadow p-5 rounded-lg' >
                <form onSubmit={handleFormSubint}>
                <p className='text-2xl font-bold text-center mb-2'>Register to continue</p>
                    <input className='my-2 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500  w-full rounded-md sm:text-sm focus:ring-1' type="text" name="name" id="name" placeholder='Enter your name'  required/>

                    <input className='my-2 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500  w-full rounded-md sm:text-sm focus:ring-1' type="email" name="email" id="email" placeholder='Enter your email'  required/>

                    <input className='my-2 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500  w-full rounded-md sm:text-sm focus:ring-1' type="password" name="password" id="password" placeholder='Enter your password'  required/>

                    <input className='my-2 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500  w-full rounded-md sm:text-sm focus:ring-1' type="password" name="re-password" id="re-password" placeholder='Enter re-password' />

                    <input className='w-full bg-rose-500 cursor-pointer text-white rounded py-2 my-3 hover:bg-rose-600' type="submit" value="Register" />
                </form>
                <div>
                    <p>Alrady have an acoutnt <Link className=' text-purple-600' to='/login'>please, Log In</Link></p>
                </div>
                <div className="flex justify-center items-center">
                    <div className=' h-[1px] w-80 bg-black'></div>
                    <span className='mx-2 mb-2'>Or</span>
                    <div className='h-[1px] w-80 bg-black'></div>
                </div>
                <div className=' bg-sky-500 text-white p-1 rounded cursor-pointer mb-3'>
                    <img className='inline mr-1' src="https://img.icons8.com/color/30/000000/google-logo.png" alt="google-logo" />
                    <span>Register With Google</span>
                </div>
                <div className=' bg-sky-500 text-white p-1 rounded cursor-pointer'>
                    <img className='inline mr-1' src="https://img.icons8.com/color/30/000000/facebook-new.png" alt="google-logo" />
                    <span>Register With Facebook</span>
                </div>
            </div>
        </div>
    );
};

export default Register;