import { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { createUser } from "../redux/actions/actions-user";

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

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
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
            <Form.Group controlId="formUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username"
                name="username"
                value={user.username}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                value={user.email}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                name="password"
                value={user.password}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formType">
              <Form.Label>User Type</Form.Label>
              <Form.Control
                as="select"
                name="type"
                value={user.type}
                onChange={handleChange}
              >
                <option value="Parents">Parents</option>
                <option value="Admin">Admin</option>
                <option value="SuperAdmin">SuperAdmin</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="formNombre">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter nombre"
                name="nombre"
                value={user.nombre}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formApellidoPaterno">
              <Form.Label>Apellido Paterno</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter apellido paterno"
                name="apellidoPaterno"
                value={user.apellidoPaterno}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formApellidoMaterno">
              <Form.Label>Apellido Materno</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter apellido materno"
                name="apellidoMaterno"
                value={user.apellidoMaterno}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              agregar usuario
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default AddUserForm;
