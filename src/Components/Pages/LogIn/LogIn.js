import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import SocialLogIn from "../../Shared/SocialLogIn/SocialLogIn";
import Loading from "../../Shared/Spinner/Spinner";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LogIn = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);

  const emailRef = useRef("");

  const navigate = useNavigate();

  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  let errorElement;

  if (error) {
    errorElement = (
      <div>
        <p className="text-danger">Error: {error.message}</p>
      </div>
    );
  }

  if (loading) {
    return <Loading></Loading>;
  }

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInWithEmailAndPassword(email, password);
  };

  const handleResetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast("Reset password sent to your Email ");
    } else {
      toast("Please enter your email address");
    }
  };

  if (user) {
    navigate(from, { replace: true });
  }

  return (
    <>
      <div className="container my-5 p-5 shadow-lg rounded-3">
        <h1 className="text-center mb-3 ">Log In</h1>
        <div className="row g-5">
          <div className="col-12 col-md-5">
            <img
              className="img-fluid rounded-3 "
              src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif"
              alt=""
            />
            <h1 className="text-center">Welcome Back</h1>
          </div>
          <div className="col-12 col-md-7">
            <div className=" p-4">
              <Form onSubmit={handleSubmitForm}>
                {errorElement}
                <Form.Group className="mb-3" controlId="formGroupEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    ref={emailRef}
                    name="email"
                    placeholder="Enter email"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    placeholder="Password"
                  />
                </Form.Group>

                <Button variant="dark" type="submit">
                  Log In
                </Button>
              </Form>
              <p>
                New to PhotoPedia ?{" "}
                <Link className="text-decoration-none" to="/register">
                  Register here
                </Link>{" "}
              </p>
              <p>
                Forget Your password ?{" "}
                <button
                  onClick={handleResetPassword}
                  className="btn btn-link text-decoration-none"
                >
                  Reset Password
                </button>{" "}
              </p>
              <ToastContainer />
              <SocialLogIn></SocialLogIn>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogIn;
