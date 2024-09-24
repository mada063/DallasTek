"use client"
import React, { useState, useEffect } from 'react';
import useAnimateTitles from '../../../components/useAnimateTitles';
import './AboutWelcome.css';

const AboutWelcome = () => {
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    setStartAnimation(true);
  }, []);

  useAnimateTitles(startAnimation);

  return (
    <div className="about-landing">
      <div className="about-container">
        <div className="title-container">
          <h1 className="anim-title about-title animate-on-load">
            <span className="line"><span className="line-inner">Fra idé</span></span>
          </h1>
          <div className="about-titles-middle">
            <h1 className="anim-title about-title-middle animate-on-load">
              <span className="line"><span className="line-inner">Til virkelighet</span></span>
            </h1>
            <p className="anim-paragraph about-paragraph animate-on-load">
              <span className="line-p"><span className="line-inner-p">
                Vår reise begynte med en lidenskap for teknologi, og en drøm om å bringe innovasjon til bedrifter. <br />
                Fra våre første steg, har vi vært dedikert til å omforme ideer til virkelighet. <br />
                Bli med oss på reisen mot å skape fremtidens digitale verden.
              </span></span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutWelcome;
