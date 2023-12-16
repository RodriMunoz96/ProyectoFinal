import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { validateStudentForm } from "./validation/Login"; // Importa la función de validación

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación de los campos del formulario
    const formErrors = validateStudentForm(formData);
    setErrors(formErrors);

    // Si no hay errores, puedes realizar la acción del formulario (por ejemplo, enviar los datos)
    if (Object.keys(formErrors).length === 0) {
      // Realiza la acción del formulario aquí (por ejemplo, enviar datos al servidor)
      console.log("Formulario enviado:", formData);
    }
  };

  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <Form className="p-4 border rounded" onSubmit={handleSubmit}>
        <h3 className="text-center mb-4">Sign In</h3>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <span className="text-danger">{errors.email}</span>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
          <span className="text-danger">{errors.password}</span>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Remember me" />
        </Form.Group>

        <div className="d-grid">
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </div>

        <p className="forgot-password text-right mt-3">
          Forgot <a href="#">password?</a>
        </p>
        <p className="forgot-password text-right mt-3">No está registrado?</p>
        <div className="d-grid">
          <Button variant="primary" type="submit">
            Registrarse
          </Button>
        </div>
      </Form>
    </Container>
  );
}

export default Login;
