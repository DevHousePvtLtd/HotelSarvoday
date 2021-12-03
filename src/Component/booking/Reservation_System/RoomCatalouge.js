import React from 'react';
import AccomodationSlider from '../../carousel/AccomodationCarousel/AccomodationSlider';
import IMG1 from '../../img/Honeymoon_Squre/20210708_131805.jpg';

export default function RoomCatalouge() {
    return(
        <>
        <section className="modal roomCatalouge">
            <div className="roomCatalouge-content">
                <div className="roomCatalouge-content-header">
                    <div className="icon">
                        <ion-icon name="arrow-back-outline" />
                    </div>
                    <div className="title">
                        <p>Choose Your Room</p>
                    </div>
                </div>
                <div className="roomCatalouge-content-body">
                    <AccomodationSlider />
                    <AccomodationSlider />
                    <AccomodationSlider />
                    <AccomodationSlider />
                    <AccomodationSlider />
                    <AccomodationSlider />
                </div>
            </div>
        </section>
        </>
    )
}