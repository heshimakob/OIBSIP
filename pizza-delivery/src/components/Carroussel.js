import React,{useState} from 'react'
import { Card,Row,Col, Button } from 'react-bootstrap';


export default function Carroussel({pizza}) {
  const [ varient,setVarient]=useState("small")
  const [quantity,setQuantity]=useState(1)
  return (
    <Card style={{ width: '18rem' ,marginTop:"10px"}}>
    <Card.Img variant="top" src={pizza.image}  />
    <Card.Body>
      <Card.Title>{pizza.name}</Card.Title>
      <Card.Text>
        <Row>
          <Col md={6}>
            <h6>Varient</h6>
            <select value={varient} onChange={e=>setVarient(e.target.value)}> 
              {pizza.varients.map((varient)=>(
                <option  >{varient}</option>

              ))}
            </select>
          </Col>
          <Col md={6}>
          <h6>Quantity</h6>
          <select value={quantity}  onChange={(e)=>setQuantity(e.target.value)}>
            {[...Array(10).keys()].map((v, i ) =>(
        <option key={i} value={i + 1}
       >{i+1}</option>
       ))}
            </select>
          </Col>
        </Row>
      </Card.Text>
     <Row>
      <Col md={6}> Price:${pizza.prices[0][varient]*quantity} </Col>
                <Col>
                <Button className='bg-primary text-white'>Add to store</Button>
                </Col>
     </Row>
    </Card.Body>
  </Card>
    
  )
}
