import React,  {Component }from 'react'; 
import './App.css'; 
import Display from './Display'; 
import Controls from './Controls'; 
import {sendChatMessage, getChatMessages, getSelectedMessage, LogInUser, getLoginedUserList, LogoutUser }from './services'; 

const POLLING_INTERVAL = 1000; 
class App extends Component {

  constructor() {
    super(); 
    this.state =  {
      user:'', 
      users:[], 
      pendingUsername:'', 
      messages:[], 
      pendingMessage:'', 
      isLoggedIn:'', 
      userID:[], 
      idCounter:0, 
      userLoginedList: {}, 
      messageID:[]
    }; 
    this.updatePendingMessage = this.updatePendingMessage.bind(this); 
    this.updatePendingUsername = this.updatePendingUsername.bind(this); 
    this.executeLogin = this.executeLogin.bind(this); 
    this.sendMessage = this.sendMessage.bind(this); 
    this.pollMessages = this.pollMessages.bind(this); 
    this.updateMessageList = this.updateMessageList.bind(this); 
    this.executeLogout = this.executeLogout.bind(this); 
    this.updatePendingUserID = this.updatePendingUsername.bind(this); 
    this.updateLoginUserList = this.updateLoginUserList.bind(this); 
    this.pollLoninedUser = this.pollLoninedUser.bind(this); 
    this.getSelectMessage = this.getSelectMessage.bind(this)
  }

 
  componentDidMount() {
    this.pollMessages(); 
    this.pollLoninedUser(); 
  }

  updateMessageList(messageData ) {
 
    this.setState( {
      messages:messageData.messages, 
    }); 
  }

  pollMessages() {
    getChatMessages()
    .then(this.updateMessageList )
    .catch(error =>  {
      console.warn(`ERROR:$ {error}`); 
    }); 
    setTimeout(this.pollMessages, POLLING_INTERVAL); 
  }

  updatePendingMessage(e) {
    this.setState( {
      pendingMessage:e.target.value
    }); 
  }

  updatePendingUsername(e) {
    
    this.setState( {
      pendingUsername:e.target.value, 
    }); 
  }

  executeLogin(curusername) {
    console.log('logining')
    this.setState( {
      user:this.state.pendingUsername, 
      pendingUsername:'', 
      isLoggedIn:true, 
    }); 
    LogInUser(curusername); 
  }

  updateLoginUserList(loginedUserData  ) {
    console.log(loginedUserData); 
      if (loginedUserData.users != null && loginedUserData.users != '' && loginedUserData.users != undefined) {
        this.setState( {
     
          userLoginedList:loginedUserData.curUserList, 
          users:loginedUserData.users, 
          userID:loginedUserData.userID
        }); 
      }

    }
    
    pollLoninedUser() {
      
      getLoginedUserList()
      .then(this.updateLoginUserList)
      .catch(error =>  {
        console.warn(`ERROR:$ {error}`); 
      }); 
      
      setTimeout(this.pollLoninedUser, POLLING_INTERVAL); 
    }
  
  sendMessage() {

    sendChatMessage( {userID:this.state.userLoginedList[this.state.user].uid, source:this.state.user, text:this.state.pendingMessage })
    .then(this.updateMessageList)
    .catch(error =>  {
      console.warn(`ERROR:$ {error}`); 
    }); 

    this.setState( {
      pendingMessage:''
    }); 
  }

  executeLogout() {
    console.log('logouting'); 
    LogoutUser( {source:this.state.user}); 
    this.state.isLoggedIn = false; 
  }

  getSelectMessage() {
    getSelectedMessage(2)
  }

  render() {
    
    const isLoggedIn = this.state.isLoggedIn; 

    return ( < div className = "App" >  { < Display users =  {this.state.users}messages =  {this.state.messages}/> } < Controls
          isLoggedIn =  {isLoggedIn}
          sendMessage =  {this.sendMessage }
          message =  {this.state.pendingMessage}
          updatePendingMessage =  {this.updatePendingMessage }
          updatePendingUsername =  {this.updatePendingUsername }
          username =  {this.state.pendingUsername}
          userID =  {this.state.userID}
          getSelectMessage =  {this.state.getSelectMessage}
          executeLogin =  {this.executeLogin}
          executeLogout =  {this.executeLogout}
          updateLoginUserList =  {this.updateLoginUserList}
          getSelectMessage =  {this.getSelectMessage}
        />  </div > ); 
  }
}

export default App; 
