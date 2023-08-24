function Logout({ onLogout }) {
    return (
      <div className="controls">
        <button onClick={onLogout} className="controls-logout">Logout</button>
        
      </div>
    );
  }
  
  export default Logout;