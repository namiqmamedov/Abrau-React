import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../../assets/header/Logo.svg'
import Facebook from '../../assets/header/facebook.svg'
import Instagram from '../../assets/header/instagram.svg'
import {AiOutlineGlobal} from 'react-icons/ai'
import {BsSearch} from 'react-icons/bs'
import {FaFacebookF} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import '../../styles/header.css'

function Header() {
  return (
    <Navbar id='navbar' collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">
          <img src={Logo} alt="Logo" />
        </Navbar.Brand>

        <div className="header__social-link">
          <FaFacebookF/>
          <FaInstagram/>
        </div>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto main-nav">
            <Link to='about'>HAQQIMIZDA</Link>
            <Link to="product">MƏHSULLAR</Link>
            <Link to="news">SATIŞ NÖQTƏLƏRI</Link>
            <Link to="price-location">XƏBƏRLƏR</Link>
            <Link to="contact">ƏLAQƏ</Link>
          </Nav>
          <Nav>
           <div className="search-index">
            <BsSearch/>
           </div>
            <div className="social-link">
              <img src={Facebook} alt="Facebook" />
              <img src={Instagram} alt="Instagram" />
              <AiOutlineGlobal/>
            </div>
          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}

export default Header;