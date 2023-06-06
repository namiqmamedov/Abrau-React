import React from 'react'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import BreadLink from '@mui/material/Link';
import news from '../assets/news/news01.jpg'
import '../styles/news-detail.css'
import { useParams } from 'react-router-dom';
import products from '../data/news';
const NewsDetails = () => {
    const {id} = useParams();
    const product = products.find(product => product.id == id)
    const {title,image,desc} = product 
  return (
    <>
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

         <section className="news-detail-index">
            <div className="container">
                <div className="row">
                    <div className="news-detail-main">
                        <div className="col-lg-8 col-12">
                            <h2 className='text'>{title}</h2>
                        </div>
                        <div className="col-lg-4 col-12">
                            <img src={image} alt="News Image" />
                        </div>
                    </div>
                    <div className='product__about'>
                       <p>Hər il keçirilən "SVVR Kuboku - 2021" müsabiqəsi bir daha Rusiyanın şərab sənayesində ən əhəmiyyətli hadisələrdən biri oldu: "Abrau-Durso" rus şərab evinin köpüklü şərabları eyni vaxtda bir neçə nominasiya üzrə qalib gəldi. Klassik şampanlaşdırma texnologiyası ilə yaradılmış şərablar arasında ən yaxşısı 2016-cı ilin "Imperial" Vintage Brut kolleksiya şərabı oldu. Rezervuar üsulu ilə yaradılmış köpüklü şərablar arasında "SVVR Kuboku"na Rus şərab evinin yenisi – “Abrau Durso Reserve Brut Rose” layiq görüldü. Ümumilikdə "Abrau-Durso" ŞQ-nin bütün köpüklü şərab nümunələri 11 qızıl və 2 gümüş medalla təltif olundu.</p>
                       <p>"SVVR kuboku" dequstasiya müsabiqəsi onuncu dəfə idi ki keçirilirdi. İlk mərhələ sentyabrın 30-da Moskvada baş tutmuşdu: dequstasiya zamanı münsiflər heyəti 50-dən çox şərab zavodunda istehsal olunmuş 307 nümunəni qiymətləndirmişdilər. Birinci mərhələnin komissiyasına aparıcı şərab tənqidçiləri, ekspertlər və şərabsüzənlər daxil idi. Müsabiqədə Rusiya ərazisində yetişdirilən üzümdən istehsal olunmuş lisenziyalı şərab məhsullarının iştirak etməsinə icazə verilirdi. Tədqiqata təqdim olunan nümunələrin coğrafiyası ölkənin əsas şərab bölgələrini: Dağıstan, Krasnodar diyarı, Krım, Rostov vilayəti və Aşağı Volqanı əhatə edir. Şərab altı nominasiya üzrə qiymətləndirilirdi: "ağ quru qazsız şərab", "qırmızı quru qazsız şərab", "spirt qatılmış (likör) şərab", "klassik üsulla istehsal edilmiş köpüklü şərab", "rezervuar üsulu ilə istehsal edilmiş köpüklü şərab". </p>
                       <p>Birinci mərhələnin nəticəsi ən yüksək qiymətə malik şərabların siyahısı oldu, müsabiqənin ikinci mərhələsində iştirak etmək üçün nümunələrin 30% -dən çoxu seçildi. Bütün şərablar OIV, Beynəlxalq Üzüm və Şərab Təşkilatının qaydalarına əsasən qiymətləndirilirdi. Dequstasiya müsabiqəsinin ikinci və final mərhələsi 15-16 oktyabr tarixlərində Abrau-Dursoda keçirildi. Burada təmsil olunan şərablara dünya şöhrətli britaniyalı şərab yazıçısı və eksperti Oz Klarkın (Oz Clarke) başçılıq etdiyi ekspert komissiyası qiymət verirdi. "SVVR Kubokları - 2021"-in taleyini ən yaxşı nümunələrin yekun "kortəbii" dequstasiyası müəyyənləşdirdi. </p>
                       <p>SVVR Kuboku - 2021" müsabiqəsinin nəticələri oktyabrın 18-də X Ümumrusiya Şərabçılar Sammitində elan edildi. "Abrau-Durso" şirkətlər qrupu mükafatların bəhrəsini topladı: on bir qızıl və iki gümüş medal. Əsas nailiyyət iki köpüklü şərab nümunəsinin qələbəsi oldu. Klassik şampanlaşdlrma texnologiyası ilə yaradılmış "SVVR kuboku" nominasiyasında 2016-cı ilin "Imperial" Vintage Brut kolleksiya şərabını qalib oldu. Bu şərab “Abrau-Durso” üzüm bağlarının ən yaxşı üzüm sahələrindən yığılmış "şardone" və "rislinq" sortlarının bir illik məhsulunun komplektindən ibarətdir. Komplektə köpüklü növlər üçün klassik olan "rislinq" sortu əlavə edilmiş "şardone" növü daxildir. O, "Abrau-Durso" üçün xüsusilə vacibdir: "rislinq" məhz 150 il əvvəl bu terruarda ilk dəfə əkilib. Əlavə fermentasiya "Imperial" Vintage Brut Abrau-Durso-nun dağ tunellərində aparılır, şərab 5 ilə qədər yağıntıda saxlanılır. 2016-cı ilin "İmperial Vintage Brut” məhsulu incə açıq qızılı çalarları, bərq vuran parıltısı, həmçinin brioş, alma mürəbbəsi və ərinmiş qaymağın tonları ilə stəkanda açılan dərin buketi ilə seçilir. Şərabın təzə dadı parlaq alma-sitrus çalarları ilə xarakterizə olunur, mineral dad klassik yumşaq brut tərkibinin mükəmməlliyini tamamlayır.</p>
                    </div>
                </div>
            </div>
         </section>
    </>
  )
}

export default NewsDetails