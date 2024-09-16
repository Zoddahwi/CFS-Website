import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Components/IntroStyles.scss';
import CFS1 from '../Assets/CFS_bg4.png';
import CFS2 from '../Assets/CFS_bg2.png'; // Another image for animation
import CFS3 from '../Assets/CFS_bg3.png'; 
import CFS4 from '../Assets/CFS_bg1.png';// Another image for animation

const images = [CFS1, CFS2, CFS3, CFS4]; // Array of images

const Intro = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 8000); // Change image every 3 seconds
    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <div>
      <section>
        <div className="main-container">
          <div className="text">
            <h1>Chance for Souls' Foundation</h1>
            <p>The foundation seeks to help individuals
              lead fuller lives by offering them new-found strength and purpose.
            </p>
            <Link to='/'><button>Donate Now</button></Link>
          </div>

          <div className="image">
            <img 
              src={images[currentImageIndex]} 
              alt="about" 
              className="animated-image" // Apply animations in SCSS
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Intro;
