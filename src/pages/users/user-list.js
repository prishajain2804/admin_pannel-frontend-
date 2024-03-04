import React from 'react'
import styles from "./user-list.module.css"

const UserList = () => {
  return (
    <>
    <h1>I am UserList</h1>
    <table>
        <tr>
            <th>ID</th>
            <th>UserName</th>
            <th>Password</th>
            <th>Email</th>
            <th>FirstName</th>
            <th>Last Name</th>
            <th>Created</th>
            <th>Modified</th>
        </tr>

    </table>
    </>
  )
}

export default UserList