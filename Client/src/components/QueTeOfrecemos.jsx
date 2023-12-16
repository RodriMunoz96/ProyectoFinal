//import React from 'react';
import { Container, Row, Col } from "react-bootstrap";

const QueTeOfrecemos = () => {
  return (
    <section className="large-section-padding stunning-header-bg9">
      <Container>
        <Row>
          <Col
            lg={8}
            md={12}
            sm={12}
            xs={12}
            className="align-center mb-5 ml-auto mr-auto"
          >
            <h2 className="text-black">¿Qué te ofrecemos?</h2>
            <p className="fs-18 fw-medium text-black">
              Una plataforma, múltiples funciones.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default QueTeOfrecemos;
