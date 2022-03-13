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
const Favoraite = ({ userInfo }) => {
  const [fav, setFav] = useState();
  useEffect(() => {
    axios
    .get(`http://localhost:5000/favorite/get-fav/${userInfo.userId}`)
    .then((res) => {
      console.log(res.data.result);
      setFav(res.data.result);
    })
    .catch((err) => {});

  },[])
  return (
    <div className="fav">
      {fav &&
        fav.map((wish) => {
          return (
            <>
              <Container className="flex-d flex-row ">
                <Card
                  style={{
                    width: "18rem",
                    height: "25rem",
                    marginTop: "2%",
                    marginLeft: "3%",
                  }}
                  class="col"
                >
                  <Card.Img
                    variant="top"
                    src={wish.image && wish.image}
                  />

                  <Card.Body>
                    <Card.Title>{wish.productName && wish.productName}</Card.Title>
                    <Card.Text>
                      {wish.description && wish.description}
                    </Card.Text>
                    <Card.Text>
                      {wish.price && wish.price}$
                    </Card.Text>
                    <Button variant="primary">Communication</Button>
                  </Card.Body>
                </Card>
              </Container>
            </>
          );
        })}

        {/* <Container className="row row-cols-4">
                <Card
                  style={{
                    width: "18rem",
                    height: "25rem",
                    marginTop: "2%",
                    marginLeft: "3%",
                  }}
                  className="col"
                >
                  <Card.Img
                    variant="top"
                    src="https://images.autodaily.com.au/2022/02/bmw_3_series_facelift_m_performance_5.jpg"
                  />

                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Container> */}
    </div>
  );
};

export default Favoraite;
