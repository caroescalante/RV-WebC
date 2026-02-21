import React from 'react';
import { Col, Container, Row } from "react-bootstrap";
import camion from "../Assets/camion.jpg";
import './About.css';

const About = () => {
  return (
    <section className="about-section" id="about">
      <Container>
        <Row className="align-items-center">
          
          <Col md={6} className="about-text">
            <h1>Quienes Somos</h1>

            <p>
              Somos una empresa especializada en brindarte 
              la mejor experiencia en el transporte de tus productos.
              Junto a atención personalizada para tu empresa, 
              la seguridad de tus bienes es nuestra prioridad.
            </p>

            <p>
              Contamos con +20 años de experiencia en el rubro,
              transportes en excelente estado,personal de suma confianza
              y confidencialidad en todo momento.
            </p>
          </Col>

          <Col md={6} className="about-image">
            <img
              src={camion}
              alt="camion"
              className="img-fluid about-img"
            />
          </Col>

        </Row>
      </Container>
    </section>
  );
};

export default About;
