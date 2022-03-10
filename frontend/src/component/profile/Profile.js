import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { Button, Col, Row,Card,Nav, Container,Image,Form,Navbar,NavDropdown,FormControl } from "react-bootstrap";
import Ads from '../ads/Ads';
import Add from '../ads/Add';
export default function Profile() {
    const [ads, setAds] = useState(false);
    const [add, setAdd] = useState(false);
  return (
    <Container className='d-flex flex-row  mt-5 '  >
<Nav  className="flex-column gap-2 " style={{fontSize:"3ch"}}>
  <Nav.Link onClick={()=>{setAdd(true); setAds(false)}}>Add Ads</Nav.Link>
  <Nav.Link  onClick={()=>{setAds(true); setAdd(false)}}>Your Ads</Nav.Link>
  <Nav.Link >Favorite</Nav.Link>
  <Nav.Link >
    Disabled
  </Nav.Link>
</Nav>
{ads?<Ads/>:add?<Add/>:<></>}
    </Container>
  )
}
