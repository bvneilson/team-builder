import React from 'react';

const TeamMemberList = (props) => {

  return (props.teamMemberList.map((teamMember) => {
    return <div className="team-member">
              <p>{teamMember.name}</p>
              <p>{teamMember.email}</p>
              <p>{teamMember.role}</p>
            </div>
  }));
}

export default TeamMemberList;
