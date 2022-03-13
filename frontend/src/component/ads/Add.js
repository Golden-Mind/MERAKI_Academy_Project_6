import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { Button, Col, Row,Card,Nav, Container,Image,Form,Navbar,NavDropdown,FormControl } from "react-bootstrap";

export default function Add() {
    const [name, setName] = useState("");
    console.log(name);
  return (
    <>   
      <Container className='w-50'>
        <Form>
  <fieldset >
    <Form.Group className="mb-3">
      <Form.Label htmlFor="disabledTextInput" >Product Name</Form.Label>
      <Form.Control id="disabledTextInput" placeholder="Product Name" onChange={(e)=>{setName(e.target.value)}}/>
      <Form.Label htmlFor="disabledTextInput" >Description</Form.Label>
      <Form.Control id="disabledTextInput" placeholder="Description" onChange={(e)=>{setName(e.target.value)}}/>
    </Form.Group>
    <Form.Group className="mb-3">
      <Form.Label htmlFor="Category">Category</Form.Label>
      <Form.Select id="disabledSelect">
        <option>Disabled select</option>
      </Form.Select>
    </Form.Group>
    <Form.Group className="mb-3">
      <Form.Label htmlFor="Category">Type</Form.Label>
      <Form.Select id="disabledSelect">
        <option>Sell</option>
        <option>Rent</option>
      </Form.Select>
    </Form.Group>
    <Form.Group className="mb-3">
      <Form.Check
        type="checkbox"
        id="disabledFieldsetCheck"
        label="Can't check this"
      />
    </Form.Group>
    <Button type="submit">Submit</Button>
  </fieldset>
</Form>
    </Container>
     </>
  )
}
