import './App.css';
import './login.css'

function Loading({ className='loading', children='Loading...' }) {
    return (
      <div>
        <div className="loading">{children}</div>
        <div className="gg-spinner"></div>
        
      </div>
      
      
    );
  }
  
  export default Loading;