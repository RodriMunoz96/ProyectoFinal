import React from 'react';
import { Container, Card } from 'react-bootstrap';

const PerfilPadre = () => {
  return (
    <Container>
      <h2>Perfil del Padre</h2>
      {/* Agrega la información del perfil del padre */}
      <Card>
        <Card.Body>
          <Card.Title>Nombre del Padre</Card.Title>
          <Card.Text>
            Información del perfil...
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default PerfilPadre;
