const express = require('express');
const bodyParser = require('body-parser');
const chat = require('./server/chat');
const app = express();
const PORT = 4000;

app.use(express.static('public'));
app.use(bodyParser.json());

app.get('/messages', ( request, response ) => {
  response.json(chat.messageData());
});


app.post('/messages', (request, response) => {
  const { userID,text, source } = request.body; 
  chat.addMessage({ userID,text, source });
  response.json(chat.messageData());
});

app.get('/messages/since=:number', ( request, response ) => {
  const num = request.param('number')
  console.log(num)
  response.json(chat.selectMessageData(num));
});

app.post('/session/:username',(request, response) =>{
  const userName = request.param('username');
  console.log(userName)
  chat.addUser(userName)
  response.json(chat.loginedUserData());
})

app.get('/user', ( request, response ) => {
  response.json(chat.loginedUserData());
});


app.delete(`/user`,(request, response) =>{
  const { source } = request.body;

  chat.removeUser({source})

  response.json(chat.loginedUserData());
})



app.listen(PORT, () => console.log(`listening on localhost:${PORT}`) );
