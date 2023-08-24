import { useState, useRef, useEffect } from 'react';
import './chat.css'

const smileys = {
  ':)': '😃',
  ':D': '😀',
  ';)': '😉',
  ':(': '😞',
  ':O': '😲'
  
};



function ChatForm({ chats, users, onAddMessages }){
  
    const [message , setMessage ] = useState('');
    const [user , setUser ]= useState('');
    const [newMessage, setNewMessage] = useState('');

    const messageList = useRef(null);
    
  // Function to replace emoticon codes with emoji characters
  const replaceEmoticons = (message) => {
    let replacedMessage = message;
    for (const code in smileys) {
      const emoji = smileys[code];
      replacedMessage = replacedMessage.replace(new RegExp(escapeRegExp(code), 'g'), emoji);
    }
    return replacedMessage;
  };

  // Regex to escape special characters in string of message

  const escapeRegExp = (string) => {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  };
 

     const scrollToBottom = () => {
      if (messageList.current) {
        messageList.current.scrollTop = messageList.current.scrollHeight;
      }
    };

   
    useEffect(() => {
      scrollToBottom();
    },[chats, newMessage]);
   
  
   
    const userList = Array.from(users);
   

    function onSubmit(e){
        e.preventDefault(); 
        setUser('');
        setNewMessage('');
        setMessage(replaceEmoticons(newMessage));
        setMessage('');
       
    }

   

    
    return(
     <div className="chat-container">
        <div className="users-messages">
       
        <ul className="users">
        <div className="active">Active Users</div>
        { Object.values(userList).map( (usr, index) => (
            <div  className="sender-info" key = {index}>
              <div className = "gg-user" ></div>
                
                <div className="sender">{usr}</div>
            </div>
            
          ))}

        </ul>

        

         <ul className="messages" ref={messageList} >
         <div className="msg">Messages</div>
         
          { chats && chats.messages && Object.values(chats.messages).map( (msg, index) => (
            
            <li className="message-list" key = {index} >
             
            <div className="incoming-messages">
              {index > 0 && chats.messages[index-1].username === msg.username ? (
                
                 <div className="same-user-text">{null}</div> ):( 
                  
                <div className="user-text">{msg.username}  </div>
              )}
              
              <div className="message-text"> {replaceEmoticons(msg.message)}</div> 
            </div>
            
            </li>
            
          ))}
         
        </ul>
        
  
        
       <div className ="outgoing">
       <form action= "/chat" method = "POST"  onSubmit={onSubmit}>
       <div className="outgoing-form">
       <input 
         type = "text" className="to-send" 
         placeholder="Type a message"
         value={newMessage} 
         
         onInput = {(e) => setNewMessage(e.target.value)}/>
       
       <button className="send-button" type="submit" 
        onClick={() => {    
        onAddMessages(newMessage)}}>Send</button> 
      </div>  
     </form>
  </div>
  </div>
  </div>
    

    );


}


export default ChatForm;