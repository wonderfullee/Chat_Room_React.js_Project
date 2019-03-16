import React from 'react';


const UserList = ({
  users
}) => {
  
  const userText = users.map(
    user => (<li key={user} className="user" >{user}</li>)
  );
 
  
  return (
    
    <ul className="active-users">
      { userText }
    </ul>
  );
};

export default UserList;


