import React, { useState, useEffect } from "react";

import icon1 from "../Assets/img1.jpg";
import icon2 from "../Assets/img2.jpg";
import icon3 from "../Assets/img3.jpg";
import icon4 from "../Assets/img4.jpg";
import icon5 from "../Assets/img5.jpg";

const features = [
  { icon: icon1 },
  { icon: icon2 },
  { icon: icon3 },
  { icon: icon4 },
  { icon: icon5 }
];

const Card = (props) => {
  return (
    <li className="card">
      <img src={props.icon} alt="icon" />
    </li>
  );
};

const Features = () => {
  const [moveClass, setMoveClass] = useState("");
  const [carouselItems, setCarouselItems] = useState(features);

  useEffect(() => {
    document.documentElement.style.setProperty("--num", carouselItems.length);
  }, [carouselItems]);

  const handleAnimationEnd = () => {
    if (moveClass === "prev") {
      shiftNext([...carouselItems]);
    } else if (moveClass === "next") {
      shiftPrev([...carouselItems]);
    }
    setMoveClass("");
  };

  const shiftPrev = (copy) => {
    let lastcard = copy.pop();
    copy.splice(0, 0, lastcard);
    setCarouselItems(copy);
  };

  const shiftNext = (copy) => {
    let firstcard = copy.shift();
    copy.splice(copy.length, 0, firstcard);
    setCarouselItems(copy);
  };

  return (
    <div id="features" className="features-section-container">
           <h1 className="primary-heading-slide">Choose The Best Way To See Life</h1>
      <div>
        <div className="ui">
          <button onClick={() => setMoveClass("next")} className="prev">
            <span className="material-icons">Prev</span>
          </button>
          <button onClick={() => setMoveClass("prev")} className="next">
            <span className="material-icons">Next</span>
          </button>
        </div>
        <ul onAnimationEnd={handleAnimationEnd} className={`${moveClass} carousel`}>
          {carouselItems.map((t, index) => (
            <Card key={index} icon={t.icon} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Features;