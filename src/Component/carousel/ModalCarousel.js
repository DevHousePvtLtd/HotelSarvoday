import React from 'react';
import Ban1 from "../img/board_room/IMG_0084.JPG";
import Ban2 from "../img/Honeymoon_Suit/IMG_9814.JPG";
import Ban3 from "../img/executive/IMG_0007.JPG";


function Images({ s }) {
    const imgStyle = {
      width: 100 + "%",
      height: "auto"
    };
    return <img src={s} alt="slider-img" style={imgStyle} />;
  }
  
  function Slider() {
    const sliderArr = [
      Ban1,
      Ban2,
      Ban3
    ];
  
    const [x, setX] = React.useState(0);
    const [isPlaying, setIsPlaying] = React.useState(true);
  
    React.useEffect(() => {
      let countDown = null;
      if (isPlaying) {
        countDown = setInterval(() => goRight(), 2500);
      } else {
        clearInterval(countDown);
      }
      return () => clearInterval(countDown);
    });
  
    const goLeft = () => {
      setIsPlaying(false);
      x === 0 ? setX(-100 * (sliderArr.length - 1)) : setX(x + 100);
      setIsPlaying(true);
    };
  
    const goRight = () => {
      setIsPlaying(false);
      x === -100 * (sliderArr.length - 1) ? setX(0) : setX(x - 100);
      setIsPlaying(true);
    };
  
    return (
      <div className="slider">
        {sliderArr.map((el, i) => (
          <div
            className="slide"
            key={i}
            style={{ transform: `translateX(${x}%)` }}
          >
            <Images s={el} />
          </div>
        ))}
        <button className="slider-buttons" onClick={goLeft} id="goLeft">
        <ion-icon name="chevron-back-outline"></ion-icon>
        </button>
        <button className="slider-buttons" onClick={goRight} id="goRight">  
          <ion-icon name="chevron-forward-outline"></ion-icon>
        </button>
      </div>
    );
  }
  
  export default function ModalCarousel() {
    return (
      <div className="App">
        <Slider />
      </div>
    );
  }
  