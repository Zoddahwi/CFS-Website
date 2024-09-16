import React,{useState} from 'react'
import '../Components/HeaderStyle.scss'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import Logo from '../Assets/Logo_cfs_new.svg'



const Header = () => {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)

  return (
  
      <header>
        <nav>
    
            <img src={Logo} alt="" className='logo1' />
        
          <div>
          <ul className={click ? "nav-menu active" : 'nav-menu'}>
            <li className='nav-item'><Link to='/'  className='a'>Home</Link></li>
            <li className='nav-item'><Link to='/About' className='a'>About</Link></li>
            <li className='nav-item'><Link to='/ContactUs' className='a'>Contact</Link></li>
            <li className='nav-item'><Link to='/' className='a'>Blogs</Link></li>
            <li className='nav-item'><Link to='/Career' className='a'>Careers</Link></li>
          </ul>
          </div>
          <div className="button">
          <Link to='/'><button>Donate Now</button></Link>
        </div>
        </nav>

        
        <div className='hamburger' onClick={handleClick}>
         {/* {click ? (<FaTimes size={25}/>): (<FaBars size={25}/>)}  */}
         {click ? (<FaTimes size={30} style={{ color: '#000000' }} />) : (<FaBars size={30} style={{ color: '#000000' }} />)}
        </div>
      </header>
    
  )
}

export default Header
