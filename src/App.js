// Import necessary components and libraries
import React from 'react';
// import { BrowserRouter, Route, Link } from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';
import Header from './Components/Header';
import Footer from './Components/Footer';
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
   </Routes>
   <Footer />
</Router>  
  );
}

export default App;
