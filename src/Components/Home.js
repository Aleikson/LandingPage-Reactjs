import React from "react";
import BannerImage from "../Assets/home-banner-image.png";
import Navbar from "./Navbar";

const Home = () => {
    return (
        <div id="home" className="home-container">
            <Navbar />
            <div className="home-banner-container">
                <div className="home-bannerImage-container">
                </div>
                <div className="home-text-section">
                    <h1 className="primary-heading">
                        Your journey starts now
                    </h1>
                    <p className="primary-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, sequi.
                    </p>
                    <button className="secondary-button">
                        Read More
                    </button>
                </div>
                <div className="home-image-section">
                    <img src={BannerImage} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Home;