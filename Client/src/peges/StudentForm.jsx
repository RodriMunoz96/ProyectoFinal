import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';

const StudentForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: '',
    grade: '',
  });

  const [created, setCreated] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Enviar datos a la API (ajusta la URL según tu configuración)
      await axios.post('/students', formData);
      setCreated('Student successfully created');
      // Limpiar el formulario después de enviar
      setFormData({
        firstName: '',
        lastName: '',
        age: '',
        grade: '',
      });
    } catch (error) {
      console.error('Error creating student:', error);
    }
  };

  return (
    <Container>
      <h2>Create a Student</h2>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col>
            <Form.Group>
              <Form.Label>First Name:</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Last Name:</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group>
              <Form.Label>Age:</Form.Label>
              <Form.Control
                type="number"
                name="age"
                value={formData.age}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Grade:</Form.Label>
              <Form.Control
                type="text"
                name="grade"
                value={formData.grade}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>
        <Button variant="primary" type="submit">
          Create Student
        </Button>
      </Form>
      <div>{created}</div>
    </Container>
  );
};

export default StudentForm;
