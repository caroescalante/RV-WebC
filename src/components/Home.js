import React from 'react';
import { Container, Row } from "react-bootstrap";
import './Home.css'


const Home = () => {
  return (
    <section>
      <Container fluid className="home-section" id="home">
          <Container className="home-content">
            <Row className="home-header">
              <link href="https://fonts.cdnfonts.com/css/tt-norms-pro" rel="stylesheet"></link>
              <h1 style={{ paddingBottom: 15 }} className="heading">
               TRANSPORTES Y
              </h1>
              <h1 className="heading-name">
                SERVICIOS
              </h1>
            </Row>
          </Container>
      </Container>
    </section>
  )
}

export default Home
