import "./Login.css";
import React from "react";
import Form from "react-bootstrap/Form";
import { Button, Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";

function Login() {
  return (
    <>
      <Container
        fluid
        className="d-flex flex-row flex-wrap gap-2 justify-content-center"
      >
        <Form className="form col-10 col-sm-6 col-md-4 col-lg-4 col-xl-4 bg-light border p-3">
          <h1>LOGIN</h1>
          <br/>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Row>
              <Col>
                <Form.Label className="lableEmail col-6">Email</Form.Label>
                {/* </Col>
              <Col> */}
                <Form.Control
                  className="inputEmail"
                  type="email"
                  placeholder="Enter Email"
                />
              </Col>
            </Row>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Row>
              <Col>
                <Form.Label>Password</Form.Label>
                {/* </Col>
            <Col> */}{" "}
                <Form.Control type="password" placeholder="Password" />
              </Col>
            </Row>
          </Form.Group>
          <Button className="btnLogin" variant="outline-primary" type="submit">
            Login
          </Button>
        </Form>
      </Container>
    </>
  );
}

export default Login;
