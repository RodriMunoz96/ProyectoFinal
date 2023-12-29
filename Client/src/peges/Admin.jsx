import React, { useState } from 'react';
import { Container, Row, Col, Nav, Button } from 'react-bootstrap';
import img3 from '../Img/img3.png';
import { useNavigate } from 'react-router-dom';

// Importa tus componentes para cada página
import ConfiguracionPadre from './AdminPages/ConfiguracionPadre';
import MensajesPadre from './AdminPages/MensajesPadre';
import PerfilPadre from './AdminPages/PerfilPadre';
import RegistrarPadre from './AdminPages/RegistrarPadre';
import EliminarPadre from './AdminPages/EliminarPadre';
import VerTodosPadres from './AdminPages/VerTodosPadres';

const Admin = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(null);

  const renderPage = (page) => {
    setCurrentPage(page);
  };

  return (
    <Container fluid>
      <Row>
        <Col md={3} lg={2} style={{ backgroundColor: '#0b4c7b' }} className="sidebar">
          <Nav className="flex-column">
            <div className="d-flex align-items-center justify-content-center sidebar-header">
              <img src={img3} alt="Logo" className="img-fluid" />
            </div>
            <Button onClick={() => renderPage('Inicio')}>Inicio</Button>
            {/* CONTENIDO ADMIN */}

            {/* CONTENIDO PADRE */}
            <Button onClick={() => renderPage('RegistrarPadre')}>Registrar un Padre</Button>
            <Button onClick={() => renderPage('ModificarPadre')}>Modificar un Padre</Button>
            <Button onClick={() => renderPage('EliminarPadre')}>Eliminar un Padre</Button>
            <Button onClick={() => renderPage('VerTodosPadres')}>Ver todos los Padres</Button>
            {/* CONTENIDO ALUMNO */}
            {/* ... (haz lo mismo para las demás secciones) */}
          </Nav>
        </Col>
        <Col md={9} lg={10} className="main-content">
          {/* Renderizar el componente correspondiente según la página actual */}
          {currentPage === 'Inicio' && <p>Contenido de Inicio</p>}
          {currentPage === 'RegistrarPadre' && <RegistrarPadre />}
          {currentPage === 'ModificarPadre' && <ConfiguracionPadre />}
          {currentPage === 'EliminarPadre' && <EliminarPadre />}
          {currentPage === 'VerTodosPadres' && <VerTodosPadres />}
          {/* Agrega más condiciones según sea necesario */}
        </Col>
      </Row>
    </Container>
  );
};

export default Admin;
