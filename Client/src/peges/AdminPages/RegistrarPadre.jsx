import React, { useState } from 'react';
import { Container, Form, Button, Col } from 'react-bootstrap';

const RegistrarPadre = () => {
  const [formData, setFormData] = useState({
    userId: '192820e3-a3bc-44f1-bbfd-99da823d0200',
    id: '',
    idDoc: '',
    fotoDocumento: '',
    name: '',
    lastName: '',
    educationLevel: 'High-School',
    profession: 'Unknow',
    address: '',
    jobAddress: '',
    telephone: '',
    jobTelephone: '',
    contactCellphone: '',
    email: '',
    tutor: true,
    validate: true,
    state: true,
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/parents', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Padre registrado con éxito');
        // Puedes redirigir a otra página o realizar alguna acción después del registro exitoso
      } else {
        console.error('Error al registrar el padre');
      }
    } catch (error) {
      console.error('Error de red:', error);
    }

    setFormData({
      userId: '192820e3-a3bc-44f1-bbfd-99da823d0200',
      id: '',
      idDoc: '',
      fotoDocumento: '',
      name: '',
      lastName: '',
      educationLevel: 'High-School',
      profession: 'Unknow',
      address: '',
      jobAddress: '',
      telephone: '',
      jobTelephone: '',
      contactCellphone: '',
      email: '',
      tutor: true,
      validate: true,
      state: true,
    });
  };

  return (
    <Container>
      <h2 className="mt-4 mb-4">Registrar Nuevo Padre</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese el nombre"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formLastName">
          <Form.Label>Apellido</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese el apellido"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Ingrese el correo electrónico"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </Form.Group>

        {/* Agrega más campos según sea necesario para el registro del padre */}
        
        <Col xs="12" className="mb-3">
          <Button variant="primary" type="submit" className="w-100">
            Registrar Padre
          </Button>
        </Col>
      </Form>
    </Container>
  );
};

export default RegistrarPadre;
