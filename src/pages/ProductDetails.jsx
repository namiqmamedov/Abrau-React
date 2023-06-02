import React from 'react'
import productData from '../data/product'
import image from '../assets/product/wine01.png'
import '../styles/product-detail.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {GrNext} from 'react-icons/gr'
import {GrPrevious} from 'react-icons/gr'
import aboutImg01 from '../assets/product/detail/about01.svg'
import aboutImg02 from '../assets/product/detail/about02.svg'
import aboutImg03 from '../assets/product/detail/about03.svg'
import aboutImg04 from '../assets/product/detail/about04.svg'
import '../styles/wine-card.css'
import WineCard from '../components/UI/wine-card/WineCard';

const aboutCard = [
    {
        img: aboutImg01,
        title:'Tərkibi',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna adipiscing tortorscelerisque auctor egestas viverra."
    },
    {
        img: aboutImg02,
        title:'Uygunluq',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna adipiscing tortorscelerisque auctor egestas viverra."
    },
    {
        img: aboutImg03,
        title:'Temperatur',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna adipiscing tortorscelerisque auctor egestas viverra."
    },
    {
        img: aboutImg04,
        title:'Saxlama forması',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna adipiscing tortorscelerisque auctor egestas viverra."
    },
]
const ProductDetails = () => {
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
    <div className='product__detail'> 
        <div className="container">
            <div className="row">
                <div className="product__detail-index">
                    <div className="col-lg-6 product__thumbnail">
                        <img src={image} alt="Image" />
                    </div>
                    <div className="col-lg-6">
                        <h2 className='product-title'>
                            CULLEN
                        </ h2>
                        <p className='product-description'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Urna adipiscing tortor scelerisque auctor egestas viverra.
                        </p>
                        <h3 className='product-origin title'>Mənşəyi</h3>
                        <p>Azərbaycan</p>
                        <h3 className='product-degree title'>Alkoqol dərəcəsi</h3>
                        <p>8%</p>
                        <h3 className='product-year title'>İstehsal ili</h3>
                        <p></p>
                        <h3 className='product-about title'>Məhsul haqqında</h3>
                        <p>"İzabella" və "Kaberne" üzüm sortlarının tanınmış notları ilə zənginləşdirilmiş köpüklənən tünd yaqut rəngli içki.</p>
                        <p>Sevimli üzüm sortlarının zəngin buketinin və yüngül xoş dadın birləşməsi təkrarolunmaz hisləri oyadır. Bununla belə Abrau Light-ın tərkibində cəmi 8% spirt var.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="product__about">
        <div className="container">
            <div className="row">
                <div className="about__card-index">
                {aboutCard.map((item,index) => (
                <div className="about-card" key={index}>
                    <img src={item.img} alt="About Card" />
                    <h4 className='about-title'>{item.title}</h4>
                    <p className='about-desc'>{item.description}</p>
                </div>        
                ))}
                </div>
            </div>
        </div>
    </div>
    <div className="product__related">
    <div className="wine-card">
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
    </div>
    </div>
    </>
  )
}

export default ProductDetails