import React, {useState} from 'react'
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import {AiOutlineClose} from 'react-icons/ai'
import aboutImage from '../assets/about/about-img.webp'
import playBtn from '../assets/about/video-play.svg'
import '../styles/about.css'
import AboutItem from './UI/about-item/AboutItem';
import AboutSlider from './UI/about-slider/aboutSlider';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
};

const About = () => {
    const [open,
        setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return ( <> 
              <div className='about-main'>
                  <div className='centered'>
                      <img className='play-btn' onClick={handleOpen} src={playBtn} alt="Video Play Button"/>
                      <p>Müstəsna keyfiyyət və şərab zavodunun əsrlər boyu ənənələri
                      </p>
                  </div>
                  <div className="modal-box">
                      <div
                          className='thumbnail'
                          style={{
                          boxShadow: "inset 0 0 0 2000px rgba(0, 0, 0, 0.4)",
                          backgroundImage: 'url("https://abrau.az/front/img/about-img.webp")',
                          backgroundSize: "cover",
                          backgroundRepeat: "no-repeat"
                      }}
                          variant="primary"
                          onClick={handleOpen}></div>
                      <Modal
                          aria-labelledby="transition-modal-title"
                          aria-describedby="transition-modal-description"
                          open={open}
                          className='modal-wrapper'
                          onClose={handleClose}
                          closeAfterTransition
                          slots={{
                          backdrop: Backdrop
                      }}
                          slotProps={{
                          backdrop: {
                              timeout: 500
                          }
                      }}>
                          <Fade in={open}>
                              <Box sx={style}>
                                  <AiOutlineClose onClick={handleClose} className='close-box'/>
                                  <iframe
                                      width="1130"
                                      height="635"
                                      src="https://www.youtube.com/embed/1_4Rr5pP2wQ?autoplay=1&mute=1"
                                      title="YouTube video player"
                                      frameborder="0"
                                      allow="accelerometer; autoplay;
                                clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                      allowfullscreen></iframe>
                              </Box>
                          </Fade>
                      </Modal>
                  </div>
              </div>

              <AboutItem/>

              <AboutSlider/>
     </>
  )
  
}

export default About