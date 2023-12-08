import React from 'react'
import {Row,Col,Container,Button,ButtonGroup} from "react-bootstrap"
import Navbar from '../components/Navbar'
import NavBarAdmin from '../components/Admin/NavBarAdmin'

const Admin = () => {
  return (
  <>
  <Navbar/>
  <NavBarAdmin/>
  <Container>
    <Row>
    
    {/* <Col md={4}>
        <ButtonGroup vertical style={{minHeight:'800px'}}>
            <Button>All users</Button>
            <Button>All pizzas</Button>
            <Button>Add new pizza</Button>
            <Button>All order</Button>
        </ButtonGroup>
    </Col>
    <Col md={8}>
      

    </Col> */}
    </Row>
  </Container>
  </>
  )
}

export default Admin