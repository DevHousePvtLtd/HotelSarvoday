import React from 'react';
import Error from '../img/Error404.gif';
export default function ErrPage() {
    return(
        <>
        <div className="err_page">
            <div className="err_page_left">
                <img src={Error} />
            </div>
            <div className="err_page_right">
                <h1>404</h1>
                <h4>OOPS. Looks like the page you're looking for no longer exists</h4>
                <p>Don't worry. Since you're valuable to us we will bring you back to safety</p>
                <button className="err_btn">Back to home</button>
            </div>	
        </div>



        </>
    )
}
