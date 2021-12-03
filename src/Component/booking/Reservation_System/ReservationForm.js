import React from 'react';


export default function ReservationForm() {
    return(
        <>
            <section className="modal roomCatalouge ReservationForm">
            
                <div className="roomCatalouge-content">
                    <div className="roomCatalouge-content-header">
                        <div className="icon">
                            <ion-icon name="arrow-back-outline" />
                        </div>
                        <div className="title">
                            <p>Please Fill The Informations</p>
                        </div>
                    </div>
                    <div className="roomCatalouge-content-body">
                       <section className="booking">
                           <div className="column">
                                <div className="form">
                                    <p>Guest Information</p>
                                    <form>
                                        <div className="fields check">
                                            <input type="checkbox" selected></input>
                                            <label>Use this information for all rooms</label>
                                        </div>
                                        <div className="fields">
                                            <label>Salutation/Title</label>
                                            <select>
                                                <option>Master</option>
                                                <option selected>Mr.</option>
                                                <option>Mrs.</option>
                                                <option>Dr.</option>
                                                <option>Prof.</option>
                                            </select>
                                        </div>
                                        <div className="fields">
                                            <label>First Name</label>
                                            <input placeholder="Enter first name" type="text"></input>
                                        </div>
                                        <div className="fields">
                                            <label>Last Name</label>
                                            <input placeholder="Enter last name" type="text"></input>
                                        </div>
                                        <div className="fields">
                                            <label>Email</label>
                                            <input placeholder="Enter email" type="email"></input>
                                        </div>
                                        <div className="fields">
                                            <label>Phone No</label>
                                            <input placeholder="Enter phonr no." type="tel"></input>
                                        </div>
                                        <div className="fields">
                                            <label>Country</label>
                                            <select>
                                                <option>State1</option>
                                                <option>State2</option>
                                                <option>State3</option>
                                                <option>State4</option>
                                                <option>State5</option>
                                            </select>
                                        </div>
                                        <div className="fields">
                                            <label>State</label>
                                            <select>
                                                <option>State1</option>
                                                <option>State2</option>
                                                <option>State3</option>
                                                <option>State4</option>
                                                <option>State5</option>
                                            </select>
                                        </div>
                                        <div className="fields">
                                            <label>PIN/ZIP Code</label>
                                            <input placeholder="Enter postal or country code" type="number"></input>
                                        </div>
                                        

                                    </form>
                                </div>
                               
                              
                           </div>
                           <div className="column">
                                <div className="form">
                                    <p>Your Selection</p>
                                    <form>
                                        <div className="fields">
                                            <label>Check In</label>
                                            <input type="date"></input>
                                        </div>
                                        <div className="fields">
                                            <label>Check Out</label>
                                            <input type="date"></input>
                                        </div>
                                        <div className="fields">
                                            <label>No of Guests</label>
                                            <input type="number"></input>
                                        </div>
                                        <div className="fields">
                                            <label>No of Rooms</label>
                                            <input  placeholder="Select no of rooms" max="26" min="1" type="number"></input>
                                        </div>
                                        <div className="fields">
                                            <label>Room 1</label>
                                            <input placeholder="Select room" type="text"></input>
                                        </div>
                                        <div className="fields">
                                            <label>Room 2</label>
                                            <input  placeholder="Select room" type="text"></input>
                                        </div>
                                        
                                        
                                        <div className="fields">
                                            <button type="submit">Confirm</button>
                                        </div>

                                    </form>
                                </div>
                            
                           </div>
                           <div className="column">
                                <div className="form">
                                    <p>Payment</p>
                                    <form>
                                        <div className="fields radio">
                                            <span>Payment Mode</span>
                                            <div className="radio-buttons">
                                               <div className="button">
                                                   <input type="radio"></input>
                                                   <label>Card</label>
                                               </div>
                                               <div className="button">
                                                   <input type="radio"></input>
                                                   <label>UPI</label>
                                               </div>
                                               <div className="button">
                                                   <input type="radio"></input>
                                                   <label>Net Banking</label>
                                               </div>
                                               <div className="button">
                                                   <input type="radio"></input>
                                                   <label>Cash</label>
                                               </div>
                                            </div>
                                            <form className="card">
                                                <div className="fields">
                                                    <label>Card No</label>
                                                    <input  placeholder="xxxx-xxxx-xxxx"  type="text"></input>
                                                </div>
                                                <div className="fields">
                                                    <label>CVV</label>
                                                    <input  placeholder="Enter Privacy Code"  type="password"></input>
                                                </div>
                                                <div className="fields">
                                                    <label>MM/Year</label>
                                                    <input  placeholder="Enter Privacy Code"  type="password"></input>
                                                </div>

                                            </form>

                                            
                                        </div>
                                        
                                        
                                        
                                        <div className="fields">
                                            <button type="submit"> Complete Booking</button>
                                        </div>

                                    </form>
                                </div>
                               
                           </div>
                       </section>
                       
                    </div>
                </div>
            </section>
        </>
    )
}