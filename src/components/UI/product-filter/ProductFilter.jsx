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
  const [category, setCategory] = useState("Hamısı");
  const [allProducts, setAllProducts] = useState(products);
  const [checked, setChecked] = React.useState(false);
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  useEffect(() => {
      if(category === "HAMISI"){
          setAllProducts(products)
      }
      if(category === "ABRAULIGHT"){
          const filteredProducts = products.filter(
              (item) => item.category === "AbrauLight"
          );
          setAllProducts(filteredProducts);
      }
  }, [category])

  return (
    <div className='accordion__main'>
       <FormControlLabel
      control={<Checkbox checked={checked}  onChange={handleChange} />}
      label="Check me"
      className={`d-flex align-items-center gap-2 ${category  === 'ABRAULIGHT' ? 'foodBtnAactive' : '' } `} onClick={()=> checked ?  setCategory('HAMISI') :  setCategory('ABRAULIGHT') }
    />
       <Accordion className='accordion__item'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Köpüklənən</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <div className="filter__options">
          <FormGroup>
      <FormControlLabel className={`d-flex align-items-center gap-2 ${category  === 'HAMISI' ? 'foodBtnAactive' : '' } `} onChange={()=> setCategory('ABRAULIGHT')} control={<Checkbox  />} label="Hamısı" />
      <FormControlLabel className={`d-flex align-items-center gap-2 ${category  === 'ABRAULIGHT' ? 'foodBtnAactive' : '' } `} onClick={()=> setCategory('ABRAULIGHT')} control={<Checkbox  />} label="Abrau Light" />
      <FormControlLabel control={<Checkbox  />} label="Abrau Junior" />
      <FormControlLabel control={<Checkbox  />} label="İmperiyal" />
      <FormControlLabel control={<Checkbox  />} label="Brut d’Or" />
      <FormControlLabel control={<Checkbox  />} label="Viktor Dravinyi" />
      <FormControlLabel control={<Checkbox  />} label="Rus köpüklənən" />
    </FormGroup>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion id="accordion-item" className='accordion__item'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Şərablar</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <div className="filter__options">
          <FormGroup>
      <FormControlLabel control={<Checkbox />} label="Hamısı" />
      <FormControlLabel control={<Checkbox />} label="Abrau" />
      <FormControlLabel control={<Checkbox />} label="Az Abrau" />
      <FormControlLabel control={<Checkbox />} label="Ağdam" />

    </FormGroup>
          </div>
        </AccordionDetails>
      </Accordion>
        {
          allProducts.map(item=>(
            <div key={item.id} className='mt-5'>
              <WineCard item={item}/>
            </div>
          ))
        }
    </div>
  )
}

export default ProductFilter