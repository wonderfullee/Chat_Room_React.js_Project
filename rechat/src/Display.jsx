import React from 'react';
import UserList from './UserList';
import MessageList from './MessageList';

const Display = ({
  users,
  messages
}) => {

  return ( 
    <div className="passive-area">
      <UserList users={users}/>
      <MessageList messages={messages}/>
      <ul className="messages">
      </ul>
    </div>
  );
};

export default Display;
