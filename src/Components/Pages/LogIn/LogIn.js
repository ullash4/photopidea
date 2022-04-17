import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import SocialLogIn from "../../Shared/SocialLogIn/SocialLogIn";



const LogIn = () => {

  

  const emailRef = useRef('')
  const passwordRef = useRef('')

  const handleSubmitForm=(e)=>{
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    
  }

  return (
    <>
      <div className="container my-5 p-5 shadow-lg rounded-3">
      <h1 className="text-center mb-3 ">Log In</h1>
        <div className="row g-5">
          <div className="col-12 col-md-5">
            <img
              className="img-fluid rounded-3 "
              src="https://media.giphy.com/media/ZgTR3UQ9XAWDvqy9jv/giphy.gif"
              alt=""
            />
          </div>
          <div className="col-12 col-md-7">
            <div className=" p-4">
            <Form onSubmit={handleSubmitForm}>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control  type="password" placeholder="Password" />
              </Form.Group>
              <p>
                New to PhotoPedia ?{" "}
                <Link className="text-decoration-none" to="/register">
                  Register here
                </Link>{" "}
              </p>
              
              <Button variant="dark" type="submit">
                Log In
              </Button>
              <button className="btn btn-link text-decoration-none ms-3">Forgot password ?</button><br />
           <SocialLogIn></SocialLogIn>
            </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogIn;
