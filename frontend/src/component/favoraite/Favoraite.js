import React, { useEffect, useState } from "react";
import axios from "axios";
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
import { ImHeartBroken } from "react-icons/im";
import "./fav.css";
const Favoraite = ({ userInfo }) => {
  const [fav, setFav] = useState();
  const getFav = () => {
    axios
      .get(`http://localhost:5000/favorite/get-fav/${userInfo.userId}`)
      .then((res) => {
        console.log(res.data.result);
        setFav(res.data.result);
      })
      .catch((err) => {});
  };
  useEffect(() => {
    getFav();
  }, []);
  const deleteFav = (id) => {
    axios
      .delete(`http://localhost:5000/favorite/delete-fav/${id}`)
      .then((res) => {
        console.log(res);
        getFav();
      })
      .catch((err) => {});
  };
  return (
    <Container className="d-flex flex-row flex-wrap  gap-4 mt-4">
      {fav &&
        fav.map((wish) => {
          return (
            <>
              <Card
                style={{
                  width: "18rem",
                  height: "28rem",
                  marginTop: "2%",
                  marginLeft: "3%",
                }}
                class="col"
              >
                <Card.Img variant="top" src={wish.image && wish.image} />
                <Card.Body>
                  <ImHeartBroken onClick={() => {
                    deleteFav(wish.id)
                  }} className="not-love" />
                  <Card.Title>
                    {wish.productName && wish.productName}
                  </Card.Title>
                  <Card.Text>{wish.description && wish.description}</Card.Text>
                  <Card.Text>{wish.price && wish.price}$</Card.Text>
                  <Button variant="primary">Communication</Button>
                </Card.Body>
              </Card>
            </>
          );
        })}
    </Container>
  );
};

export default Favoraite;
