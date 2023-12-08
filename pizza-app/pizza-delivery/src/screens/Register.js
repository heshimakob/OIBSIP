import React, { useState } from 'react'

import { Container,Form ,Button } from 'react-bootstrap';
import { useDispatch ,useSelector} from 'react-redux';
import { registerUser } from '../actions/userAction';
import { registerUserReducer } from '../reducers/userReducer';
import Loader from '../components/Loader';
import Success from '../components/Success';
import { Error } from '../components/Error';
import Nav from "react-bootstrap/Nav";

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

    <h1>Sign Up</h1>
    {loading && <Loader/>}
    {success && <Success success="user save success"/>}
    {error && <Error error="some problem"/>}

  
<Form>
<Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Full Name</Form.Label>
        <Form.Control type="text" placeholder="full name"  value={name}
        onChange={e=>setName(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"
        value={email}
        onChange={e=>setEmail(e.target.value)} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" 
        value={password}
        onChange={e=>setPassword(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password" placeholder="Password" 
        value={confirmPassword}
        onChange={e=>setConfirmPassword(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" onClick={registerHandler}>
        Register
      </Button>
      <Nav className="me-auto">
            <Nav.Link href="/login">Login</Nav.Link>
           
          
            </Nav>
    </Form>
</Container>
    </>
  )
}

export default Register