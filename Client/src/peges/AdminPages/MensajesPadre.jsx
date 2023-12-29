import React from 'react';
import { Container, ListGroup } from 'react-bootstrap';

const MensajesPadre = () => {
  return (
    <Container>
      <h2>Mensajes del Padre</h2>
      {/* Agrega la lista de mensajes u otros elementos necesarios */}
      <ListGroup>
        <ListGroup.Item>Mensaje 1</ListGroup.Item>
        <ListGroup.Item>Mensaje 2</ListGroup.Item>
        {/* ... (añade más elementos según sea necesario) */}
      </ListGroup>
    </Container>
  );
};

export default MensajesPadre;

