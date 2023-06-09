import React from 'react'
import '../../../styles/wine-card.css'
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom'


const WineCard = (props) => {
  const {id,title,image,description} = props.item

  return (
    <div className='card-index'>
        <div className="right__border"></div>
        <Link to={`/product/${id}`}>
        <img src={image} alt="Product Image" />
        </Link>
        <div class="product-text">
        <Link to={`/product/${id}`}>
            <h4 class="product-head">
                  {title}
            </h4>
              <p class="product-body">
                  Spirt:  0%
              </p>
          </Link>
          <Link to={`/product/${id}`}>
            <div className='product__btn'>
             <Button variant="outlined">Ətraflı</Button>
            </div>
            </Link>
        </div>
    </div>
  )
}

export default WineCard