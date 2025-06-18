import React from 'react'
import { useForm } from "react-hook-form";
import  images  from "../../constants/images"
import { user } from '../../context/context'

const profile = () => {

const{
useData
}= user();


    const{
        register,
        handleSubmit,
        formState: { errors },
        reset,
    
    }= useForm();
  return (
    <div className='min-h-screen bg-gray-100  justify-center p-4'>
<h2 className='text-2xl font-bold mb-6 text-center text-gray-800'>👤 My Profile</h2>

<div className='bg-white flex gap-2'>
 <div className='border-2  rounded-xl  '>

<img src={images.profile} alt="" />
 </div>
 
 <div>
<h5 className='text-green-400'>Natashia  Khalereiio</h5>
<p>Admin</p>
<p>Location</p>
 </div>

</div>

<h1>Personal Information</h1> 
<div className='bg-white flex border-2  p-6 border-none'>

<hr />
<div className='grid  md:grid-cols-2  lg:grid-cols-3 gap-3'>
<div>
<label htmlFor="">First Name</label>
 <input
            type="text"
            {...register("fname", { required: true })}
            className="w-full px-4 py-2 border none "
          />

</div>
<div>
<label htmlFor="">Last Name</label>
 <input
            type="text"
            {...register("lname", { required: true })}
            className="w-full px-4 py-2 border none "
          />

</div>
<div>
<label htmlFor="">Date  Of Birth</label>
 <input
            type="date"
            {...register("name", { required: true })}
            className="w-full px-4 py-2 border none "
          />

</div>
<div>
<label htmlFor="">Address</label>
 <input
            type="text"
            {...register("name", { required: true })}
            className="w-full px-4 py-2 border none "
          />

</div>
<div>
<label htmlFor="">Email</label>
 <input
            type="email"
            {...register("email", { required: true })}
            className="w-full px-4 py-2 border none "
          />

</div>
<div>
<label htmlFor="">Phone  Number</label>
 <input
            type="number"
            {...register("pnumber", { required: true })}
            className="w-full px-4 py-2 border none "
          />

</div>
<button className='w-1/4 border-none  bg-orange-400 p-2 border-2 rounded-2 cursor-pointer '>Edit</button>
</div>
</div>
    </div>
  )
}

export default profile