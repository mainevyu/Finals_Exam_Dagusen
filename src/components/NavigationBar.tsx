import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavigationBar() {
  return (
    <Navbar expand="lg" fixed="top" className="navbar-custom">
      <Container fluid className="px-5">

        <Navbar.Brand href="#" className="brand">
          My Portfolio
        </Navbar.Brand>

        <Nav className="ms-auto nav-links">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/about">About</Nav.Link>
          <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;