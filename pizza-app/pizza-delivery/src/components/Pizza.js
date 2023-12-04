import React, { useState } from "react";
import { Card, Row, Col, Button, Modal } from "react-bootstrap";

export default function Pizza({ pizza }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [variant, setVarient] = useState("small");
  const [quantity, setQuantity] = useState(1);
  return (
    <>
      <Card style={{ width: "18rem", marginTop: "10px" }}>
        <Card.Img variant="top" src={pizza.image} onClick={handleShow} style={{cursor:"pointer"}} />
        <Card.Body>
          <Card.Title>{pizza.name}</Card.Title>
          <Card.Text>
            <Row>
              <Col md={6}>
                <h6>Varient</h6>
                <select
                  value={variant}
                  onChange={(e) => setVarient(e.target.value)}
                >
                  {/* {pizza.varients.map((varient) => (
                    <option>{varient}</option>
                  ))} */}
                  {pizza.varients && pizza.varients.map((varient) => (
  <option key={varient}>{variant}</option>
))}
                </select>
              </Col>
              <Col md={6}>
                <h6>Quantity</h6>
                <select
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                >
                  {[...Array(10).keys()].map((v, i) => (
                    <option key={i} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </select>
              </Col>
            </Row>
          </Card.Text>
          <Row>
            <Col md={6}> Price:${pizza.prices[0][variant] * quantity} </Col>
            <Col>
              <Button className="bg-primary text-white" style={{width:'260px',height:'50px'}}>Add to store</Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{pizza.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
          <Card.Img variant="top" src={pizza.image}  />

          </div>
          <div>
            <h4>description:</h4>
            <h5>description:{pizza.description}</h5>
          </div>
          </Modal.Body>
       
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Add to store
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
