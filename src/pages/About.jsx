import React from 'react'
import aboutImage from '../assets/about/about-img.webp'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import {AiOutlineClose} from 'react-icons/ai'
import '../styles/about.css'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
};

const About = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    
   <div className='about-main'>
      <div className="thumbnail-about">
      <img onClick={handleOpen} src={aboutImage} alt="About Image" />
      <Modal
      className='modal-box'
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <AiOutlineClose onClick={handleClose} className='close-box'/>
        <iframe width="1130" height="635" src="https://www.youtube.com/embed/1_4Rr5pP2wQ"
         title="YouTube video player" frameborder="0" allow="accelerometer; autoplay;
         clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
         allowfullscreen></iframe>
        </Box>
      </Modal>
      </div>
      <div className="bg-list">
      <div className="background-img"></div>
      </div>
   </div>
  )
}

export default About