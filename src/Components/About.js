import React, { useState } from "react";
import AboutBackgroundImage from "../Assets/about-background-image.jpg";
import VideoModal from "./VideoModal";

const About = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleVideoEnded = () => {
    setShowModal(false);
  };

  return (
    <div id="about" className="about-section-container">
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <h1 className="primary-heading">
          Explore The Beauties Of The World
        </h1>
        <p className="primary-text">
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
          elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
        </p>
        <p className="primary-text">
          Non tincidunt magna non et elit. Dolor turpis molestie dui magnis
          facilisis at fringilla quam.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button" onClick={toggleModal}>
            Watch Video
          </button>
        </div>
      </div>
      {showModal && <VideoModal onClose={toggleModal} onEnded={handleVideoEnded} />}
    </div>
  );
};

export default About;