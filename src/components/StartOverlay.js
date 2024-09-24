"use client"
// src/components/StartOverlay.js
import React, { useEffect, useState } from 'react';
import './StartOverlay.css'; // Import the CSS file

const StartOverlay = ({ onTransitionComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [transitionComplete, setTransitionComplete] = useState(false);

  useEffect(() => {
    // Immediately set transition to complete after a short delay to simulate the overlay
    setIsVisible(true);
    setTransitionComplete(false);

    const timer = setTimeout(() => {
      setIsVisible(false);
      setTransitionComplete(true);
      if (onTransitionComplete) onTransitionComplete();
    }, 0); // Short duration for the simulated transition effect

    return () => clearTimeout(timer);
  }, [onTransitionComplete]);

  useEffect(() => {
    // Update body class based on transition completion
    if (transitionComplete) {
      document.body.classList.add('transition-complete');
      document.body.dispatchEvent(new Event('transitionCompleteEvent'));
    } else {
      document.body.classList.remove('transition-complete');
    }
  }, [transitionComplete]);

  return (
    <div className={`start-overlay ${isVisible ? 'visible' : 'hidden'}`}></div>
  );
};

export default StartOverlay;
