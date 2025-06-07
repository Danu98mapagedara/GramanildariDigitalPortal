import React from 'react'
import  images  from '../constants/images'
const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
<div>
  <img src={images.banner} alt="" />
</div>
    </div>
  )
}

export default Home