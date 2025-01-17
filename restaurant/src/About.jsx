import Main from "./Main";
import about from "./Aboutlink";
import about1 from "./Aboutlink1";
import './About.css';

import { useState } from 'react';


function About({ onNav, className }) {


    const about_list = about.map(item => {
        return (
            <li className="about-nav" key={item.name} >
                <a onClick={onNav} className="about-nav-link" href="{item.path}" data-target={item.name}>{item.name}
                </a>
            </li>

        );
    });

    const about1_list = about1.map(item => {
        return (
            <li className="about-nav" key={item.name} >
                <a onClick={onNav} className="about-nav-link" href="{item.path}" data-target={item.name}>{item.name}
                </a>
            </li>

        );
    });
    const [showAbtMenu, setShowAbtMenu] = useState(false);
    return (
        <div className="about-page-main">
            <div className="about-page-main-content">
                <h2 className="about-page-story">Our Story</h2>
                <div className="story">
                    At Saporé, we believe that food is more than just a meal—it’s an experience. Our journey began with a passion for creating unforgettable dining experiences that bring people together. Inspired by the rich flavors and timeless traditions, our team of chefs meticulously crafts every dish with the finest ingredients, bringing a blend of innovation and authenticity to each plate.
                    From intimate family dinners to grand celebrations, we’ve cultivated a space where guests can savor delicious food in a warm and welcoming atmosphere. Whether you’re joining us for a casual meal or hosting a private event, our goal is to offer exceptional service, exquisite flavors, and a memorable experience that keeps you coming back.
                    Come for the food, stay for the memories. 
                    <br/> <span className="greetings">Welcome to Saporé—where every bite tells a story.</span> 
                </div>
                <div>
                    <nav id={`nav-dropdown-menu ${className}`}>
                        <ul className="menubar">
                            <li className="menubar-list">

                                <a type="button" className="menubar-link" onClick={() => setShowAbtMenu(!showAbtMenu)}>Navigate </a>
                            </li>

                            {showAbtMenu &&
                                <ul id="menubar-options">
                                    {about_list}
                                    {about1_list}
                                </ul>

                            }
                        </ul>
                        <Main />

                    </nav>

                </div>

            </div>
        </div>

    );
    <Main />
}

export default About;
