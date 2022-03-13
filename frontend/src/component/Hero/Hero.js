import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { Nav, Button, Navbar, NavDropdown, FormControl } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import "./hero.css";
import background from "./background.jpg";
import Ecommerce from "./Ecommerce.gif"
import about from "./Business Plan.gif";
import home from "./home.jpg";
import Modal from "react-bootstrap/Modal";
import emailjs from "@emailjs/browser";
const Hero = () => {
  const form = useRef();
  const [show, setShow] = useState(false);
  const [feedback, setFeedback] = useState({});
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();
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
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <Navbar bg="light" expand="lg" >
        <Container fluid className="hero-nav"> 
          <Navbar.Brand href="#">Amore</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
              defaultActiveKey="/home"
            >
              <Nav.Item>
                <Nav.Link href="#home">Active</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#about">About</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#need">Need</Nav.Link>
              </Nav.Item>
            </Nav>
            <Form className="d-flex">
              <Nav.Link  onClick={() => {
                      navigate("/login");
                    }}>Log in</Nav.Link>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="d-flex justify-content-between ">
      <div className="d-flex justify-content-center align-items-center hero-title">
        <h1 className="fs-1">Amore</h1>
      </div>
      <div className="d-flex justify-content-end backHero col-10 col-sm-6 col-md-4 col-lg-4 col-xl-4 ">
      <img src={Ecommerce} alt="background"  id="home" />
      </div>
      </div>
      <div className="container-fluid "  id="about">
        <h1 className="text-center about" > About </h1>
        <div
          className="d-flex flex-wrap justify-content-center
 "
         
        >
          <img
            src={about}
            alt="about"
            className="col-10 col-sm-6 col-md-4 col-lg-4 col-xl-4 about-img
"
          />
          <p
            className="about-p col-10 col-sm-6 col-md-4 col-lg-4 col-xl-4 
"
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum
          </p>
        </div>
      </div>
      <h1 className="text-center about" id="need">
        {" "}
        If You Need{" "}
      </h1>
      <div
        className="container-fluid d-flex flex-row flex-wrap gap-3 justify-content-center  aboutt
 "
      >
        <div className="card c col-10 col-sm-6 col-md-4 col-lg-4 col-xl-4">
          <div className=" div-need">
            <img src={home} className="card-img-top need" alt="home" 
            onClick={() => {
              navigate("/login")
            }} />
          </div>
          <div className="card-body">
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        <div className="card c col-10 col-sm-6 col-md-4 col-lg-4 col-xl-4 ">
        <div className=" div-need">
            <img src={home} className="card-img-top need" alt="home" 
            onClick={() => {
              navigate("/login")
            }}
            />
          </div>
          <div className="card-body">
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        <div className="card c col-10 col-sm-6 col-md-4 col-lg-4 col-xl-4">
        <div className=" div-need">
            <img src={home} className="card-img-top need" alt="home" 
            onClick={() => {
              navigate("/login")
            }}
            />
          </div>
          <div className="card-body">
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
      <div className="fotter foot-name ">
        <h2 className="hed2">Amore</h2>
        <div className=" d-flex flex-row justify-content-between hed2">
          <p
            className="foot-p col-10 col-sm-6 col-md-4 col-lg-4 col-xl-4 
"
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
          </p>
          <div className="link-foot">
            <a href="#home"> <p> Active </p></a>
            <a href="#about"> <p> About </p></a>
            <a href="#need"> <p> Need </p></a>

         
         
            </div>
        </div>
      </div>
      <div className="d-flex justify-content-end feed">
        <Button variant="primary" onClick={handleShow}>
          Contact Us
        </Button>
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
