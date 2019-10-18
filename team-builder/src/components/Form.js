import React, { useState } from 'react';

const Form = (props) => {

  const [newMember, setNewMember] = useState({name: '', email: '', role: ''})

  const handleChange = function (event) {
    setNewMember({ ...newMember, [event.target.name]: event.target.value });
  }

  const handleSubmit = function (event) {
    event.preventDefault();
    props.setTeamMemberList([...props.teamMemberList, newMember]);
    event.target.reset();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name: </label>
      <input type="text" placeholder="Name" name="name" id="name" onChange={handleChange}></input><br /><br />
      <label htmlFor="email">Email: </label>
      <input type="text" placeholder="Email" name="email" id="email" onChange={handleChange}></input><br /><br />
      <label htmlFor="role">Role: </label>
      <input type="text" placeholder="Role" name="role" id="role" onChange={handleChange}></input><br /><br />
      <input type="submit" value="Add Team Member" />
    </form>
  );
}

export default Form;
