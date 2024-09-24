"use client"

import "./ServiceDevelopment.css";
import React, { useRef, useState, useEffect } from 'react';
import useParallaxEffect from "@/components/useParallaxEffect";
import useAnimateTitles from "@/components/useAnimateTitles";
import Image from "next/image";

const ServiceDevelopment = () => {

  const containerRef = useRef(null);
  const [startAnimation, setStartAnimation] = useState(false);

  useParallaxEffect(containerRef);

  useEffect(() => {
    setStartAnimation(true);
  }, []);

  useAnimateTitles(startAnimation);

  return (
    <div className="service-wrapper">
        <div className="service-container" ref={containerRef}>
            <div className="service-development-text-container">
                <div className="service-page-title">
                  <h2 className="anim-title">
                    <span className="line"><span className="line-inner">Utvikling</span></span>
                  </h2>
                  <p className="anim-paragraph">
                    <span className="line-p line-height"><span className="line-inner-p">Vi utvikler skalerbare og robuste teknologiløsninger som forener funksjonalitet og ytelse, og tilpasser teknologivalg for å støtte dine forretningsmål.</span></span>
                  </p>
                </div>
            
                <div className="service-page-elements">
                  {[
                    "Produktutvikling",
                    "AWS Integrasjon",
                    "API Integrasjon",
                    "Cross-platform utvikling",
                    "Videreutvikling"
                  ].map((title, index) => (
                    <div className="service-page-element" key={index}>
                      <div></div>
                      <h3>{title}</h3>
                    </div>
                  ))}
                </div>
            </div>

            <div className="service-img-container">
              <div className="service-parallax-img-container">
              <Image 
                  src="/images/img-5.webp" 
                  alt="Development" 
                  layout="responsive" 
                  width={2000} 
                  height={2000} 
                  className="service-parallax-img" 
          />
              </div>
          </div>
            
        </div>
    </div>
  )
}

export default ServiceDevelopment;
