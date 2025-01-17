import { useState } from 'react';
import menu from './NavMenu';
import './NavMenu.css';
import './gg-menu.css';
import Main from './Main';

function NavMenu({ className, onNav }){


    const list = menu.map( item => {
        return(
            <li className="global-nav-item" key = {item.name} >      
                <a onClick={onNav} className="global-nav-link" href="{item.path}" data-target={item.name}>{item.name}
                </a>
            </li>
            
        );
    });


    const[showMenu, setShowMenu] = useState(false);
    const menuIcon=  showMenu ? 'gg-close-r' : 'gg-menu';
    return(    
//         <nav className={`global-nav ${className}`}>
//             <button className="global-nav-button" onClick={()=> setShowMenu(!showMenu)}
//             aria-label={showMenu ? "Open Menu" : "Close Menu"}>
//             <span className= {menuIcon}/></button>
//            { showMenu &&
//             <ul className="global-nav-list">
//                 {list}
//             </ul>
// }
       
//         </nav>

<nav className="global-nav">
    <button
      className="global-nav-button"
      onClick={() => setShowMenu(!showMenu)}
      aria-label={showMenu ? "Close Menu" : "Open Menu"}
    >
      <span className={showMenu ? "gg-close-r" : "gg-menu"}></span>
    </button>
    {showMenu && (
      <ul className="global-nav-list">
        <li className="global-nav-item">
          {list}
        </li>
      </ul>
    )}
  </nav>

);
}

    


export default NavMenu;