import axios from "axios";
import React, { useState, useEffect } from "react";
import { Card, Container, ListGroup, ListGroupItem } from "react-bootstrap";
import WhatsUp from "./Whatsup";

function Product({ productId, id ,userInfo}) {
  const [product, setProduct] = useState();
  console.log(productId);
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
              <ListGroupItem>{product.price && product.price}</ListGroupItem>
              <ListGroupItem>{product.forr && product.forr}</ListGroupItem>
              <ListGroupItem>{product.type && product.type}</ListGroupItem>
            </ListGroup>
            <Card.Body>
              <Card.Link ><WhatsUp product={product} userInfo={userInfo}/></Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
        </Container>
      ) : (
        <></>
      )}
    </>
  );
}

export default Product;
