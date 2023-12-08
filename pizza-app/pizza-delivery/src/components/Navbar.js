/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { logoutUser } from "../actions/userAction";

export default function () {
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cartReducer);
  const userState = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userState;
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Pizza-delivery</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/card">Orders {cartState.cartItems.length}</Nav.Link>
            <Nav.Link href="/order">
              Store 
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
