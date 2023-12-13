import React,{useEffect,useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { Container,Table } from 'react-bootstrap'
import { getAllUsers,deleteUser } from '../../actions/userAction'
import Loader from '../../components/Loader'
import {Error} from '../../components/Error'
import {AiFillDelete, AiFillEdit} from 'react-icons/ai'


const UserList = () => {
  const userState=useSelector((state)=> state.getAllUsersReducer)
  const {loading,error,users}=userState
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(getAllUsers())
  },[dispatch])
  return (
    <>
    { loading && (<Loader/>)}
    {error && (<Error error="wrong fteching"/>)}
  
    
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>User ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        { users && users.map((user)=>(
          <tr key={user._id}>
            <td>{user._id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>
              <AiFillDelete
              onClick={()=>{
                dispatch(deleteUser(user._id));
              }}/>
            </td>
          </tr>
        ))}
    
      </tbody>
    </Table>
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
 
    </>
  )
}

export default UserList