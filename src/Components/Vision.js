import React from 'react'
import Image2 from '../Assets/CFS_bg2.png'

const Vision = () => {
  return (
    <div className='px-20 py-8'>
      <div className='flex gap-10 pb-16'>

          <div className='w-[100vw]'>
            <img src={Image2} alt="" />
          </div>

          <div className='border-x-'>
          <h2 className='text-3xl font-medium pb-5'>Our Vision</h2>
          <p className='text-justify pb-5 text-xl font-light leading-7'>
            Sanity of mind, emotional upliftment , healing and socio-economic wellbeing for 
             people in need for fuller life, with new found strength and purpose.
           </p>
           <p className='text-justify font-bold'>We believe</p>
           <p className='text-justify leading-7'>
           -	All manner of people should be equipped to thrive in good self-image, sanity of 
            mind and emotional/mental wellbeing <br /> 
          -	(Science) Medical treatment for trauma/depression and emotionally devastated persons  
            can be helpful, yet application of (Spirituality) biblical counselling and shared 
             experiences can be of immense support and facilitate healing <br />
           </p>
          </div>

        </div>
    </div>
  )
}

export default Vision
