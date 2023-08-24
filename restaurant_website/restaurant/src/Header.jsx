import './Header.css';
import NavMenu from './NavMenu.jsx';
import reserve from './Reservationlink';
import ThemeSwitcher from './ThemeSwitcher';
import Reservations from './Reservations';


function Header({onNav, theme, toggleTheme}){
    const reservations = reserve.map( items => {
        return(
            <li className="reserve-nav" key = {items.name} >      
                <a onClick={onNav} className="reserve-nav-link" href="{items.path}" data-target={items.name}>Reservation
                </a>
            </li>
            
        );
    });

    
    return(
        <header className="header">
            <a  className="skiptomain" href="main.html">Skip to Content</a> 
            <img className="header-logo" src="https://images.unsplash.com/photo-1542326237-94b1c5a538d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aXRhbGlhbiUyMGN1aXNpbmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                 alt="Pasta logo"/>
                 
                  
            <h1 className="header-title">Sicilia</h1>
            
            <div className='header-2'>
            
            
            <NavMenu className="header-navmenu" onNav={onNav}/>  
            
            
            <ThemeSwitcher  className="header-themeswitcher"  theme={theme} toggleTheme={toggleTheme}/> 
            
            </div>

            

           

                          
        </header>    

    );
    
}

export default Header;