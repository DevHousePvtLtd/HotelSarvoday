import React,{useContext,useState} from 'react';
import Datepicker from './DatePickerOfBooking';
import { MainContest } from '../store/Context';





const Booking = (props) => {
    const Ctx = useContext(MainContest);
    const [arrive, setArrive] = useState(true);
    // const [departure, setDeparture] = useState(false);


    const ondatePicker = ()=>{
        setArrive(!arrive);
        if (arrive){
            Ctx.setDatePicker(true);
        }
        else{
            Ctx.setDatePicker(false);
        }
    }
    const handelDate= () =>{

    }

    return (
       <>
        <div className="bookingContainer">
            <div className="bookingHeader">
                <div className="bookingButton">
                    <p>Book Your Stay</p>
                </div>
                <div className="bookingButton">
                    <p>Book Your Table</p>
                </div>
            </div>
            <div className="bookingBody">
                <div className="formItem dateselect">
                    <div className="Data">
                        <div className="Title">
                            <p>Check In - Check Out</p>
                        </div>
                        <div className="Input">
                            <div className="picker-row">
                                    <p>Arive</p>
                                <svg width="32" height="19" viewBox="0 0 32 19" xmlns="http://www.w3.org/2000/svg"><path d="M31.872 9.136L23.613.163A.523.523 0 0 0 22.88.14a.565.565 0 0 0-.025.75l7.436 8.082H.516A.523.523 0 0 0 0 9.5c0 .29.232.528.516.528h29.775l-7.436 8.082a.56.56 0 0 0 .025.75c.197.19.518.194.733-.025l8.259-8.973a.577.577 0 0 0 0-.725z" fill="#A6956D" fill-rule="nonzero"></path></svg>
                                    <p>Departure</p>
                            </div>
                            <ion-icon name="today-outline"></ion-icon>
                            <div className="calender">
                                     <Datepicker className="date-input arive"/>
                                     <Datepicker className="date-input depature" />
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="formItem">
                    <div className="Data">
                        <div className="Title">
                            <p>Rooms</p>
                        </div>
                        <div className="Input">
                            <div className="drop">
                                
                                <select className="title" required>
                                    <option hidden className="hidden">1 Room</option>
                                    <option >1 Room</option>
                                    <option >2 Rooms</option>
                                    <option >3 Rooms</option>
                                    <option >4 Rooms</option>
                                    <option >5 Rooms</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="formItem">
                    <div className="Data">
                        <div className="Title">
                            <p>Guests</p>
                        </div>
                        <div className="Input">
                            <div className="dropdown">
                                <div className="selector-text">
                                    <span>1</span><p> Adult | 1 Child</p>
                                </div>
                                <input placeholder="1 room" />
                                <div className="dropdown-content">
                                    <select className="title" required>
                                        <option hidden className="hidden">1 Adult</option>
                                        <option >1 Adult</option>
                                        <option >2 Adults</option>
                                        <option >3 Adults</option>
                                        <option >4 Adults</option>
                                        <option >5 Adults</option>
                                    </select>
                                    <select className="title" required>
                                        <option hidden className="hidden">1 Child</option>
                                        <option >1 Child</option>
                                        <option >2 Childs</option>
                                        <option >3 Childs</option>
                                        <option >4 Childs</option>
                                        <option >5 Childs</option>
                                    </select>
                                </div>
                            </div>
                           
                            
                        </div>
                    </div>
                </div>
                <div className="formItem">
                    <button className="submit">Check Availability</button>
                </div>
            </div>
        </div>
       </>
    );
};
export default Booking;