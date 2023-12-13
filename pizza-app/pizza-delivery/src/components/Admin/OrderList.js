import React, { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { deliverOrder, getAllOrders } from '../../actions/orderAction'
import Loader from '../Loader'
import { Error } from '../Error'
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap'


const OrderList = () => {
  const allOrdersState= useSelector((state)=>state.allUserOrdersReducer)
  const {loading,orders,error}=allOrdersState
  const dispatch= useDispatch()
  useEffect(()=>{
    dispatch(getAllOrders())
  },[dispatch])
  return (
    <div>
      <h1>Order list</h1>
      {loading && (<Loader/>)}
      {error && (<Error error="wrong"/>)}

      <Table striped bordered hover>
      <thead>
        <tr>
          <th>Order Id</th>
          <th>Email</th>
          <th>UserId</th>
          <th>Mount</th>
          <th>Date</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {
          orders &&
          orders.map((order)=>(
            <tr key={order._id}>
              <td>{order._id}</td>
              <td>{order.email}</td>
              <td>{order.transectionId}</td>
              <td>{order.orderAmount}</td>
              <td>{order.createdAt}</td>
              <td>{order.isDeliverd ? ( <h5 className='text-success'>deliverd</h5>) :(<> <Button className='btn-danger'
              onClick={()=>{dispatch(deliverOrder(order._id))}}>Deliver</Button></>)}</td>

            </tr>
          ))
        }
    
      </tbody>
    </Table>
    </div>
  )
}

export default OrderList