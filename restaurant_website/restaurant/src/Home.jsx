import './Home.css';
import events from './Enquiry_link';
import Main from './Main';
import reserve from './Reservationlink';


function Home({onNav}){

    const events_link = events.map( items => {
        return(
            <li className="event-nav" key = {items.name} >      
                <a onClick={onNav} className="event-nav-link" href="{items.path}" data-target={items.name}>INQUIRE NOW
                </a>
            </li>
            
        );
    });

    const reservations = reserve.map( items => {
        return(
            <li className="reserve-nav" key = {items.name} >      
                <a onClick={onNav} className="reserve-nav-link" href="{items.path}" data-target={items.name}>Reservations
                </a>
            </li>
            
        );
    });


    return(
    <div className="homepage">
        <div className='home-header'>
        <p className="home-header-para1">Welcome to</p>
        <p className="home-header-para2">Sicilia</p>
        <p className="home-header-para3">A Classic restaurant specializing in Itialian cuisine of the highest quality made with Love</p>
        <p className="home-header-para4">Book your table now!
        <span className='reservation-component'>{reservations}</span>

        </p>
        </div>
        <div className='home-main'>
            <a href='/home.html'>
            <img className="home-main-img" src='https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
            alt='Restaurant Interior Homepage'/>
            </a>
            <div className='home-main-text'>
            <div className="home-main-para">Private Events</div>
            <p className="home-main-para1">Now host your private events at Sicilia</p>
            {/* <a href="events.html" className='home-main-nav-link'>Inquire Now</a> */}
            <div className='home-main-nav-link'>{events_link}</div>
            
            </div>
            
        </div>
    </div>
    
    );

    <Main/>
}

export default Home;