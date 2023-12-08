// import React from "react";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import { Container ,Row,Col} from "react-bootstrap";
// import { useDispatch, useSelector } from "react-redux";
// import {FaMinusCircle,FaTrash, FaPlusCircle} from 'react-icons/fa';
// import { addToCart,deleteFromCart } from "../actions/cartAction";
// import Checkout from "../components/Checkout";

// export default function Order() {
//   const cartState =useSelector(state=>state.cartReducer)
//   const cartItems=cartState.cartItems
//   const dispatch=useDispatch()
//   const subTotal=cartItems.reduce((x,item)=>x+item.price,0)
//   return (
//     <>
//       <Navbar />
//       <Container>
//         <Row>

//           <Col md={4}
//           > 
//           <h1>Payment</h1>
//           <h4>subTotal :</h4>
//           <h4>${subTotal}</h4> 
//          <Checkout subTotal={subTotal}/>
//           </Col>
//           <Col md={6}
//           >
//             <h1>Order</h1>
//             <Row>
//               {
//                 cartItems.map(item=>(
//                   <>
//                   <Col md={5}>
//                   <h4>{item.name} {item.varient}</h4>
//                   <h5> {""} Price:{item.quantity}X {item.prices[0][item.varient]}={""} {item.price}</h5>
//                   <h6>Quantité: &nbsp; <FaMinusCircle 
//                   style={{cursor:"pointer"}}
//                   onClick={()=>{dispatch(addToCart(item, item.quantity-1, item.varient))}}
//                   className="text-danger"/> {item.quantity} &nbsp; 
//                   <FaPlusCircle   style={{cursor:"pointer"}}
//                   onClick={()=>{dispatch(addToCart(item, item.quantity+1, item.varient))}} className="text-success"/>
//                   </h6>
//                   </Col>
//                   <Col>
//                <img alt="{item.image}" src={item.image} style={{width:"200px",height:"200px", borderRadius:"5px",padding:"30px"}}/>
//                <FaTrash className="text-danger"
//                 style={{cursor:"pointer"}}
//                 onClick={()=>{dispatch(deleteFromCart(item ))}}
//                />

//                   </Col>
//                   <hr/>
//                   </>
//                 ))
//               }
//             </Row>
//           </Col>
//         </Row>
//       </Container>
//       <Footer />
//     </>
//   );
// }
import React, { useEffect} from 'react';
import { getUserOrders } from '../actions/orderAction';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/Loader';
import { Error } from '../components/Error';
import { Row,Col } from 'react-bootstrap';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';



const Order = () => {
  const orderState = useSelector((state)=>state.getUserOrdersReducer)
  const {loading, error, orders}=orderState;
   
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getUserOrders());
    },[dispatch]);
  return (
    <>
           <Navbar/>
    {
    loading && (<Loader/>)
    }
    {error && (<Error error="wrong"/>)}
    <h1 className='text-center'> Your order</h1>
    
    {
      orders &&
       orders.map((order)=>(
        <Row key={order._id}>
          <Col md={4}>
           { order.orderItems.map((item) => (
              <div className='container' key={item._id}>
              <h1>{item.name} [{item.varient}] *{item.quantity}={item.price}</h1>
              </div>

            ))}
          </Col>
          <Col md={4}>
            <h4>Adress</h4>
            <h6>Street: {order.shippingAddress.street}</h6>
            <h6>City: {order.shippingAddress.city}</h6>
            <h6>Picode: {order.shippingAddress.picode}</h6>
            <h6>Country: {order.shippingAddress.country}</h6>
          </Col>
          <Col md={4}>
            <h4>Order info</h4>
            <h4>Order Amount :{order.orderAmount}</h4>
            <h4>Transection Id  :{order.transectionId}</h4>
            
          </Col>
          <Col md={4}></Col>
        </Row>

      ))
    }
    <Footer/>
    </>
  )
}

export default Order;