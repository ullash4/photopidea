import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const LogIn = () => {
  return (
    <>
      <div className="w-50 mx-auto my-5  p-5 rounded-3 shadow-lg">
        <Form>
          <h1 className="text-center mb-3 ">Log In</h1>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <p>New to PhotoPedia ? <Link to='register'>Register here</Link> </p>
          <Button variant="primary" type="submit">
            Log In
          </Button>
        </Form>
      </div>
    </>
  );
};

export default LogIn;
