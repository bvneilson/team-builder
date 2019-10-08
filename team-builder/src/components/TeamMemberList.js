import React, { useState } from 'react';

const TeamMemberList = (props) => {
  const [teamMemberList, setTeamMemberList] = useState([{
    name: 'Brennan',
    email: 'test@test.com',
    role: 'Software Engineer'
  }]);

  return (teamMemberList.map((teamMember) => {
    return <div className="team-member">
              <p>{teamMember.name}</p>
              <p>{teamMember.email}</p>
              <p>{teamMember.role}</p>
            </div>
  }));
}

export default TeamMemberList;
