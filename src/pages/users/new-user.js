import React from 'react'

const NewUser= () => {
  return (

    <form>
      <label name="ID">Enter ID:</label>
      <input type="text" id="ID"></input><br></br>
      <label name="username">Enter UserName:</label>
      <input type="text" id="username"></input><br></br>
      <label name="password">Enter Password:</label>
      <input type="text" id="password"></input><br></br>
      <label name="firstname">Enter FirstName:</label>
      <input type="text" id="firstname"></input><br></br>
      <label name="lastname">Enter lastname:</label>
      <input type="text" id="lastname"></input><br></br>
      <label name="created">Created:</label>
      <input type="text" id="created"></input><br></br>
      <label name="modified">Modified:</label>
      <input type="text" id="modified"></input>
    </form>
  )
}

export default NewUser