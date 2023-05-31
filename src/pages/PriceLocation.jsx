import React from 'react'
import locationCommon from '../assets/location/location-common.webp'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import BreadLink from '@mui/material/Link';
import '../styles/price-location.css'
import {Link} from 'react-router-dom'

const PriceLocation = () => {
    return ( <>
            <section className='common-section'>
                <div className="background-img"></div>
                <img src={locationCommon} alt="Common Image"/>
                <h1 className="centered">Satış nöqtələri
                </h1>
            </section>
            <div className = "breadcrumb__index" > 
            <div className="container">
                <div className="row">
                    <Breadcrumbs className='breadcrumb__item' aria-label="breadcrumb">
                        <BreadLink color="text.primary" underline="hover" to='/'>
                            Ana Səhifə
                        </BreadLink>
                        <BreadLink
                            underline="hover"
                            color="inherit"
                            href="/material-ui/getting-started/installation/">
                            Satış nöqtələri
                        </BreadLink>
                    </Breadcrumbs>
                </div>
            </div> 
            </div> 
            <div className="map__main">
                <div className="container">
                    <div className="row">
                    <div className="col-lg-4">
                        <div className="wrapper">
                    <div class="location-card">
                            <h4 class="title">
                                Gənclik Mall
                            </h4 > 
                            <p class="text">
                                Nərimanov rayonu, Fətəli Xan Xoyski küçəsi, Gənclik Mall, 1-ci mərtəbə
                            </p> 
                            <a class = "phone" href = "tel:" > (012)404 27 16 </a>
                            <a class="phone" href="tel:">
                                 
                            </a> 
                            <a class="location-btn">
                                Xəritədə bax
                            </a>
                    </div>
                    <div class="location-card">
                            <h4 class="title">
                                Gənclik Mall
                            </h4 > 
                            <p class="text">
                                Nərimanov rayonu, Fətəli Xan Xoyski küçəsi, Gənclik Mall, 1-ci mərtəbə
                            </p> 
                            <a class = "phone" href = "tel:" > (012)404 27 16 </a>
                            <a class="phone" href="tel:">
                                 
                            </a> 
                            <a class="location-btn">
                                Xəritədə bax
                            </a>
                    </div>
                    <div class="location-card">
                            <h4 class="title">
                                Gənclik Mall
                            </h4 > 
                            <p class="text">
                                Nərimanov rayonu, Fətəli Xan Xoyski küçəsi, Gənclik Mall, 1-ci mərtəbə
                            </p> 
                            <a class = "phone" href = "tel:" > (012)404 27 16 </a>
                            <a class="phone" href="tel:">
                                 
                            </a> 
                            <a class="location-btn">
                                Xəritədə bax
                            </a>
                    </div>
                    <div class="location-card">
                            <h4 class="title">
                                Gənclik Mall
                            </h4 > 
                            <p class="text">
                                Nərimanov rayonu, Fətəli Xan Xoyski küçəsi, Gənclik Mall, 1-ci mərtəbə
                            </p> 
                            <a class = "phone" href = "tel:" > (012)404 27 16 </a>
                            <a class="phone" href="tel:">
                                 
                            </a> 
                            <a class="location-btn">
                                Xəritədə bax
                            </a>
                    </div>
                    </div>
            </div >
        <div className="col-lg-6">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3029.878309105938!2d50.05548857526423!3d40.588441445171746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4030f13f51469869%3A0x5aaa3c5fe5f01d96!2sAmburan%20Mall!5e0!3m2!1sen!2saz!4v1685529014448!5m2!1sen!2saz"
            width="850"
            height="560"
            style={{
            border: "0"
        }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div> </div>
                </div> 
            </div> 
            </>
          )
}

export default PriceLocation