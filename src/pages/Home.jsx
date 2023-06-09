import HomeImage from '../assets/home/home.png'
import AboutImage from '../assets/home/aboutImage.png'
import HomeCenter from '../assets/home/homeCenter.png'
import HomeText from '../assets/home/abrau-text.svg'
import Button from '@mui/material/Button';
import productData from '../data/product'
import '../styles/home.css'
import WineCard from '../components/UI/wine-card/WineCard'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {GrNext} from 'react-icons/gr'
import {GrPrevious} from 'react-icons/gr'
import HomeGif from '../assets/home/home-gif.mp4'
import {Link} from 'react-router-dom'
import HomeBrand from '../assets/home/brand.webp'
import NewsCard from '../components/UI/news-card/NewsCard'


const Home = () => {
  const settings = {
        infinite: true,
        centerMode: true,
        slidesToShow: 5,
        slidesToScroll: 2,
        draggable: true,
        prevArrow: <GrPrevious className='prev-btn'/>,
        nextArrow: <GrNext className='next-btn'/>,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                  arrows: true,
                  slidesToShow: 4,
                },
            },
            {
                breakpoint: 992,
                settings: {
                  arrows: true,
                  slidesToShow: 3,
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
    <>
    <section className='home'>
        <div className="bg-dark1"></div>
        <div className="home-content">
                <img className='home__main-image' src={HomeImage} alt="Home Image" />
                <div className="centered">
                <img className="home-title" src={HomeText} alt="Abrau Text" />
                <p className='home-subtitle'>
                    Abrau-Durso – oynaq şərab eksperti!
                </p>
                <div className="home-description">
                    Biz Azərbaycanda rus oynaq şərablarını və Azərbaycandakı «Şəki Şərab» zavodunda buraxılan şərabları təqdim edirik.
                </div>
                </div>
        </div>
    </section>

    <section className='about__index'>
    <div className="container">
        <div className="row">
            <div className="about__main">
                <div className="col-lg-6">
                    <div className="about__content">
                    <div className="title">Haqqımızda</div>
                    <p className='description'>«Abrau-Durso», 150 ildən artıq öncə Rusiyanın güneyində, 
                        Abrau zümrüd gölünün sahilində təsis edilmişdir. Burada
                        bu gün bütün dünyada tanınan yüksək keyfiyyətli oynaq
                        şərablar yaradılır.</p>
                        <Link to={'../about'} className='about__btn'>
                            <Button variant="outlined">Ətraflı</Button>
                        </Link>
                    </div>
                </div>
                <div className="col-lg-6">
                    <img className="image__thubmail" src={AboutImage} alt="Home About Image" />
                </div>
            </div>
        </div>
    </div>
    </section>
    <div className="homeCenter">
    <img src={HomeCenter} alt="Home Image" />
    </div>

    <section className="wine-card">
                <h1 className="section-title">
                    Məhsullar
                </h1>
                <div className="wine__card-index">
                <Slider {...settings}>
                    {productData.map((item,index)=>(
                        <WineCard key={index} item={item}/>
                    ))}
                </Slider>
        </div>
    </section>

    <section className='home__video'>
        <div className="container">
            <div className="row">
            <video width="100%" height="100%" loop controls muted
            autoPlay={"autoplay"} >
            <source src={HomeGif} type="video/mp4"/>
            </video>
            <div className="video-content">
            <div className="gif-text">
                        <h2 className="gif-head">
                          Abrau-Durso – oynaq şərab eksperti! 
                        </h2>
                        <Link className='video__btn' to={'../about'}>
                        <Button variant="outlined">Ətraflı</Button>
                        </Link>
            </div>
            </div>
            </div>
        </div>
    </section>

    <section className='home__brand'>
        <div className="container">
            <div className="row">
            <div className="brand__thumbnail">
            <img src={HomeBrand} alt="Brand Image" />
            <div className="bottom-left">
                Az Abrau
                <Link className='brand__btn' to={'../about'}>
                        <Button variant="outlined">Ətraflı</Button>
                </Link>
            </div>
            
            <div className="bottom-right">
                Abrau Durso
                <Link className='brand__btn' to={'../about'}>
                        <Button variant="outlined">Ətraflı</Button>
                </Link>
            </div>
            </div>
            </div>
        </div>
    </section>

    <NewsCard/>
    </>
  )
}

export default Home