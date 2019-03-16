import React from 'react';
let newid = 0;

const UserList = ({
  users
}) => {
  
  const userText = users.map(
    user => (<li key={user} className="user">{user}</li>)
  );
 //const userText = (<li key={user} className="user">{user}</li>)
  
  return (
    
    <ul className="active-users">
      { userText }
    </ul>
  );
};

export default UserList;