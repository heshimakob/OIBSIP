import React from 'react'

import { Container,Row ,Col} from 'react-bootstrap'

const UserList = () => {
  return (
    <>
  
    <Container>
      <Row>
        <Col>
        <h1>All users</h1>
        </Col>

      </Row>
    {/* <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table> */}
    </Container>
    </>
  )
}

export default UserList