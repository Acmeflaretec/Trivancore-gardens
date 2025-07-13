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
              At Travancore Gardens, we're passionate about helping you create beautiful, sustainable gardens. We offer eco-friendly gardening products and tools to support your gardening journey.
            </p>
            <div className="social-icons">
              <a className="social-icon"><FaFacebookF /></a>
              <a className="social-icon"><FaInstagram /></a>
              <a className="social-icon"><FaLinkedinIn /></a>
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
              <li><Link to={'/storepolicy'}>Shipping and Delivery</Link></li>
              <li><Link to={'/termsofservice'}>Terms and Conditions</Link></li>
            </ul>
          </Col>
          <Col lg={3} md={6} className="footer-section">
            <h5 className="footer-title">Contact Us</h5>
            <ul className="footer-contact">
              <li><i className="fas fa-envelope"></i>travancoregardens@gmail.com</li>
            </ul>
          </Col>
        </Row>
      </Container>
      <div className="footer-bottom">
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="text-center text-md-start">
              <p className="mb-0">&copy; {new Date().getFullYear()} Travancore Gardens. All rights reserved.</p>
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
