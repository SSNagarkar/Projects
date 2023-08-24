import './chat.css'

function Refresh({onRefresh}){
    return (
        <div className="controls">
          <button onClick={onRefresh} className="controls-refresh">Refresh</button>
        </div>
      );
    
}

export default Refresh