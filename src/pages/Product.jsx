import productCommon from "../assets/product/product-common.jpg";
import "../styles/product.css";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import ProductFilter from "../components/UI/product-filter/ProductFilter";
import WineCard from "../components/UI/wine-card/WineCard";
import products from "../data/product";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { AiOutlineCheck } from "react-icons/ai";
import { useEffect, useState } from "react";

const Product = () => {

    // Category Filter // 

  const [category, setCategory] = useState([
    "Abrau Light",
    "Abrau Junior",
    "İmperiyal",
    "Brut d’Or",
    "Viktor Dravinyi",
    "Rus köpüklənən",
  ]);

  const [wine, setWines] = useState([
    "Abrau",
    "Az Abrau",
    "Ağdam",
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
  }

  const resetFilteres = () => {
    setcategoryFilters(new Set());
  };

  const filteredProducts =
    categoryFilters.size === 0
      ? products
      : products.filter((p) => categoryFilters.has(p.category) 
      ?
      products :
      categoryFilters.has(p.wine)
      );
      


  return (
    <>
      <section className="common-section">
        <div className="background-img"></div>
        <img src={productCommon} alt="Common Image" />
        <h1 className="centered">Məhsullar</h1>
      </section>
      <div className="breadcrumb__index">
        <div className="container">
          <div className="row">
            <Breadcrumbs className="breadcrumb__item" aria-label="breadcrumb">
              <Link color="text.primary" underline="hover" to="/">
                Ana Səhifə
              </Link>
              <Link
                underline="hover"
                color="inherit"
                href="/material-ui/getting-started/installation/"
              >
                Məhsullar
              </Link>
            </Breadcrumbs>
          </div>
        </div>
      </div>
      <section className="product">
        <div className="container">
          <div className="row">
            <div className="product__main-item">
              <div className="col-lg-4 col-md-5">
                <div className="filter__index">
                  <h2>Kateqoriya</h2>
                  <Link className="clear-filter" onClick={resetFilteres}>
                    təmizlə
                  </Link>
                  <div className="accordion__main">
                    <Accordion className="accordion__item">
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
                            <div className="form-check ms-2">
                              <label className="form-check-label">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  onClick={resetFilteres}
                                />
                                Hamısı
                              </label>
                            </div>
                            {category.map((elm, index) => {
                              return (
                                <div className="form-check ms-2" key={index}>
                                  <label className="form-check-label">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      onChange={(e) =>
                                        updateFilters(e.target.checked, elm)
                                      }
                                    />

                                    {elm}
                                  </label>
                                </div>
                              );
                            })}
                          </FormGroup>
                        </div>
                      </AccordionDetails>
                    </Accordion>
                    <Accordion className="accordion__item">
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <Typography>Şərablar</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <div className="filter__options">
                          <FormGroup>
                            <div className="form-check ms-2">
                              <label className="form-check-label">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  onClick={resetFilteres}
                                />
                                Hamısı
                              </label>
                            </div>
                            {wine.map((elm, index) => {
                              return (
                                <div className="form-check ms-2" key={index}>
                                  <label className="form-check-label">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      onChange={(e) =>
                                        updateFilters(e.target.checked, elm)
                                      }
                                    />

                                    {elm}
                                  </label>
                                </div>
                              );
                            })}
                          </FormGroup>
                        </div>
                      </AccordionDetails>
                    </Accordion>
                  </div>
                </div>
              </div>
              <div className="col-lg-8 col-md-7">
                <div className="product__list-item">
                  {filteredProducts.map((item, index) => (
                    <WineCard key={index} item={item} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
