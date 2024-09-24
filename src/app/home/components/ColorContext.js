"use client"

// src/context/ColorContext.js
import React, { createContext, useState } from 'react';

const ColorContext = createContext();

const ColorProvider = ({ children }) => {
  const colorSets = [
    ['#EC6C76', '#FF9B71', '#7A1F5D', '#FFF1BA', 'rgba(255, 185, 165, 0.3)'],
    ['#282c2f', '#2b393a', '#F4B860', '#D9D9D9', 'rgba(127, 136, 136, 0.3)'],
    ['#21324B', '#CE472F', '#C6C5B4', '#78B9BA', 'rgba(127, 136, 136, 0.3)'],
    ['#D4DCDC', '#E6B4AA', '#95C0BD', '#26676E', 'rgba(127, 136, 136, 0.3)'],
    ['#DAC29B', '#A6755D', '#CF5C36', '#000000', 'rgba(127, 136, 136, 0.3)'],
    ['#08415C', '#BF7379', '#6B818C', '#F1BF98', 'rgba(127, 136, 136, 0.3)'],
    ['#C3BEEF', '#CADFFD', '#CCA9E8', '#251D4B', 'rgba(127, 136, 136, 0.3)'],
    ['#4b3832', '#be9b7b', '#854442', '#fff4e6', 'rgba(60, 47, 47, 0.3)'],
    ['#2e003e', '#3d2352', '#8874a3', '#e4dcf1', 'rgba(61, 30, 109, 0.3)'],
    ['#1A4D2E', '#4F6F52', '#E8DFCA', '#F5EFE6', 'rgba(248,243,237, 0.3)'],
    ['#141E46', '#41B06E', '#FFF5E0', '#8DECB4', 'rgba(220, 249, 232, 0.3)'],

  ];

  const initialColors = ['#282c2f', '#2b393a', '#F4B860', '#D9D9D9', 'rgba(127, 136, 136, 0.3)'];

  const [currentColors, setCurrentColors] = useState(initialColors);

  const changeColors = () => {
    let newIndex;
    let currentIndex = colorSets.indexOf(currentColors);
    do {
      newIndex = Math.floor(Math.random() * colorSets.length);
    } while (newIndex === currentIndex);
    setCurrentColors(colorSets[newIndex]);
  };

  

  return (
    <ColorContext.Provider value={{ currentColors, changeColors }}>
      {children}
    </ColorContext.Provider>
  );
};

export { ColorContext, ColorProvider };
