import React from 'react'
import './EventStyle.scss'
import Blog1 from '../Assets/blog1.jpg';
import Blog2 from '../Assets/blog2.jpg';
import Blog3 from '../Assets/blog3.jpg';
import Blog4 from '../Assets/photo_2024-10-06_00-01-20.jpg';
import Blog5 from '../Assets/blog5.jpg';
import Blog6 from '../Assets/blog6.jpg';
import Blog7 from '../Assets/blog7.jpg';
import Blog8 from '../Assets/blog8.jpg';
const Events = () => {
  return (
    <div className='Events'>
     <div className="blog-container1">
        <div className="blog-text">
        <h3>Theme: Words Matter; You Could Be Harming a Soul</h3>
        <p><span>In May 2024</span>, a series of impactful outreach programs took place in three schools with the theme</p>
        <p><span>"Words Matter; You Could Be Harming a Soul."</span> These programs aimed to highlight the influence of words</p>
        <p>On emotional well-being and foster a culture of kindness and respect among students. Led by <span>Mrs. Evelyn</span></p>
        <p><span>Benjamin-Sampson</span>, the events focused on teaching pupils the importance of self-worth, emotional resilience,and how words can either harm or heal.</p>
        </div>
        <div className="blog-image">
          <img src={Blog4} alt="" />
        </div>
      </div>


      {/* second container */}
      <div className="blog-container2">
       
        <div className="blog1">
          <img src={Blog2} alt="" />
          <h1>Day 1: Child Passion Academy</h1>
          <span> May 20, 2024</span>
          <p>The first outreach program was held at Child Passion Academy. The session began at 8:00 AM withMrs. Benjamin-Sampson engaging the pupils in a dynamic discussion about the power of words. She emphasized how crucial it is to speak kindly to oneself and others. The theme resonated deeply, as some pupils courageously shared personal experiences of how words had shaped their lives, both positively and negatively.</p>
        </div>
        <div className="blog2">
          <img src={Blog6} alt="" />
          <h1>Day 1: Child Passion Academy</h1>
          <span> May 20, 2024</span>
          <p>One particularly moving moment occurred when a student disclosed her experience of sexual abuse.This brave confession led to her receiving immediate counseling support. Materials, including tracts promoting positive communication and emotional awareness, were distributed to further reinforce the message. The event left a lasting impact on both students and teachers, contributing to a healthier school environment.</p>
        </div>
       
      </div>
     

      <div className="blog-container3">
      <div className="blog1">
          <img src={Blog1} alt="" />
          <h1>Day 2: The Great Nicobeth Academy</h1>
          <span> May 22, 2024</span>
          <p>The second outreach took place at Great Nicobeth Academy on May 22nd, reinforcing the central message of "Words Matter." Mrs. Benjamin-Sampson once again led the session, encouraging students to participate in a lively discussion on the role of words in shaping emotions and relationships.
          The program had a profound effect on the pupils. Several students approached the facilitators for counseling on various personal matters. 
          </p>
        </div>
        <div className="blog2">
          <img src={Blog3} alt="" />
          <h1>Day 2: The Great Nicobeth Academy</h1>
          <span> May 22, 2024</span>
          <p>One particularly heart-wrenching story came from a student whose mother blamed her for the death of her father and the loss of her job. This student was provided with a copy of "A 2nd Chance for Souls," a book authored by Mrs. Benjamin-Sampson, which offers hope and healing in similar situations. Tracts promoting emotional care and healthy communication were shared, and the school warmly embraced the outreach efforts.</p>
        </div>
      </div>

      <div className="blog-container4">
      <div className="blog1">
          <img src={Blog4} alt="" />
          <h1>Day 3: Novelty Montessori School</h1>
          <span> May 24, 2024</span>
          <p>The final outreach program occurred at Novelty Montessori School on May 24th. As with the previous sessions, the program focused on the theme "Words Matter." Mrs. Benjamin-Sampson engaged the pupils in discussions about the impact of their words on others. The students were eager to participate, offering insights into how they had experienced the power of words in their own lives.

          </p>
        </div>
        <div className="blog2">
          <img src={Blog8} alt="" />
          <h1>Day 3: Novelty Montessori School</h1>
          <span> May 24, 2024</span>
          <p>The event concluded with a distribution of educational materials aimed at promoting the avoidance of emotional abuse and encouraging positive interactions among peers. The program was deemed a success, with students and staff alike acknowledging the relevance of the theme in combating verbal bullying and emotional harm.</p>
        </div>
      </div>
    </div>
  )
}

export default Events
