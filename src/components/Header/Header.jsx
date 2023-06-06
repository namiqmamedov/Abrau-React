import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../../assets/header/Logo.svg";
import Facebook from "../../assets/header/facebook.svg";
import Instagram from "../../assets/header/instagram.svg";
import { AiOutlineGlobal } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import { Drawer, Box } from "@mui/material";
import "../../styles/header.css";
import { useState } from "react";

function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <Navbar id="navbar" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">
          <img src={Logo} alt="Logo" />
        </Navbar.Brand>

        <div className="drawer__menu">
          <RxHamburgerMenu onClick={() => setIsDrawerOpen(true)} />
        </div>

        <Drawer
          className="drawer__index"
          anchor="right"
          open={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
        >
          <Box>
            <div className="top-content">
              <img src={Logo} alt="Logo" />
              <div
                className="close-mark"
                onClick={() => setIsDrawerOpen(false)}
              >
                <AiOutlineClose />
              </div>
            </div>

            <div className="main-content">
              <Nav className="mx-auto main-nav">
                <NavLink
                  className={"active"}
                  onClick={() => setIsDrawerOpen(false)}
                  to="about"
                >
                  HAQQIMIZDA
                </NavLink>
                <NavLink
                  className={"active"}
                  onClick={() => setIsDrawerOpen(false)}
                  to="product"
                >
                  MƏHSULLAR
                </NavLink>
                <NavLink
                  className={"active"}
                  onClick={() => setIsDrawerOpen(false)}
                  to="price-location"
                >
                  SATIŞ NÖQTƏLƏRI
                </NavLink>
                <NavLink
                  className={"active"}
                  onClick={() => setIsDrawerOpen(false)}
                  to="news"
                >
                  XƏBƏRLƏR
                </NavLink>
                <NavLink
                  className={"active"}
                  onClick={() => setIsDrawerOpen(false)}
                  to="contact"
                >
                  ƏLAQƏ
                </NavLink>
              </Nav>
              <div className="social-link">
                <Link
                  target="_blank"
                  to={"https://www.facebook.com/AbrauDursoAZ/"}
                >
                  <img src={Facebook} alt="Facebook" />
                </Link>
                <Link
                  target="_blank"
                  to={"https://www.instagram.com/abrau_durso_az"}
                >
                  <img src={Instagram} alt="Instagram" />
                </Link>
              </div>
            </div>
          </Box>
        </Drawer>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto main-nav">
            <NavLink ClassName={"active"} to="about">
              HAQQIMIZDA
            </NavLink>
            <NavLink ClassName={"active"} to="product">
              MƏHSULLAR
            </NavLink>
            <NavLink ClassName={"active"} to="price-location">
              SATIŞ NÖQTƏLƏRI
            </NavLink>
            <NavLink ClassName={"active"} to="news">
              XƏBƏRLƏR
            </NavLink>
            <NavLink ClassName={"active"} to="contact">
              ƏLAQƏ
            </NavLink>
          </Nav>
          <Nav>
            <div className="search-index">
              <BsSearch />
            </div>
            <div className="social-link">
              <Link
                target="_blank"
                to={"https://www.facebook.com/AbrauDursoAZ/"}
              >
                <img src={Facebook} alt="Facebook" />
              </Link>
              <Link
                target="_blank"
                to={"https://www.instagram.com/abrau_durso_az"}
              >
                <img src={Instagram} alt="Instagram" />
              </Link>
             <Link>
             <AiOutlineGlobal/>
             </Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
