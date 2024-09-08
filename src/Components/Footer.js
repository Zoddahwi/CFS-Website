import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaPinterest} from 'react-icons/fa'
import Logo from '../Assets/Logo_cfs_new.svg'
import './FooterStyle.scss'


const Footer = () => {
  return (
    <footer>
    <div className="footer">
      <div className="foot-item">
        <div className="foot-icon">
          <div className="f-logo">
           <img src={Logo} alt="" />
          </div>
          <div className="social-icon">
            <FaFacebook size={25}  style={{color:'#ffffff'}} className='icons'/>
            <FaInstagram size={25}  style={{color:'#ffffff'}} className='icons'/>
            <FaTwitter size={25}  style={{color:'#ffffff'}} className='icons'/>
            <FaPinterest size={25}  style={{color:'#ffffff'}} className='icons'/>
            <FaYoutube size={25}  style={{color:'#ffffff'}} className='icons'/>
          </div>
        </div>
        <div className="foots">
        <div className="foot">
          <Link className='about2'>AboutUs</Link>
          <Link>Contact</Link>
          <Link>Blogs</Link>
        </div>
        <div className="foot">
         <Link>Careers</Link>
         <Link>Support</Link>
         <Link>Privacy Policy</Link>
        </div>
        </div>
      </div>
      <div className="foot-invite">
        <button className="foot-btn">Donate Now</button>
        <p>&copy; .Likewise.AllRightReserve</p>
      </div>
    </div>
  </footer>
  )
}

export default Footer
