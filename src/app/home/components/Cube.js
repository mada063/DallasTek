import React, { useEffect, useRef, useContext } from 'react';
import { ColorContext } from './ColorContext';
import './Cube.css';

const Cube = () => {
  const { changeColors } = useContext(ColorContext);
  const cubeRef = useRef(null);
  const isometricCubeRef = useRef(null);
  let idleTimer;

  const startRotation = () => {
    if (cubeRef.current) {
      cubeRef.current.style.animation = 'spin 20s linear infinite';
    }
    if (isometricCubeRef.current) {
      isometricCubeRef.current.style.animation = 'spin 5s linear infinite';
    }
  };

  useEffect(() => {
    startRotation();

    const handleMouseMove = (event) => {
      idleTimer = setTimeout(startRotation, 4000);
      clearTimeout(idleTimer);
      const mouseX = event.clientX;
      const mouseY = event.clientY;
      const deltaX = mouseX - window.innerWidth / 2;
      const deltaY = mouseY - window.innerHeight / 2;
      if (cubeRef.current) {
        cubeRef.current.style.transform = `rotateY(${(deltaX / window.innerWidth) * 30}deg) rotateX(${(-deltaY / window.innerHeight) * 30}deg)`;
        cubeRef.current.style.animation = 'none';
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="container">
      <div className="isometric-cube" ref={isometricCubeRef} onClick={changeColors}>
        <div className="face top"></div>
        <div className="face bottom"></div>
        <div className="face left"></div>
        <div className="face right"></div>
        <div className="face front"></div>
        <div className="face back"></div>
      </div>
      <div className="cube" ref={cubeRef} onClick={changeColors}>
        <div className="face front"></div>
        <div className="face back"></div>
        <div className="face right"></div>
        <div className="face left"></div>
        <div className="face top"></div>
        <div className="face bottom"></div>
      </div>
    </div>
  );
};

export default Cube;
