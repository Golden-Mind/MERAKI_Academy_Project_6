import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { Button, Col, Row,Card,Nav, Container,Image,Form,Navbar,NavDropdown,FormControl } from "react-bootstrap";
// import { Demo } from './Demo';
import axios from "axios";

export default function Ads({ userInfo }) {
  const [position, setPosition] = useState(0);
  const [yourAdd , setYourAdd] = useState();
  console.log(position);
  useEffect(()=>{
    navigator.geolocation.getCurrentPosition(function(position) {
      console.log(position)
      setPosition(position)
    });
    
  },[])
  useEffect(()=>{
    axios
        .post(`http://localhost:5000/products/your-add/${userInfo.userId}`)
        .then((res) => {
          setYourAdd(res.data.result);
          console.log(yourAdd);
        })
        .catch((err) => {});
  },[])

  return (
    <>
    {yourAdd &&
    yourAdd.map((add) => {
      return(
      <>
    <Container className='m-l-5'>
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
                  src={add.image && add.image}
                />

                <Card.Body>
                  <Card.Title>{add.productName && add.productName}</Card.Title>
                  <Card.Text>
                  {add.description && add.description}
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
             
              </Container>
      </>

      )

    })
    }
    </>
  )
}
