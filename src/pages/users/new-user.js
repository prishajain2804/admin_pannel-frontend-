import React, { useEffect, useState } from "react";

const NewUser = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  useEffect(() => {
    console.log("UserName = " + username);
    console.log("Password = " + password);
    console.log("Email = " + email);
    console.log("FirstName = " + firstName);
    console.log("LastName = " + lastName);
  }, [username, password, email, firstName, lastName]);

  return (
    <form
      onSubmit={async(event) => {
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
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
          };

          const response = await fetch("http://localhost:3001/users",
            requestOptions
          );

          const responseJson = await response.json();

          console.log("data entered",responseJson);
          window.location.replace("http://localhost:3000/user-list");
        }
      }}
    >
      <label for="username">UserName:</label>
      <input
        type="text"
        name="username"
        id="username"
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
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      ></input>
      <br></br>
      <label for="email">Email</label>
      <input
        type="text"
        name="email"
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
        onChange={(event) => {
          setLastName(event.target.value);
        }}
      ></input>
      <br></br>

      <button type="submit">Submit</button>
    </form>
  );
};

export default NewUser;
