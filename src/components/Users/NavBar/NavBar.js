import React from "react";
import Logo from "../../../assets/img/logo.png";
import iconClose from "../../../assets/img/close.svg";

const NavBar = () => {
  return (
    <>
      <nav className="main-navbar">
        <div className="main-navbar-header">
          <div className="container d-flex justify-content-between align-items-center">
            <a href="#" className="navbar-brand">
              <img src={Logo} alt="..." width="35" />
            </a>

            <button id="navbar-open">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
        <div className="navbar-outer">
          <div className="navbar-inner d-flex justify-content-center align-items-center">
            <a id="close-btn" href="#">
              <img src={iconClose} alt="close" className="img-fluid" />
            </a>

            <ul className="navbar-menu list-unstyled text-center">
              <li>
                <a href="#hero">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#resume">Resume</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
