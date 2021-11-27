import React from 'react';
import {
    Link
  } from 'react-router-dom';

const Navbar =() =>{
    return(
        <nav className="navbar navbar-expand-lg navbar-light">
        <Link className="navbar-brand" to="/">Přání ježíškovi</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-item nav-link active" to="/">Home</Link>
            <Link className="nav-item nav-link" to="/Wishlist">Mé přání</Link>
            <Link className="nav-item nav-link" to="/otherWishs">Přání ostatních</Link>
          </div>
        </div>
      </nav>

    )
}

export default Navbar;

