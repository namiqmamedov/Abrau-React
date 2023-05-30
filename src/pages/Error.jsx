import React from 'react'
import error from '../assets/error.png'
import '../styles/error.css'
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom'


const Error = () => {
  return (
    <div className='error-index'>
        <div className="container">
            <div className="row">
            <h1>Opps! Seems you found nothing  here!</h1>
            <img src={error} alt="Error Image" />
            <Link to={'/'} className="back-home">
            <Button variant="outlined">Ana səhifə</Button>
            </Link>
            </div>
        </div>
    </div>
  )
}

export default Error