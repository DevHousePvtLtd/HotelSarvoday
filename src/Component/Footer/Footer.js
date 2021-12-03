import React from 'react';
import FooterContent from './FooterContent';
import FooterIcon from './FooterIcon';
import FooterLink from './FooterLink';


export default function Footer(){
    return(
        <>
            <div className="footer">
                <FooterLink  />
                <FooterIcon />
                <FooterContent />
            </div>
            
        </>
    )
}
