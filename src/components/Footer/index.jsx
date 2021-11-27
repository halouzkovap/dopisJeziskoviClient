import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const Footer =() =>{
    return(
        <footer className="bg-light text-center text-lg-start">
       
        <div className="text-center p-3">
          © 2020 Copyright:
          <a className="text-dark" href="https://mdbootstrap.com/">MDBootstrap.com</a>
        </div>
      
      </footer>
    )
}

export default Footer;