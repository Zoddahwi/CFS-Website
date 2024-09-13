import React from 'react'
import './MemberStyle.scss'

const Member = () => {
  return (
    <div className='members'>
      <h1><b>Become Member</b></h1>
      <div className='member'>
        <h2><b>Be a Member Now</b></h2>
        <form action="">
          <label htmlFor="name">Name:</label><br />
          <input type="text" placeholder='Anthony Afriyie' id='name' /><br />

          <label htmlFor="email">Email:</label><br />
          <input type="email" id='email' placeholder='anthony@gmail.com' /><br />

          <label htmlFor="number">Phone Number:</label><br />
          <input type="tel" id='number' placeholder='0550807914' /><br />

          <label htmlFor="info">Profile:</label><br />
          <textarea name="info" id="info" rows={4} placeholder='Write More Information About You Here!!!'></textarea>
          <button>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Member
