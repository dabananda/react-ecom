import React, { useState, useEffect } from "react";
import "../styles/exclusive.css";
import exclusiveImg from "../assets/images/excited-white-girl-bright-stylish-glasses-posing-pink-dreamy-curly-woman-playing-with-her-ginger-hair-laughing 1.png";

const Exclusive = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Set the target date to January 10, 2025
    const targetDate = new Date("2025-01-10T23:59:59");

    const updateCountdown = () => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        // If countdown ends, stop the timer and set all values to 0
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="container exclusive-bg px-5 my-5">
      <div className="row">
        <div className="col-md-6">
          <img className="img-fluid" src={exclusiveImg} alt="Exclusive offer" />
        </div>
        <div className="col-md-6 d-flex align-items-center">
          <div>
            <p className="my-font">Exclusive offer</p>
            <p>
              Unlock the ultimate style upgrade with our exclusive offer. Enjoy
              savings of up to 40% off on our latest New Arrivals.
            </p>
            <div className="count-down my-5">
              <h4 className="text-start">Offer ends in</h4>
              <div className="countdown-wrapper">
                <div className="countdown-item">
                  <span>{timeLeft.days}</span>
                  <small>Days</small>
                </div>
                <div className="countdown-item">
                  <span>{timeLeft.hours}</span>
                  <small>Hours</small>
                </div>
                <div className="countdown-item">
                  <span>{timeLeft.minutes}</span>
                  <small>Min</small>
                </div>
                <div className="countdown-item">
                  <span>{timeLeft.seconds}</span>
                  <small>Sec</small>
                </div>
              </div>
            </div>
            <a className="btn btn-success btn-lg px-5">BUY NOW</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exclusive;
