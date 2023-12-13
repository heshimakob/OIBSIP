import React, { useState } from 'react'
import {Form,Col,Row,Button} from 'react-bootstrap'
import { UseSelector,useDispatch } from 'react-redux'
import { filterPizza } from '../actions/pizzaAction'

const Filter = () => {
    const [searchkey,setsearchkey]=useState('')
    const [category,setcategory]=useState('all')
    const dispatch =useDispatch()
  return (
    <div className='p-4 bg-gray mt-4'>
    <Form>
        <Row>
            <Col>
            <Form.Control value={searchkey}
            onChange={e=>setsearchkey(e.target.value)}
             placeholder="First name"/>
            </Col>
            <Col>
            <select className='form-select' value={searchkey}
            onChange={e=>setcategory(e.target.value)}>
            
                <option>All</option>
                <option >Veg</option>
                <option >Nonveg</option>

            </select>
            </Col>
            <Col>
            {/* <Form.Control placeholder="last name"/> */}
            <Button onClick={()=>{dispatch(filterPizza(searchkey,category))}}>Search</Button>
            </Col>
        </Row>
    </Form>

    </div>
  )
}

export default Filter