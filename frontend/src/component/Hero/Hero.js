import React from "react";
import Container from "react-bootstrap/Container";
import {Nav,Navbar} from "react-bootstrap";
import "./hero.css";
import background from "./background.jpg";
import about from "./Business Plan.gif";
import home from "./home.jpg";

const Hero = () => {
  return (
    <>
      <div className="position-relative">
        <Nav variant="pills" defaultActiveKey="/home">
          <Nav.Item>
            <Nav.Link href="#home">Active</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#about">About</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#need">
              Need
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
      <img src={background} alt="background" width="100%" id="home" />
      <div className="container-fluid ">
        <h1 className="text-center about"> About </h1>
        <div
          className="d-flex flex-wrap justify-content-center
 "
          id="about"
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
      <h1 className="text-center about"> If You Need </h1>
      <div
        className="container-fluid d-flex flex-row flex-wrap gap-3 justify-content-center  aboutt
 "
 id="need"
      >
        <div className="card c col-10 col-sm-6 col-md-4 col-lg-4 col-xl-4">
          <div className="bg-image hover-zoom">
            <img src={home} class="card-img-top " alt="home" />
          </div>
          <div className="card-body">
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        <div className="card c col-10 col-sm-6 col-md-4 col-lg-4 col-xl-4 ">
          <img src={home} className="card-img-top" alt="" />
          <div className="card-body">
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        <div className="card c col-10 col-sm-6 col-md-4 col-lg-4 col-xl-4">
          <img src={home} className="card-img-top " alt="" />
          <div className="card-body">
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
      <div className="fotter">
        <div className="container-fluid d-flex justify-content-start">
        <h2 className="foot-name">Amore</h2>
        <p
            className="about-p col-10 col-sm-6 col-md-4 col-lg-4 col-xl-4 
"
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
          </p>
        </div>
          <button type="button" class="btn btn-lg btn-danger" data-bs-toggle="popover" title="Popover title" data-bs-content="And here's some amazing content. It's very engaging. Right?">Click to toggle popover</button>
      </div>
    </>
  );
};

export default Hero;
