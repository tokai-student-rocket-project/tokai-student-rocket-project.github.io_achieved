import Link from "next/link";
import { createRef, RefObject, useRef } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import styles from "../styles/Header.module.scss";

const links = [
  { href: "/about", text: "ABOUT" },
  { href: "/vehicle", text: "VEHICLE" },
  { href: "/mission", text: "MISSION" },
  { href: "/news", text: "NEWS" },
  { href: "/contact", text: "CONTACT" },
  { href: "/link", text: "LINK" },
];

const Header = () => {
  const linkRefs = useRef<RefObject<HTMLAnchorElement>[]>([]);

  const handleClickLogo = () => {
    console.log("onClick");
    linkRefs.current.map((linkRef) => {
      linkRef.current?.classList.remove("active");
    });
  };

  links.map((_, index) => {
    linkRefs.current[index] = createRef();
  });

  return (
    <Navbar collapseOnSelect expand="lg" fixed="top" bg="dark" variant="dark">
      <Container fluid>
        <Navbar.Brand href="/" as={Link}>
          <a onClick={handleClickLogo}>
            <img
              src="/images/logo.svg"
              height="46px"
              width="auto"
              alt="Tokai Student Rocket Project"
            />
          </a>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="ps-md-5">
            {links.map((item, index) => {
              return (
                <Link key={index} href={item.href} passHref>
                  <Nav.Link ref={linkRefs.current[index]}>{item.text}</Nav.Link>
                </Link>
              );
            })}
          </Nav>
          <Navbar.Text className="ms-auto pe-md-5">
            <a
              href="https://twitter.com/Tokai_SRP"
              target="_brank"
              rel="noreferrer noopener"
            >
              <FaTwitter className={styles["react-icon"]} />
            </a>
            <a
              href="https://www.instagram.com/tokai_srp/"
              target="_brank"
              rel="noreferrer noopener"
            >
              <FaInstagram className={styles["react-icon"]} />
            </a>
            <a
              href="https://www.youtube.com/c/TokaiSRP"
              target="_brank"
              rel="noreferrer noopener"
            >
              <FaYoutube className={styles["react-icon"]} />
            </a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
