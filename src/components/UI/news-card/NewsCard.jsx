import newsData from '../../../data/news'
import '../../../styles/news-card.css'
import {Link} from 'react-router-dom'
import {GrLinkNext} from 'react-icons/gr'
import {GrLinkPrevious} from 'react-icons/gr'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NewsCard = () => {
    const settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        draggable: true,
        prevArrow: <button><GrLinkPrevious className='prev-btn'/></button>,
        nextArrow: <button><GrLinkNext className='next-btn'/></button>,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              arrows: true,
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 992,
            settings: {
              arrows: true,
              slidesToShow: 1,
            },
          },
            {
              breakpoint: 768,
              settings: {
                arrows: true,
                slidesToShow: 1,
              },
            },
            {
              breakpoint: 576,
              settings: {
                arrows: true,
                slidesToShow: 1,
              },
            },
        ],
      };  
  return (
   <section className='news-index'>
    <h1 className="section-title">Xəbərlər</h1>
            <div className="news-main">
            <Slider {...settings}>
            {newsData.map((item,index) => (
                <div id="news-item" className="news-index" key={index}>
                    <div className="item-effect"></div>
                    <Link to={`/news/${item.id}`}>
                    <img className='news-image' id='news-image' src={item.image} alt="News Image"/>
                    </Link>
                    <div className="news-content">
                    <Link to={`/news/${item.id}`}>
                            <h3>{item.title}</h3>
                        </Link>
                    </div>
                 </div>
            ))}
            </Slider>
            </div>
   </section>
  )
}

export default NewsCard