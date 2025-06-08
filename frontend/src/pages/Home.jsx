import React from 'react'
import  images  from '../constants/images'
import ServiceSlider from './ServiceSlider'
const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-auto">
<div className='bg-yellow-300'>
  <img src={images.banner} alt="" className='bg-yellow-300' />
</div>
<div>
  <ServiceSlider/>
</div>
    </div>
  )
}

export default Home