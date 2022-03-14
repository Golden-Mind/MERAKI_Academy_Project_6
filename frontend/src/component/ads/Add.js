import axios from "axios";
import React, { useState } from "react";
import { Button, Form, Container } from "react-bootstrap";

export default function Add() {
  const [nameProduct, setNameProduct] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [type, setType] = useState("");
  const [price, setPrice] = useState(0);
  const [phoneNumber, setPhoneNumber] = useState("");

  const addProduct = () => {
    axios
      .post("/products/", {
        
        nameProduct,
        description,
        type,
        price,
      })
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {});
  };

  return (
    <>
      <Container>
        <Form className="w-50 mt-5" style={{ marginBottom: "8vh" }}>
          <fieldset>
            <Form.Group className="mb-3">
              <Form.Label
                style={{ borderBottom: "solid 1px" }}
                htmlFor="disabledTextInput"
              >
                What do you want to sell or advertise?
              </Form.Label>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="disabledTextInput">Product Name</Form.Label>
              <Form.Control
                id="disabledTextInput"
                placeholder="Product Name"
                onChange={(e) => {
                  setNameProduct(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="disabledTextInput">Description</Form.Label>
              <Form.Control
                id="disabledTextInput"
                placeholder="Description"
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="disabledTextInput">Category</Form.Label>
              <Form.Control
                id="disabledTextInput"
                placeholder="Category"
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="disabledTextInput">Type</Form.Label>
              <Form.Select
                id="disabledSelect"
                onChange={(e) => {
                  setType(e.target.value);
                }}
              >
                <option>Sell</option>
                <option>Rent</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="disabledTextInput">Price</Form.Label>
              <Form.Control
                id="disabledTextInput"
                placeholder="Price"
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="disabledTextInput">Phone Number</Form.Label>
              <Form.Control
                id="disabledTextInput"
                placeholder="Phone Number"
                onChange={(e) => {
                  setPhoneNumber(e.target.value);
                }}
              />
            </Form.Group>
            <button
              // type="submit"
              onClick={() => {
                addProduct();
              }}
            >
              Submit
            </button>
          </fieldset>
        </Form>
      </Container>
    </>
  );
}
