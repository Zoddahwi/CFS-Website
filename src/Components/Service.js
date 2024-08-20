import React from 'react'
import Announcement from '../Assets/announcement.svg'
import Partnership from '../Assets/business-partnership.svg'
import Charity from '../Assets/charity.svg'
import Counselling from '../Assets/Counseling.svg'
import '../Components/serviceStyle.scss'

const Service = () => {
  return (
    <div>
      <div className='services'>
        <div className="intro">
          <h1>Why must you support Souls Foundation?</h1>
          <p>The Chance for Souls aims to provide sanity of mind, emotional upliftment, healing and socio-economic wellbeing to people in need. </p>
        </div>

        <div className="container">
          <div className="col-1">
            <img src={Partnership} alt="" />
            <h2>Partnerships</h2>
            <p>The platform aims to unite institutions and community Based Organizations to prevent actions that can trigger mental health issues, expecially in children and women, while supporting effective management and recovery for those already affected. </p>
          </div>

          <div className="col-2">
            <img src={Announcement} alt="" />
            <h2>Campaigns and Advocacies</h2>
            <p>Work with stakeholders to step up campaigns against treats to sound mind as we       create awareness for prevention of practices that generate Mental Health challenges.
            </p>
          </div>

          <div className="col-3">
            <img src={Counselling} alt="" />
            <h2>Counselling</h2>
            <p>
              To offer coinselling where needed for prevention, management and recovery of persons suffering from depression/trauma.
            </p>
          </div>

          <div className="col-4">
            <img src={Charity} alt="" />
            <h2>Support</h2>
            <p>Emotional, financial and material support to identify individuals, persons or groups in need after recovery from Mental Health/emotional brokeness to re-settle them academically, economically and socially for positive productive living. </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Service
