import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { Button, Col, Row,Card,Nav, Container,Image,Form,Navbar,NavDropdown,FormControl } from "react-bootstrap";

export default function Add() {
  return (
    <>   
      <Container className='w-50'>
        <Form>
  <fieldset >
    <Form.Group className="mb-3">
      <Form.Label htmlFor="disabledTextInput">Disabled input</Form.Label>
      <Form.Control id="disabledTextInput" placeholder="Disabled input" />
    </Form.Group>
    <Form.Group className="mb-3">
      <Form.Label htmlFor="disabledSelect">Disabled select menu</Form.Label>
      <Form.Select id="disabledSelect">
        <option>Disabled select</option>
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
