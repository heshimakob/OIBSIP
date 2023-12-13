import React,{useEffect} from 'react';

import { Container,Row,Col ,Table} from 'react-bootstrap';
import {useDispatch,useSelector} from 'react-redux';
import { getAllPizzas } from '../../actions/pizzaAction';
import {AiFillDelete, AiFillEdit} from 'react-icons/ai'
import Loader from '../../components/Loader';
import { Error } from '../../components/Error';
import Pizza from '../../components/Pizza';
import { Link } from 'react-router-dom';
const PizzaList = () => {
  const dispatch=useDispatch();
  const pizzastate= useSelector((state)=>state.getAllPizzaReducer)
  const {loading,pizzas,error}=pizzastate;
  useEffect(()=>{dispatch(getAllPizzas())},[dispatch]);
  return (
    <>
    
    
              {loading ? (<Loader/>)
              :error ? (<Error>error de chargement{error}</Error>)
              : (
                <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Pizza Name</th>
                    <th>Prices</th>
                    <th>Category</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    pizzas && pizzas.map((pizza)=>(
                      <tr>
                        <td>S/n</td>
                        <td> <img  src={pizza.image} width="100px"/></td>
                        <td>{pizza.name }</td>
                        <td>small: {pizza.prices[0]["small"] } <br/>
                        medium: {pizza.prices[0]["medium"] }
                        <br/>
                        large: {pizza.prices[0]["large"] }
                        </td>
                        <td>{pizza.category }</td>
                        <td>
                          <Link to ={`/Admin/editpizza/${pizza._id}`}>
                          <AiFillEdit/>
                          </Link> &nbsp; <AiFillDelete/></td>
                      </tr>
                    ))
                  }
                </tbody>
              </Table>
              )
              }
             
       

    </>
  )
}

export default PizzaList