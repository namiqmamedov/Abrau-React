import React from 'react'
import Home from '../pages/Home'
import {Routes, Route, Navigate} from 'react-router-dom'
import Product from '../pages/Product'
import ProductDetails from '../pages/ProductDetails'
import Error from '../pages/Error'
import Contact from '../pages/Contact'
import PriceLocation from '../pages/PriceLocation'
import News from '../pages/News'
import NewsDetails from '../pages/NewsDetails'
import About from '../pages/About'


const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={< Navigate to = '/home' />}/>
        <Route path='/home' element={<Home />}/>
        <Route path='/product' element={<Product />}/>
        <Route path='/detail' element={<ProductDetails />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/price-location' element={<PriceLocation />}/>
        <Route path='/news' element={<News />}/>
        <Route path='/news-detail' element={<NewsDetails />}/>
        <Route path='/about' element={<About />}/>
        <Route path='*' element={<Error />}/>
    </Routes>
  )
}

export default Routers