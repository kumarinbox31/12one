// Import necessary components and libraries
import React from 'react';
// import { BrowserRouter, Route, Link } from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Services from './Components/Services';
import Contact from './Components/Contact';
import {
  BrowserRouter as Router,
  Routes,
  Route,
 
} from "react-router-dom";

// Define your routes using the <Switch> component
const App = () => {
  return (
    <Router>
    <Header />
    <Routes>
       <Route exact path="/" element={<Home/>} />
       <Route path="/about" element={<About />}/>
       <Route path="/services" element={<Services />}/>
       <Route path="/contact" element={<Contact />}/>       
   </Routes>
   <Footer />
</Router>  
  );
}

export default App;
