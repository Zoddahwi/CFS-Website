import React from 'react'
import {Link} from 'react-router-dom'
import '../Components/IntroStyles.scss'
import CFS1 from '../Assets/CFS_bg1.png'

const Intro = () => {
  return (
    <div>
      <section>
        <div className="main-container">
          <div className="text">
            <h1>Chance for souls' foundation</h1>
            <p>The foundation seeks to help individuals
                lead fuller lives by offering them new-found strength and purpose
            </p>
            <Link to='/'><button>Donate Now</button></Link>
          </div>

          <div className="image">
            <img src={CFS1} alt="about" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Intro
