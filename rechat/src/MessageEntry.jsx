import React from 'react';

const MessageEntry = ({
  updatePendingMessage,
  message,
  sendMessage,
  executeLogout,
  getSelectMessage
}) => {

  const logingout = q => {  
    executeLogout();
  }

  return (
    <div className="message-controls">
      <input
        onChange={updatePendingMessage}
        onKeyDown={ (e) => {
          if(e.key === 'Enter') {
            sendMessage();
          }
        } }
        className="new-message"
        placeholder="Enter Message"
        value={message}
      />
      <button onClick={sendMessage} className="send-message">Send</button>
      <button onClick={logingout}>Logout</button>
      <button onClick={() =>{getSelectMessage()}}>Test Since = 2</button>
    </div>
  );
};

export default MessageEntry;
