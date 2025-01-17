import { useState , useEffect} from 'react';
import './Reservations.css';
import home from './Homelink.js';


function Reservations({onNav}){
    const initialValue = {uname :"", mail : "", p_number : ""};
    const[formValues, setFormValues] = useState(initialValue);
    const[inputErrors, setInputErrors] = useState({});
    const[isSubmitted, setIsSubmitted] = useState(false);


    const home_nav = home.map( item => {
        return(
            <li className="home-nav" key = {item.name} >      
                <a onClick={onNav} className="home-nav-link" href="{item.path}" data-target={item.name}>Home
                </a>
            </li>
            
        );
    });
    

   const  handleChange = (event) => {
    const{ name , value } = event.target;        
    setFormValues({ ...formValues, [name]: value});

    console.log(formValues);
    
   }
   
    const handleSubmit = (event) => {
        event.preventDefault();
        setInputErrors(Validate(formValues));
        setIsSubmitted(true);
    }

    const Validate = (values) =>{
        const errors ={};
        
        const exp_1 = /@/
        const exp_2 = /[0-9]/;

        if(!values.uname){
            errors.uname = "Name is required";
        }

        if(!values.mail){
            errors.mail = "Email is required";
        }
        else if (!exp_1.test(values.mail)){
            errors.mail = "Enter a valid email including @";
        }

        if(!values.p_number){
            errors.p_number = "Phone Number is required";
        }
            else if (!exp_2.test(values.p_number)){
                errors.p_number = "Enter a valid phone number";
            }
        return errors;

    }

    useEffect(() => {
        console.log(inputErrors);
        if (Object.keys(inputErrors).length == 0){
            console.log(initialValue);
        }

    }, [inputErrors])


    const onReserve = () =>{
        {Object.keys(inputErrors).length === 0 && isSubmitted ? (<div className='success-message' 
        >Your Reservation is successfull!</div>) : (<div className='error-message'>Please enter required details</div>)}
    }

    return(
        <div className="reservation-form">
            
            <h2 className="reservation-form-title">Reserve Your Table</h2>

            <form id="reservation-root-form" onSubmit={handleSubmit} method="POST">
                <div className="reservation-form-contents">
                    <label className="username" ><span className='required'>*</span>Name:</label>
                    <input placeholder='Enter name' className="name-input" type="text" name="uname" 
                    value={formValues.uname}
                    onChange={handleChange}/>
                    <span id="name-error">{inputErrors.uname}</span>

                    <label className="emailid"><span className='required'>*</span>Email:</label>
                    <input placeholder='Enter valid email' className="email-input" type="text" name="mail" 
                    value={formValues.mail}
                    onChange={handleChange}/>
                    <span id="email-error">{inputErrors.mail}</span>
                    

                    <label className="phone-number"><span className='required'>*</span>Phone Number:</label>
                    <input placeholder='Enter phone number' className="phone-input" type="text" name="p_number" 
                    value={formValues.p_number}
                    onChange={handleChange}/>
                    <span id="phone-error">{inputErrors.p_number}</span>
                    

                    <label className="guest-dropdown"> Number of Guests</label>
                        <select name="guest-dropdown-options" id="options" >
                            <option value="">Please Select</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5+</option>
                        </select>
                   

                    <label className="reservation-day"> Select a day</label>
                  
                        <select name="reservation-day-options" id="day-options" >
                            <option value="">Please Select</option>
                            <option value="day1">Today</option>
                            <option value="day2">Tomorrow</option>                            
                        </select>

                        </div>
                        
                        
                    <div className='form-content1'>
                    <input className='check' type="checkbox" name="checked" />
                    <label className="checkbox"> Want to receive the confirmation on email?
                        
                    </label>
                    </div>

                    <div className='form-content2'>
                    <label className="button"> 
                   
                        <button className="reserve-button" onClick={onReserve} type="submit">Reserve</button>
                     
                        </label>
                        </div>

                        {Object.keys(inputErrors).length === 0 && isSubmitted ? (<div className='success-message' 
        >Great! Your table is reserved. See you soon.</div>) : (<div className='error-message'></div>)}

                        {/* <div className='success-reserve'>Reservation is successfull </div> */}
                        <p className='home-nav-text'>{home_nav}</p>
                        
                        
            </form>
        </div>
    );
}

export default Reservations;