import React from 'react';

import DulexImg from '../img/dulex/IMG_0003.JPG';

export default function GalleryCarousel() {
    return(
        <>
            <div class="roomCarousel">
                <div class="container">
                    <div class="card">
                        <img className="image" src={DulexImg} alt="" />
                        <div class="card__head">
                            <p>Dulex</p>
                        </div>
                    </div>
                    <div class="card">
                        <img className="image" src={DulexImg} alt="" />
                        <div class="card__head">
                            <p>Dulex</p>
                        </div>
                    </div>
                    <div class="card">
                        <img className="image" src={DulexImg} alt="" />
                        <div class="card__head">
                            <p>Dulex</p>
                        </div>
                    </div>
                    <div class="card">
                        <img className="image" src={DulexImg} alt="" />
                        <div class="card__head">
                            <p>Dulex</p>
                        </div>
                    </div>
                    <div class="card">
                        <img className="image" src={DulexImg} alt="" />
                        <div class="card__head">
                            <p>Dulex</p>
                        </div>
                    </div>
                </div>
        </div>

        </>
    )
}

