import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const EditUser = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const searchParams = new URLSearchParams(document.location.search);
  console.log(">>>>>" + searchParams.get("id"));

  const id = searchParams.get("id");

  useEffect(() => {
    console.log("UserName = " + username);
    console.log("Password = " + password);
    console.log("Email = " + email);
    console.log("FirstName = " + firstName);
    console.log("LastName = " + lastName);
    fetchUser();

    
  }, []);


  const fetchUser =async () =>{
    const response = await fetch(`http://localhost:3001/users/${id}`);
    
    const responseJSON = await response.json();
    console.log("user is " , responseJSON)
     

    setUsername(responseJSON.username);
    setPassword(responseJSON.password);
    setEmail(responseJSON.email);
    setFirstName(responseJSON.first_name);
    setLastName(responseJSON.last_name);

   
  }

  return (
    <form
      onSubmit={async (event) => {
        event.preventDefault();

        {
          console.log("UserName = " + username);
          console.log("Password = " + password);
          console.log("Email = " + email);
          console.log("FirstName = " + firstName);
          console.log("LastName = " + lastName);

          const data = {
            username: username,
            password: password,
            email: email,
            first_name: firstName,
            last_name: lastName,
          };

          const requestOptions = {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
          };

          const response = await fetch(
            `http://localhost:3001/users/${id}`,
            requestOptions
          );

          const responseJson = await response.json();

          console.log("data entered", responseJson);

          window.location.replace("http://localhost:3000/user-list");
        }
      }}
    >
      <label for="username">UserName:</label>
      <input
        type="text"
        name="username"
        id="username"
        value={username}
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      ></input>
      <br></br>
      <label for="password">Password:</label>
      <input
        type="text"
        name="password"
        id="password"
        value={password}
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      ></input>
      <br></br>
      <label for="email">Email</label>
      <input
        type="text"
        name="email"
        value={email}
        id="email"
        onChange={(event) => {
          setEmail(event.target.value);
        }}
      ></input>
      <br></br>
      <label for="first_name">First Name:</label>
      <input
        type="text"
        name="first_name"
        id="first_name"
        value={firstName}
        onChange={(event) => {
          setFirstName(event.target.value);
        }}
      ></input>
      <br></br>
      <label for="last_name">Last Name:</label>
      <input
        type="text"
        name="last_name"
        id="last_name"
        value={lastName}
        onChange={(event) => {
          setLastName(event.target.value);
        }}
      ></input>
      <br></br>

      <button type="submit">Submit</button>
    </form>
  );
};

export default EditUser;
