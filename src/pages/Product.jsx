import productCommon from '../assets/product/product-common.jpg'
import '../styles/product.css'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import ProductFilter from '../components/UI/product-filter/ProductFilter';
import WineCard from '../components/UI/wine-card/WineCard'
import productData from '../data/product';


const Product = () => {
    return ( <>
    <section className='common-section'>
        <div className="background-img"></div>
        <img src={productCommon} alt="Common Image"/>
        <h1 className="centered">Məhsullar
        </h1>
    </section> 
    <div className="breadcrumb__index">
         <div className="container">
        <div className="row">
            <Breadcrumbs className='breadcrumb__item' aria-label="breadcrumb">
                <Link color="text.primary" underline="hover" to='/'>
                    Ana Səhifə
                </Link>
                <Link
                    underline="hover"
                    color="inherit"
                    href="/material-ui/getting-started/installation/">
                    Məhsullar
                </Link>
            </Breadcrumbs>
        </div>
    </div>
     </div>
    <section className='product'>
            <div className="container">
                <div className="row">
                    <div className="product__main-item">
                    <div className="col-lg-4 col-md-5">
                <div className="filter__index">
                    <h2>Kateqoriya</h2 >
                <Link>təmizlə
                </Link>
               <ProductFilter/>
                 </div>
                </div>
                <div className="col-lg-8 col-md-7">
                    <div className="product__list-item">
                    {productData.map((item,index)=>(
                        <WineCard key={index} item={item}/>
                    ))}
                    </div>
                </div>
                    </div>
                 </div>
                  </div> 
     </section> 
     </>)
}

export default Product