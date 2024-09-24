"use client"
import "./ServiceConsulting.css";
import React, { useRef, useState, useEffect } from 'react';
import useParallaxEffect from "@/components/useParallaxEffect";
import useAnimateTitles from "@/components/useAnimateTitles";
import Image from "next/image";

const ServiceConsulting = () => {
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
            <div className="service-img-container">
                <div className="service-parallax-img-container">
                    <Image 
                        src="/images/img-6.webp"
                        alt="Consulting" 
                        layout="responsive"
                        width={2000}
                        height={2000}
                        className="service-parallax-img" 
                    />
                </div>
            </div>

            <div className="service-consulting-text-container">
                <div className="service-page-title">
                  <h2 className="anim-title">
                    <span className="line"><span className="line-inner">Rådgivning</span></span>
                  </h2>
                  <p className="anim-paragraph">
                    <span className="line-p line-height"><span className="line-inner-p">Vi gir innsiktsfulle råd om digitalisering, hjelper med å velge riktige løsninger, og tilrettelegger for digital transformasjon som maksimerer effektivitet og innovasjon.</span></span>
                  </p>
                </div>
            
                <div className="service-page-elements">
                  {[
                    "Teknologivurdering",
                    "Digitalisering",
                    "Endringsledelse",
                    "Skystrategi",
                    "Risikovurdering",
                    "Databehandling",
                    "Generelt"
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

export default ServiceConsulting;
