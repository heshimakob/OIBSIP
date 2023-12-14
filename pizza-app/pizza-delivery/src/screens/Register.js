import React, { useState } from 'react'

import { Container,Form ,Button } from 'react-bootstrap';
import { useDispatch ,useSelector} from 'react-redux';
import { registerUser } from '../actions/userAction';
import { registerUserReducer } from '../reducers/userReducer';
import Loader from '../components/Loader';
import Success from '../components/Success';
import { Error } from '../components/Error';
import {Nav,Col,Row} from "react-bootstrap";
import pizza from "../assets/images/pizza.png"

const Register = () => {
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [confirmPassword,setConfirmPassword]=useState('');

    const registerState= useSelector((state)=> state.registerUserReducer);
    const {error,success,loading}= registerState;


    const dispatch =useDispatch()
    const registerHandler =()=>{
        if (password !== confirmPassword){
            alert(' diffrent password')
        }else{
            const user={name,email,password,confirmPassword};
            dispatch(registerUser(user))
        }
    }
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

<Col md={5} style={{ background: "#fff",color: "#000", height: "100vh", width: "50%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
<h1>Sign Up</h1>
    {loading && <Loader/>}
    {success && <Success success="user save success"/>}
    {error && <Error error="some problem"/>}

  
<Form style={{ width: "80%" }}>
<Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Full Name</Form.Label>
        <Form.Control type="text" placeholder="full name"  value={name}
        onChange={e=>setName(e.target.value)}
        style={{ borderRadius: "10px", fontWeight: 500, color: "#000" }}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"
        value={email}
        onChange={e=>setEmail(e.target.value)} 
        style={{ borderRadius: "10px", fontWeight: 500, color: "#000" }}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" 
        value={password}
        onChange={e=>setPassword(e.target.value)} 
        style={{ borderRadius: "10px", fontWeight: 500, color: "#000" }}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password" placeholder="Password" 
        value={confirmPassword}
        onChange={e=>setConfirmPassword(e.target.value)}
        style={{ borderRadius: "10px", fontWeight: 500, color: "#000" }} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" onClick={registerHandler}  style={{ borderRadius: "10px", fontWeight: 500, width: "100%", marginTop: "10px", background: "linear-gradient(to right, #4CAF50, #45a049)", color: "#fff" }}>
        Register
      </Button>
      <Nav className="me-auto">
            <Nav.Link href="/login">Login</Nav.Link>
           
          
            </Nav>
    </Form>
</Col>
  </Row>

  
</Container>
    </>
  )
}

export default Register