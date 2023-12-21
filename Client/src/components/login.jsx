import { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { loginUser } from "../redux/actions/actions-login";
//import axios from "axios";

const Login = () => {
  const dispatch = useDispatch();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    dispatch(loginUser(loginData));
    console.log("iniciando sesión", loginData);
  };

  // Frontend example to send token to verify :

  // Function to send an authenticated request with Axios using callbacks
  // const sendAuthenticatedRequest = (
  //   url,
  //   method = "GET",
  //   data = null,
  //   successCallback,
  //   errorCallback
  // ) => {
  //   // Retrieve the token from sessionStorage
  //   const token = sessionStorage.getItem("your_jwt_token_key");

  //   // If token is not present, invoke the error callback
  //   if (!token) {
  //     // Handle the absence of a token (e.g., redirect to login)
  //     errorCallback(new Error("No JWT token found"));
  //     return;
  //   }

  //   // Set the Authorization header with the token
  //   const headers = {
  //     Authorization: `Bearer ${token}`,
  //     "Content-Type": "application/json", // Adjust content type as needed
  //   };

  //   // Make the Axios request
  //   axios({
  //     url,
  //     method,
  //     headers,
  //     data,
  //   })
  //     .then((response) => {
  //       // Invoke the success callback with the response data
  //       successCallback(response.data);
  //     })
  //     .catch((error) => {
  //       // Invoke the error callback with the error
  //       errorCallback(error);
  //     });
  // };

  // // Example usage
  // const apiEndpoint = "http://localhost:3000/api/auth/authenticate";
  // sendAuthenticatedRequest(
  //   apiEndpoint,
  //   "GET",
  //   null,
  //   (responseData) => {
  //     console.log("Response:", responseData);
  //   },
  //   (error) => {
  //     console.error("Error:", error.message);
  //   }
  // );

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
            placeholder="Ingrese su correo"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="Ingrese su contraseña"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Recuérdame" />
        </Form.Group>

        <div className="d-grid">
          <Button variant="primary" type="submit">
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
