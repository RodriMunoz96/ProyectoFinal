import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import img3 from '../Img/img3.png';
import { useNavigate } from 'react-router-dom';

const Admin = () => {
  const navigate = useNavigate();
  return (
    <Container fluid>
      <Row>
        <Col md={3} lg={2} style={{ backgroundColor: '#0b4c7b' }} className=" sidebar">
          <Nav className="flex-column">
            <div className="d-flex align-items-center justify-content-center sidebar-header">
              <img src={img3} alt="Logo" className="img-fluid" />
            </div>
            <Link onClick={() => navigate('/')}>Inicio</Link>
            {/* CONTENIDO ADMIN */}
           
            {/* CONTENIDO PADRE */}
            <Link to="/configuracion">Registrar un Padre</Link>
            <Link to="/mensajes">Modificar un Padre</Link>
            <Link to="/perfil">Eliminar un Padre</Link>
            <Link to="/perfil">Ver todos los Padres</Link>
            {/* CONTENIDO ALUMNO */}
            <Link to="/perfil">Crear un Alumno</Link>
            <Link to="/mensajes">Modificar un Alumno</Link>
            <Link to="/perfil">Eliminar un Alumno</Link>
            <Link to="/perfil">Ver todos los Alumnos</Link>
            {/* CONTENIDO GRADOS */}
            <Link to="/perfil">Crear Grados</Link>
            <Link to="/perfil">Modificar Grados</Link>
            <Link to="/perfil">Eliminar Grados</Link>
            {/* CONTENIDOS PRODUCTOS */}
            <Link to="/mensajes">Agregar un Producto</Link>
            <Link to="/mensajes">Modificar un Producto</Link>
            <Link to="/perfil">Eliminar un Producto</Link>
            <Link to="/perfil">Ver todos los Productos</Link>
          </Nav>
        </Col>
        <Col md={9} lg={10} className="main-content">

          {/* Contenido principal de la página */}

        </Col>
      </Row>
    </Container>
  );
};

export default Admin;

