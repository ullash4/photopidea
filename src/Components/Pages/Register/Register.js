import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import SocialLogIn from "../../Shared/SocialLogIn/SocialLogIn";
import Loading from "../../Shared/Spinner/Spinner";

const Register = () => {

  const navigate = useNavigate()
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});

  const [agree, setAgree] = useState(false)

  

  const handleCreateUser=(e)=>{
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    createUserWithEmailAndPassword(email, password)
  }

  let errorElement;

  if (error) {
    errorElement = <div>
    <p>Error: {error.message}</p>
  </div>
  }
  if (loading) {
    return <Loading></Loading>
  }
  if(user){
    navigate('/')
  }

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
            <Form onSubmit={handleCreateUser}>
              {errorElement}
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
                <Form.Control type="email" name="email" placeholder="Your Email" required />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formGridAddress2">
                <Form.Label>Password *</Form.Label>
                <Form.Control type="password" name="password" placeholder="Password" required />
              </Form.Group>

              <Form.Group className="mb-3" id="formGridCheckbox">
                <Form.Check
                onClick={()=>setAgree(!agree)} className={`mx-2${agree ? 'text-primary':'text-danger'}`}
                  type="checkbox"
                  label="Accepts all terms and conditions"
                />
              </Form.Group>
                <p>Already user ? <Link className="text-decoration-none" to={'/login'}>Log In</Link> </p>
              <Button disabled={!agree} variant="dark" type="submit">
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
