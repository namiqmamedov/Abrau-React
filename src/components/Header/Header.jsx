import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../../assets/header/Logo.svg'
import Facebook from '../../assets/header/facebook.svg'
import Instagram from '../../assets/header/instagram.svg'
import {AiOutlineGlobal} from 'react-icons/ai'
import {BsSearch} from 'react-icons/bs'
import '../../styles/header.css'

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">
          <img src={Logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto main-nav">
            <Nav.Link href='about'>HAQQIMIZDA</Nav.Link>
            <Nav.Link href="abrau">AZ ABRAU</Nav.Link>
            <Nav.Link href="news">XƏBƏRLƏR</Nav.Link>
            <Nav.Link href="price-location">SATIŞ MƏNTƏQƏLƏRİ</Nav.Link>
            <Nav.Link href="contact">ƏLAQƏ</Nav.Link>
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