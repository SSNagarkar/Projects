import './Header.css';
import NavMenu from './NavMenu.jsx';
import menu from './NavMenu.js';
import NavigationMenu from './NavigationMenu';
import reserve from './Reservationlink';
import ThemeSwitcher from './ThemeSwitcher';

//import Reservations from './Reservations';


function Header({ onNav, theme, toggleTheme }) {
    const reservations = reserve.map(items => {
        return (
            <li className="reserve-nav" key={items.name} >
                <a onClick={onNav} className="reserve-nav-link" href="{items.path}" data-target={items.name}>Book Table
                </a>
            </li>

        );
    });


    return (
        <header className="header">
            <a className="skiptomain" href="main.html">Skip to Content</a>

            <div className='restaurant-logo'>
                <img className="header-logo" src="/Restaurant Logo.png"
                    alt="Pasta logo" />
                <img className="header-logo_dark" src="/Dark Theme.png"
                    alt="Pasta logo" />
                <div className='header-main'>
                    <h1 className="header-title">Saporé</h1>
                    <p className="home-header-para3">Where flavor speaks Italian</p>
                </div>
            </div>

        

            {/* </p> */}
            <div className='header-2'>

                <div className="header-navmenu1">
                    <nav className="nav">
                        {menu.map((item) => (
                            <a onClick={onNav} className="global-nav-link" href="{item.path}" data-target={item.name}>{item.name}
                            </a>
                        ))}
                        <span className='reservation-component'>{reservations}</span>
                    </nav>


                </div>

            
                <NavMenu className="header-navmenu" onNav={onNav} />
                
                {/* <span className='reservation-component'>{reservations}</span> */}

            </div>

            <ThemeSwitcher className="header-themeswitcher" theme={theme} toggleTheme={toggleTheme} />


        </header>

    );

}

export default Header;