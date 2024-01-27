import React from "react";
import "./Banner.css";
import banner from "./banner.png";
function Banner() {
  return (
    <div className="main-container">
      <div className="banner">
        <div className="banner-form">
          <div className="text-pre-title">Welcome to Realstate</div>
          <h1 className="banner-title">Manage Your Property</h1>
          <p className="text banner-subtitle">
            Your will have everything nearby supermarket, buses , station, the
            carmen neighborhood, etc
          </p>
          <div className="banner-info-block">
            <input
              className="input"
              type="email"
              placeholder="Enter your email"
            />
            <input
              className="input input-dark"
              type="submit"
              value="Get a Quote"
            />
          </div>
        </div>
        <div className="banner-block-image">
          <img className="banner-image" src={banner} alt="banner" />
        </div>
      </div>
    </div>
  );
}

export default Banner;
