import React from 'react'
import contactCommon from '../assets/contact/contact-common.png'
import '../styles/contact.css'
import TextField from '@mui/material/TextField';
import {Link} from 'react-router-dom'
import Button from '@mui/material/Button';


const Contact = () => {
  return (
    <>
    <section className='common-section'>
        <div className="background-img"></div>
        <img src={contactCommon} alt="Common Image"/>
        <h1 className="centered">ƏLAQƏ
        </h1>
    </section> 
    <section className='contact-card'> 
        <div className="container">
            <div className="row">
               <div className="card-main">
               <div className="card-index">
                    <div className="title">Ünvan</div>
                    <Link>AZ5500, Şəki rayonu, Çələbixan qəsəbəsi, Şəki Şərab zavodunun ofis binası</Link>
                </div>
                <div className="card-index">
                    <div className="title">Telefon</div>
                    <Link to={'tel:+994125853502'}>+994 12 585 3502</Link>
                </div>
                <div className="card-index">
                    <div className="title">Email</div>
                    <Link to={'mailto:info@abrau.az'}>info@abrau.az</Link>
                </div>
               </div>
            </div>
        </div>
    </section>
    <section className='contact-form'>
        <div className="container">
            <div className="row">
                <form>
                    <TextField id="standard-basic" className='input-form' label="Ad" variant="standard" />
                    <TextField id="standard-basic" className='input-form' label="Soyad" variant="standard" />
                    <TextField type='email' id="standard-basic" className='input-form' label="Email" variant="standard" />
                    <TextField id="standard-basic" className='input-form' label="Əlaqə" variant="standard" />
                    <TextField
                    id="outlined-multiline-static"
                    label="Məktub"
                    className='input-form textarea'
                    multiline
                    rows={4}
                    />
                    <div className="submit-btn">
                        <Button type='submit' variant="outlined">Göndər</Button>
                    </div>
                </form>
            </div>
        </div>
    </section>
    </>
  )
}

export default Contact