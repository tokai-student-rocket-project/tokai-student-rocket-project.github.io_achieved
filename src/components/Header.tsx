import Link from "next/link";
import { Container, Nav, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar expand="lg" sticky="top" bg="dark" variant="dark">
      <Container fluid>
        <Navbar.Brand href="/" as={Link}>
          <a>
            <img
              src="/images/logo.svg"
              height="46"
              width="auto"
              alt="Tokai Student Rocket Project"
            />
          </a>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="ps-md-5">
            <Link href="/about" passHref>
              <Nav.Link>About</Nav.Link>
            </Link>
          </Nav>
          <Nav className="ms-auto pe-md-5">
            <Nav.Link
              href="https://twitter.com/Tokai_SRP"
              target="_brank"
              rel="noreferrer noopener"
            >
              Twitter
            </Nav.Link>
            <Nav.Link
              href="https://www.instagram.com/tokai_srp/"
              target="_brank"
              rel="noreferrer noopener"
            >
              Instagram
            </Nav.Link>
            <Nav.Link
              href="https://www.youtube.com/c/TokaiSRP"
              target="_brank"
              rel="noreferrer noopener"
            >
              Youtube
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
