import React from 'react'
import '../../../styles/about-item.css'
import card01 from '../../../assets/about/aboutCard01.webp'
import card02 from '../../../assets/about/aboutCard02.webp'
import card03 from '../../../assets/about/aboutCard02.webp'

const AboutItem = () => {
  return (
    <div className="about__item">
        <div className="container">
            <div className="row">
                <div className="about__item-wrapper">
                    <div className="col-lg-4">
                        <div className="about__item-text">
                            <h2 className='about__item-num'>01</h2>
                            <h4 className='text__first'>Biz kimik?</h4>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="about__thumbnail">
                            <img src={card01} alt="About Image" />
                            <div className="about__item-desc">
                                <p>«Abrau-Durso», 150 ildən artıq öncə Rusiyanın güneyində,
                                     Abrau zümrüd gölünün sahilində təsis edilmişdir. Burada bu gün
                                      bütün dünyada tanınan yüksək keyfiyyətli oynaq şərablar yaradılır.
                                       Unikal stil, bir çox mükafat, dadına baxma yarışmaları,
                                        aparıcı dünya ekspertlərinin tanınması və milyonlarla alıcının
                                         sevgisi «Abrau-Durso»nun tanınan oynaq şərab ekspertinin olduğunu təsdiq edir.      
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="about__item-wrapper">
                    <div className="col-lg-4">
                        <div className="about__item-text">
                            <h2 className='about__item-num'>02</h2>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="about__thumbnail">
                            <img src={card02} alt="About Image" />
                            <div className="about__item-desc">
                                <p>2021-ci ildə «Abrau-Durso»nun tarixinin yeni bölümü başladı – şirkətinin tərkibinə ən q
                                    ədim şərab bölgələrinin birində olan Azərbaycandakı «Şəki-Şərab»
                                     şərab zavodu daxil oldu. Bu gün şirkət istehsalı müasirləşdirərək üzüm 
                                     ağaclarını əkməklə, yerli şərabın istehsalını buraxır.      
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="about__item-wrapper">
                    <div className="col-lg-4">
                        <div className="about__item-text">
                            <h2 className='about__item-num'>03</h2>
                            <h4 className='text__first'>Niyə biz?</h4>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="about__thumbnail">
                            <img src={card03} alt="About Image" />
                            <div className="about__item-desc">
                                <p>Əsr boyu ənənələrə, möhtəşəm keyfiyyət standartlarına və müasir istehsal tenologiyalarına 
                                    dayanaraq biz Rusiyanın ən yaxşı oynaq şərablarını yaradırıq. «Abrau-Durso» oynaq şərabları
                                     klassik şampanlama (Classique üsulu) və Çarmat üsulu texnologiyası üzrə istehsal edilir.      
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutItem