import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navbar1() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="El Colegio" id="basic-nav-dropdown">
              <NavDropdown.Item href="./login">Quiénes somos </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              Nuestra Oferta Educativa
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Proyecto Educativo </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Nuestro Equipo
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Actualidad" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Noticias</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
               Galerias
              </NavDropdown.Item>
              
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbar1;