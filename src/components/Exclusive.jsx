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
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };
    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="container exclusive-bg px-3 px-md-5 my-4 my-md-5">
      <div className="row py-4 py-md-0">
        <div className="col-12 col-md-6 mb-4 mb-md-0">
          <div className="text-center text-md-start">
            <img
              className="img-fluid exclusive-img"
              src={exclusiveImg}
              alt="Exclusive offer"
            />
          </div>
        </div>
        <div className="col-12 col-md-6 d-flex align-items-center">
          <div className="text-center text-md-start w-100">
            <p className="my-font h2 mb-3">Exclusive offer</p>
            <p className="mb-4">
              Unlock the ultimate style upgrade with our exclusive offer. Enjoy
              savings of up to 40% off on our latest New Arrivals.
            </p>
            <div className="count-down mb-4 mb-md-5">
              <h4 className="text-center text-md-start">Offer ends in</h4>
              <div className="countdown-wrapper justify-content-center justify-content-md-start">
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
            <div className="text-center text-md-start">
              <a className="btn btn-success btn-lg px-4 px-md-5">BUY NOW</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exclusive;
