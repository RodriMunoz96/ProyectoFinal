// NotFound.js

import { Container, Row, Col, Image } from "react-bootstrap";

const NotFound = () => {
  return (
    <Container>
      <Row className="mt-5">
        <Col md={{ span: 6, offset: 3 }} className="text-center">
          <Image src="../src/Img/DataCole.png" alt="Datacole Logo" fluid />
          <h1 className="mt-4">404 - Página no encontrada</h1>
          <p>Lo sentimos, la página que estás buscando no existe.</p>
          <Image
            src="../src/Img/system.svg"
            alt="system"
            fluid
            style={{ height: 350 }}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;
