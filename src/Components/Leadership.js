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
          <h5>Daniel Ledi</h5>
          <p>
            Having obtained a degree in Sociology and Philosophy from the University of Ghana in 2016, I returned to the University of Ghana where I obtained a degree in Law in 2019.
            {/* I have also been serving as Legal and Compliance Officer for SUNU Assurances Ghana LTD since June 2023. */}
          </p>
          <Link><button>Read More...</button></Link>
        </div>

        <div className="leader1">
          <img src={Leader2} alt="" />
          <h5>Deaconess MRS Faustina Konadu Akomeah</h5>
          <p>
            Holds, MA TESL-Teaching of English as a second language-University of Ghana Legon.
            {/* She’s trained as a Marriage Counselor at the Pentecost Theological Seminary and a Counseling and Marriage therapist at Pentecost University College
            She is a deaconess at PIWC ABLEKUMA. */}
          </p>
          <Link><button>Read More...</button></Link>
        </div>

        <div className="leader1">
          <img src={Leader3} alt="" />
          <h5>Rev. Emmanuel Agyei Kwafo</h5>
          <p>
          He is an ordained minister of the Church of Pentecost who is currently serving as the National Coordinator for the Home
           {/* and Urban Missions, a specialised Ministry of the church focused on the marginalized. */}
          {/* He is an adjunct lecturer at Pentecost University.He has authored 5 books and some articles.   */}
          </p>
          <Link><button>Read More...</button></Link>
        </div>
      </div>
    </div>
  )
}

export default Leadership
