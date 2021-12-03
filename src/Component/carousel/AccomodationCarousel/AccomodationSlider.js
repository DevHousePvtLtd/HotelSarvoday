import React, { useState, useEffect } from 'react';
import Img from "../../img/Banner/banner1.JPG"
import Img2 from '../../img/Banner/Banner2.jpg';
import Img3 from '../../img/Banner/Banner3.JPG';
import CarouselDetails from './CarouselDetails';
import ImageSection from './ImageSection';
import classes from './Accomodation.module.css';


const DUMMY_DATA = [
    {
        image: Img,
        paraghraph: ' Superior With Balcony',
        span: 'Sleep in fashion and wake up in you dreem worls. explore, feel and relax. Feel like you are the King.',

    },
    {
        image: Img2,
        paraghraph: ' Superior With Balcony2',
        span: 'Sleep in fashion and wake up in you dreem worls. explore, feel and relax. Feel like you are the King2.',

    },
    {
        image: Img3,
        paraghraph: ' Superior With Balcony3',
        span: 'Sleep in fashion and wake up in you dreem worls. explore, feel and relax. Feel like you are the King3.',

    },
]


export default function AccomodationSlider() {

    let [counter, setCounter] = useState(0);

    // useEffect(()=>{
    //     onIncreseSlide()
    //     onDecreseSlide()


    // },[onDecreseSlide,onIncreseSlide])
    const onIncreseSlide = () => {
        const length = parseInt(DUMMY_DATA.length,10);
        console.log(length);
        if (counter > 0) {
            console.log(('dec'));
            console.log(DUMMY_DATA[counter]);
            setCounter(--counter);
        }
        else{
            
            setCounter(length-1);
            console.log(DUMMY_DATA[DUMMY_DATA.length]);

        }

    }

    const onDecreseSlide = () => {
        
        if (counter < DUMMY_DATA.length-1) {
            console.log("inc");
            setCounter(++counter)
        }
        else {

            setCounter(0)
        }
    }

    return (

        <>
            <section className="AccomodationSlider">
                <div className="row">
                    <div className="col left">
                        <ImageSection image={DUMMY_DATA[counter].image}/>
                    </div>
                    <div className="col right">
                        <div className={`details ${classes.animation}`}>
                            <CarouselDetails paragraph={DUMMY_DATA[counter].paraghraph} span={DUMMY_DATA[counter].span}/>
                            <div className="btn-group">
                                <button>
                                    <span>Book Now</span>
                                </button>
                                <button>
                                    <span>Discover</span>
                                </button>
                            </div>

                        </div>
                        <div className="controll-btn">
                            <button onClick={onIncreseSlide}>
                                <ion-icon name="chevron-back-outline"></ion-icon>
                            </button>
                            <button onClick={onDecreseSlide}>
                                <ion-icon name="chevron-forward-outline"></ion-icon>
                            </button>

                        </div>
                    </div>
                </div>
            </section>

        </>








    )






}