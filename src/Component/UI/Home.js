import React from 'react';
import Booking from '../booking/Booking';
import ReservationForm from '../booking/Reservation_System/ReservationForm';
import RoomCatalouge from '../booking/Reservation_System/RoomCatalouge';
import AccomodationSlider from '../carousel/AccomodationCarousel/AccomodationSlider';
import Carousel from '../carousel/Carousel';
import TextCarousel from '../carousel/TextCarousel';
import ErrPage from './ErrPage';

export default function Home() {
    return(
        <>
        <div className="homeBody">
            {/* <Carousel />
            <Booking />
            <TextCarousel />
            <AccomodationSlider />
            <RoomCatalouge />
            <ReservationForm /> */}
            <ErrPage />
        </div>
            
        </>
    )
}

