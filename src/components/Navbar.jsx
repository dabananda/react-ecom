import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar menu">
      <div className="container container-fluid">
        <a className="navbar-brand nav-logo fw-bold">ESHOP</a>
        <div>
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
