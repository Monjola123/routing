import React from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetails = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Service Details</h1>
      <p>Service ID: {id}</p>
    </div>
  );
};

export default ServiceDetails;
