import axios from "axios";
import React, { useState } from "react";
import { Button, Form, Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import Cloudinary from "../Cloudinary/Cloudinary"

export default function Add() {
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [forr, setForr] = useState("");
  const [type, setType] = useState("");
  const [price, setPrice] = useState(0);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [image, setImage] = useState("");
  const [address, setAddress] = useState("");

  const state = useSelector((state) => {
    return {
      token: state.loginReducer.token,
    };
  });

  const addProduct = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:5000/products/",
        {
          image,
          productName,
          description,
          price,
          type,
          forr,
          phoneNumber,
          address,
        },
        {
          headers: {
            Authorization: `Bearer ${state.token}`,
          },
        }
      )
      .then((result) => {
        setProductName("");
        setDescription("");
        setPrice();
        setType("");
        setForr("");
        setPhoneNumber("");
        setAddress("");
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
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
                  setProductName(e.target.value);
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
                  setForr(e.target.value);
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
              onClick={addProduct}
            >
              Submit
            </button>
          </fieldset>
        </Form>
        <Cloudinary/>
      </Container>
    </>
  );
}
