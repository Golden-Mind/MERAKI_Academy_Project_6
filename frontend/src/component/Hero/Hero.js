import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { Nav, Button, Navbar, NavDropdown, FormControl } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import "./hero.css";
import background from "./img/background-image.jpg";
import Ecommerce from "./img/Ecommerce.gif";
import about from "./img/BusinessPlan.gif";
import home from "./img/home.jpg";
import houseNeed from "./img/house-need.jpg";
import carNeed from "./img/car-need.jpg";
import phoneNeed from "./img/phone-need.jpg";
import Modal from "react-bootstrap/Modal";
import emailjs from "@emailjs/browser";
import { FiActivity } from "react-icons/fi";
import { BiLogInCircle } from "react-icons/bi";

const Hero = () => {
  const [show, setShow] = useState(false);
  const [feedback, setFeedback] = useState({});
  const form = useRef();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();

  // ------------------------------------------------------

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_52xer57",
        "template_3qy35xj",
        feedback,
        "ANlTbm_bAOim6gpyh"
      )
      .then(
        (result) => {
          setFeedback({});
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  // ------------------------------------------------------

  return (
    <>
      <Navbar expand="lg" className="Navbar">
        <Container fluid>
          <Navbar.Brand
            style={{
              color: "white",
              fontWeight: "bolder",
              fontSize: "2rem",
              marginLeft: "4vw",
              textShadow: "0 0 5px",
            }}
          >
            AMUR
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
              defaultActiveKey="/home"
            >
              <Nav.Item>
                <Nav.Link
                  href="#home"
                  style={{
                    color: "white",
                    fontSize: "1.5rem",
                    marginLeft: "4vw",
                    marginTop: "0.5vw",
                  }}
                >
                  <FiActivity style={{ marginRight: "0.5vw" }} />
                  Active
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  href="#about"
                  style={{
                    color: "white",
                    fontSize: "1.5rem",
                    marginLeft: "4vw",
                    marginTop: "0.5vw",
                  }}
                >
                  <FiActivity style={{ marginRight: "0.5vw" }} />
                  About
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  href="#need"
                  style={{
                    color: "white",
                    fontSize: "1.5rem",
                    marginLeft: "4vw",
                    marginTop: "0.5vw",
                  }}
                >
                  <FiActivity style={{ marginRight: "0.5vw" }} />
                  Need
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <Form className="d-flex">
              <Nav.Link
                className="login"
                onClick={() => {
                  navigate("/login");
                }}
              >
                <BiLogInCircle
                  style={{ marginRight: "0.5vw", marginTop: "-0.5vw" }}
                />
                Log In
              </Nav.Link>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="divBackground d-flex justify-content-between">
        <div className="d-flex justify-content-center align-items-center hero-title">
          <p className="Amur">AMUR</p>
        </div>
        <div className="d-flex justify-content-end backHero ">
          <img
            src={background}
            alt="background"
            id="home"
            className="col-10 col-sm-12 col-md-12 col-lg-8 col-xl-12"
          />
        </div>
      </div>

      <div
        id="about"
        className="divAbout d-flex flex-wrap justify-content-center gap-5"
      >
        <img
          src={about}
          alt="about"
          className="col-10 col-sm-6 col-md-4 col-lg-4 col-xl-4 about-img"
        />
        <p className="about-p col-10 col-sm-8 col-md-8 col-lg-8 col-xl-6">
          <h1 className="aboutAmur text-center"> ABOUT AMUR : </h1>
          Amur is one of the websites specialized in the field of classified
          ads, which enables users, whether they are sellers or buyers, to buy
          and sell various goods, products and services within the shortest
          possible time and with minimal effort, whether the condition of those
          products is new or used. In order to make it easier for the user to
          find what he is looking for or advertise what he wants to sell, there
          are main and sub-sections to display and browse the various types of
          goods and services traded between them and to allow direct
          communication between them with ease.
        </p>
      </div>

      <h1 className="text-center about" id="need">
        {" "}
        IF YOU NEED ..!{" "}
      </h1>
      <div className="container-fluid d-flex flex-row flex-wrap gap-3 justify-content-center divNeed">
        <div className="card c col-10 col-sm-6 col-md-4 col-lg-4 col-xl-4">
          <div className=" div-need">
            <img
              src={houseNeed}
              className="card-img-top need"
              alt="home"
              onClick={() => {
                navigate("/login");
              }}
            />
          </div>
          <div className="card-body">
            <p className="card-text">
            There are some beautiful homes for sale or rent, if you like
            </p>
          </div>
        </div>
        <div className="card c col-10 col-sm-6 col-md-4 col-lg-4 col-xl-4 ">
          <div className=" div-need">
            <img
              src={carNeed}
              className="card-img-top need"
              alt="home"
              onClick={() => {
                navigate("/login");
              }}
            />
          </div>
          <div className="card-body">
            <p className="card-text">
            There are some nice cars for sale or rent, if you like
            </p>
          </div>
        </div>
        <div className="card c col-10 col-sm-6 col-md-4 col-lg-4 col-xl-4">
          <div className=" div-need">
            <img
              src={phoneNeed}
              className="card-img-top need"
              alt="home"
              onClick={() => {
                navigate("/login");
              }}
            />
          </div>
          <div className="card-body">
            <p className="card-text">
            There are some nice phones for sale, if you want to
            </p>
          </div>
        </div>
      </div>

      <div className="divFotter">
        <div className="hed2">
          <h2>AMUR</h2>
          <div>
            <p className="foot-p">
              website that helps people, whether they are sellers or buyers, to
              search for various goods, products and services..
              <p className="foot-p">
                Building by Beesan Ghaith, Ruba Alnadi and Abdallah almomani
                under the supervision of Meraki Academy..
              </p>
            </p>
          </div>
        </div>
        <div className="linkFoot">
          <a href="#home">
            {" "}
            <p> Active </p>
          </a>
          <a href="#about">
            {" "}
            <p> About </p>
          </a>
          <a href="#need">
            {" "}
            <p> Need </p>
          </a>
        </div>
      </div>
      <div className="d-flex flex-row footEnd">
        <div className="hed2" key={"foot-end"}>
          <p>Copyright &copy; 2022 spacingtech rights reserved</p>
        </div>
        <div className="feed">
          <Button variant="primary" onClick={handleShow}>
            Contact Us
          </Button>
        </div>
      </div>
      <Modal
        ref={form}
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Write Any Feedback</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Control
              as="textarea"
              rows="3"
              name="address"
              onChange={(e) => {
                setFeedback({ name: "sender", message: e.target.value });
              }}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={sendEmail}>
            Send
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Hero;
