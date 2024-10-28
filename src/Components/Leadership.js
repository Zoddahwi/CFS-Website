import React from 'react'
import { Link } from 'react-router-dom'
import Leader1 from '../Assets/WhatsApp Image 2024-07-20 at 16.10.09.jpeg'
import Leader2 from '../Assets/Chance pic 1.jpg'
import Leader3 from '../Assets/chance new.jpg'
import './LeadershipStyles.scss'

const Leadership = () => {
  return (
    <div className='leadership'>
      <h1>Leadership</h1>
      <div className="container3">
        <div className="leader1">
          <img src={Leader1} alt="" />
          <h5><b>Daniel Ledi</b></h5>
        </div>

        <div className="leader1">
          <img src={Leader2} alt="" />
          <h5><b>Deaconess MRS Faustina Konadu Akomeah</b></h5>
        </div>

        <div className="leader1">
          <img src={Leader3} alt="" />
          <h5><b>Rev. Emmanuel Agyei Kwafo</b></h5>
        </div>
      </div>
    </div>
  )
}

export default Leadership
