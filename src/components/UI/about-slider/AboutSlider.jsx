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
import icon13 from '../../../assets/about/icon13.svg'
import icon14 from '../../../assets/about/icon14.svg'
import icon15 from '../../../assets/about/icon15.svg'
import icon16 from '../../../assets/about/icon16.svg'
import icon17 from '../../../assets/about/icon17.svg'
import icon18 from '../../../assets/about/icon18.svg'
import arrow01 from '../../../assets/about/arrow1.svg'
import arrow02 from '../../../assets/about/arrow2.svg'
import arrow03 from '../../../assets/about/arrow3.svg'
import arrow04 from '../../../assets/about/arrow4.svg'
import arrow05 from '../../../assets/about/arrow5.svg'
import arrow06 from '../../../assets/about/arrow6.svg'
import arrow07 from '../../../assets/about/arrow7.svg'
import arrow08 from '../../../assets/about/arrow8.svg'
import arrow09 from '../../../assets/about/arrow9.svg'
import arrow10 from '../../../assets/about/arrow10.svg'
import arrow11 from '../../../assets/about/arrow11.svg'
import arrow12 from '../../../assets/about/arrow12.svg'
import arrow13 from '../../../assets/about/arrow13.svg'
import arrow14 from '../../../assets/about/arrow14.svg'
import arrow15 from '../../../assets/about/arrow15.svg'
import Slider from "react-slick";
import {GrNext} from 'react-icons/gr'
import {GrPrevious} from 'react-icons/gr'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AboutSlider = () => {
    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: true,
        prevArrow: <button><GrPrevious className='prev-btn'/></button>,
        nextArrow: <button><GrNext className='next-btn'/></button>,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              arrows: true,
              slidesToShow: 1,
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
           <Slider {...settings}>
           <div className="about__slider-order">
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
                        <img className='arrow' src={arrow01} alt="arrow icon" />
                        <div className="item-wrapper">
                            <img src={icon2} alt="Icon" />
                            <p>
                             Küve əldə etmək üçün üzümün zərif sıxılması (İlkin sıxılan şirə)
                             </p>
                        </div>
                        <img className='arrow' src={arrow02} alt="arrow icon" />
                        <div className="item-wrapper">
                            <img src={icon3} alt="Icon" />
                            <p>İlkin fermentasiya (əsas şərabın hazırlanması)</p>
                        </div>
                        <img className='arrow' src={arrow03} alt="arrow icon" />
                        <div className="item-wrapper">
                            <img src={icon4} alt="Icon" />
                            <p>Yığılma (istənilən əsas növə nail olmaq üçün müxtəlif sortların şərablarını qarışdırmaq)</p>
                        </div>
                     </div>
                     <div className="about__item-order">
                        <div className="item-wrapper">
                            <img src={icon5} alt="Icon" />
                            <p>Maya və şəkərin əlavə edilməsi. Şüşələrə doldurulması</p>
                        </div>
                        <img className='arrow' src={arrow04} alt="arrow icon" />
                        <div className="item-wrapper">
                            <img src={icon6} alt="Icon" />
                            <p>
                            Şüşə içərisində ikincili fermentasiya
                             </p>
                        </div>
                        <img className='arrow' src={arrow05} alt="arrow icon" />
                        <div className="item-wrapper">
                            <img src={icon7} alt="Icon" />
                            <p>İlkin fermentasiya (əsas şərabın hazırlanması)</p>
                        </div>
                        <img className='arrow' src={arrow06} alt="arrow icon" />
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
                        <img className='arrow' src={arrow07} alt="arrow icon" />
                        <div className="item-wrapper">
                            <img src={icon10} alt="Icon" />
                            <p>
                            Deqorjaj (çöküntünün çıxarılması)
                             </p>
                        </div>
                        <img className='arrow' src={arrow08} alt="arrow icon" />
                        <div className="item-wrapper">
                            <img src={icon11} alt="Icon" />
                            <p>Doza (doza likyoru əlavə etməklə həcmin artırılması) 
                             və təbii prob ilə örtülməsi</p>
                        </div>
                        <img className='arrow' src={arrow09} alt="arrow icon" />
                        <div className="item-wrapper">
                            <img src={icon12} alt="Icon" />
                            <p>Son olaraq bir neçə ay saxlamaq</p>
                        </div>
                     </div>
            </div>
            <div className="about__slider-order">
                <h3 className='about-head'>Çarmat üsul</h3>
                <p className='about-text'>Bu, çənlərdə oynaq şərab istehsal etmək üsuludur. Onun fərqi ondan ibarətdir ki, 
                ikincili fermentasiya böyük germetik qablarda- rezervuarlar və ya akratoforlar da 21 gün ərzində baş verir. 
                Çarmat üsulu ilə «Русское игристое» kolleksiyası yaradılır.</p>
                     <div className="about__item-order">
                        <div className="item-wrapper">
                            <img src={icon1} alt="Icon" />
                            <p>Üzümün əl ilə yığımı</p>
                        </div>
                        <img className='arrow' src={arrow01} alt="arrow icon" />
                        <div className="item-wrapper">
                            <img src={icon2} alt="Icon" />
                            <p>
                             Küve əldə etmək üçün üzümün zərif sıxılması (İlkin sıxılan şirə)
                             </p>
                        </div>
                        <img className='arrow' src={arrow02} alt="arrow icon" />
                        <div className="item-wrapper">
                            <img src={icon3} alt="Icon" />
                            <p>İlkin fermentasiya (əsas şərabın hazırlanması)</p>
                        </div>
                     </div>
                     <div className="about__item-order">
                     <div className="item-wrapper">
                            <img src={icon13} alt="Icon" />
                            <p>Müxtəlif üzüm sortlarından şərabların yığılması, şəkər və maya əlavə edilməsi</p>
                      </div>
                        <img className='arrow' src={arrow10} alt="arrow icon" />
                        <div className="item-wrapper">
                            <img src={icon14} alt="Icon" />
                            <p>Maya və şəkərin əlavə edilməsi. Şüşələrə doldurulması</p>
                        </div>
                        <img className='arrow' src={arrow11} alt="arrow icon" />
                        <div className="item-wrapper">
                            <img src={icon15} alt="Icon" />
                            <p>
                            Şüşə içərisində ikincili fermentasiya
                             </p>
                        </div>
                     </div>
                     <div className="about__item-order">
                     <div className="item-wrapper">
                            <img src={icon16} alt="Icon" />
                            <p>Remuaj (şüşələri tədricən alt-üst etmək).</p>
                        </div>
                        <img className='arrow' src={arrow12} alt="arrow icon" />
                     <div className="item-wrapper">
                            <img src={icon17} alt="Icon" />
                            <p>İlkin fermentasiya (əsas şərabın hazırlanması)</p>
                        </div>
                            <img className='arrow' src={arrow13} alt="arrow icon" />
                        <div className="item-wrapper">
                            <img src={icon18} alt="Icon" />
                            <p>Çöküntünü duzlu suya sallaraq şüşənin dondurulması</p>
                        </div>
                     </div>
            </div>
           </Slider>
        </div>
    </div>
   </div>
  )
}

export default AboutSlider