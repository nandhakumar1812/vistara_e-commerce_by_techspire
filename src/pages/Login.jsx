import React, { useState } from 'react'

const Login = () => {

  const [currentState, setCurrentState] = useState('Login');

  const onSubmitHandler = async (event) =>{
    event.preventDefault();
  }

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-0 gap-4 text-gray-500 '>
      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
        <p className='prata-regular text-3xl'>{currentState}</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-800 ' />
      </div>
      {
        currentState === 'Login' ? '' : <input className='mt-1.5 border rounded-md p-2 w-full text-black' type="text" placeholder='Name' required />
      }
      <input 
        className='mt-1.5 border rounded-md p-2 w-full text-black' 
        type="email" 
        placeholder='Email' 
        required
      />
      <input
        type="password"
        placeholder="Password"
        className="mt-1.5 border rounded-md p-2 w-full text-black"
        required
      />
      <div className='flex justify-between w-full text-black text-sm m-[-8px] '>
        <p className='cursor-pointer'>Forget your password?</p>
        {
          currentState === 'Login' 
          ? <p onClick={()=>setCurrentState('Sign Up')} className='cursor-pointer'>Create account</p>
          : <p onClick={()=>setCurrentState('Login')} className='cursor-pointer'>Login here</p>
        }
      </div>
      <button className='px-6 mt-3 py-2 bg-black text-slate-50'>{currentState === 'Login' ? 'Sign In' : 'Sign Up'}</button>
    </form>
  )
}

export default Login