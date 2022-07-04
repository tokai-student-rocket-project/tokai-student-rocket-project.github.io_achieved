import Link from "next/link";
import { Container, Nav, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar expand="lg" sticky="top" bg="white">
      <Container fluid>
        <Navbar.Brand href="/" as={Link}>
          <a>
            <img
              src="/images/logo.png"
              height="auto"
              width="250"
              alt="Tokai Student Rocket Project"
            />
          </a>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="ps-md-5">
            <Link href="/" passHref>
              <Nav.Link>Home</Nav.Link>
            </Link>
            <Link href="/about" passHref>
              <Nav.Link>About</Nav.Link>
            </Link>
          </Nav>
          <Nav className="ms-auto pe-md-5">
            <Nav.Link>Twitter</Nav.Link>
            <Nav.Link>Instagram</Nav.Link>
            <Nav.Link>Youtube</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
