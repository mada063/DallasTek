"use client"

import "./ServiceDesign.css";
import React, { useRef, useState, useEffect } from 'react';
import useParallaxEffect from "@/components/useParallaxEffect";
import useAnimateTitles from "@/components/useAnimateTitles";
import Image from "next/image";

const ServiceDesign = () => {
  const containerRef = useRef(null);
  const [startAnimation, setStartAnimation] = useState(false);

  useParallaxEffect(containerRef);

  useEffect(() => {
    setStartAnimation(true);
  }, []);

  useAnimateTitles(startAnimation);
  

  return (
    <div className="service-wrapper">
      <div className="service-container" ref={containerRef}  >
        <div className="service-img-container">
          <div className="service-parallax-img-container">
          <Image 
              src="/images/img-4.webp" 
              alt="Design" 
              layout="responsive" 
              width={2000} 
              height={2000} 
              className="service-parallax-img" 
          />
          </div>
        </div>
        
        <div className="service-design-text-container">
          <div className="service-page-title">
            <h2 className="anim-title">
              <span className="line"><span className="line-inner">Design</span></span>
            </h2>
            <p className="anim-paragraph">
              <span className="line-p line-height"><span className="line-inner-p">Gjennom innovativ design bygger vi unike, brukervennlige opplevelser og visuelle identiteter som engasjerer brukere og styrker merkevaren din på alle digitale flater.</span></span>
            </p>
          </div>
          <div className="service-page-elements">
            {[
              "Nettsider",
              "Systemdesign",
              "App-design",
              "Merkevarestrategi",
              "Logodesign",
              "Tjenestedesign"
            ].map((title, index) => (
              <div className="service-page-element" key={index}>
                <div></div>
                <h3>{title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceDesign;
