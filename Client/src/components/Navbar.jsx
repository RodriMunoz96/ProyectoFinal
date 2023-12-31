import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function Navbar1() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">DataCole</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href="#home">Home</Nav.Link> */}
            <NavDropdown title="El Colegio" id="basic-nav-dropdown">
              <NavDropdown.Item href="QuienesSomos">
                Quiénes somos{" "}
              </NavDropdown.Item>
              <NavDropdown.Item href="oferta">
                Nuestra Oferta Educativa
              </NavDropdown.Item>
              <NavDropdown.Item href="porqueelegir">
                ¿Por qué elegirnos?{" "}
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="nuestroequipo">
                Nuestro Equipo
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/login">Ingresar</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbar1;
