import React from 'react'
import Image from '../Assets/CFS_bg1.png'

const Mission = () => {
  return (
    <>
      <div className='text-center px-20 py-8'>
        <h1 className='text-center text-4xl font-semibold py-10'>About Us</h1>
        <div className='flex gap-10 items-center pb-16'>
          <div>
            <h2 className='text-3xl font-medium pb-10 text-justify'>Our Mission</h2>
            <p className='text-justify pb-10 text-xl font-light leading-10'>
            Pursue an alternative way of promoting and improving Mental health and wellbeing of 
             people through mobilizing and organizing; fellowship, counselling, advocacies and 
              education and support, using biblical principles (music and words) together with 
               other proven strategies from shared experiences (in addition to what medical 
                science provides).
            </p>
          </div>

          <div>
            <img src={Image} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Mission
