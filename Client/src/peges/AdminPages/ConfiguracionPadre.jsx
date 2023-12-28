import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const ConfiguracionPadre = () => {
  return (
    <Container>
      <h2>Configuración del Padre</h2>
      {/* Agrega el formulario y elementos necesarios */}
      <Form>
        {/* ... (añade campos, botones, etc.) */}
        <Button variant="primary" type="submit">
          Guardar Configuración
        </Button>
      </Form>
    </Container>
  );
};

export default ConfiguracionPadre;
