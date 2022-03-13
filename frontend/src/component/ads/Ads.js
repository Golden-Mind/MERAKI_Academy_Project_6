import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { Button, Col, Row,Card,Nav, Container,Image,Form,Navbar,NavDropdown,FormControl } from "react-bootstrap";
import { Demo } from './Demo';


export default function Ads() {
  const [position, setPosition] = useState(0);
  console.log(position);
  useEffect(()=>{
    navigator.geolocation.getCurrentPosition(function(position) {
      console.log(position)
      setPosition(position)
    });
    
  },[])
  return (
    <><Container className='m-l-5'>
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
                  src="https://images.autodaily.com.au/2022/02/bmw_3_series_facelift_m_performance_5.jpg"
                />

                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
              <Demo/>
              </Container>
    </>
  )
}
