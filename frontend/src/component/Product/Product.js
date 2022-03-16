import axios from "axios";
import React, { useState, useEffect } from "react";
import { Card, Container, ListGroup, ListGroupItem } from "react-bootstrap";
import WhatsUp from "./Whatsup";
import { addComments, getComments } from "../../reducer/comments";
import { useDispatch, useSelector } from "react-redux";
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel'
function Product({ productId, id, userInfo }) {
  const [product, setProduct] = useState();
  const [comment, setComment] = useState("");
  const dispatch = useDispatch();
  // console.log(productId);
  console.log(comment);
  const state = useSelector((state) => {
    return {
      product: state.commentesReducer.product,
      comment: state.commentesReducer.comment,
    };
  });
  //===============================================================

  const addComment = async () => {
    try {
      const res = await axios.post(
        `http://localhost:5000/comment/${id}`,
        {
          comment: comment,
          commenterId: userInfo.id,
          productId: id,
        },
        {
          headers: {
            Authorization: `Bearer ${state.token}`,
          },
        }
      );
      console.log(comment);
      console.log(state.product);
      console.log(addComments(comment));
      dispatch(addComments(res.data.results));
      getComment();
    } catch (error) {
      console.log(error);
    }
  };
  //=============================================================
  const getComment = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/comment`, {
        headers: {
          Authorization: `Bearer ${state.token}`,
        },
      });
      dispatch(getComments(res.data.results));
    } catch (error) {
      console.log(error);
    }
  };
  //===============================================================

  useEffect(() => {
    // getAllArticles();
    getComment();
  }, []);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/products/product-by/${id}`)
      .then((res) => {
        setProduct(res.data.result[0]);
        console.log(res.data.result[0]);
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
    
      <>
          <Form.Control
            as="textarea"
            placeholder="Leave a comment here"
            style={{ height: "100px" ,width:"50%","margin-left":"8.5%","margin-top":"3%"}}
            onChange={(e) => {
              setComment(e.target.value)
            }}
          />
      </>
    </>
  );
}

export default Product;
