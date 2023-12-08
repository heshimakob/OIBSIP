/* eslint-disable import/no-anonymous-default-export */
import React, { useEffect, useState } from "react";

import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { loginUser } from "../actions/userAction";
import Nav from "react-bootstrap/Nav";
import pizza from "../assets/images/pizza1.jpg"

export default function () {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("currentUser")) {
      window.location.href = "/";
    }
  }, []);

  const loginHandler = () => {
    const user = { email, password };
    dispatch(loginUser(user));
  };
  return (
    <>
      <Container>
        <Row>
        <Col md={5} style={{background:"#fff", color:"#000",height:"100vh",width:"50%"}}>

   
   <h1>Pizza-delivery</h1>

<Row xs={2} md={4} lg={6} style={{justifyContent:"center",alignContent:"center"}}>
        <Col style={{width:"250px",height:"150px"}}> <img src={pizza}/></Col>
        <Col><h2>Oasis infobyte </h2></Col>
      </Row>
      <Row xs={1} md={2}>
        <Col>1 of 3</Col>
        <Col>2 of 3</Col>
        <Col>3 of 3</Col>
      </Row>
      <Row xs="auto">
        <Col>1 of 3</Col>
        <Col>2 of 3</Col>
        <Col>3 of 3</Col>
      </Row>
</Col>
          <Col md={5} style={{background:"gray", color:"#fff",height:"100vh",width:"50%"}}>
          <h1>Login</h1>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" onClick={loginHandler}>
            login
          </Button>
          <Nav className="me-auto">
            <Nav.Link href="/register">Sign Up</Nav.Link>
           
          
            </Nav>
          
        </Form>
          </Col>



          
        </Row>
    
        
      </Container>
    </>
  );
}
