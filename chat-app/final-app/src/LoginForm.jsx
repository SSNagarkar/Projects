import { useState } from 'react';
// import image from './leone-venter-pVt9j3iWtPM-unsplash.jpg';
import image from './pexels-ds-stories-6991497.jpg';
import './login.css';

function LoginForm({ onLogin }){
    const [username, setUsername] = useState('');

    function onChange(e) {
      setUsername(e.target.value);
    }

    function onSubmit(e){
        e.preventDefault(); 
        if(username) {  
         onLogin(username); 
    }
    }

    return (
        <div className="login">
        <img className="logo-image" src ={image} alt = "lets chat logo image"/>
         <div className='logo-content'>
            <span className='logo-heading'>Let's Chat </span>
            <span className='gg-userlane'></span>         
         </div>
         <div className='logo-message'>Login to continue</div>
          <form className="login-form" action="#/login" onSubmit={onSubmit}>
            <label>
              <span className='username'>Username:</span>
              <input className="login-username" value={username} onChange={onChange}/>
            </label>
            <div className='button'>
            <button className="login-button" type="submit">Login</button>
            </div>
          </form>
        </div>
    );
  

}

export default LoginForm;