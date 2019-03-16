const messages = [];
let curUserID = 0;
let counter = 0;
let messageIDCount = 0;
const activeUsers = {};
const activeUserID ={};
const username = {};
const userLoginedList = [];
const curUserList = {}
const curmessageID ={}


const addMessage = function({ userID,text, source }) {
  messageIDCount = messageIDCount +1;
  messages.push({ userID,source, text ,messageIDCount});
  activeUsers[source] = true;
  activeUserID[userID] = true;
 
};


const messageData = function() {
  
  return {  
    messages,
    users: Object.keys(activeUsers),
    cuserID: Object.keys(activeUserID),
    messageID: Object.keys(curmessageID)
  };
 
};
const selectMessageData = function(num){
    messages.splice(0,num)
    return {
    messages,
    users: Object.keys(activeUsers),
    cuserID: Object.keys(activeUserID),
    messageID: Object.keys(curmessageID)
    }
};


const addUser = function(source ) {
   if(curUserList.hasOwnProperty(source )){
    curUserList[source] = {uid: curUserList[source].uid }
   }else {
    counter = counter +1;
    curUserList[source] = {uid: counter}
   }
   username[source] = true;
   curUserID = curUserList[source].uid;

 };

const loginedUserData = function() {
  
  return {
    curUserList,
    users: Object.keys(username),
    userID: curUserID
  };
 
};
const removeUser = function({source }) { 
  delete curUserList[source]
  delete username[source];

};

module.exports = {
  messages,
  addMessage,
  messageData,
  addUser ,
  loginedUserData,
  userLoginedList,
  removeUser,
  selectMessageData

};
