import React from 'react';

const MessageList = ({
  messages
}) => {
  const messageText = messages.map(
    message => (
      <li key={message.source + message.text} className="message">
        <span className="userID">{"user id: " +message.userID}</span>
        <span className="text">{ " message id: " +message.messageIDCount}</span>
        <span className="text">{ " message: "+message.text}</span>     
      </li>
    )
  );
  return (
    <ul className="messages">
      { messageText }
    </ul>
  );
};

export default MessageList;

