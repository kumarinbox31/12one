// Import necessary components and libraries
import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';
import Header from './Components/Header';
import Footer from './Components/Footer';

// Define your routes using the <Switch> component
const App = () => {
  return (
    <>
    <BrowserRouter>  
        <Header/>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
