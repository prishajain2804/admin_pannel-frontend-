import React, { useEffect, useState } from 'react'
import styles from "./user-list.module.css"

const UserList = () => {


  const [users,setUsers] = useState([]);

  useEffect(()=>{
   loadData();
  },[]);

  const loadData = async() =>{
    const response = await fetch("http://localhost:3001/users");
    const responseJSON = await response.json();
    
    console.log(responseJSON)
    setUsers(responseJSON);
  }
  return (
    <>
    <h1>I am UserList</h1>
    <table>
        <tr>
            <th>ID</th>
            <th>UserName</th>
            <th>Password</th>
            <th>Email</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Created</th>
            <th>Modified</th>
        </tr>

        {users.map((users)=>{
          return (
            <tr>
          <td>{users.id}</td>
          <td>{users.username}</td>
          <td>{users.password}</td>
          <td>{users.email}</td>
          <td>{users.first_name}</td>
          <td>{users.last_name}</td>
          <td>{users.created}</td>
          <td>{users.modified}</td>
          </tr>
        )})}
    </table>
    </>
  )
}

export default UserList