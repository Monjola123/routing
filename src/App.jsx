import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import HomeComponent from './Components/HomeComponent';
import AboutComponent from './Components/AboutComponent';
import ContactComponent from './Components/ContactComponent';
import ServicesComponent from './Components/ServicesComponent';
import ServiceDetails from './Components/ServiceDetails';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
          </ul>
        </nav>

        <hr />

        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="/about" element={<AboutComponent />} />
          <Route path="/contact" element={<ContactComponent />} />
          <Route path="/services" element={<ServicesComponent />} />
          <Route path="/services/:id" element={<ServiceDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
