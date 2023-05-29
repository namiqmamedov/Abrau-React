import React from 'react'
import newsData from '../../../data/news'
import '../../../styles/news-card.css'
import {Link} from 'react-router-dom'

const NewsCard = () => {
  return (
   <section className='news-index'>
    <h1 class="section-title">Xəbərlər</h1>
            <div className="news-main">
            {newsData.map((item,index) => (
                <div className="news-index" key={index}>
                    <img className='news-image' src={item.image} alt="News Image"/>
                    <div className="news-content">
                        <Link>
                            <h3>{item.title}</h3>
                        </Link>
                    </div>
                 </div>
                ))}
            </div>
   </section>
  )
}

export default NewsCard