import React from 'react';
import { Link } from 'react-router-dom';

const ServicesComponent = () => {
  return (
    <div>
      <h1>Services</h1>
      <p>Our services...</p>
      <ul>
        <li>
          <Link to="/services/1">Service 1</Link>
        </li>
        <li>
          <Link to="/services/2">Service 2</Link>
        </li>
        <li>
          <Link to="/services/3">Service 3</Link>
        </li>
      </ul>
    </div>
  );
};

export default ServicesComponent;
