import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CheckOut = () => {
    const [agree, setAgree] = useState(false)
  const handleSuccess = (e) => {
    e.preventDefault();
    toast("Thank you .. Successfully submited");
  };
  return (
    <>
      <div className="container mb-5 mt-3 p-5">
        <h1 className="text-center mb-5 ">Check Out </h1>
        <div className="row g-5">
          <div className="col-12 col-md-5">
            <img
              className="img-fluid mt-3 rounded-3 shadow-lg"
              src="https://media.giphy.com/media/SpopD7IQN2gK3qN4jS/giphy.gif"
              alt=""
            />
          </div>
          <div className="col-12 col-md-7">
            <Form onSubmit={handleSuccess}>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="text" placeholder="First Name" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="text" placeholder="Last Name" />
                </Form.Group>
              </Row>

              <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Address</Form.Label>
                <Form.Control placeholder="1234 Main St" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formGridAddress2">
                <Form.Label>Address 2</Form.Label>
                <Form.Control placeholder="Apartment, studio, or floor" />
              </Form.Group>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label>City</Form.Label>
                  <Form.Control />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>State</Form.Label>
                  <Form.Select defaultValue="Choose...">
                    <option>Choose...</option>
                    <option>...</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                  <Form.Label>Zip</Form.Label>
                  <Form.Control />
                </Form.Group>
              </Row>

              <Form.Group className="mb-3" id="formGridCheckbox">
                <Form.Check onClick={()=>setAgree(!agree)} type="checkbox" label="All informations are true" />
              </Form.Group>

              <Button disabled={!agree} variant="dark" type="submit">
                Submit
              </Button>
            </Form>
            <ToastContainer />
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckOut;
