import About from "./About";
import Home from "./Home";
import Menus from './Menus';
import Gallery from "./Gallery";
import Events from "./Events";
import './Main.css';
import Reservations from "./Reservations";





function Main({page, onNav}){
    return(
        <main className="main">
            {page === 'Home' && <Home onNav={onNav}/>}  
            {page === 'About' && <About onNav={onNav}/>}
            {page === 'Menus' && <Menus/>}
            {page === 'Gallery' && <Gallery/>}  
            {page === 'Events' && <Events onNav={onNav}/>}
            {page === 'Reservations' && <Reservations onNav={onNav}/>}
        
        </main>
        

    );

    
}

export default Main;