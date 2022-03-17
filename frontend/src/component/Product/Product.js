import axios from "axios";
import React, { useState, useEffect } from "react";
import { Card, Container, ListGroup, ListGroupItem } from "react-bootstrap";
import WhatsUp from "./Whatsup";
import { useDispatch, useSelector } from "react-redux";
import Form from "react-bootstrap/Form";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { Button } from "react-bootstrap";
import FloatingLabel from 'react-bootstrap/FloatingLabel'
function Product({ productId, id, userInfo }) {
  const [product, setProduct] = useState();
  const [comment, setComment] = useState("");
  const [getComments, setGetComments] = useState();
  const state = useSelector((state) => {
    return {
      token: state.loginReducer.token,
      isLoggedIn: state.loginReducer.isLoggedIn,
    };
  });
  // //===============================================================

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
      console.log(comment);
      // getComment();
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
        // console.log(res.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [getComments]);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/products/product-by/${id}`)
      .then((res) => {
        setProduct(res.data.result[0]);
        // console.log(res.data.result[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [productId]);
  return (
    <>
      {product ? (
        <Container className="d-flex flex-row mt-5">
          <Card style={{ width: "30rem" }}>
            <Card.Img variant="top" src={product.image && product.image} />
          </Card>
          <Card>
            <Card.Title style={{ marginLeft: "1vw" }}>
              {product.productName && product.productName}
            </Card.Title>
            <Card.Text style={{ marginLeft: "1vw" }}>
              {product.description && product.description}
            </Card.Text>
            <ListGroup className="list-group-flush">
              <ListGroupItem>{product.price && product.price} JD</ListGroupItem>
              <ListGroupItem>{product.forr && product.forr}</ListGroupItem>
              <ListGroupItem>{product.type && product.type}</ListGroupItem>
            </ListGroup>
            <Card.Body>
              <Card.Link>
                <WhatsUp product={product} userInfo={userInfo} />
              </Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
        </Container>
      ) : (
        <></>
      )}
      {getComments ? (
        <>
          <Card style={{ marginLeft: "8vw",marginTop:"5vw", marginBottom:"2vw" , width: "63rem"}}>
            <Card.Title style={{ marginLeft: "1vw"}}>Comments</Card.Title>
          </Card>
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
              {/* <Container className="d-flex flex-row mt-5"> */}
              <Card style={{ marginLeft: "8vw",width: "63rem"}}>
                <Card.Text style={{ marginLeft: "1vw" }}>
                  <Card.Text className="fw-bold">
                    {com.firstName && com.firstName}
                  </Card.Text>
                  {com.comment && com.comment}
                </Card.Text>
              </Card>
              {/* </Container> */}
            </>
          );
        })}
      <>
        <FloatingLabel controlId="floatingTextarea2" label="Comments" style={{ marginLeft: "8vw",width: "63rem" }}>
          <Form.Control
            as="textarea"
            placeholder="Leave a comment here"
            style={{ height: "100px" , marginTop:"2vw"}}
            onChange={(e) => {
              setComment(e.target.value);
            }}
          />
        </FloatingLabel>
        <Container  className = "d-flex justify-content-center">
        <Button
          variant="secondary"
          onClick={() => {
            addComment();
          }}
         style={{marginLeft:"58%" , marginTop:"2vw" , width:"20%" , marginBottom:"2vw" }}
        >
          Add
        </Button>


        </Container>
      </>
    </>
  );
}

export default Product;
