import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Container ,Row,Col} from "react-bootstrap";
import { UseSelector, useSelector } from "react-redux";
import {FaMinusCircle, FaPlusCircle} from 'react-icons/fa'

export default function Order() {
  const cartState =useSelector(state=>state.cartReducer)
  const cartItems=cartState.cartItems
  return (
    <>
      <Navbar />
      <Container>
        <Row>
          <Col md={6}
          >
            <h1>Order</h1>
            <Row>
              {
                cartItems.map(item=>(
                  <>
                  <Col md={5}>
                  <h4>{item.name} {item.varient}</h4>
                  <h5> {""} Price:{item.quantity}X {item.prices[0][item.varient]}={""} {item.price}</h5>
                  <h6>Quantité: &nbsp; <FaMinusCircle className="text-danger"/> {item.quantity} &nbsp; 
                  <FaPlusCircle className="text-success"/>
                  </h6>
                  </Col>
                  <Col>
               <img alt="{item.image}" src={item.image} style={{width:"200px",height:"200px", borderRadius:"5px",padding:"30px"}}/>

                  </Col>
                  <hr/>
                  </>
                ))
              }
            </Row>
          </Col>
          <Col md={4}
          > 
          <h1>Payment</h1>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}
