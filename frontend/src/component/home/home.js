import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Card,
  Nav,
  Container,
  Form,
  Navbar,
  NavDropdown,
  FormControl,
} from "react-bootstrap";
import "../home/home.css";
import Profile from "../profile/Profile";
import { logout } from "../../reducer/login/index";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

export default function Home() {
  const [home, setHome] = useState(true);
  const [profile, setProfile] = useState(false);
  const [page, setPage] = useState();
  const navigate = useNavigate();
  const [category, setCategory] = useState("Category");
  const dispatch = useDispatch();
  const [categoryOfProduct,setCategoryOfProduct] = useState();
  // of category 
  const getAllProductsCategory = () => {
    axios
      .get(`http://localhost:5000/products/search_2?type=${category}`)
      .then((res) => {
        setCategoryOfProduct(res.data.result);
        console.log(res.data.result);
      })
      .catch((err) => {});
  };
  const state = useSelector((state) => {
    return {
      isLoggedIn: state.loginReducer.isLoggedIn,
    };
  });
  useEffect(() => {
    axios.get("");
  }, []);
  // to add to fav 
  const addFav = (req,res) => {
    axios
        .post("http://localhost:5000/favorite/")
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {});
  }
  return (
    <>
      <Container>
        <Container style={{ marginTop: "2%" }}>
          <Navbar
            bg="#13B2A7"
            expand="lg"
            style={{ backgroundColor: "#13B2A7", width: "100%" }}
          >
            <Container fluid>
              <Navbar.Brand style={{ color: "white" }}>
                Amore
              </Navbar.Brand>
              <Navbar.Toggle
                aria-controls="navbarScroll"
                style={{ color: "white" }}
              />
              <Navbar.Collapse id="navbarScroll" style={{ color: "white" }}>
                <Nav
                  className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: "100px" }}
                  navbarScroll
                >
                  <Nav.Link
                    onClick={() => {
                      setHome(true);
                    }}
                    style={{ color: "white" }}
                  >
                    Home
                  </Nav.Link>
                  <Nav.Link
                    style={{ color: "white" }}
                    onClick={() => {
                      setProfile(true);
                      setHome(false);
                    }}
                  >
                    Profile
                  </Nav.Link>
                  <NavDropdown
                    title="Category"
                    id="navbarScrollingDropdown"
                    onChange={(e) => {
                      setCategory(`${e.target.value}`);
                    }}
                    style={{ backgroundColor: "#13B2A7" }}
                  >
                    <NavDropdown.Item href="#action3">Car</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Home
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link
                    style={{ color: "white" }}
                    onClick={() => {
                      dispatch(logout());
                      localStorage.clear();
                      navigate("/");
                    }}
                  >
                    Log Out
                  </Nav.Link>
                  {/* for test favoraite */}
                  <Nav.Link
                    style={{ color: "white" }}
                    onClick={() => {
                      navigate("/fav");
                    }}
                  >
                   favoraite
                  </Nav.Link>
                </Nav>
                <Form className="d-flex">
                  <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          {home ? (
            <Container className="row row-cols-4">
              <Card
                style={{
                  width: "18rem",
                  height: "25rem",
                  marginTop: "2%",
                  marginLeft: "3%",
                }}
                class="col"
              >
                <Card.Img
                  variant="top"
                  src="https://images.autodaily.com.au/2022/02/bmw_3_series_facelift_m_performance_5.jpg"
                />

                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
              <Card
                style={{
                  width: "18rem",
                  height: "25rem",
                  marginTop: "2%",
                  marginLeft: "3%",
                }}
                class="col"
              >
                <Card.Img
                  variant="top"
                  src="https://images.autodaily.com.au/2022/02/bmw_3_series_facelift_m_performance_5.jpg"
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
              <Card
                style={{
                  width: "18rem",
                  height: "25rem",
                  marginTop: "2%",
                  marginLeft: "3%",
                }}
                class="col"
              >
                <Card.Img
                  variant="top"
                  src="https://images.autodaily.com.au/2022/02/bmw_3_series_facelift_m_performance_5.jpg"
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
              <Card
                style={{
                  width: "18rem",
                  height: "25rem",
                  marginTop: "2%",
                  marginLeft: "3%",
                }}
                class="col"
              >
                <Card.Img
                  variant="top"
                  src="https://images.autodaily.com.au/2022/02/bmw_3_series_facelift_m_performance_5.jpg"
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Container>
          ) : (
            <Container>
              <Profile />
            </Container>
          )}
        </Container>
        {home ? (
          <Container className="d-flex flex-row justify-content-center">
            <nav aria-label="Page navigation example">
              <ul class="pagination">
                <li class="page-item">
                  <a class="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    1
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    2
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    3
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                  </a>
                </li>
              </ul>
            </nav>
          </Container>
        ) : (
          <></>
        )}
      </Container>
    </>
  );
}
