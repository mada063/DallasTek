"use client"

import React, { useState, useEffect } from 'react';
import useAnimateTitles from '../../../components/useAnimateTitles';
import { customers } from '../../../components/CustomersData'; // <-- Make sure to import the customers array
import './Customers.css';

const Customers = () => {
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    setStartAnimation(true);
  }, []);

  useAnimateTitles(startAnimation);

  return (
    <div className="customers">
      <h3 className="customers-title anim-title mobile-title">
        <span className="line"><span className="line-inner">Her er noen av våre kunder</span></span>
      </h3> 
      <div className="customer-slide">
        {customers.map((customer, index) => (
          <div className="customer" key={index}>
            <div className={`customer-image ${customer.className}`}>
              {customer.logo}
            </div>
            <a href={customer.link} target="_blank" rel="noopener noreferrer">
              {customer.name}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Customers;
