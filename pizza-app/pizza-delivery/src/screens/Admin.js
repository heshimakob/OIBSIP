import React, { useState ,useEffect} from 'react';
import { Container, Row, Col, Button, ButtonGroup } from 'react-bootstrap';
import UserList from '../components/Admin/UserList';
import PizzaList from '../components/Admin/PizzaList';
import AddNewPizza from '../components/Admin/AddNewPizza';
import OrderList from '../components/Admin/OrderList';
import Navbar from '../components/Navbar';
import {useSelector} from 'react-redux'
import EditPizza from '../components/Admin/EditPizza';

const Admin = () => {
  const userStete=useSelector((state)=>state.loginUserReducer)
  const {currentUser}=userStete;

  useEffect(()=>{
    if (localStorage.getItem("currentUser")===null || !currentUser.isAdmin){
      window.location.href="/";
    }
  }, []);
  const [activeComponent, setActiveComponent] = useState('userlist');

  const renderComponent = () => {
    switch (activeComponent) {
      case 'userlist':
        return <UserList />;
      case 'pizzalist':
        return <PizzaList />;
      case 'addnewpizza':
        return <AddNewPizza />;
      case 'orderlist':
        return <OrderList />;
        case 'editpizza':
          return <EditPizza />;
      default:
        return null;
    }
  };

  return (
    <>
      <Navbar />
      <Container>
        <Row>
          <Col md={2}>
            <ButtonGroup vertical style={{ minHeight: '800px' }}>
              <Button onClick={() => setActiveComponent('userlist')}>All users</Button>
              <Button onClick={() => setActiveComponent('pizzalist')}>All pizzas</Button>
              <Button onClick={() => setActiveComponent('addnewpizza')}>Add new pizza</Button>
              <Button onClick={() => setActiveComponent('orderlist')}>All orders</Button>
              <Button onClick={() => setActiveComponent('editpizza')}>EditPizza</Button>
            </ButtonGroup>
          </Col>
          <Col md={10}>{renderComponent()}</Col>
        </Row>
      </Container>
    </>
  );
};

export default Admin;
