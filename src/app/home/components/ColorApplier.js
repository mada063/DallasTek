"use client"

// src/components/ColorApplier.js
import { useContext, useEffect } from 'react';
import { ColorContext } from './ColorContext';
import './ColorApplier.css';

const ColorApplier = () => {
  const { currentColors } = useContext(ColorContext);

  useEffect(() => {
    const [primaryColor, secondaryColor, borderColor, textColor, faceColor] = currentColors;

    document.documentElement.style.setProperty('--primary-color', primaryColor);
    document.documentElement.style.setProperty('--secondary-color', secondaryColor);
    document.documentElement.style.setProperty('--border-color', borderColor);
    document.documentElement.style.setProperty('--text-color', textColor);
    document.documentElement.style.setProperty('--face-color', faceColor);

    // Apply specific styles to elements
    document.body.style.backgroundColor = primaryColor;
    document.body.style.color = textColor;
  }, [currentColors]);

  return null;
};

export default ColorApplier;
