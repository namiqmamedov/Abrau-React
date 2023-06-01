import React from 'react'
import newsCommon from '../assets/news/news.webp'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import BreadLink from '@mui/material/Link';
import newsData from '../data/news'
import '../styles/news.css'
import {Link} from 'react-router-dom'

const News = () => {
  return (
    <>
          <section className='common-section'>
                <div className="background-img"></div>
                <img src={newsCommon} alt="Common Image"/>
                <h1 className="centered">Xəbərlər
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
            <section id='news-index'>
                <div className="container">
                    <div className="row">
                    <div className="news-main">
                        {newsData.map((item,index) => (
                            <div id="news-item" className="news-index" key={index}>
                                <div className="item-effect"></div>
                               <Link>
                               <img className='news-image' id='news-image' src={item.image} alt="News Image"/>
                               </Link>
                                <div className="news-content">
                                    <Link>
                                        <h3>{item.title}</h3>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            </section>
    </>
  )
}

export default News