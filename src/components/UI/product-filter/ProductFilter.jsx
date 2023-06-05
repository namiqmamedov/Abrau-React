import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useEffect,useState } from 'react';
import products from '../../../data/product';
import WineCard from '../wine-card/WineCard';

const ProductFilter = () => {

  const [category, setCategory] = useState([
    'Hamısı',
    'Abrau Light',
    'Abrau Junior',
    'İmperiyal',
    'Brut d’Or',
    'Viktor Dravinyi',
    'Rus köpüklənən',
  ]);

  let [categoryFilters, setcategoryFilters] = useState(new Set());

  function updateFilters(checked, categoryFilter) {
    if (checked)
      setcategoryFilters((prev) => new Set(prev).add(categoryFilter));
    if (!checked)
      setcategoryFilters((prev) => {
        const next = new Set(prev);
        next.delete(categoryFilter);
        return next;
      });
      if(category === "Hamısı"){
        return products;
      }
  }
  

  const filteredProducts =
    categoryFilters.size === 0
      ? products
      : products.filter((p) => categoryFilters.has(p.category));

  return (
    <div className='accordion__main'>
        {category.map((elm, index) => {
          return (
            <div className="form-check ms-2" key={index}>
              <label className="form-check-label">
                <input
                  className="form-check-input"
                  type="checkbox"
                  onChange={(e) => updateFilters(e.target.checked, elm)}
                />
                {elm}
              </label>
            </div>
          );
        })}
       
       {filteredProducts.map((item,index) => (
          <WineCard key={index} item={item} />
        ))}
    </div>
  )
}

export default ProductFilter