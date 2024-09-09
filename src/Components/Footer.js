import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaPinterest} from 'react-icons/fa'
import Logo from '../Assets/Logo_cfs_new.svg'
import './FooterStyle.scss'


const Footer = () => {
  return (
    <footer>
      <div className='logos'>
        <img src={Logo} alt="" />
        <div className="social-icon">
            <FaFacebook size={25}  style={{color:'#ffffff'}} className='icons'/>
            <FaInstagram size={25}  style={{color:'#ffffff'}} className='icons'/>
            <FaTwitter size={25}  style={{color:'#ffffff'}} className='icons'/>
            <FaPinterest size={25}  style={{color:'#ffffff'}} className='icons'/>
            <FaYoutube size={25}  style={{color:'#ffffff'}} className='icons'/>
          </div>
      </div>
      <div className='footer-items'>
        <div>
        <ul>
          <li><Link>About Us</Link></li>
          <li><Link>Contact</Link></li>
          <li><Link>Blogs</Link></li>
        </ul>
        </div>
        
        <div>
        <ul>
          <li><Link>Careers</Link></li>
          <li><Link>Support</Link></li>
          <li><Link>Privacy Policy</Link></li>
        </ul>
        </div>
      </div>
      <div className='footer-invite'>
        <button className="foot-btn">Donate Now</button>
        <p>&copy; .Likewise.AllRightReserve</p>
      </div>

  </footer>
  )
}

export default Footer
