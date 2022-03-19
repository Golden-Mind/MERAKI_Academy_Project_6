import React, { useState, useEffect } from "react";
import "./ads.css";
import { Button, Card, Container, Form } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { FiDelete } from "react-icons/fi";
import { BiEditAlt } from "react-icons/bi";

export default function Ads({ userInfo, setHome, setDetails, setId }) {
  const [position, setPosition] = useState(0);
  const [yourAdd, setYourAdd] = useState();
  const [image, setImage] = useState();
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState();
  const [show, setShow] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleCloseDelete = () => setShowDelete(false);
  const handleShowDelete = () => setShowDelete(true);
  const [center, setCenter] = useState({
    lat: 0,
    lng: 0,
  });

  // ------------------------------------------------------

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log(position.coords.altitude);
      setCenter({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
      setPosition(position);
    });
  }, []);

  // ------------------------------------------------------

  const getAds = () => {
    axios
      .get(`http://localhost:5000/products/your-add/${userInfo.userId}`)
      .then((res) => {
        setYourAdd(res.data.result);
      })
      .catch((err) => {});
  };
  useEffect(() => {
    getAds();
  }, []);

  // ------------------------------------------------------

  const updateAdd = (id, img) => {
    axios
      .patch(`http://localhost:5000/products/${id}`, {
        image: img,
        productName,
        description,
        price,
        type,
      })
      .then((res) => {
        getAds();
        console.log(res);
      })
      .catch((err) => {});
  };

  // ------------------------------------------------------

  const deleteAdd = (id) => {
    axios
      .delete(`http://localhost:5000/products/${id}`)
      .then((res) => {
        getAds();
        console.log(res);
      })
      .catch((err) => {});
  };

  // ------------------------------------------------------

  return (
    <>
      <div className="divAds">
        {yourAdd &&
          yourAdd.map((add) => {
            return (
              <>
                <Card
                  style={{
                    width: "20rem",
                    height: "30rem",
                    marginTop: "2%",
                    marginLeft: "3%",
                    marginBottom: "2%",
                  }}
                >
                  <Card.Img variant="top" src={add.image && add.image} />
                  <Card.Body>
                    <FiDelete onClick={handleShowDelete} className="edit-addD" />
                    <Modal show={showDelete} onHide={handleCloseDelete}>
                      <Modal.Header closeButton></Modal.Header>
                      <Modal.Body>
                        Are You Sure To Delete Product .!!
                      </Modal.Body>
                      <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseDelete}>
                          Close
                        </Button>
                        <Button
                          variant="primary"
                          onClick={() => {
                            handleCloseDelete();
                            deleteAdd(add.id);
                          }}
                        >
                          delete
                        </Button>
                      </Modal.Footer>
                    </Modal>
                    <BiEditAlt onClick={handleShow} className="edit-addE" />
                    <Card.Title style={{ fontWeight: "bolder" }}>
                      {add.productName && add.productName}
                    </Card.Title>
                    <Card.Text>{add.description && add.description}</Card.Text>
                    <Card.Text>{add.price && add.price} JD</Card.Text>
                    <button
                      type="button"
                      class="btn btn-outline-dark"
                      onClick={() => {
                        setId(add.id);
                        setDetails(true);
                        setHome(false);
                      }}
                    >
                      Details
                    </button>
                  </Card.Body>
                </Card>
                <Container>
                  <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title> Edit Your Product </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <Form>
                        <Form.Group>
                          <Form.Label>Product Name</Form.Label>
                          <Form.Control
                            placeholder="Product Name"
                            onChange={(e) => {
                              setProductName(e.target.value);
                            }}
                          />
                        </Form.Group>
                        <Form.Group>
                          <Form.Label>Description</Form.Label>
                          <Form.Control
                            placeholder="Description"
                            onChange={(e) => {
                              setDescription(e.target.value);
                            }}
                          />
                        </Form.Group>
                        <Form.Group>
                          <Form.Label>Price</Form.Label>
                          <Form.Control
                            placeholder="Price"
                            onChange={(e) => {
                              setPrice(e.target.value);
                            }}
                          />
                        </Form.Group>
                        <Form.Group>
                          <Form.Label>Category</Form.Label>
                          <Form.Control
                            placeholder="Category"
                            onChange={(e) => {
                              setType(e.target.value);
                            }}
                          />
                        </Form.Group>
                        <Form.Group>
                          <Form.Label>Type</Form.Label>
                          <Form.Select
                            onChange={(e) => {
                              setType(e.target.value);
                            }}
                          >
                            <option>Sell</option>
                            <option>Rent</option>
                          </Form.Select>
                        </Form.Group>
                      </Form>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>
                        Close
                      </Button>
                      <Button
                        variant="primary"
                        onClick={() => {
                          updateAdd(add.id, add.image);
                          handleClose();
                          getAds();
                        }}
                      >
                        Update
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </Container>
              </>
            );
          })}
      </div>
    </>
  );
}
