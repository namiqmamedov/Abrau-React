import React from 'react'
import '../../../styles/about-slider.css'
import icon1 from '../../../assets/about/icon1.svg'
import icon2 from '../../../assets/about/icon2.svg'
import icon3 from '../../../assets/about/icon3.svg'
import icon4 from '../../../assets/about/icon4.svg'
import icon5 from '../../../assets/about/icon5.svg'
import icon6 from '../../../assets/about/icon6.svg'
import icon7 from '../../../assets/about/icon7.svg'
import icon8 from '../../../assets/about/icon8.svg'
import icon9 from '../../../assets/about/icon9.svg'
import icon10 from '../../../assets/about/icon10.svg'
import icon11 from '../../../assets/about/icon11.svg'
import icon12 from '../../../assets/about/icon12.svg'
import Slider from "react-slick";
import {GrLinkNext} from 'react-icons/gr'
import {GrLinkPrevious} from 'react-icons/gr'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AboutSlider = () => {
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
   <div className="about__slider">
     <div className='container'>
        <div className="row">
            <div className="col-12">
                <h3 className='about-head'>Klassik üsul</h3>
                <p className='about-text'>Əsl şampan, Champenoise(şampeno)  texnologiyasından
                  istifadə etməklə hazırlanır. İkinci dərəcəli şüşə fermentasiyasının
                  klassik üsulu mürəkkəb, uzun bir prosesdir və bir çox unikal 
                  prosedurları özündə cəmləşdirir: yığılma, renuaj, sökülmə və s.</p>
                  <p className='about-text'>Baş ekoloq «Abrau Dorso» Corc Blankın 
                    rəhbərliyi altında klassik metod ilə «İmperial» BrutD’or,
                    Victor Dravigny и «Удельное ведомство» oynaq şərablar
                    istehsal olunmuşdur. Onların hər biri Abrau Dorse-nin
                     məşhur dağ tunellərində saxlanılır. </p>
                     <div className="about__item-order">
                        <div className="item-wrapper">
                            <img src={icon1} alt="Icon" />
                            <p>Üzümün əl ilə yığımı</p>
                        </div>
                        <div className="item-wrapper">
                            <img src={icon2} alt="Icon" />
                            <p>
                             Küve əldə etmək üçün üzümün zərif sıxılması (İlkin sıxılan şirə)
                             </p>
                        </div>
                        <div className="item-wrapper">
                            <img src={icon3} alt="Icon" />
                            <p>İlkin fermentasiya (əsas şərabın hazırlanması)</p>
                        </div>
                        <div className="item-wrapper">
                            <img src={icon4} alt="Icon" />
                            <p>Yığılma (istənilən əsas növə nail olmaq üçün müxtəlif sortların şərablarını qarışdırmaq)</p>
                        </div>
                     </div>
                     <div className="about__item-order">
                        <div className="item-wrapper">
                            <img src={icon5} alt="Icon" />
                            <p>
                                             Maya və şəkərin əlavə edilməsi. Şüşələrə doldurulması
                                        </p>
                        </div>
                        <div className="item-wrapper">
                            <img src={icon6} alt="Icon" />
                            <p>
                            Şüşə içərisində ikincili fermentasiya
                             </p>
                        </div>
                        <div className="item-wrapper">
                            <img src={icon7} alt="Icon" />
                            <p>İlkin fermentasiya (əsas şərabın hazırlanması)</p>
                        </div>
                        <div className="item-wrapper">
                            <img src={icon8} alt="Icon" />
                            <p>Remuaj (şüşələri tədricən alt-üst etmək).</p>
                        </div>
                     </div>
                     <div className="about__item-order">
                        <div className="item-wrapper">
                            <img src={icon9} alt="Icon" />
                            <p>Çöküntünü duzlu suya sallaraq şüşənin dondurulması</p>
                        </div>
                        <div className="item-wrapper">
                            <img src={icon10} alt="Icon" />
                            <p>
                            Deqorjaj (çöküntünün çıxarılması)
                             </p>
                        </div>
                        <div className="item-wrapper">
                            <img src={icon11} alt="Icon" />
                            <p>Doza (doza likyoru əlavə etməklə həcmin artırılması) 
                             və təbii prob ilə örtülməsi</p>
                        </div>
                        <div className="item-wrapper">
                            <img src={icon12} alt="Icon" />
                            <p>Son olaraq bir neçə ay saxlamaq</p>
                        </div>
                     </div>
            </div>
        </div>
    </div>
   </div>
  )
}

export default AboutSlider