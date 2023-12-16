import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { validate } from './validacion/validacion'; // Asegúrate de importar las funciones de validación

const StudentForm = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellidoPaterno: '',
    apellidoMaterno: '',
    email: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setErrors(validate({ ...formData, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar antes de enviar
    const formErrors = validate(formData);
    if (Object.keys(formErrors).length === 0) {
      // Aquí puedes enviar el formulario
      console.log('Formulario enviado:', formData);
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1>Student Form</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formNombre">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
              />
              <span style={{ color: 'red' }}>{errors.nombre}</span>
            </Form.Group>

            <Form.Group controlId="formApellidoPaterno">
              <Form.Label>Apellido Paterno</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter apellido paterno"
                name="apellidoPaterno"
                value={formData.apellidoPaterno}
                onChange={handleChange}
              />
              <span style={{ color: 'red' }}>{errors.apellidoPaterno}</span>
            </Form.Group>

            <Form.Group controlId="formApellidoMaterno">
              <Form.Label>Apellido Materno</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter apellido materno"
                name="apellidoMaterno"
                value={formData.apellidoMaterno}
                onChange={handleChange}
              />
              <span style={{ color: 'red' }}>{errors.apellidoMaterno}</span>
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              <span style={{ color: 'red' }}>{errors.email}</span>
            </Form.Group>

            {/* Agrega más campos según sea necesario */}
            
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default StudentForm;
