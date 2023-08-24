
import { useState, useEffect } from 'react';

import './App.css';

import {
  LOGIN_STATUS,
  CLIENT,
  SERVER,
} from './constants';

import {
  fetchSession,
  fetchLogin,
  fetchChats,
  fetchActiveUsers,
  fetchAddMessages,
  fetchLogout,
  
} from './services';

import LoginForm from './LoginForm';
import Errors from './Errors';
import Loading from './Loading';
import ChatForm from './ChatForm';
import Logout from './Logout';
import Refresh from './Refresh';







function App() {

  const [ error, setError ] = useState('');
  const [ username, setUsername] = useState('');
  const [ loginStatus, setLoginStatus ] = useState(LOGIN_STATUS.PENDING);
  const [ isChatPending, setIsChatPending ] = useState(false);
  const [ messages, setMessages ]= useState('');
  const [ users, setUsers] = useState('');
  const [ chats , setChats ] = useState({
    messages: messages,
    username : username
  });


  function onLogin( username ) {
    setIsChatPending(true);
    fetchLogin(username)
    .then( name => {
      setError(''); 
      console.log(error)
      setIsChatPending(false);
      setUsername(username);
      setLoginStatus(LOGIN_STATUS.IS_LOGGED_IN);
      return fetchChats();
    })
    .then(chat =>{
      setError('');
      setMessages(chat);
      setChats(chat);
      setIsChatPending(false);
      setLoginStatus(LOGIN_STATUS.IS_LOGGED_IN);
      return fetchActiveUsers()
    })
    
    .then(users =>{
      setError('');
      setIsChatPending(false);
      setUsers(users);
      
    })
    .catch( err => {
      setError(err?.error || 'ERROR');
      
    })
    ;
}





function onAddMessages(message){
  setIsChatPending(false);
  fetchAddMessages(message)
  .then(msg =>{
    setChats(msg)
    setMessages(msg);  
    setLoginStatus(LOGIN_STATUS.IS_LOGGED_IN);
    
    setError('');
  })
  .catch( err => {
    setError(err?.error || 'ERROR');
  });
}




  function onLogout() {
    setError('');
    setUsername('');
    setLoginStatus(LOGIN_STATUS.NOT_LOGGED_IN);
    setChats('');
    fetchLogout() 
    .catch( err => {
      setError(err?.error || 'ERROR'); 
    });
  }


  function checkForSession() {
    fetchSession()
    .then( session => { 
      setUsername(session.username);
      setLoginStatus(LOGIN_STATUS.IS_LOGGED_IN); 
      return fetchChats(); 
    })
    .catch( err => {
      if( err?.error === SERVER.AUTH_MISSING ) {
        return Promise.reject({ error: CLIENT.NO_SESSION }) 
      }
      return Promise.reject(err); 
    })
    .then( chats => {
      setError('');
      setMessages(chats);
     
       setChats(chats);
      
      
      setIsChatPending(false);
      return fetchActiveUsers()
    })
    .then(users =>{
      setError('');
      setIsChatPending(false);
      setUsers(users);
    })
    .catch( err => {
      if( err?.error === CLIENT.NO_SESSION ) { 
        setLoginStatus(LOGIN_STATUS.NOT_LOGGED_IN);
        return;
      }
      setError(err?.error || 'ERROR'); 
    });

  }


  /// Refresh
function onRefresh(){
  fetchChats()
        .then(chat => {
          
          setError('');
          setMessages(chat);
          setChats(chat);
          setIsChatPending(false);
          return fetchActiveUsers();
        })
        .then(users => {
          setError('');
          setIsChatPending(false);
          setUsers(users);
        })
        .catch(err => {
          setError(err?.error || 'ERROR');
        });
}





  useEffect(
    () => {
      checkForSession();
    },
    [] 
  );

  return (
    <div className="app">
       <main className="main">
        <div className='error-content'>  
        { error && <Errors error={error}/> } 
        { loginStatus === LOGIN_STATUS.PENDING &&  !username && <Loading className="login-waiting">Loading.....</Loading> }       
        { loginStatus === LOGIN_STATUS.NOT_LOGGED_IN &&  <LoginForm onLogin={onLogin}/> }
        { loginStatus === LOGIN_STATUS.IS_LOGGED_IN && (
          <div className="content">
            <ChatForm chats = {chats} users ={users} onAddMessages={onAddMessages} onLogout={onLogout}/>
            <Logout onLogout={onLogout}/>
            <Refresh onRefresh={onRefresh}></Refresh>
          </div>
        )}
       
        
        </div>
       </main>
    </div>
  );
}

export default App;


