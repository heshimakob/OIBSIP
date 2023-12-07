import React, { useState } from 'react'

import { Container,Form ,Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { registerUser } from '../actions/userAction';

const Register = () => {
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPasseword]=useState('');
    const [confirmPassword,setConfirmPassword]=useState('');


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
        onChange={e=>setPasseword(e.target.value)} />
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
        Submit
      </Button>
    </Form>
</Container>
    </>
  )
}

export default Register