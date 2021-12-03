import classes from './CarouselDetails.module.css';
import React from 'react'

export default function CarouselDetails(props) {
    return (
        <div >
            <p>{props.paragraph}</p>
            <span className="underline">&nbsp;&nbsp;</span>
            <span>{props.span}</span>
        </div>
    )
}
