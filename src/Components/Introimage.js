import React from 'react'
import './IntroImage.scss'
import {Link} from 'react-router-dom'

const Introimage = () => {
  return (
    <div className='introImage'>
      <div className="introtext">
      <h1>Chance for souls' foundation</h1>
        <p>The foundation seeks to help individuals
          lead fuller lives by offering them new-found strength and purpose
        </p>
         <Link to='/'><button>Donate Now</button></Link>
       </div>
    </div>
  )
}

export default Introimage
