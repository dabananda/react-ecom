import React from "react";
import "../styles/hero-section.css";
import { Link } from "react-router-dom";
import heroImage from "../assets/images/hero-model.png";

const HeroSection = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-6">
            <div className="hero-text">Discover and Find Your Own Fashion!</div>
            <div className="hero-text-minor mb-4 mb-md-5">
              Explore our curated collection of stylish clothing and accessories
              tailored to your unique taste.
            </div>
            <div>
              <Link to="/shop" className="btn btn-success btn-lg px-4 px-md-5">
                EXPLORE NOW
              </Link>
            </div>
          </div>
          <div className="col-12 col-md-6 d-flex justify-content-center justify-content-md-end mt-4 mt-md-0">
            <img
              className="img-fluid hero-img"
              src={heroImage}
              alt="Hero Model"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
