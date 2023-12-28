import React, { useState } from 'react';
import { Container, Form, Button, Col } from 'react-bootstrap';

const RegistrarPadre = () => {
  const generateUserId = () => {
    const timestamp = new Date().getTime();
    return `user-${timestamp}`;
  };

  const [formData, setFormData] = useState({
    userId: generateUserId(),
    idDoc: '',
    fotoDocumento: '',
    name: '',
    lastName: '',
    educationLevel: '',
    profession: '',
    address: '',
    jobAddress: '',
    telephone: '',
    jobTelephone: '',
    contactCellphone: '',
    email: '',
    tutor: false,
    validate: true,
    state: true,
  });

  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await fetch('http://localhost:3000/api/parents', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Padre creado exitosamente:', result.parent);
        // Opcionalmente, puedes redirigir o manejar el éxito en tu aplicación
      } else {
        const errorData = await response.json();
        console.error('Error al crear el padre:', errorData);
        // Maneja el error en tu aplicación
      }
    } catch (error) {
      console.error('Error al crear el padre:', error);
      // Maneja el error en tu aplicación
    } finally {
      setLoading(false);

      // Generar un nuevo userId y restablecer los datos del formulario
      setFormData({
        userId: generateUserId(),
        idDoc: '',
        fotoDocumento: '',
        name: '',
        lastName: '',
        educationLevel: '',
        profession: '',
        address: '',
        jobAddress: '',
        telephone: '',
        jobTelephone: '',
        contactCellphone: '',
        email: '',
        tutor: false,
        validate: true,
        state: true,
      });
    }
  };

  return (
    <Container>
      <h2 className="mt-4 mb-4">Registrar Nuevo Padre</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formIdDoc">
          <Form.Label>ID Documento</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese el ID del documento"
            name="idDoc"
            value={formData.idDoc}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formFotoDocumento">
          <Form.Label>Foto Documento</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese la URL de la foto del documento"
            name="fotoDocumento"
            value={formData.fotoDocumento}
            onChange={handleInputChange}
          />
        </Form.Group>

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

        <Form.Group className="mb-3" controlId="formEducationLevel">
          <Form.Label>Nivel Educativo</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese el nivel educativo"
            name="educationLevel"
            value={formData.educationLevel}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formProfession">
          <Form.Label>Profesión</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese la profesión"
            name="profession"
            value={formData.profession}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formAddress">
          <Form.Label>Dirección</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese la dirección"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formJobAddress">
          <Form.Label>Dirección Laboral</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese la dirección laboral"
            name="jobAddress"
            value={formData.jobAddress}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formTelephone">
          <Form.Label>Teléfono</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese el teléfono"
            name="telephone"
            value={formData.telephone}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formJobTelephone">
          <Form.Label>Teléfono Laboral</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese el teléfono laboral"
            name="jobTelephone"
            value={formData.jobTelephone}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formContactCellphone">
          <Form.Label>Celular de Contacto</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese el celular de contacto"
            name="contactCellphone"
            value={formData.contactCellphone}
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

        <Form.Group className="mb-3" controlId="formTutor">
          <Form.Check
            type="checkbox"
            label="¿Es tutor?"
            name="tutor"
            checked={formData.tutor}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formValidate">
          <Form.Check
            type="checkbox"
            label="¿Validado?"
            name="validate"
            checked={formData.validate}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Col xs="12" className="mb-3">
          <Button variant="primary" type="submit" className="w-100" disabled={loading}>
            {loading ? 'Registrando...' : 'Registrar Padre'}
          </Button>
        </Col>
      </Form>
    </Container>
  );
};

export default RegistrarPadre;
