import React from 'react'

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';

import LightGallery from 'lightgallery/react/Lightgallery.es5';

import lgThumbnail from 'lightgallery/plugins/thumbnail';
import Zoom from 'lightgallery/plugins/zoom';



function About() {
  return (
   <div className='about-main'>
     <LightGallery
                speed={500}
                plugins={[lgThumbnail, Zoom]}
            >
                <a href="https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Google_Images_2015_logo.svg/1200px-Google_Images_2015_logo.svg.png">
                    <img alt="img1" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Google_Images_2015_logo.svg/1200px-Google_Images_2015_logo.svg.png" />
                </a>
                <a href="https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Google_Images_2015_logo.svg/1200px-Google_Images_2015_logo.svg.png">
                    <img alt="img2" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Google_Images_2015_logo.svg/1200px-Google_Images_2015_logo.svg.png" />
                </a>
    </LightGallery>
   </div>
  )
}

export default About