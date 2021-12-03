import React,{useContext} from 'react';
import {MainContest} from '../store/Context';

function Menu(props) {
    const Ctx = useContext(MainContest);

const sideBarClose=()=>{
    Ctx.onsideBarClose(true);
}

    return (
        <>
        <div className={`menu ${Ctx.sideBarClose?'menuDisapper':''}`} onClick={sideBarClose} >
            <div className="menuhead">
                <div className="closebtn">
                        
                        <div onClick={Ctx.onsideBarClose}> <ion-icon name="close" ></ion-icon></div>
                </div>
                <div className="menusearch">
                    <input className="search" placeholder="search ..." id="search" type="text" />
                    <ion-icon name="search"></ion-icon>
                </div>
            </div>
            <div className="menubody">
                <div className=" menulinks">
                    <div className="menuitem">
                        <p>Home</p>
                    </div>
                    <div className="menuitem">
                        <p>Gallery</p>
                    </div>
                    <div className="menuitem">
                        <p>Resturent</p>
                    </div>
                </div>
                <div className=" menulinks ">
                    <div className="menuitem">
                        <div className="itemtitle">
                            <p>Stay</p>
                            <ion-icon name="chevron-down-outline"></ion-icon>
                        </div>
                        <div className="dropdown">
                            <p>Delux</p>
                            <p>Super Delux</p>
                            <p>Executive</p>
                            <p>Super Executive</p>
                            <p>Presidential Suit</p>
                            <p>HoneyMoon Suite</p>
                        </div>
                    </div>
                    <div className="menuitem">
                        <div className="itemtitle">
                            <p>Hall</p>
                            <ion-icon name="chevron-down-outline"></ion-icon>
                        </div>
                        <div className="dropdown">
                            <p>Banquite Hall 1</p>
                            <p>Banquite Hall 2</p>
                            <p>Board Room 1</p>
                            <p>Board Room 2</p>
                        </div>
                    </div>
                    <div className="menuitem">
                        <div className="itemtitle">
                            <p>Events</p>
                            <ion-icon name="chevron-down-outline"></ion-icon>
                        </div>
                        <div className="dropdown">
                            <p>Meeting</p>
                            <p>Birth Day</p>
                            <p>Weddings</p>
                            <p>Others</p>
                        </div>
                    </div>
                    <div className="menuitem">
                        <div className="itemtitle">
                            <p>Exclusive Perks</p>
                            <ion-icon name="chevron-down-outline"></ion-icon>
                        </div>
                        <div className="dropdown">
                            <p>Pay 3 Stay 4</p>
                            <p>Pay 6 Stay 8</p>
                            <p>Stay Point</p>
                        </div>
                    </div>
                </div>
                <div className=" menulinks ">
                    <div className="menuitem">
                        <p>Contact Us</p>
                    </div>
                    <div className="menuitem">
                        <p>Log In / Sign Up</p>
                    </div>
                    <div className="menuitem">
                        <p>Book Now</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Menu;
