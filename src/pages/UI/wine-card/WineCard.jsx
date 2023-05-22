import React from 'react'
import '../../../styles/wine-card.css'
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom'

const WineCard = (props) => {
  const {id,title,image,description} = props.item

  return (
    <div className='card-index'>
        <img src={image} alt="Product Image" />
        <div class="product-text">
          <Link>
            <h4 class="product-head">
                  Abrau Junior Qızılı
            </h4>
              <p class="product-body">
                            Spirt:  0%
              </p>
          </Link>
            <Link >
            <div className='product__btn'>
                        <Button variant="outlined">Ətraflı</Button>
            </div>
            </Link>
            </div>
    </div>
  )
}

export default WineCard