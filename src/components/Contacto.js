import React from 'react'
import { Col, Container, Row } from "react-bootstrap";
import './Contacto.css';
import logo from '../Assets/Logo.png'
import Rv from '../Assets/Rv.png'



const Contacto = () => {
  return (
    <section>
        <Container fluid className="home-section" id="contacto">
            <Container className="home-content-2">
                <Row className="contact-header">
                    <Col>
                        {/* <img src={logo} className='logo-contacto' alt='logo-contacto'/> */}
                        <img src={Rv} className='logo-contacto' alt='logo-contacto'/>
                    </Col>

                    <Col md={6}  style={{ paddingBottom: 20 }}>
                        <h1>Contactate con nosotros</h1>

                        <p> Barracas, Buenos Aires </p>
                        <p>Eduardo Escalante </p>
                        <p> +54 9 11 2787 8044 </p>
                        <p></p>

                      </Col>
                </Row>
                
            </Container>
        </Container>
    </section>
  )
}

export default Contacto