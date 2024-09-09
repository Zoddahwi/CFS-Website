import React from 'react'
import CFS1 from '../Assets/CFS_bg1.png'
import CFS2 from '../Assets/CFS_bg2.png'
import CFS3 from '../Assets/CFS_bg3.png'
import CFS4 from '../Assets/CFS_bg4.png'
import './ArticleStyle.scss'

const Article = () => {
  return (
    <div className='article'>
      <h1>News and Events</h1>
      <div className="container2">

    
        <div className="div1">
          <img src={CFS1} alt="" style={{height: "50%"}}/>
          <h3>By Anthony Afriyie</h3>
          <h5>The need to support us</h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, aliquid?</p>
        </div>
      

    
        <div className="div2">
          <img src={CFS2} alt="" />
          <h3>By Anthony Afriyie</h3>
          <h5>Lorem ipsum dolor sit amet.</h5>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, assumenda.</p>
        </div>
        

      
        <div className="div3">
          <img src={CFS3} alt="" />
          <h3>By Anthony Afriyie</h3>
          <h5>The need to support us</h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, aliquid?</p>
        </div>
       

      
        <div className="div4">
          <img src={CFS4} alt="" />
          <h3>By Anthony Afriyie</h3>
          <h5>The need to support us</h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, aliquid?</p>
        </div>
        
      </div>
    </div>
  )
}

export default Article
