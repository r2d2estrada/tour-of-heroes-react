import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import logo from "./../../assets/img/logo192.png";

const styles = {
  img: {
    maxHeight: 50,
    marginRight: "1rem",
  },
};

const Header: React.FC = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src={logo}
            title="React Tour of Heroes"
            alt="Logo"
            style={styles.img}
          />
          Tour of Heroes React
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={NavLink} exact to="/">
              Dashboard
            </Nav.Link>
            <Nav.Link as={NavLink} to="/heroes">
              Heroes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
