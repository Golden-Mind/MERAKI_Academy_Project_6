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
  console.log(numperOfProducts);
  const navigate = useNavigate();
  console.log(home);
  const [category, setCategory] = useState("");
  const [categoryStatus, setCategoryStatus] = useState(false);
  console.log(category);
  const dispatch = useDispatch();
  const [categoryOfProduct, setCategoryOfProduct] = useState();
  // of category
  const getAllProductsCategory = () => {
    if (category !== "Category" && category !== "undefined") {
      axios
        .get(`http://localhost:5000/products/search_2?type=${category}`)
        .then((res) => {
          setCategoryOfProduct(res.data.result);

          setProfile(false);
          setDetails(false);
          setCategoryStatus(true);
          console.log(res.data.result);
        })
        .catch((err) => {});
    }
  };
  const state = useSelector((state) => {
    return {
      isLoggedIn: state.loginReducer.isLoggedIn,
    };
  });
  useEffect(() => {
    getAllProductsCategory();
  }, [category]);
  //=====================================
  useEffect(() => {
    const getAllProducts = () => {
      axios
        .get("http://localhost:5000/products/")
        .then((res) => {
          console.log(res.data);
          setNumperOfProducts(res.data.result.length);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getAllProducts();
  }, []);
  //=====================================
  useEffect(() => {
    axios
      .get(`http://localhost:5000/products/search?page=${page}`)
      .then((res) => {
        setProducts(res.data.result);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [state.isLoggedIn, page]);

  // to add to fav
  const addFav = (req, res) => {
    axios
      .post("http://localhost:5000/favorite/")
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {});
  };

  return (
    <>
      <Navbar
        bg="#13B2A7"
        expand="lg"
        style={{
          backgroundColor: "#13B2A7",
          width: "100%",
          fontFamily: "cursive",
          fontSize: "1.3rem",
        }}
      >
        <Container fluid className="d-flex flex-row gap-5">
          <Navbar.Brand
            style={{ color: "white", fontSize: "1.5rem", fontWeight: "bolder" }}
          >
            Amore
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
                style={{ color: "white" }}
              >
                Home
              </Nav.Link>
              <Nav.Link
                style={{ color: "white" }}
                onClick={() => {
                  setProfile(true);
                  setHome(false);
                  setDetails(false);
                  setCategoryStatus(false);
                }}
              >
                Profile
              </Nav.Link>
              <NavDropdown
                title="Category"
                id="navbarScrollingDropdown"
                onClick={(e) => {
                  console.log(e.target.innerText);
                  setCategory(e.target.innerText);
                  setHome(false);
                }}
                style={{ backgroundColor: "#13B2A7", color: "white" }}
              >
                <NavDropdown.Item>Car</NavDropdown.Item>
                <NavDropdown.Item>Home</NavDropdown.Item>
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
                onChange={(e) => {
                  e.preventDefault();
                  axios
                    .get(
                      `http://localhost:5000/products/search_1?name=${e.target.value}`
                    )
                    .then((res) => {
                      console.log(res.data.result);
                      setSearch(res.data.result);
                      setSearchStatus(true);
                      setHome(false);
                      setProfile(false);
                      setDetails(false);
                    })
                    .catch((err) => {
                      console.log(err);
                    });
                  console.log(e.target.value);
                }}
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
        <Container className="d-flex flex-row flex-wrap justify-content-center gap-4 mt-4">
          {products &&
            products.map((product, i) => (
              <>
                <Card
                  style={{
                    width: "18rem",
                    height: "25rem",
                  }}
                  class="col"
                >
                  <Card.Img
                    variant="top"
                    src={product.image && product.image}
                  />

                  <Card.Body>
                    <Card.Title>
                      {product.productName && product.productName}
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
        <Product id={id} />
      ) : searchStatus ? (
        <Container className="d-flex flex-row flex-wrap justify-content-center gap-4 mt-4">
          {search &&
            search.map((product) => (
              <>
                <Card
                  style={{
                    width: "18rem",
                    height: "25rem",
                  }}
                  class="col"
                >
                  <Card.Img
                    variant="top"
                    src={product.image && product.image}
                  />

                  <Card.Body>
                    <Card.Title>
                      {product.productName && product.productName}
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
                    width: "18rem",
                    height: "25rem",
                  }}
                  class="col"
                >
                  <Card.Img
                    variant="top"
                    src={product.image && product.image}
                  />

                  <Card.Body>
                    <Card.Title>
                      {product.productName && product.productName}
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
        <Profile userInfo={userInfo} />
      ) : (
        <Home />
      )}
      {home ? (
        <Container className="d-flex flex-row  mt-3">
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
