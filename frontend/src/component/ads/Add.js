import axios from "axios";
import React, { useState } from "react";
import { Button, Form, Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { MdOutlineAddAPhoto } from "react-icons/md";

export default function Add() {
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [forr, setForr] = useState("");
  const [type, setType] = useState("");
  const [price, setPrice] = useState(0);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [image, setImage] = useState("");
  const [address, setAddress] = useState("");
  const [url, setUrl] = useState("");
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState("");


  const state = useSelector((state) => {
    return {
      token: state.loginReducer.token,
    };
  });

  const uploadImage = () => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "images");
    data.append("cloud_name", "ds20iwzcn");
    fetch("  https://api.cloudinary.com/v1_1/ds20iwzcn/image/upload", {
      method: "post",
      body: data,
    })
      .then((resp) => resp.json())
      .then((data) => {
        setUrl(data.url);
      })
      .catch((err) => console.log(err));
  };

  const addProduct = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:5000/products/",
        {
          image: url,
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
        setMessage("")
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Container className="d-flex flex-row">
        <Form
          className="w-50 mt-5"
          style={{ marginBottom: "8vh" }}
        >
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
                  setType(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="disabledTextInput">Type</Form.Label>
              <Form.Select
                id="disabledSelect"
                onChange={(e) => {
                  setForr(e.target.value);
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
            <Button
              // type="submit"
              onClick={addProduct}
            >
              Submit
            </Button>
          </fieldset>
        </Form>
        <div>
          <div className="AddContainer">
            <img
            style={{width: "18vw", height: "30vh", marginTop: "20vh", marginLeft: "10vw"}}
              className="addImg"
              onClick={() => {
                setShow(true);
              }}
              src={
                url
                  ? url
                  : "https://cdn-icons-png.flaticon.com/128/1466/1466342.png"
              }
            ></img>
          </div>
          <div style={{disply: "flex", justifyContent: "center", width: "18vw", height: "30vh", marginTop: "10vh", marginLeft: "10vw"}}>
            {show ? (
              <div className="divChoose">
                <input
                  className="typeFile"
                  type="file"
                  onChange={(e) => setImage(e.target.files[0])}
                ></input>
                <button
                  onClick={uploadImage}
                  style={{
                    marginTop: "5vh",
                    backgroundColor: "white",
                    border: "solid 1px",
                    width: "10vw"
                  }}
                >
                  Upload
                </button>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </Container>
    </>
  );
}
