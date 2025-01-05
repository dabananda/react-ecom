import React from "react";
import "../styles/footer.css";

const Footer = () => {
  return (
    <div className="container-fluid footer-bg text-light">
      <div className="container py-5">
        <div className="row">
          <div className="col-md-4">
            <p className="my-font text-light mb-5">ESHOP</p>
            <p className="fw-bold">Social Media</p>
            <i className="bi bi-facebook fs-4"></i>
            <i className="bi bi-twitter-x fs-4 mx-4"></i>
            <i className="bi bi-instagram fs-4"></i>
          </div>
          <div className="col-md-4">
            <div className="row">
              <div className="col">
                <p className="fw-bold">SHOP</p>
                <p>Products</p>
                <p>Overview</p>
                <p>Pricing</p>
                <p>Releases</p>
              </div>
              <div className="col">
                <p className="fw-bold">COMPANY</p>
                <p>About Us</p>
                <p>Contact</p>
                <p>News</p>
                <p>Support</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <p className="fw-bold">STAY UP TO DATE</p>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Enter email"
              />
              <button
                className="btn btn-outline-success text-light"
                type="submit"
              >
                SUBMIT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
