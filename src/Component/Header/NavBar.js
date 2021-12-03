
import React, {useState,useContext}from 'react';
import logoImg from '../img/Logos/Sarvodaylogo.png';
import {MainContest} from '../store/Context';
import Gallery from '../UI/Gallery';

function NavBar(props) {
    const Ctx = useContext(MainContest);
    const [classname , setClassName] = useState({})
    
   
    window.onscroll = () => {
        
         (window.scrollY <= 10)? setClassName('') : setClassName({propaty1:'scroll', logoStatus : true});
       
    };

    const onModal = ()=>{
        Ctx.setIsModalVisible(true);

    }

    return (
        <>
            <div className={`navrow ${classname.propaty1}`}  >
                <div className="col">
                    <div className="incol">
                        <ion-icon name="menu-outline" onClick={Ctx.onsideBarOpen}></ion-icon>
                        <ion-icon name="call-outline"></ion-icon>
                        <ion-icon name="language-outline"></ion-icon>
                    </div>
                </div>
                <div className=" col">
                    <div className="logo">
                        {classname.logoStatus === true ?
                        <img src={ logoImg} alt=" " />:''}
                    </div>

                </div>
                <div className="col">
                    <div className={`navlink`}>
                        <div className={`links `}>
                            <button onClick={onModal}><p>GALLERY</p></button>
                            {Ctx.isModalVisible && <Gallery  />}
                            <p>RESTURENT</p>
                            <div className="navbtn">BOOK NOW</div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default NavBar;
