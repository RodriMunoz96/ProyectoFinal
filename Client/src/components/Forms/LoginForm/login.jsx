import { useState, useEffect } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../../redux/actions/actions-login";
import validate from "./validateLogin";
// import { jwtDecode } from "jwt-decode";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authToken = useSelector((state) => state.token);

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState({
    email: "",
    password: "",
  });

  const validateLogin = () => {
    const errors = validate(loginData);

    const hasErrors = Object.values(errors).some((error) =>
      Array.isArray(error) ? error.length > 0 : !!error
    );

    return hasErrors;
  };

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });

    setError({ ...error, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    dispatch(loginUser(loginData));
    console.log("iniciando sesión", loginData);
  };

  useEffect(() => {
    if (authToken) {
      // const decodedToken = jwtDecode(authToken);
      // const userId = decodedToken.userId;

      navigate("/viewParent/myProfile");
    }
  }, [authToken, navigate]);

  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <Form className="p-4 border rounded" onSubmit={handleSubmit}>
        <h3 className="text-center mb-4">Inicie sesión</h3>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Correo electrónico</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Ingrese su correo"
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Ingrese su contraseña"
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Recuérdame" />
        </Form.Group>

        <div className="d-grid">
          <Button variant="primary" type="submit" disabled={validateLogin()}>
            Iniciar sesión
          </Button>
        </div>

        <p className="forgot-password text-right mt-3">
          Olvidó su <a href="#">contraseña?</a>
        </p>
        <p className="forgot-password text-right mt-3">No está registrado?</p>
        <div className="d-grid">
          <Link to="/addUser" className="btn btn-primary">
            Registrarse
          </Link>
        </div>
      </Form>
    </Container>
  );
};

export default Login;
