import React from "react";
import { Card, Container, ListGroup, ListGroupItem } from "react-bootstrap";

function Product() {
  return (
    <>
      <Container className="d-flex flex-row mt-5">
        <Card style={{ width: "30rem" }}>
          <Card.Img
            variant="top"
            src="https://images.autodaily.com.au/2022/02/bmw_3_series_facelift_m_performance_5.jpg"
          />
        </Card>
        <Card>
          <Card.Title style={{marginLeft: "1vw"}}>Card Title</Card.Title>
          <Card.Text style={{marginLeft: "1vw"}}>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <ListGroup className="list-group-flush">
            <ListGroupItem>Cras justo odio</ListGroupItem>
            <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
            <ListGroupItem>Vestibulum at eros</ListGroupItem>
          </ListGroup>
          <Card.Body>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default Product;
