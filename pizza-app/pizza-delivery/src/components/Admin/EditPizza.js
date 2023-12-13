// import React ,{useEffect}from 'react'
// import { useDispatch,useSelector } from 'react-redux'
// import { getPizzabyId } from '../../actions/pizzaAction'

// const EditPizza = ({match}) => {
//     const dispatch=useDispatch()
//     useEffect(()=>{
//         dispatch(getPizzabyId(match.params.id));
//     },[dispatch])
//   return (
//     <div>OrderList</div>
//   )
// }

// export default EditPizza 
import React, { useEffect,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPizzabyId } from '../../actions/pizzaAction';
import Loader from '../../components/Loader'
import {Error} from '../../components/Error'
import Success from '../../components/Success'

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

import Row from 'react-bootstrap/Row';


const EditPizza = ({ match }) => {
    const [name,setname]=useState('')
    const[smallprice,setsmallPrice]=useState()
    const[mediumprice,setsmediumPrice]=useState()
    const[largeprice,setlargePrice]=useState()
    const[description,setdecription]=useState('')
    const[image,setimage]=useState('')
    const[category,setcategory]=useState('')
const dispatch = useDispatch();
const getPizzaByState=useSelector( state =>state.getPizzaByIdReducer )
const {loading,error,pizza}=getPizzaByState


useEffect(() => {
   if (pizza){ if (pizza._id===match.params.pizzaId){
        setname(pizza.name);
        setdecription(pizza.description);
        setcategory(pizza.category);
        setimage(pizza.image);
        setsmallPrice(pizza.price[0]["small"]);

    }else{
        dispatch(getPizzabyId(match.params.pizzaId));
    }} else{
        dispatch(getPizzabyId(match.params.pizzaId));

    }

}, [dispatch,pizza  ]);

const submitForm =(e)=>{
    e.preventDefault();
    const editedpizza ={
        name,image,description,category,
        prices:{
            small:smallprice,
            medium:mediumprice,
            large:largeprice
        }
       

    }
    // dispatch(addPizza(pizza))
}


return (
    <>
    {loading && (<Loader/>)}
    {error && (<Error error="added pizza failled"/>)}
    {/* {success && (<Success success="pizza added successfully"/>)} */}
  
  <Form  onSubmit={submitForm} >
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label> name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="  name"
            Value={name}
            onChange={e=> setname(e.target.value)}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>small</Form.Label>
          <Form.Control
           required
           type="text"
           placeholder="small"
           Value={smallprice}
           onChange={e=> setsmallPrice(e.target.value)}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        {/* <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>Username</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control
               required
               type="text"
               placeholder="medium"
               Value={mediumprice}
               onChange={e=> setsmediumPrice(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group> */}
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>Medium</Form.Label>
          <Form.Control required
           type="text"
           placeholder="small"
           value={mediumprice}
           onChange={(e)=> setsmediumPrice(e.target.value)} />
          <Form.Control.Feedback type="invalid">
            Please provide a valid city.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom04">
          <Form.Label>Large</Form.Label>
          <Form.Control  type="text"
           placeholder="small"
           value={largeprice}
           onChange={(e)=> setlargePrice(e.target.value)} />
          <Form.Control.Feedback type="invalid">
            Please provide a valid state.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom05">
          <Form.Label>image</Form.Label>
          <Form.Control   placeholder="small"
           value={image}
           onChange={(e)=> setimage(e.target.value)} />
          <Form.Control.Feedback type="invalid">
            Please provide a valid zip.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label> description</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="  description"
            value={description}
            onChange={(e)=> setdecription(e.target.value)}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label> category</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder=" Enter catgorie"
            value={category}
            onChange={(e)=> setcategory(e.target.value)}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
      </Row>
      {/* <Form.Group className="mb-3">
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
      </Form.Group> */}
      <Button variant='primary' type='submit'>Add new pizza</Button>
    </Form>
    </>
);
}


export default EditPizza;