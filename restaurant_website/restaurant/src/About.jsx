import Main from "./Main";
import about from "./Aboutlink";
import about1 from "./Aboutlink1";
import './About.css';

import { useState } from 'react';


function About({onNav, className}){

   
    const about_list = about.map( item => {
        return(
            <li className="about-nav" key = {item.name} >      
                <a onClick={onNav} className="about-nav-link" href="{item.path}" data-target={item.name}>{item.name}
                </a>
            </li>
            
        );
    });

    const about1_list = about1.map( item => {
    return(
        <li className="about-nav" key = {item.name} >      
            <a onClick={onNav} className="about-nav-link" href="{item.path}" data-target={item.name}>{item.name}
            </a>
        </li>
        
    );
});
    const[showAbtMenu, setShowAbtMenu] = useState(false);
    return(
        <div className="about-page-main">
            <div className="about-page-main-content">
            <h2 className="about-page-story">Our Story</h2>
            <p className="about-page-story-p1">
                Sicilia is a restaurant inspired by the rich cusine of the largest island in Mediterranean sea known as 'Sicily'.
            </p>
            <p className="about-page-story-p1">
                Sicily is home to world-famous Itilian food and we at <span className="p1">Sicilia</span> serve you <span className="p1">'the Best & the Fresh'</span> Itilian food.
            </p>
            <p className="about-page-story-p1">
                Our renowned chef's creates a magic on each plate and gives you a classic touch with taste of Sicilian flavours.
            </p>
            <p className="about-page-story-p1">
                When in Sicilia, don't miss our delecious <span className="p1">'Chocolate Tiramisu'</span> !
                </p>
            <p className="about-page-story-p1">
            For more Infomration about our Menu and Gallery
            </p>

            <div>
                <nav id={`nav-dropdown-menu ${className}`}>
                    <ul className="menubar">
                        <li className="menubar-list">
                           
                            <a type="button" className="menubar-link"  onClick={()=> setShowAbtMenu(!showAbtMenu)}>Navigate </a>
                        </li>
                    
                        {showAbtMenu &&
                        <ul id="menubar-options">
                            {about_list}
                            {about1_list}
                        </ul>
                    
                     }
                    </ul>
                    <Main/>

                </nav>
                
                </div>
           
                </div>
        </div>
       
    );
    <Main/>
}

export default About;
