import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Customlink from "./Customlink";

const Header = () => {
  return (
    <>
      <Navbar collapseOnSelect sticky="top" expand="lg" bg="dark" variant="dark">
        <Container>
          <Link className="text-decoration-none text-white fs-2" to="/">PhotoPidea</Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Customlink className='text-decoration-none text-white pb-2 fs-5 me-3' to="/reviews">Reviews</Customlink>
              <Customlink className='text-decoration-none text-white fs-5 me-3 pb-2' to="/blogs">Blog</Customlink>
              <Customlink className='text-decoration-none text-white pb-2 fs-5 me-3' to="/about">About</Customlink>
            </Nav>
            <Nav>
              <Customlink className='text-decoration-none text-white pb-2 fs-5 me-3' to="/checkout">Check Out</Customlink>
              <Link className="py-4 py-md-0 text-center " to='/login'><Button>Log In</Button></Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
