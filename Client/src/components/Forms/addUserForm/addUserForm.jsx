import { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { createUser } from "../../../redux/actions/actions-user";
import validate from "./validateUserForm";

const AddUserForm = () => {
  const dispatch = useDispatch();

  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    type: "Parents",
    nombre: "",
    apellidoPaterno: "",
    apellidoMaterno: "",
  });

  const [error, setError] = useState({
    username: "",
    email: "",
    password: "",
    nombre: "",
    apellidoPaterno: "",
    apellidoMaterno: "",
  });

  const validateForm = () => {
    const errors = validate(user);

    const hasErrors = Object.values(errors).some((error) =>
      Array.isArray(error) ? error.length > 0 : !!error
    );

    return hasErrors;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUser({
      ...user,
      [name]: value,
    });
    setError(
      validate({
        ...user,
        [name]: value,
      })
    );
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    dispatch(createUser(user));
    alert("El usuario ha sido creado con éxito");
  };

  return (
    <Container>
      <Row className="justify-content-md-center mt-5">
        <Col md={6}>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ingrese su email"
                name="email"
                value={user.email}
                onChange={handleChange}
                required
              />
              {error.email && (
                <span style={{ color: "red" }}>{error.email}</span>
              )}
            </Form.Group>

            <Form.Group controlId="formPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Ingrese su contraseña"
                name="password"
                value={user.password}
                onChange={handleChange}
                required
              />
              {error.password && (
                <span style={{ color: "red" }}>{error.password}</span>
              )}
            </Form.Group>

            <Form.Group controlId="formNombre">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese su nombre"
                name="nombre"
                value={user.nombre}
                onChange={handleChange}
                required
              />
              {error.nombre && (
                <span style={{ color: "red" }}>{error.nombre}</span>
              )}
            </Form.Group>

            <Form.Group controlId="formApellidoPaterno">
              <Form.Label>Apellido Paterno</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese su apellido paterno"
                name="apellidoPaterno"
                value={user.apellidoPaterno}
                onChange={handleChange}
                required
              />
              {error.apellidoPaterno && (
                <span style={{ color: "red" }}>{error.apellidoPaterno}</span>
              )}
            </Form.Group>

            <Form.Group controlId="formApellidoMaterno">
              <Form.Label>Apellido Materno</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese su apellido materno"
                name="apellidoMaterno"
                value={user.apellidoMaterno}
                onChange={handleChange}
                required
              />
              {error.apellidoMaterno && (
                <span style={{ color: "red" }}>{error.apellidoMaterno}</span>
              )}
            </Form.Group>

            <Button variant="primary" type="submit" disabled={validateForm()}>
              agregar usuario
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default AddUserForm;
