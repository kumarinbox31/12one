import React from 'react';
import { Link } from "react-router-dom";

export default function Header() {
  return (
  <header className="navigation">
  <div className="header-top ">
    <div className="container">
      <div className="row justify-content-between align-items-center">
        <div className="col-lg-2 col-md-4">
          <div className="header-top-socials text-center text-lg-left text-md-left">
            <a href="https://www.facebook.com/One2Oneresearchsolutions" aria-label="facebook"><i className="fab fa-facebook-f"></i></a>
            <a href="https://twitter.com/themefisher" aria-label="twitter"><i className="fab fa-twitter"></i></a>
            <a href="https://github.com/themefisher/" aria-label="github"><i className="fab fa-github"></i></a>
          </div>
        </div>
        <div className="col-lg-10 col-md-8 text-center text-lg-right text-md-right">
          <div className="header-top-info mb-2 mb-md-0">
            <a href="tel:+23-345-67890">Call Us : <span>+23-345-67890</span></a>
            <a href="mailto:support@gmail.com"><i className="fas fa-envelope mr-2"></i><span>support@gmail.com</span></a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div id="navbar">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <nav className="navbar navbar-expand-lg px-0 py-4">
            <Link className="navbar-brand" to="/">
              <img src="img/logo.png" width="50" height="50" />
              <p>ONE2ONE RESEARCH SOLUTIONS<br/>
              <small>GATHER ANALYZE GENERATE</small>
              </p>
            </Link>
      
            <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarsExample09"
              aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation">
              <span className="fa fa-bars"></span>
            </button>
      
            <div className="collapse navbar-collapse text-center" id="navbarsExample09">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <Link className="nav-link" to='/' relative="route">Home</Link>
                </li>
                <li className="nav-item ">
                  <Link className="nav-link" to='/about'>About</Link>
                </li>
                <li className="nav-item ">
                  <Link className="nav-link" to='/services'>Services</Link>
                </li>
                <li className="nav-item ">
                  <Link className="nav-link" to='/contact'>Contact</Link>
                </li> 
              </ul>
      
              <div className="my-2 my-md-0 ml-lg-4 text-center">
                <a href="contact.html" className="btn btn-solid-border btn-round-full">Get a Quote</a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </div>
</header>

  );
}
