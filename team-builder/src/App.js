import React, { useState } from 'react';
import './App.css';
import Form from './components/Form.js';
import TeamMemberList from './components/TeamMemberList.js';

function App() {
  const [teamMemberList, setTeamMemberList] = useState([{
    name: 'Brennan',
    email: 'test@test.com',
    role: 'Software Engineer'
  },
  {
    name: 'Bob',
    email: 'test@test.com',
    role: 'Web Developer'
  }]);

  return (
    <div className="App">
      <Form teamMemberList={teamMemberList} setTeamMemberList={setTeamMemberList} />
      <TeamMemberList teamMemberList={teamMemberList} />
    </div>
  );
}

export default App;
