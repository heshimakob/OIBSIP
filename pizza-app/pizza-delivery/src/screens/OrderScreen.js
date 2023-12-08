import React, { useEffect} from 'react';
import { getUserOrders } from '../actions/orderAction';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/Loader';
import { Error } from '../components/Error';
import { Row,Col } from 'react-bootstrap';


const OrderScreen = () => {
  const orderState=useSelector((state)=>state.getUserReducer)
  const {loading,error,orders}=orderState;
   
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getUserOrders());
    },[dispatch]);
  return (
    <>
    <h1 className='text-center'> Your order</h1>
    {loading && (<Loader/>)}
    {error && (<Error error="wrong"/>)}
    {
      orders &&
       orders.map((order)=>(
        <Row>
          <Col md={4}>
           { order.orderItems.map((item) => (
              <div className='container'>
              <h1>{item.name} [{item.varient}] *{item.quantity}={item.price}</h1>
              </div>

            ))}
          </Col>
          <Col md={4}>
            <h4>Adress</h4>
            <h6>Street: {order.shippingAddress.street}</h6>
            <h6>City: {order.shippingAddress.city}</h6>
            <h6>Pincode: {order.shippingAddress.picode}</h6>
            <h6>Country: {order.shippingAddress.country}</h6>
          </Col>
          <Col md={4}>
            <h4>Order info</h4>
            <h4>Order Amount :{order.orderAmount}</h4>
            <h4>Transection Id  :{order.transectionid}</h4>
            
          </Col>
          <Col md={4}></Col>
        </Row>

      ))
    }
    </>
  )
}

export default OrderScreen;