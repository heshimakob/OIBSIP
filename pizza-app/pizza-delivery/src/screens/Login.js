/* eslint-disable import/no-anonymous-default-export */
import React, { useEffect, useState } from "react";

import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { loginUser } from "../actions/userAction";
import Nav from "react-bootstrap/Nav";
import pizza from "../assets/images/pizza.png"

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
        <Col md={5} style={{ background: "linear-gradient(to right, #1d976c, #93f9b9)", color: "#fff", height: "100vh", width: "50%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>

  <h1 style={{ fontSize: '70px', margin: '20px 0', color: '#000' }}>Pizza-delivery</h1>

  <Row xs={2} md={4} lg={6} style={{ justifyContent: "center", alignContent: "center" }}>
    <Col style={{ width: "150px", height: "150px" }}>
      <img src={pizza} alt="Pizza" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "50%" }} />
    </Col>
    <Col>
      <h2 style={{ fontSize: '40px', margin: '10px 0', color: '#000' }}>Oasis infobyte</h2>
    </Col>
  </Row>

 

</Col>
          {/* <Col md={5} style={{background:"gray", color:"#fff",height:"100vh",width:"50%"}}>
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

          </Col> */}

<Col md={5} style={{ background: "#fff",color: "#000", height: "100vh", width: "50%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>

<h1>Login</h1>

<Form style={{ width: "80%" }}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control
      type="email"
      placeholder="Enter email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      style={{ borderRadius: "10px", fontWeight: 500, color: "#000" }}
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
      style={{ borderRadius: "10px", fontWeight: 500, color: "#000" }}
    />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>

  <Button
    variant="success"
    onClick={loginHandler}
    style={{ borderRadius: "10px", fontWeight: 500, width: "100%", marginTop: "10px", background: "linear-gradient(to right, #4CAF50, #45a049)", color: "#fff" }}
  >
    Login
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
