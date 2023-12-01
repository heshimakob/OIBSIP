import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Landing from '../components/landing';
import Carroussel from '../components/Carroussel';
import { Container,Row,Col } from 'react-bootstrap';
import AllPizza from '../pizza-data'



export default function Home() {
  return (
    <div>
        <Navbar/>
        <div>
            <Landing/>
            <Container>
              <Row>
                {AllPizza.map(pizza=>(
                  <Col md={4}>
                    <Carroussel pizza={pizza}/>
                  </Col>

                ))}

              </Row>
            </Container>
            
            
     
        </div>
        <Footer/>
        
    </div>
  )
}
