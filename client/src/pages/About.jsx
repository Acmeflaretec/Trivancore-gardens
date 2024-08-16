import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Footer from '../components/Footer';
import MiddleNav from '../components/MiddleNav';

const About = () => {
  return (
    <>
      <MiddleNav />
      <div className="bg-light py-5">
        <Container>
          <Row className="justify-content-center align-items-center">
            <Col lg={6} className="mb-4 mb-lg-0">
              <Image
                src="who.jpg"
                alt="About"
                fluid
                rounded
                className="shadow-lg"
              />
            </Col>
            <Col lg={6}>
              <div className="px-lg-4">
                <h2 className="fw-bold mb-4">About Us</h2>
                <p>
                Welcome to Travancore Gardens, your one-stop destination for all things green! At Travancore Gardens, we believe that a beautiful garden can bring joy, tranquility, and a breath of fresh air to any space. Whether you are a seasoned gardener or just starting your journey, we are here to provide you with the finest plants, garden tools, and expert advice to help you create the garden of your dreams.
                </p>
                <p>
                Our journey began with a simple passion for nature and a desire to share the beauty of plants with our community. Over the years, we have grown from a small local nursery into a trusted name in the gardening world, offering a wide range of plants, from vibrant flowers and lush greenery to fruit-bearing trees and rare species. But we are more than just a garden store; we are a community of plant lovers who believe in nurturing not just plants, but relationships.
                </p>
                <p>
                At Travancore Gardens, sustainability is at the heart of everything we do. We are committed to eco-friendly practices, ensuring that our products are sourced responsibly and our impact on the environment is minimized. From organic fertilizers to sustainable gardening tools, every product we offer is carefully selected to help you cultivate a garden that is as kind to the earth as it is beautiful.
                </p>
                <p>
                Our team of gardening experts is always on hand to offer personalized advice and tips to help your garden thrive. Whether you are looking to create a cozy balcony oasis, a bountiful vegetable garden, or a serene backyard retreat, we are here to support you every step of the way.

                Join us on this green journey and discover the joy of gardening with Travancore Gardens. Let us grow something beautiful together!
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default About;
