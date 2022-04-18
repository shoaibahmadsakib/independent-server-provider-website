import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar, Container } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import auth from "../../Firebase.init";

const Header = () => {
  const [user] = useAuthState(auth);
  return (
    <>
      <Navbar bg="light" expand="lg" className="px-5">
        <Container fluid>
          <Navbar.Brand href="/">Photography zone</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse>
            <Nav className="ms-auto my-2 my-lg-0">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/checkout">
                Checkout
              </Nav.Link>
              <span>{user?.displayName && user.displayName}</span>
              {user?.uid ? (
                <button onClick={() => signOut(auth)}>sign out</button>
              ) : (
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
              )}

              <Nav.Link as={Link} to="/register">
                Sign Up
              </Nav.Link>
              <Nav.Link as={Link} to="/blog">
                Blog
              </Nav.Link>
              <Nav.Link as={Link} to="/product">
                Product
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
