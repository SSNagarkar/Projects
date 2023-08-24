import './Events.css';
import {useRef} from 'react';
import { useState, useEffect } from 'react';
import reserve from './Reservationlink';
import about from "./Aboutlink";

function Events({onNav}){
    const modalRef = useRef(null);


    const reservations = reserve.map( items => {
        return(
            <li className="reserve-nav" key = {items.name} >      
                <a onClick={onNav} className="reserve-nav-link" href="{items.path}" data-target={items.name}>Reservations
                </a>
            </li>
            
        );
    });


    const about_list = about.map( item => {
        return(
            <li className="event-nav" key = {item.name} >      
                <a onClick={onNav} className="event-nav-link" href="{item.path}" data-target={item.name}>Know More
                </a>
            </li>
            
        );
    });

   

    return(
    <div className="event-cards">
        <div className="firstcard">
            
                <h3 className ="card_heading1">Holiday Season Events</h3>
                <img className ="card_image1" src="https://images.unsplash.com/photo-1543258103-a62bdc069871?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8SG9saWRheSUyMFNlYXNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" 
                     alt="Holiday Season Card"/>

                <p className='first-card-para1'>This Holiday Season book your table for special events!</p>
                <a className="card_link_open"  onClick={()=> {modalRef.current.showModal()}} type='button'>Book Now</a> 
                <dialog className='modal'  ref={modalRef}>

                <h2 className="modal-form-heading">Host my Event</h2>                    
                    <p className="modal-form-contents">Reserve/Book a table for your special event!</p>
                    <div class="modal-form-button1">
                   <button class="modal-form-button-close" onClick={() => modalRef.current.close()} type="button">Cancel</button>
                   <span className='reservation-component-eventpage'>{reservations}</span>
                   </div>
               </dialog>
               </div>

            <div className="secondcard">
                <h3 className ="card_heading2">Private Event Dining</h3>
                <img className ="card_image2" src="https://images.unsplash.com/photo-1592642214481-a31c5468099a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8UHJpdmF0ZSUyMERpbmluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" 
                    alt="Private Dining card"/>
                    <p className='second-card-para2'>We host your events like nobody else with Fine Dine!</p>
                
                <a className="card_link_open" onClick={()=> {modalRef.current.showModal()}} type='button'>Book Now</a> 
                <dialog className='modal'  ref={modalRef}>
                    <h2 className="modal-form-heading">Host my Event</h2>
                    
                    <p className="modal-form-contents">Reserve/Book a table for your special event!</p>
                    <div class="modal-form-button1">
                   <button class="modal-form-button-close" onClick={() => modalRef.current.close()} type="button">Cancel</button>
                   <span className='reservation-component-eventpage'>{reservations}</span>
                   </div>
                </dialog>
            </div>

            <div className="thirdcard">
                <h3 className ="card_heading3">Culinary Events</h3>
                <img className ="card_image3" src="https://images.unsplash.com/photo-1594046243098-0fceea9d451e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y3VsaW5hcnl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" 
                     alt="Culinary Event card"/>
                <p className='third-card-para3'>Take a look at our Image Gallery for Culinary Events!</p>
                
                <a className="card_link3" >{about_list}</a>
            </div>

            <div className ="fourthcard">
                <h3 className ="card_heading4">Cocktail/Moctail Making</h3>
                <img className ="card_image4" src="https://images.unsplash.com/photo-1514361659284-59851c90d011?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGNvY2t0YWlsJTIwbWFraW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" 
                    alt="Cocktail/Mocktail making event card"/>
                <p className="fourth-card-para4">Our famous Cocktail Making Event. Visit our Gallery!</p>
                <a className="card_link4" >{about_list}</a>
            </div>   
    </div>
    );
}

export default Events;