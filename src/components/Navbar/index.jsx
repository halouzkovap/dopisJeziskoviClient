import React from 'react';
import {
    Link
  } from 'react-router-dom';
import './style.css';

const Navbar =() =>{
    return(
        <nav className="navbar navbar-expand-lg navbar-light">
        <Link className="navbar-brand" to="/"><span className="nav_font_color">Přání ježíškovi</span></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
         aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-item nav-link active" to="/"><span className="nav_font_color">Home</span></Link>
            <Link className="nav-item nav-link" to="/Wishlist"><span className="nav_font_color">Mé přání</span></Link>
            <Link className="nav-item nav-link" to="/otherWishs"><span className="nav_font_color">Přání ostatních</span></Link>
          </div>
        </div>
      </nav>

    )
}

export default Navbar;

