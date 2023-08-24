const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');


const PORT = process.env.PORT || 3000;

app.use(express.static('./build'));
app.use(cookieParser());
app.use(express.json());

const sessions = require('./sessions');
const users = require('./users');


const messages =  [{
    message:'',
    username: '',
}];

const userList = [];
const activeUsers = new Set(userList);


// Session Server
app.get('/api/session', (req, res) => {
    const sid = req.cookies.sid;
    const username = sid ? sessions.getSessionUser(sid) : '';
    if(!sid || !users.isValid(username)) {
      res.status(401).json({ error: 'auth-missing' });
      return;
  }

    
    res.json({ username });
});


app.post('/api/session', (req, res) => {
    const { username } = req.body;
    

    

    if(!users.isValid(username)) {
      res.status(400).json({ error: 'required-username' });
      return;
    }


    
    if(username.length > 20) {
      res.status(402).json({ error: 'invalid-username' });
      return;
    }

    if(username === 'dog') {
      res.status(403).json({ error: 'auth-insufficient' });
      return;
    }
  
    const sid = sessions.addSession(username);
  
    res.cookie('sid', sid);
    res.json(username);
});

app.delete('/api/session', (req, res) => {
    const sid = req.cookies.sid;
    const username = sid ? sessions.getSessionUser(sid) : '';
  
    if(sid) {
      res.clearCookie('sid');
    }

  
    if(username) {
     
      activeUsers.delete(username);
      sessions.deleteSession(sid, username);
      
    }
    
    
    
  
    console.log("Username:",username)
    res.json({username});
});
  



// Chats Server

app.get('/api/chats', (req, res) => {
    const sid = req.cookies.sid;
    const username = sid ? sessions.getSessionUser(sid) : '';
    if(!sid || !users.isValid(username)) {
      res.status(401).json({ error: 'auth-missing' });
      return;
    } 
    
    res.json({messages, username});
});


app.post('/api/chats', (req, res) => {
    const sid = req.cookies.sid;
    const username = sid ? sessions.getSessionUser(sid) : '';
    if(!sid || !users.isValid(username)) {
      res.status(401).json({ error: 'auth-missing' });
      return;
    }
    const { message } = req.body;
    if(!message || !message.match(/[A-Za-z0-9]/) ) {
      res.status(400).json({ error: 'required-message' });
      return;
    }
    
    messages.push({ message , username});
  
    res.json({ messages});
});



  
// Get Active Users

app.get('/api/users', (req, res) =>{
    const sid = req.cookies.sid;
    const username = sid ? sessions.getSessionUser(sid) : '';
    if( !username) {
      res.status(401).json({ error: 'auth-missing' });
      return;
    }
    if(sessions){
      const users = sessions.getSessionUser(sid);
     
      activeUsers.add(users);
     
      res.json(Array.from(activeUsers))
    }

    
    else{
      res.status(500).json({error: "internal-server-error"})
    }
});

app.post('/api/users', (req, res) => {
    const sid = req.cookies.sid;
    const username = sid ? sessions.getSessionUser(sid) : '';
    if(!sid || !users.isValid(username)) {
      res.status(401).json({ error: 'auth-missing' });
      return;
    }
  
    const { activeUsers } = req.body; 
   
  
    res.json([activeUsers]);
});












app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
