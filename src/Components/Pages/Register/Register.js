import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import SocialLogIn from "../../Shared/SocialLogIn/SocialLogIn";

const Register = () => {

  return (
    <>
      <div  className="container mb-5 mt-3 p-5">
        <h1 className="text-center mb-5 ">Sign Up</h1>
        <div className="row g-5">
          <div className="col-12 col-md-5">
            <img
              className="img-fluid rounded-3 "
              src="https://media.giphy.com/media/ZgTR3UQ9XAWDvqy9jv/giphy.gif"
              alt=""
            />
          </div>
          <div className="col-12 col-md-7">
            <Form>
              <Row className="mb-2">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>First Name *</Form.Label>
                  <Form.Control type="Text" placeholder="First Name" required />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Last Name *</Form.Label>
                  <Form.Control type="text" placeholder="Last Name" required />
                </Form.Group>
              </Row>

              <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Email *</Form.Label>
                <Form.Control type="email" placeholder="Your Email" required />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formGridAddress2">
                <Form.Label>Password *</Form.Label>
                <Form.Control type="password" placeholder="Password" required />
              </Form.Group>

              <Form.Group className="mb-3" id="formGridCheckbox">
                <Form.Check
                  type="checkbox"
                  label="Accepts all terms and conditions"
                />
              </Form.Group>
                <p>Already user ? <Link className="text-decoration-none" to={'/login'}>Log In</Link> </p>
              <Button variant="primary" type="submit">
                Sign up
              </Button>
              <SocialLogIn></SocialLogIn>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
