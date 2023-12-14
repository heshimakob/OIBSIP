/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { logoutUser } from "../actions/userAction";
import { MdLocalGroceryStore } from "react-icons/md";
import Badge from 'react-bootstrap/Badge';
import pizza from '../assets/images/pizza.png'

export default function () {
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cartReducer);
  const userState = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userState;
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
      <Navbar.Brand href="#home" className="d-flex align-items-center">
  <img
    src={pizza}
    alt="Your Logo"
    style={{ width: '40px', height: '40px', marginRight: '10px' }} // Ajustez la taille et la marge selon vos besoins
  />
  <span>Pizza-delivery</span>
</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/card" className="d-flex align-items-center">
  <MdLocalGroceryStore style={{ fontSize: '20px' }} />
  <Badge bg="danger" style={{ marginLeft: '5px', fontSize: '14px' }}>
    {cartState.cartItems.length}
  </Badge>
</Nav.Link>
            <Nav.Link href="/order">
              Orders
            </Nav.Link>
          
            <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="/login">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            {currentUser ? (
              <>
                {/* <Nav.Link>{currentUser.name}</Nav.Link> */}
                <NavDropdown title={currentUser.name} id="basic-nav-dropdown">
                  <NavDropdown.Item to="/orders">Order</NavDropdown.Item>

                  <NavDropdown.Item
                    onClick={() => {
                      dispatch(logoutUser());
                    }}
                  >
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              </>
            ) : (
              <>
                {""}
                <Nav.Link href="/login">Login</Nav.Link>
                <Nav.Link href="/register">Sign In</Nav.Link>
                {""}
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
