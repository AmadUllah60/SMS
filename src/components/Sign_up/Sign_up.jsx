import React from 'react'
import { useForm } from 'react-hook-form'

function Sign_up() {
    const{register, 
        handleSubmit,
    } = useForm()
    const onSubmit = (data) =>{console.log(data)}
    
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
            <div className='flex bg-gray-600 w-screen h-screen justify-center items-center '>
                <div className=' bg-slate-500 min-w-[50%] max-h-[50%] sm:w-[350px]  md:w-450px lg:w-[650px]'>
                    <div className='flex justify-center items-center h-[50px] bg-black text-white font-bold'>
                        <h1>Sign Up</h1>
                    </div>
                    <div className=' bg-white  min-h-[50%] flex justify-center items-center'>
                        <div className=''>
                        <input {...register("userName", { required: true })} className='mt-10 shadow-md shadow-black focus:outline-none ' type="text" placeholder='UserName'/><br />
                        <input {...register("passWord", {required: true})} className='mt-10 shadow-md shadow-black focus:outline-none' type="password" placeholder='Password'/><br />
                        <input {...register("confirmPassWord", {required: true})} className='mt-10 shadow-md shadow-black focus:outline-none' type="password" placeholder='Confirm Password'/><br />
                        <p className='ml-[40%] font-light text-sm'>Forgot password</p>
                        <button type='submit' className='mt-3 mb-6 bg-slate-400 shadow-md shadow-black w-[50%] h-8 ml-[35%]'>Sign Up</button>
                        <p className='ml-[40%] mb-5 font-light text-sm'><a href='/login'>Sign In</a></p>
                        </div>
                    </div>
                </div>
            </div>
      </form>
    </div>
  )
}
export default Sign_up

