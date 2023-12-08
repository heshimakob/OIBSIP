import React,{useEffect} from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Landing from '../components/landing';
import Pizza from '../components/Pizza';
import { Container,Row,Col } from 'react-bootstrap';
import {useDispatch,useSelector} from 'react-redux';
import { getAllPizzas } from '../actions/pizzaAction';
import Loader from '../components/Loader';
import { Error } from '../components/Error';



export default function Home() {
  const dispatch=useDispatch();
  const pizzastate= useSelector((state)=>state.getAllPizzaReducer)
  const {loading,pizzas,error}=pizzastate;
  useEffect(()=>{dispatch(getAllPizzas())},[dispatch]);

  return  (
    <>
        <Navbar/>
        <div>
            <Landing/>
            <Container>
              {loading ? (<Loader/>)
              :error ? (<Error>error de chargement{error}</Error>)
              : (
                <Row>
              {pizzas.map((pizza)=>(
                <Col md={4}>
                  <Pizza pizza={pizza}/>
                </Col>

              ))}

            </Row>
              )
              }
             
            </Container>
            
            
     
        </div>
        <Footer/>
        
    </>
  )
}
