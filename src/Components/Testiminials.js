import React from 'react'
import Img1 from '../Assets/img1.jpg'
import Img2 from '../Assets/img2.jpg'
import Img3 from '../Assets/img3.webp'
import Img4 from '../Assets/img4.jpg'
import  './TestimonialStyle.scss'

const Testiminials = () => {
  return (
    <div className='testimonial'>
      <h1><b>Testimonials</b></h1>
      <div className="testimonials">
      <div className='div1'>
        <img src={Img1} alt="" />
        <h2><b>Name</b></h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit earum vero consequatur labore ea. Ipsa placeat totam repellendus</p>
      </div>
      <div className='div2'>
        <img src={Img2} alt="" />
        <h2><b>Name</b></h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam beatae id corporis maxime ipsum repudiandae officia sit distinctio?</p>
      </div>
      <div className='div3'>
        <img src={Img3} alt="" />
        <h2><b>Name</b></h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit earum vero consequatur labore ea. Ipsa placeat totam repellendus</p>
      </div>
      <div className='div4'>
        <img src={Img4} alt="" />
        <h2><b>Name</b></h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam beatae id corporis maxime ipsum repudiandae officia sit distinctio?</p>
      </div>
      </div>
    </div>
  )
}

export default Testiminials
