import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Button, Col, Row,Card,Nav, Container,Image,Form,Navbar,NavDropdown,FormControl } from "react-bootstrap";
import "../home/home.css"
export default function Home() {
    const navigate=useNavigate()
  return (
   <><Container class="d-row justify-content-center " >
  <Container  style={{width:"90vw",marginTop:"2%"}} >
  <Navbar bg="light" expand="lg" >
  <Container fluid >
    <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="#action1">Home</Nav.Link>
        <Nav.Link href="#action2">Profile</Nav.Link>
        <NavDropdown title="Category" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Something else here
          </NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#" disabled>
          Link
        </Nav.Link>
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
  {/* <Nav
  activeKey="/home"
  
>
  <Nav.Item>
      
    <Nav.Link href="/home" onClick={()=>{navigate("/home")}}>Home</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="/login" onClick={()=>{navigate("/")}} >Profile</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-2">Link</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="disabled" disabled>
      Disabled
    </Nav.Link>
  </Nav.Item>
</Nav> */}
<Container className='row row-cols-4' >
<Card style={{ width: '20rem' ,height:'25rem',marginTop:"2%",marginLeft:"3%"}} class="col">
    <Card.Img variant="top" src='https://images.autodaily.com.au/2022/02/bmw_3_series_facelift_m_performance_5.jpg' />
  
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
<Card style={{ width: '20rem' ,height:'25rem',marginTop:"2%",marginLeft:"3%"}} class="col">
    <Card.Img variant="top" src='https://images.autodaily.com.au/2022/02/bmw_3_series_facelift_m_performance_5.jpg'/>
  
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
<Card style={{ width: '20rem' ,height:'25rem',marginTop:"2%",marginLeft:"3%"}} class="col">
    <Card.Img variant="top" src='https://images.autodaily.com.au/2022/02/bmw_3_series_facelift_m_performance_5.jpg'/>
  
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
<Card style={{ width: '20rem' ,height:'25rem',marginTop:"2%",marginLeft:"3%"}} class="col">
    <Card.Img variant="top" src='https://images.autodaily.com.au/2022/02/bmw_3_series_facelift_m_performance_5.jpg'/>
  
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
</Container>
</Container>
</Container>
   </>
  )
}
