import React from 'react';


const Login = ({
  updatePendingUsername,
 
  executeLogin,
  username,
 
}) => {
 
  const loginOnEnter = e => {
    if(e.key === 'Enter') {
      executeLogin(username);
      
    }
  };
  
  return (
    
    <div className="login-controls">
      <input
        className="username"
        placeholder="Your user name"
        onChange={ updatePendingUsername }
        onKeyDown={ loginOnEnter }
        value={username}
      />
      <button onClick={() =>{   
        if(username!= null && username != '' && username != undefined){
            executeLogin(username);
        }
        }}>Login</button>
    </div>
  );
};

export default Login;
