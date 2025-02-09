import React from "react";
import logo from "../assets/logo.avif"; // Import the image properly
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap
import './../App.css'

const Navbar = () => {
  return (
    <nav className="content-container bg-black p-4 rounded shadow-sm w-80" >
      <div className="d-flex justify-content-center mt-1 w-100">
        <a className="navbar-brand mx-auto d-flex align-items-center gap-2 justify-content-center" href="#">
          <img src={logo} alt="Logo" width="30" height="24" />
          <span className="text-white ">ChatBot</span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;