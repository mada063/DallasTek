"use client"

import React, { useEffect, useRef, useState } from 'react';
import Cube from './Cube';
import useAnimateTitles from '../../../components/useAnimateTitles';
import './CubeContainer.css';

const CubeContainer = () => {
  useAnimateTitles();
  const tekTextsRef = useRef([]);
  const contactRef = useRef(null);
  const [current, setCurrent] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger visibility for animations on component mount
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const texts = tekTextsRef.current;
    if (texts.length === 0) return;

    const nextTekText = () => {
      const oldCurrent = current;
      texts[oldCurrent]?.classList.remove('active');
      texts[oldCurrent]?.classList.add('exit');

      const newCurrent = (current + 1) % texts.length;
      texts[newCurrent]?.classList.add('active');
      setCurrent(newCurrent);

      setTimeout(() => {
        texts[oldCurrent]?.classList.remove('exit');
      }, 500); // Matches the CSS transition time
    };

    const intervalId = setInterval(nextTekText, 3000); // Changes every 3 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [current]);

  return (
    <div className="landing-container">
      <div className="title-cube-container">
        <div className="title">
          <p className="anim-paragraph about-paragraph line-height">
            <span className="line-p"><span className="line-inner-p">Hos oss møter lidenskap, profesjonalitet.<br></br> Vi er dedikert til å bringe din visjon til <span className='marked-text '>virkeligheten</span><br></br> med 
              god teknologi og dyp forståelse av digitale prosesser.</span></span>
          </p>

        </div>
        <Cube />
      </div>
    </div>
  );
};

export default CubeContainer;
