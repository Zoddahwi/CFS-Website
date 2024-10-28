import React from 'react'
import { Link } from 'react-router-dom'
import '../Components/ContactStyles.scss'

const Contact = () => {
  return (
   <div className='contact'>
    <h1 className='title' style={{fontSize: "2.5em", fontWeight: "500"}}>Contact Us</h1>
       <p className='p'>Please get in touch with us for any questions</p>
    <div className="contacts">
     
      <div className="form">
         <h1 className='title'>Contact Us</h1>

        <div className='us'>
          <p><b>Email:</b> chanceforsouls@gmail.com</p>
          <p><b>Number:</b> +233 550 807 914 </p>
        </div>
        <form action="">
          <label htmlFor="name">Name:</label> <br />
          <input type="text" id="name" placeholder="Anthony Afriyie" /><br /><br />

          <label htmlFor="email">Email:</label><br />
          <input type="email" id='email' placeholder='anthonyafriyie@gmail.com' /><br /><br />

          <label htmlFor="message">Message:</label><br />
          <textarea name="message" id="message" placeholder='Your Message here'></textarea><br />
          <div className="btn2">
             <Link to='/'><button>Send Message</button></Link>
          </div>
        </form>
      </div>
      </div>
    </div>
  )
}

export default Contact
