import React from 'react'
import '../../../styles/about-item.css'
import card01 from '../../../assets/about/aboutCard01.webp'
import card02 from '../../../assets/about/aboutCard02.webp'
import card03 from '../../../assets/about/aboutCard02.webp'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import {motion,useScroll} from 'framer-motion'

const AboutItem = () => {
    const {scrollYProgress} = useScroll()
    const transition = {type: 'spring', duration: 3}
  return (
      <div className="about__item">
        <div className="container">
            <div className="row">
            <div className="breadcrumb__index">
         <div className="container">
        <div className="row">
            <Breadcrumbs className='breadcrumb__item' aria-label="breadcrumb">
                <Link color="text.primary" underline="hover" to='/'>
                    Ana Səhifə
                </Link>
                <Link
                    underline="hover"
                    color="inherit">
                    Haqqımızda
                </Link>
            </Breadcrumbs>
        </div>
    </div>
             </div>
             <div className="scroll-progress">
             <motion.div 
             className='motion-div'
             id='scroll-vertical'
             style={{
                scaleY : scrollYProgress,
                position: "absolute",
                top: "30%",
                right: 0,
                left: "15%",
                height: 10,
                background: "black",
                // background : "blue",
                transformOrigin: "0%",
             }}></motion.div>
             </div>
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
                            <motion.div
                            initial={{ opacity: 0, y: 100}}
                            transition={{ ...transition, duration: 0}}
                            whileInView={{opacity: 1, y: 0}}className="about__item-desc">
                                <p>«Abrau-Durso», 150 ildən artıq öncə Rusiyanın güneyində,
                                     Abrau zümrüd gölünün sahilində təsis edilmişdir. Burada bu gün
                                      bütün dünyada tanınan yüksək keyfiyyətli oynaq şərablar yaradılır.
                                       Unikal stil, bir çox mükafat, dadına baxma yarışmaları,
                                        aparıcı dünya ekspertlərinin tanınması və milyonlarla alıcının
                                         sevgisi «Abrau-Durso»nun tanınan oynaq şərab ekspertinin olduğunu təsdiq edir.      
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </div>
                <div className="scroll-progress">
                    <motion.div 
                    className='motion-div'
                    id='scroll-horizontal'
                    style={{
                        scaleX : scrollYProgress,
                        position: "absolute",
                        top: "30%",
                        right: 0,
                        left: "15%",
                        height: 2,
                        background: "#DDC6AE",
                        // background : "blue",
                        transformOrigin: "0%",
                    }}></motion.div>
                </div>
                <div className="scroll-progress">
                    <motion.div 
                    className='motion-div'
                    id='scroll-vertical-second'
                    style={{
                        scaleY : scrollYProgress,
                        position: "absolute",
                        top: "30%",
                        right: 0,
                        left: "15%",
                        height: 10,
                        background: "black",
                        // background : "blue",
                        transformOrigin: "0%",
                    }}></motion.div>
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
                            <motion.div
                            initial={{ opacity: 0, y: 100}}
                            transition={{ ...transition, duration: 0}}
                            whileInView={{opacity: 1, y: 0}} className="about__item-desc">
                                <p>2021-ci ildə «Abrau-Durso»nun tarixinin yeni bölümü başladı – şirkətinin tərkibinə ən q
                                    ədim şərab bölgələrinin birində olan Azərbaycandakı «Şəki-Şərab»
                                     şərab zavodu daxil oldu. Bu gün şirkət istehsalı müasirləşdirərək üzüm 
                                     ağaclarını əkməklə, yerli şərabın istehsalını buraxır.      
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </div>
                <div className="scroll-progress">
                    <motion.div 
                    className='motion-div'
                    id='scroll-horizontal-second'
                    style={{
                        scaleX : scrollYProgress,
                        position: "absolute",
                        top: "30%",
                        right: 0,
                        left: "15%",
                        height: 2,
                        background: "#DDC6AE",
                        // background : "blue",
                        transformOrigin: "0%",
                        marginTop: "30px",
                    }}></motion.div>
                </div>
                <div className="scroll-progress">
                <motion.div 
                className='motion-div'
                id='scroll-vertical-third'
                style={{
                    scaleY : scrollYProgress,
                    position: "absolute",
                    top: "30%",
                    right: 0,
                    left: "15%",
                    height: 10,
                    background: "black",
                    // background : "blue",
                    transformOrigin: "0%",
                }}></motion.div>
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
                            <motion.div
                            initial={{ opacity: 0, y: 100}}
                            transition={{ ...transition, duration: 0}}
                            whileInView={{opacity: 1, y: 0}} className="about__item-desc">
                                <p>Əsr boyu ənənələrə, möhtəşəm keyfiyyət standartlarına və müasir istehsal tenologiyalarına 
                                    dayanaraq biz Rusiyanın ən yaxşı oynaq şərablarını yaradırıq. «Abrau-Durso» oynaq şərabları
                                     klassik şampanlama (Classique üsulu) və Çarmat üsulu texnologiyası üzrə istehsal edilir.      
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutItem