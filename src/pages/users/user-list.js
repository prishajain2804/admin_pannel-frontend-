import React, { useEffect, useState } from "react";
import styles from "./user-list.module.css";
import { Link } from "react-router-dom";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const response = await fetch("http://localhost:3001/users");
    const responseJSON = await response.json();

    console.log(responseJSON);
    setUsers(responseJSON);
  };
  return (
    <>
      <h1>I am UserList</h1>
      <Link to="/new-user">New User</Link>
      <div style={{ overflowX: "auto" }}>
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
            <th>Edit</th>
            <th>Delete</th>
          </tr>

          {users.map((users) => {
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
                <td>
                  <Link to={`/edit-user?id=${users.id}`}>Edit User</Link>
                </td>
                <td>
                  <button
                    onClick={async () => {
                      const requestOptions = {
                        method: "DELETE",
                        headers: { "Content-Type": "application/json" },
                       
                      };
            
                      const response = await fetch(`http://localhost:3001/users/${users.id}`,
                        requestOptions
                      );
            

                     
                      const responseJSON = await response.json();

                      console.log(responseJSON);

                      loadData();
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
};

export default UserList;
