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
import Product from "../Product/Product";
import axios from "axios";
import { BiLogOutCircle } from "react-icons/bi";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { FiActivity } from "react-icons/fi";

export default function Home({ setProductId, userInfo }) {
  const [profile, setProfile] = useState(false);
  const [page, setPage] = useState(1);
  const [numperOfProducts, setNumperOfProducts] = useState();
  const [home, setHome] = useState(true);
  const [products, setProducts] = useState();
  const [details, setDetails] = useState(false);
  const [id, setId] = useState();
  const [search, setSearch] = useState();
  const [searchStatus, setSearchStatus] = useState(false);
  const [category, setCategory] = useState("");
  const [categoryOfProduct, setCategoryOfProduct] = useState();
  const [categoryStatus, setCategoryStatus] = useState(false);

  // ----------------------------------------------

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const state = useSelector((state) => {
    return {
      isLoggedIn: state.loginReducer.isLoggedIn,
    };
  });

  // ----------------------------------------------

  const getAllProductsCategory = () => {
    if (category !== "Category" && category !== "undefined") {
      axios
        .get(`http://localhost:5000/products/search_2?type=${category}`)
        .then((res) => {
          setCategoryOfProduct(res.data.result);
          setProfile(false);
          setDetails(false);
          setCategoryStatus(true);
        })
        .catch((err) => {});
    }
  };

  // ----------------------------------------------

  useEffect(() => {
    getAllProductsCategory();
  }, [category]);

  // ----------------------------------------------

  useEffect(() => {
    const getAllProducts = () => {
      axios
        .get("http://localhost:5000/products/")
        .then((res) => {
          setNumperOfProducts(res.data.result.length);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getAllProducts();
  }, []);

  // ----------------------------------------------

  useEffect(() => {
    axios
      .get(`http://localhost:5000/products/search?page=${page}`)
      .then((res) => {
        setProducts(res.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [state.isLoggedIn, page]);

  // ----------------------------------------------

  // to add to fav
  const addToFavorite = (id) => {
    axios
      .post("http://localhost:5000/favorite/", {
        productId: id,
        userId: userInfo.userId,
      })
      .then((res) => {})
      .catch((err) => {});
  };

  // ----------------------------------------------

  useEffect(() => {
    axios
      .get(`http://localhost:5000/favorite/get-fav/${userInfo.userId}`)
      .then((res) => {})
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // ----------------------------------------------

  return (
    <>
      <Navbar
        bg="#13B2A7"
        expand="lg"
        style={{
          backgroundColor: "#13B2A7",
          width: "100%",
          boxShadow: "0 0 10px #0e5a55",
        }}
      >
        <Container fluid className="d-flex flex-row gap-5">
          <Navbar.Brand
            className="navBrand"
            style={{ color: "white", textShadow: "0 0 5px" }}
          >
            AMUR
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link
                onClick={() => {
                  setHome(true);
                  setDetails(false);
                  setCategoryStatus(false);
                  setProfile(false);
                }}
                style={{
                  color: "white",
                  fontSize: "1.3rem",
                  marginLeft: "2vw",
                  fontWeight: "700",
                  marginTop: "1vh",
                }}
              >
                <FiActivity style={{ marginRight: "0.5vw" }} />
                Home
              </Nav.Link>
              <Nav.Link
                style={{
                  color: "white",
                  fontSize: "1.3rem",
                  marginLeft: "2vw",
                  fontWeight: "700",
                  marginTop: "1vh",
                }}
                onClick={() => {
                  setProfile(true);
                  setHome(false);
                  setDetails(false);
                  setCategoryStatus(false);
                  setSearchStatus(false);
                }}
              >
                <FiActivity style={{ marginRight: "0.5vw" }} />
                Profile
              </Nav.Link>
              <NavDropdown
                style={{
                  color: "white",
                  fontSize: "1.3rem",
                  marginLeft: "2vw",
                  fontWeight: "700",
                  marginTop: "1vh",
                }}
                title="Category"
                id="navbarScrollingDropdown"
                onClick={(e) => {
                  setCategory(e.target.innerText);
                  setHome(false);
                }}
              >
                <NavDropdown.Item>Car</NavDropdown.Item>
                <NavDropdown.Item>phone</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item disabled>Something else</NavDropdown.Item>
              </NavDropdown>
              <Form
                className="d-flex"
                style={{
                  marginLeft: "10vw",
                  height: "7vh",
                  width: "60vh",
                  marginTop: "1vh",
                  marginRight: "5vw",
                }}
              >
                <FormControl
                  onChange={(e) => {
                    e.preventDefault();
                    axios
                      .get(
                        `http://localhost:5000/products/search_1?name=${e.target.value}`
                      )
                      .then((res) => {
                        setSearch(res.data.result);
                        setSearchStatus(true);
                        setHome(false);
                        setProfile(false);
                        setDetails(false);
                      })
                      .catch((err) => {
                        console.log(err);
                      });
                  }}
                  type="search"
                  placeholder="Search"
                  className="me-2 col"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
              <Nav.Link
                style={{
                  color: "white",
                  fontSize: "1.3rem",
                  fontWeight: "700",
                  marginTop: "1vh",
                }}
                onClick={() => {
                  dispatch(logout());
                  localStorage.clear();
                  navigate("/");
                }}
              >
                <BiLogOutCircle
                  style={{ marginTop: "-0.5vh", marginRight: "0.5vw" }}
                />
                Log Out
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {home ? (
        <Container className="d-flex flex-row flex-wrap justify-content-center gap-4 mt-4">
          {products &&
            products.map((product, i) => (
              <>
                <Card
                  style={{
                    width: "20rem",
                    height: "26rem",
                  }}
                  class="col"
                >
                  <Card.Img
                    variant="top w-100 h-75"
                    src={product.image && product.image}
                  />

                  <Card.Body className="cardBody">
                    <Card.Title className="cardTitle">
                      {product.productName && product.productName}
                      <BsFillSuitHeartFill
                        className="love"
                        onClick={() => {
                          addToFavorite(product.id);
                        }}
                      />
                    </Card.Title>
                    <Card.Text>
                      {product.description && product.description}
                    </Card.Text>
                    <button
                      type="button"
                      class="btn btn-outline-dark"
                      onClick={() => {
                        setProductId(product.id);
                        setId(product.id);
                        setHome(false);
                        setDetails(true);
                      }}
                    >
                      Details
                    </button>
                  </Card.Body>
                </Card>
              </>
            ))}
        </Container>
      ) : details ? (
        <Product id={id} userInfo={userInfo} />
      ) : searchStatus ? (
        <Container className="d-flex flex-row flex-wrap justify-content-center gap-4 mt-4">
          {search &&
            search.map((product) => (
              <>
                <Card
                  style={{
                    width: "20rem",
                    height: "26rem",
                    marginBottom: "2vh",
                  }}
                  class="col"
                >
                  <Card.Img
                    variant="top w-100 h-75"
                    src={product.image && product.image}
                  />

                  <Card.Body className="cardBody">
                    <Card.Title className="cardTitle">
                      {product.productName && product.productName}
                      <BsFillSuitHeartFill
                        className="love"
                        onClick={() => {
                          addToFavorite(product.id);
                        }}
                      />
                    </Card.Title>
                    <Card.Text>
                      {product.description && product.description}
                    </Card.Text>
                    <button
                      type="button"
                      class="btn btn-outline-dark"
                      onClick={() => {
                        setProductId(product.id);
                        setId(product.id);
                        setHome(false);
                        setDetails(true);
                      }}
                    >
                      Details
                    </button>
                  </Card.Body>
                </Card>
              </>
            ))}
        </Container>
      ) : categoryStatus ? (
        <Container className="d-flex flex-row flex-wrap justify-content-center gap-4 mt-4">
          {categoryOfProduct &&
            categoryOfProduct.map((product) => (
              <>
                <Card
                  style={{
                    width: "20rem",
                    height: "26rem",
                    marginBottom: "2vh",
                  }}
                  class="col"
                >
                  <Card.Img
                    variant="top w-100 h-75"
                    src={product.image && product.image}
                  />

                  <Card.Body className="cardBody">
                    <Card.Title className="cardTitle">
                      {product.productName && product.productName}
                      <BsFillSuitHeartFill
                        className="love"
                        onClick={() => {
                          addToFavorite(product.id);
                        }}
                      />
                    </Card.Title>
                    <Card.Text>
                      {product.description && product.description}
                    </Card.Text>
                    <button
                      type="button"
                      class="btn btn-outline-dark"
                      onClick={() => {
                        setProductId(product.id);
                        setId(product.id);
                        setHome(false);
                        setDetails(true);
                      }}
                    >
                      Details
                    </button>
                  </Card.Body>
                </Card>
              </>
            ))}
        </Container>
      ) : profile ? (
        <Profile
          userInfo={userInfo}
          setId={setId}
          setHome={setHome}
          setDetails={setDetails}
        />
      ) : (
        <Home />
      )}
      {home ? (
        <Container className="d-flex flex-row mt-5 justify-content-center">
          <nav aria-label="Page navigation example">
            <ul class="pagination">
              <li
                class="page-item page-link"
                onClick={() => {
                  page > 1
                    ? setPage((page) => page - 1)
                    : setPage((page) => Math.ceil(numperOfProducts / 8));
                }}
              >
                <span aria-hidden="true">&laquo;</span>
              </li>
              <li class="page-item page-link">{page}</li>

              <li
                class="page-item page-link"
                onClick={() => {
                  page * 8 < numperOfProducts
                    ? setPage((page) => page + 1)
                    : setPage(1);
                }}
              >
                <span aria-hidden="true">&raquo;</span>
              </li>
            </ul>
          </nav>
        </Container>
      ) : (
        <></>
      )}
    </>
  );
}
