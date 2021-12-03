import React, { useContext, useState } from 'react';
import img1 from '../img/Banner/banner1.JPG'
import img2 from '../img/Banner/Banner2.jpg'
import img3 from '../img/Banner/Banner3.JPG'
import img4 from '../img/Banner/Banner4.JPG'
import img5 from '../img/Banner/Banner5.JPG'
import { MainContest } from '../store/Context';
import YouTube from '../Youtube/YouTube';


const Carousel = () => {
    const Ctx = useContext(MainContest);
    

    const onyouTubeOpen=()=>{
        console.log("click");
        
        Ctx.setYouTubeOpen(true);

    }

    return (

        <>
            <section className="banner" onClick= {Ctx.onsideBarClose}>
                <div className="carousel">
                    <div className="caption">
                        <h1>Hotel Sarvoday</h1>
                        <p>Your Satisfaction Is Our Pride</p>
                        <ion-icon name="play-circle-outline" onClick={onyouTubeOpen} ></ion-icon>
                        {Ctx.youTubeOpen && <YouTube/>}
                    </div>
                    <div class="paineis">
                        <article className="page1">
                            <img src={img1} alt="Carousel" />
                        </article>
                        <article className="page2">
                            <img src={img2} alt="Carousel" />
                        </article>
                        <article className="page3">
                            <img src={img3} alt="Carousel" />
                        </article>
                        <article className="page4">
                            <img src={img4} alt="Carousel" />
                        </article>
                        <article className="page5">
                            <img src={img5} alt="Carousel" />
                        </article>
                    </div>
                </div>
      
            </section>
        </>
    )
};

export default Carousel;