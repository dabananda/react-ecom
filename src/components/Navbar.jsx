import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar menu">
      <div className="container container-fluid">
        <a className="navbar-brand nav-logo fw-bold">ESHOP</a>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="nav-links d-none d-lg-flex">
          <Link to="/" className="custom-link mx-3">
            HOME
          </Link>
          <Link to="/shop" className="custom-link mx-3">
            SHOP
          </Link>
          <Link to="/features" className="custom-link mx-3">
            FEATURES
          </Link>
          <Link to="/contact" className="custom-link mx-3">
            CONTACT
          </Link>
        </div>
        <div className={`mobile-menu d-lg-none ${isOpen ? "show" : ""}`}>
          <Link to="/" className="custom-link nav-item mx-3">
            HOME
          </Link>
          <Link to="/shop" className="custom-link nav-item mx-3">
            SHOP
          </Link>
          <Link to="/features" className="custom-link nav-item mx-3">
            FEATURES
          </Link>
          <Link to="/contact" className="custom-link nav-item mx-3">
            CONTACT
          </Link>
        </div>
        <div className="d-flex link">
          <i className="bi bi-bag-heart fs-4 me-4"></i>
          <button className="btn btn-outline-success" type="submit">
            LOGIN
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
