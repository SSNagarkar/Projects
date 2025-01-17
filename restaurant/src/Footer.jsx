import './Footer.css';
import './gg-menu-footer.css';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function Footer(){
    return(
        <footer className='footer'>
            <ul className="footer-list">
                <li className="footer-list-social">                 
                    <span className='gg-instagram'></span>                 
                    <span className='gg-facebook'></span>
                    <span className='gg-twitter'></span>                              
                </li>

                <li className="footer-list-contact">
                    <span>Contact & Address</span>
                    <p> <PhoneIcon className='phone-icon'></PhoneIcon>
                        078-344-7685

                    </p>
                    <p><LocationOnIcon className="location-icon" />
                        419 Frankfurt Steet, NYC </p>
                </li>

                <li className="footer-list-hours">
                    <span>Opening Hours</span>
                    <p>Mon-Fri : 10 a.m to 7p.m</p>
                    <p>Sat-Sun : 10 a.m to 5p.m</p>
                </li>
                
            </ul>          
        </footer>
        

    );

    
}

export default Footer;