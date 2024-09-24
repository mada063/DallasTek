"use client"

import React, { useState, useEffect, useRef } from 'react';
import useAnimateTitles from '../../../components/useAnimateTitles';
import './HomeWelcome.css';

const HomeWelcome = () => {
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    setStartAnimation(true);
  }, []);

  useAnimateTitles(startAnimation);
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

    const intervalId = setInterval(nextTekText, 2000); // Changes every 3 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [current]);

  return (
    <div className="homewelcome-landing">
      <div className="home-container">
        <div className='title-container'>

            <h1 className="anim-title about-title animate-on-load">
                <span className="line"><span className="line-inner">Dedikert til kvalitet</span></span>
            </h1>

            <div className='about-titles-middle'>

                <h1 className="anim-title about-title-middle animate-on-load">
                    <span className="line"><span className="line-inner">Drevet av <span className="marked-text">lidenskap</span></span></span>
                </h1>

                
                <div className='tek-container-wrapper '>
                  <div className="tek-container-section">
                    <span className="bracket">[</span>
                    
                      <div className='tek-test'>
                        <span className="tek-container">
                          <span className="tek-text" ref={el => tekTextsRef.current[0] = el}>Konsultasjon</span>
                          <span className="tek-text" ref={el => tekTextsRef.current[1] = el}>Løsningen</span>
                          <span className="tek-text" ref={el => tekTextsRef.current[2] = el}>Design</span>
                          <span className="tek-text" ref={el => tekTextsRef.current[3] = el}>Utvikling</span>
                          <span className="tek-text" ref={el => tekTextsRef.current[4] = el}>Digitalisering</span>
                        </span>
                      </div>
                    
                    <span className="bracket">]</span>
                  </div>
                  <span className="for-din-bedrift">for din bedrift</span>
                </div>
              </div>

          </div>
              
      </div>
    </div>
  );
};

export default HomeWelcome;
