import React from 'react'
import Nav from 'react-bootstrap/Nav';

// import React from 'react';
// import { Link, NavLink } from 'react-router-dom';
// import Nav from 'react-bootstrap/Nav';

const NavBarAdmin = () => {
  return (
 <>
     <Nav fill variant="pills" defaultActiveKey="/userlist" className='text-center bg-dark text-white'>
      <Nav.Item>
        <Nav.Link href="/userlist"  >All users</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="/admin/pizzalist" >All pizzas</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Add new pizza</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-3">
        All order
        </Nav.Link>
      </Nav.Item>
    </Nav>

{/* <Nav fill variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <NavLink to="/UserList" className="nav-link" activeClassName="active">Active</NavLink>
      </Nav.Item>
      <Nav.Item>
        <NavLink to="/list-pizza" className="nav-link" activeClassName="active">List Pizza</NavLink>
      </Nav.Item>
      <Nav.Item>
        <NavLink to="/list-user" className="nav-link" activeClassName="active">List User</NavLink>
      </Nav.Item>
      <Nav.Item>
        <NavLink to="/add-pizza" className="nav-link" activeClassName="active">Add Pizza</NavLink>
      </Nav.Item>
    </Nav> */}
 </>
  )
}

export default NavBarAdmin