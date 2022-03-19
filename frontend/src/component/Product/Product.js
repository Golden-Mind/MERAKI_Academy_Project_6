import "./Product.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Card, Container, ListGroup, ListGroupItem } from "react-bootstrap";
import WhatsUp from "./Whatsup";
import { useDispatch, useSelector } from "react-redux";
import Form from "react-bootstrap/Form";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { Button } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";

function Product({ productId, id, userInfo }) {
  const [product, setProduct] = useState();
  const [comment, setComment] = useState("");
  const [getComments, setGetComments] = useState();

  //===============================================================

  const state = useSelector((state) => {
    return {
      token: state.loginReducer.token,
      isLoggedIn: state.loginReducer.isLoggedIn,
    };
  });

  //===============================================================

  const addComment = async () => {
    try {
      const res = await axios.post(
        `http://localhost:5000/comment/${id}`,
        {
          comment: comment,
          commenter_id: userInfo.userId,
        },
        {
          headers: {
            Authorization: `Bearer ${state.token}`,
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  //=============================================================

  useEffect(() => {
    axios
      .get(`http://localhost:5000/comment/${id}`, {
        headers: {
          Authorization: `Bearer ${state.token}`,
        },
      })
      .then((res) => {
        setGetComments(res.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [getComments]);

  //===============================================================

  useEffect(() => {
    axios
      .get(`http://localhost:5000/products/product-by/${id}`)
      .then((res) => {
        setProduct(res.data.result[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [productId]);

  //===============================================================

  return (
    <>
      {product ? (
        <Container className="d-flex flex-row mt-5 justify-content-center">
          <Card style={{ width: "30rem" }}>
            <Card.Img
              variant="top"
              src={product.image && product.image}
              style={{ height: "100%" }}
            />
          </Card>
          <Card className="cardPro">
            <Card.Title className="cardTPro" style={{ color: "#0e5a55" }}>
              {product.productName && product.productName}
            </Card.Title>
            <Card.Text style={{ marginLeft: "1vw" }}>
              {product.description && product.description}
            </Card.Text>
            <ListGroup className="list-group-flush">
              <ListGroupItem>{product.price && product.price} JD</ListGroupItem>
              <ListGroupItem>{product.forr && product.forr}</ListGroupItem>
              <ListGroupItem>{product.type && product.type}</ListGroupItem>
              <ListGroupItem>
                {product.phoneNumber && product.phoneNumber}
              </ListGroupItem>
              <ListGroupItem>
                {product.date.split("").slice(0, 10).join("") &&
                  product.date.split("").slice(0, 10).join("")}
              </ListGroupItem>
            </ListGroup>
          </Card>
        </Container>
      ) : (
        <></>
      )}
      {getComments ? (
        <>
          <Container className="d-flex flex-row mt-5 justify-content-center">
            <Card
              style={{
                width: "94%",
              }}
            >
              <Card.Title
                style={{
                  marginLeft: "3vw",
                  marginTop: "1vw",
                  color: "#0e5a55",
                  textDecoration: "underline",
                }}
              >
                COMMENTS :
              </Card.Title>
            </Card>
          </Container>
        </>
      ) : (
        <>
          <p> There is no comment yet </p>
        </>
      )}

      {getComments &&
        getComments.map((com) => {
          return (
            <>
              <Container className="d-flex flex-row justify-content-center">
                <Card style={{ width: "94%" }}>
                  <Card.Text style={{ marginLeft: "3vw" }}>
                    <Card.Text className="fw-bold" style={{ color: "#0e5a55" }}>
                      {com.firstName + " " + com.lastName &&
                        com.firstName + " " + com.lastName}
                    </Card.Text>
                    {com.comment && com.comment}
                  </Card.Text>
                </Card>
              </Container>
            </>
          );
        })}

      <Container className="mt-1" style={{ width: "78.5%" }}>
        <FloatingLabel
          controlId="floatingTextarea2"
          label="Comments ..."
          className="floating"
        >
          <Form.Control
            as="textarea"
            placeholder="Leave a comment here"
            style={{ height: "100px" }}
            onChange={(e) => {
              setComment(e.target.value);
            }}
          />
        </FloatingLabel>
      </Container>
      <Container className="d-flex justify-content-center">
        <Button
          variant="secondary"
          onClick={() => {
            addComment();
          }}
          style={{
            marginTop: "2vw",
            marginBottom: "2vw",
            width: "30%",
          }}
        >
          Add
        </Button>
      </Container>
    </>
  );
}

export default Product;
