import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Container ,Row,Col,Button} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {FaMinusCircle,FaTrash, FaPlusCircle} from 'react-icons/fa';
import { addToCart,deleteFromCart } from "../actions/cartAction";

export default function Order() {
  const cartState =useSelector(state=>state.cartReducer)
  const cartItems=cartState.cartItems
  const dispatch=useDispatch()
  const subTotal=cartItems.reduce((x,item)=>x+item.price,0)
  return (
    <>
      <Navbar />
      <Container>
        <Row>

          <Col md={4}
          > 
          <h1>Payment</h1>
          <h4>subTotal :</h4>
          <h4>${subTotal}</h4> 
          <Button>Verify</Button>
          </Col>
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
                  <h6>Quantité: &nbsp; <FaMinusCircle 
                  style={{cursor:"pointer"}}
                  onClick={()=>{dispatch(addToCart(item, item.quantity-1, item.varient))}}
                  className="text-danger"/> {item.quantity} &nbsp; 
                  <FaPlusCircle   style={{cursor:"pointer"}}
                  onClick={()=>{dispatch(addToCart(item, item.quantity+1, item.varient))}} className="text-success"/>
                  </h6>
                  </Col>
                  <Col>
               <img alt="{item.image}" src={item.image} style={{width:"200px",height:"200px", borderRadius:"5px",padding:"30px"}}/>
               <FaTrash className="text-danger"
                style={{cursor:"pointer"}}
                onClick={()=>{dispatch(deleteFromCart(item ))}}
               />

                  </Col>
                  <hr/>
                  </>
                ))
              }
            </Row>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}
