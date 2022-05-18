import React from "react";
import { Link, NavLink } from "react-router-dom";
import './Nav.css';

export const Nav = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/"><img src="assets/tech-blogs.png" alt-text="tech blog" /></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink exact to="/" activeClassName="active" className="nav-link"><i className="fas fa-home" id="nav-icon"></i>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" activeClassName="active" className="nav-link"><i className="fas fa-info-circle" id="nav-icon"></i>About us</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" activeClassName="active" className="nav-link"><i className="fas fa-phone-square-alt" id="nav-icon"></i>Contact us</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </>
  );
};
