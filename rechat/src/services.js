export const getChatMessages = () => {
  return fetch(`/messages`, {
    method: 'GET',
  })
  .then( response => {
    if( response.ok ) {
      return response.json();
    } else {
      return Promise.reject('fetch-error');
    }
  });
};

export const sendChatMessage = ({ userID, source, text }) => {
  console.log(userID)
  return fetch(`/messages`, {
    method: 'POST',
    body: JSON.stringify( { userID,source, text } ),
    headers: new Headers({
      'content-type': 'application/json'
    })
  })
  .then( response => {
    if( response.ok ) {
      return response.json();
    } else {
      console.log('error');
      return Promise.reject('fetch-error');
    }
  });
};


export const getSelectedMessage = (index ) => {
  console.log(index)
  return fetch(`/messages/since=${index}`, {
    method: 'GET',
  })
  .then( response => {
    if( response.ok ) {
      return response.json();
    } else {
      console.log('error');
      return Promise.reject('fetch-error');
    }
  });
};


export const trackLogInUser = ({ source }) => {
  
  return fetch(`/user`, {
    method: 'POST',
    body: JSON.stringify( {  source } ),
    headers: new Headers({
      'content-type': 'application/json'
    })
  })
  .then( response => {
    if( response.ok ) {
      return response.json();
    } else {
      console.log('user error');
      return Promise.reject('user fetch-error');
    }
  });
};

export const LogoutUser = ({  source }) => {
  
  return fetch(`/user`, {
    method: 'DELETE',
    body: JSON.stringify( {  source} ),
    headers: new Headers({
      'content-type': 'application/json'
    })
  })
  .then( response => {
    if( response.ok ) {
      return response.json();
    } else {
      console.log('user error');
      return Promise.reject('user fetch-error');
    }
  });
};

export const getLoginedUserList = () => {
  return fetch(`/user`, {
    method: 'GET',
  })
  .then( response => {
    if( response.ok ) {
      return response.json();
    } else {
      return Promise.reject('fetch-error');
    }
  });
};


export const LogInUser = ( source ) => {
  console.log(source)
  return fetch(`/session/${source}`, {
    method: 'POST',
    body: JSON.stringify(  { source}  ),
    headers: new Headers({
      'content-type': 'application/json'
    })
  })
  .then( response => {
    if( response.ok ) {
      return response.json();
    } else {
      console.log('user error');
      return Promise.reject('user fetch-error');
    }
  });
};


