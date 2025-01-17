import './Home.css';
import events from './Enquiry_link';
import Main from './Main';
import reserve from './Reservationlink';


function Home({ onNav }) {

    const events_link = events.map(items => {
        return (
            <li className="event-nav" key={items.name} >
                <a onClick={onNav} className="event-nav-link" href="{items.path}" data-target={items.name}>INQUIRE NOW
                </a>
            </li>

        );
    });

    const reservations = reserve.map(items => {
        return (
            <li className="reserve-nav-home" key={items.name} >
                <a onClick={onNav} className="reserve-nav-link-home" href="{items.path}" data-target={items.name}>Book Table
                </a>
            </li>

        );
    });


    return (
        <div className="homepage">

            <div className='home-main'>

                <div className='home-main-text'>
                    <a href='/home.html'>
                        <img className="home-main-img" src='/res.jpg'
                            alt='Restaurant Interior Homepage' />
                    </a>
                    <div className="home-main-box">
                        <div className="home-main-para">Private Events</div>
                        <p className="home-main-para1">Now host your private events at <span className='name'> Saporé</span></p>
                        <div className='home-main-nav-link'>{events_link}</div>
                        {/* <div className='reservation-box'>
                            <span className='reservation-component-home'></span>
                        </div> */}
                        <div className='reservation-box'>{reservations}</div>
                    </div>




                </div>




            </div>
        </div>

    );

    <Main />
}

export default Home;