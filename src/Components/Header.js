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
            <a href="https://www.facebook.com/themefisher" aria-label="facebook"><i className="fab fa-facebook-f"></i></a>
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
            <a className="navbar-brand" href="/">
              Mega<span>kit.</span>
            </a>
      
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
                  {/* <Route className="nav-link" path="/about">About</Route> */}
                </li>
                
                <li className="nav-item dropdown @@about">
                  <a className="nav-link dropdown-toggle" href="#" id="dropdown03" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">About <i className="fas fa-chevron-down small"></i></a>
                  <ul className="dropdown-menu" aria-labelledby="dropdown03">
                    <li><a className="dropdown-item @@company" href="about.html">Our company</a></li>
                    <li><a className="dropdown-item @@pricing" href="pricing.html">Pricing</a></li>
                    
                    <li className="dropdown dropdown-submenu dropright">
                      <a className="dropdown-item dropdown-toggle" href="#!" id="dropdown0301" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Sub Menu</a>
            
                      <ul className="dropdown-menu" aria-labelledby="dropdown0301">
                        <li><a className="dropdown-item" href="/">Submenu 01</a></li>
                        <li><a className="dropdown-item" href="/">Submenu 02</a></li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="nav-item @@service"><a className="nav-link" href="service.html">Services</a></li>
                <li className="nav-item @@project"><a className="nav-link" href="project.html">Portfolio</a></li>
                <li className="nav-item dropdown @@blog">
                  <a className="nav-link dropdown-toggle" href="#" id="dropdown05" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Blog <i className="fas fa-chevron-down small"></i></a>
                  <ul className="dropdown-menu" aria-labelledby="dropdown05">
                    <li><a className="dropdown-item @@blogGrid" href="blog-grid.html">Blog Grid</a></li>
                    <li><a className="dropdown-item @@blogSidebar" href="blog-sidebar.html">Blog with Sidebar</a></li>
                    <li><a className="dropdown-item @@blogSingle" href="blog-single.html">Blog Single</a></li>
      
                    <li className="dropdown dropdown-submenu dropleft">
                      <a className="dropdown-item dropdown-toggle" href="#!" id="dropdown0501" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Sub Menu</a>
            
                      <ul className="dropdown-menu" aria-labelledby="dropdown0501">
                        <li><a className="dropdown-item" href="/">Submenu 01</a></li>
                        <li><a className="dropdown-item" href="/">Submenu 02</a></li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="nav-item @@contact"><a className="nav-link" href="contact.html">Contact</a></li>
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
