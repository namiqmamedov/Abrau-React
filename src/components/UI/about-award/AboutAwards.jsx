import React from 'react'
import '../../../styles/about-award.css'
import award01 from '../../../assets/about/award01.png'
import award02 from '../../../assets/about/award02.png'
import award03 from '../../../assets/about/award03.png'
import award04 from '../../../assets/about/award04.png'
import award05 from '../../../assets/about/award05.png'

const awardData = [
  {
      img: award01,
      title:' MDB şərabçılıq tarixində ilk dəfə',
      description: "«Abrau-Durso» Böyük Britaniyada xüsusiləşdirilmiş CSWWC şampan və oynaq şərablar yarışmasında Rising Star («Yüksələn ulduz») nominasiyasında qalib gəlmişdir. Bu titulu ekspertlər hər il oynaq və şampan şərablarının ən çox ümid verən istehsalçılarından birini qeyd edirlər. Bu mükafat oynaq şərablarda «Oskar» mükafatının analoqudur."
  },
  {
      img: award02,
      title:'Mundus Vini',
      description: "20 il bundan öncə Meininger alman nəşriyyatı tərəfindən təşkil edilmiş Mundus Vini yarışması şərabçılıq aləmində ən önəmli olaylardan biridir."
  },
  {
      img: award03,
      title:'Decanter World Wine Award DWWA',
      description: "Decanter World Wine Award (DWWA) — şərab sahəsində ən nüfuzlu yarışmalardan biridir. 2004-cü ildən başlayaraq hər il Londonda keçirilir."
  },
  {
      img: award04,
      title:'World Wine Awards IWC',
      description: "William Reed Business Media nəşriyyatı tərəfindən təşkil edilmiş beynəlxalq IWC (Böyük Britaniya) şərab yarışması dünyanın ən nüfuzlularından biridir və demək olar ki, 40 ildir, keçirilir."
  },
  {
      img: award05,
      title:'World Wine Awards IWC',
      description: "Beynəlxalq IWSC (Böyük Britaniya) dadına baxma yarışmasının ekspert münsiflər heyətinə dünyanın 30 ölkəsindən artıq tənqidçi, istehsalçı və somelye daxil olmaqla yüzlərlə dünya ekspertləri daxildir."
  },
]

const AboutAwards = () => {
  return (
    <div className="about__award">
      <div className="container">
        <div className="row">
          <div className="about__award-index">
            <h2 className='about__award-head'>Mükafatlar</h2>
            <p className='about__award-desc'>              
            Abrau-Durso – müasir Rusiyanın ən titullu şərabçılıq müəssisəsidir. 2011-ci ildən şirkətin şərabları International Wine &Spirit Competition (IWSC), Decanter World Wine Awards, International Wine Challenge, Mundus Vini и Сhampagne и Sparkling Wine World Championships (CSWWC) kimi ən sayğılı beynəlxalq dadına baxma yarışmalarında 117 mükafata layiq görülmüşdür. 
            </p>
            {awardData.map((item,index) => (
              <div className="about__award-order" key={index}>
              <div className="col-lg-8">
              <h3 className="order-title">
               {item.title}
               </h3>
               <p className="order-desc">
               {item.description}
               </p>
              </div>
               <div className="col-lg-4">
               <div className="order-image">
                   <img src={item.img} alt="Award Image" />
               </div>
               </div>
             </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutAwards