import React from 'react'
import {Link} from 'react-router-dom'
import '../../styles/footer.css'
import {FaFacebook} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaWhatsapp} from 'react-icons/fa'
import Logo from '../../assets/footer/foot-logo.svg'


const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="footer-index">
        <div className="footer-list-item">
        <div className="container">
        <div className="row">
          <div className="footer__main">
          <ul className='footer__nav col-4'>
           <li><Link>Haqqımızda</Link></li>
            <li><Link>Şəki Şərabları</Link></li>
            <li><Link>Abrau-Dürso</Link></li>
            <li><Link>Satış məntəqələri</Link></li>
            <li><Link>Xəbərlər</Link></li>
            <li><Link>Əlaqə</Link></li>
          </ul>
          <ul className='footer__contact col-4'>
          <li>
            <p>Telefon</p>
            <span className='contact-text'>
              <Link to={'tel:+994501234567'}>
                +994 50 123 45 67
              </Link>
            </span>
          </li>
          <li>
            <p>Email</p>
            <span className='contact-text'>
              <Link to={'tel:+994501234567'}>
              info@azabrau.az
              </Link>
            </span>
          </li>
          <li>
            <p>Ünvan</p>
            <span className='contact-text'>
              <Link to={'tel:+994501234567'}>
              Port Baku,Neftchilar Avenue 153,
              Baku Azerbaijan
              </Link>
            </span>
          </li>
           
          </ul>
          <div className="social__link">
            <Link target='_blank' to={'https://www.instagram.com/abrau_durso_az/?igshid=YmMyMTA2M2Y='}>
              <FaInstagram/>
            </Link>
            <Link target='_blank' to={'https://api.whatsapp.com/send/?phone=994554001313&text&type=phone_number&app_absent=0'}>
              <FaWhatsapp/>
            </Link>
            <Link target='_blank' to={'https://www.facebook.com/AbrauDursoAZ/'}>
              <FaFacebook/>
            </Link>
            
          </div>
          </div>
          </div>
          </div>
        </div>
        <div className="footer__bottom">
          <div className="container">
            <div className="row">
            <div className="footer__bottom-index">
            <h5>{currentYear} Az Abrau</h5>
            <img src={Logo} alt="Footer Logo" />
            <h5>Məxfilik Siyasəti  |  Şərtlər və qaydalar</h5>
            </div>
            </div>
          </div>
        </div>
        </div>
  )
}

export default Footer