import "./Register.css";
import React, { useState } from "react";
import { Container, Form, Row, Col, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import SignUp from "./img/signup.gif";
import axios from "axios";

function Register() {
  const [message, setMessage] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState(false);
  const role_id = 1;

  // =======================================

  const state = useSelector((state) => {
    return {
      LoggedIn: state.loginReducer.isLoggedIn,
    };
  });

  const navigate = useNavigate();

  //=========================================

  const addUserInfo = async (e) => {
    e.preventDefault();
    if (firstName && lastName && email && password) {
      try {
        const result = await axios.post("http://localhost:5000/user", {
          firstName,
          lastName,
          email,
          password,
          role_id,
        });
        if (result.data.success) {
          setStatus(true);
          setMessage("The user has been created successfully");
        } else throw Error;
      } catch (error) {
        setStatus(false);
        if (error.response && error.response.data) {
          return setMessage(error.response.data.message);
        }
        setMessage("Error happened while register, please try again");
      }
    }
  };

  //=======================================

  return (
    <>
      <div className="divRegister">
        <Container
          fluid
          className="containerRegister d-flex flex-row flex-wrap justify-content-center"
        >
          <img
            src={SignUp}
            className="RegisterImg col-10 col-sm-6 col-md-5 col-lg-5 col-xl-5 mt-3 p-3 w-50"
          />
          <Form
            className="formRegister col-10 col-sm-6 col-md-4 col-lg-4 col-xl-4 shadow mb-5 bg-body pb-5 pt-3"
            onSubmit={addUserInfo}
          >
            <h1 className="RegisterHeader">SIGN UP</h1>
            <p>
              Already have an account?
              <br />
              <Link to="/login" className="signIn">
                Sign In
              </Link>
            </p>
            <Form.Group className="mb-3 pt-2">
              <Form.Label className="lableEmail col-12">First Name:</Form.Label>
              <Form.Control
                className="inputEmail"
                placeholder="Enter First Name"
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="lableEmail col-12">Last Name:</Form.Label>
              <Form.Control
                className="inputEmail"
                placeholder="Enter Last Name"
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="lableEmail col-12">Email:</Form.Label>
              <Form.Control
                className="inputEmail"
                type="email"
                placeholder="Enter Email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="lableEmail col-12">Password:</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </Form.Group>
            <button className="btnRegister">Sign Up</button>
            {status
              ? message && (
                  <Alert variant="success" className="successMessageLogin mt-2">
                    {message}
                  </Alert>
                )
              : message && (
                  <Alert
                    variant="danger"
                    className="errorMessageLogin mb-2 mt-2"
                  >
                    {message}
                  </Alert>
                )}
          </Form>
        </Container>
      </div>
    </>
  );
}

export default Register;
