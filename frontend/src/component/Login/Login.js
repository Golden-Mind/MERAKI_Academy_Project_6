import "./Login.css";
import React, { useEffect } from "react";
import Form from "react-bootstrap/Form";
import { Col, Row, Alert } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import login from "./login.gif";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
// import GoogleLogin from "react-google-login";



function Login({ setUserInfo }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const state = useSelector((state) => {
    return {
      token: state.loginReducer.token,
      isLoggedIn: state.loginReducer.isLoggedIn,
    };
  });

  const handelFailure = (result) => {
    console.log(result);
  };

  const handleLogin = (googleData) => {
    dispatch(login(googleData.tokenId));
    setUserInfo({
      userId: googleData.profileObj.googleId,
      firstName: googleData.profileObj.givenName,
      lastName: googleData.profileObj.familyName,
      email: googleData.profileObj.email,
      image: googleData.profileObj.imageUrl,
      role: 1,
    });

    navigate("/home");
  };

  //==============================================

  const loginUser = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/login/", {
        email,
        password,
      });
      if (res.data.success) {
        setMessage("");
        localStorage.setItem("token", res.data.token);
        dispatch(login(res.data.token));
        setUserInfo(res.data.payload);
        console.log(res.data.token);
      } else throw Error;
    } catch (error) {
      if (error.response && error.response.data) {
        return setMessage(error.response.data.message);
      }
      setMessage("Error happened while Login, please try again");
    }
  };

  //==============================================

  useEffect(() => {
    if (state.isLoggedIn) {
      navigate("/home");
    }
  });

  //==============================================

  return (
    <>
      <div className="divLogin">
        <Container
          fluid
          className="containerLogin d-flex flex-row flex-wrap gap-5 justify-content-center"
        >
          <Form className="form col-10 col-sm-6 col-md-4 col-lg-4 col-xl-4 shadow mb-5 bg-body p-5" onSubmit={loginUser}>
            <h1 className="loginHeader">LOGIN</h1>
            <p>Doesn't have an account yet? <Link to="/user">Sign Up</Link></p>
            <br />
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Row>
                <Col>
                  <Form.Label className="lableEmail col-12">Email:</Form.Label>
                  <Form.Control
                    className="inputEmail"
                    type="email"
                    placeholder="Enter Email"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </Col>
              </Row>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Row>
                <Col>
                  <Form.Label className="lableEmail col-12">
                    Password:
                  </Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </Col>
              </Row>
            </Form.Group>
            <button className="btnLogin">
              Login
            </button>
            {status
              ? message && (
                  <Alert
                    variant="success"
                    className="successMessageLogin"
                  ></Alert>
                )
              : message && (
                  <Alert variant="danger" className="errorMessageLogin"></Alert>
                )}
          </Form>
          <img
            src={login}
            className="loginImg col-10 col-sm-6 col-md-5 col-lg-5 col-xl-5 mt-3 p-3"
          />
        </Container>
      </div>
    </>
  );
}

export default Login;
