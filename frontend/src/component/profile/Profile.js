import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Button, Col, Row,Card,Nav, Container,Image,Form,Navbar,NavDropdown,FormControl } from "react-bootstrap";
export default function Profile() {
  return (
    <Container className='d-row-justify-content-end'  >
<Nav defaultActiveKey="/home" className="flex-column w-40 ">
  <Nav.Link href="/home" className=''>Active</Nav.Link>
  <Nav.Link eventKey="link-1">Link</Nav.Link>
  <Nav.Link eventKey="link-2">Link</Nav.Link>
  <Nav.Link eventKey="disabled" disabled>
    Disabled
  </Nav.Link>
</Nav>
    </Container>
  )
}
