import React from 'react'
import  images  from "../../constants/images"
const profile = () => {
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


<div className='bg-white border-2 rounded-2 p-5'></div>
<h1>Personal Information</h1>
<hr />

    </div>
  )
}

export default profile