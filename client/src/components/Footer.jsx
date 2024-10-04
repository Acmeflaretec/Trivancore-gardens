import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row className="footer-content">
          <Col lg={4} md={6} className="footer-section">
            <h5 className="footer-title">About Us</h5>
            <p className="footer-description">
              We are committed to providing eco-friendly products that promote sustainability and environmental responsibility.
            </p>
            <div className="social-icons">
              <a href="https://www.facebook.com/profile.php?id=61561366147522&mibextid=LQQJ4d" target="_blank" className="social-icon"><FaFacebookF /></a>
              <a href="https://www.instagram.com/kg.ecoproducts?igsh=ejU0OXp4ZTFrMGVp&utm_source=qr" target="_blank" className="social-icon"><FaInstagram /></a>
              <a href="https://www.linkedin.com/company/kgecoproducts/" target="_blank" className="social-icon"><FaLinkedinIn /></a>
            </div>
          </Col>
          <Col lg={2} md={6} className="footer-section">
            <h5 className="footer-title">Quick Links</h5>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/allproducts">Products</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </Col>
          <Col lg={3} md={6} className="footer-section">
            <h5 className="footer-title">Policies</h5>
            <ul className="footer-links">
            <li><Link to={'/privacypolicy'}>Privacy Policy</Link></li>
              <li><Link to={'/cancellation'}>Cancellation & Refunds</Link></li>
              {/* <li><Link to={'/returnpolicy'}>Return Policy</Link></li> */}
              <li><Link to={'/storepolicy'}>Shipping and Delivery</Link></li>
              <li><Link to={'/termsofservice'}>Terms and Conditions</Link></li>
            </ul>
          </Col>
          <Col lg={3} md={6} className="footer-section">
            <h5 className="footer-title">Contact Us</h5>
            <ul className="footer-contact">
              <li><i className="fas fa-phone"></i> +91 123456789</li>
              <li><i className="fas fa-envelope"></i> example@gmail.com</li>
              <li><i className="fas fa-map-marker-alt"></i>trivandrum</li>
            </ul>
          </Col>
        </Row>
      </Container>
      <div className="footer-bottom">
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="text-center text-md-start">
              <p className="mb-0">&copy; {new Date().getFullYear()} Travancore gardens. All rights reserved.</p>
            </Col>
            <Col md={6} className="text-center text-md-end">
              <p className="mb-0">Designed by <a href="https://www.acmeflare.in/" className="designer-link">Acmeflare</a></p>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
}

export default Footer;