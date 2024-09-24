"use client"

import "./ServiceDiv.css";
import React, { useEffect, useRef, useState } from "react";
import useAnimateTitles from "@/components/useAnimateTitles";

const ServiceDiv = () => {
  const containerRef = useRef(null);
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    setStartAnimation(true);
  }, []);

  useAnimateTitles(startAnimation);

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const imgElements = container.querySelectorAll('.service-div-img');
      imgElements.forEach(imgElement => {
        const containerRect = container.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (containerRect.top < windowHeight && containerRect.bottom > 0) {
          const scrollPosition = window.scrollY;
          const imgSpeed = 0.05;

          const offset = scrollPosition - container.offsetTop;
          const transformValue = `translateY(${offset * imgSpeed}px)`;

          imgElement.style.transform = transformValue;
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="service-div-wrapper" ref={containerRef}>
      <div className="service-div-container">
        <div className="service-div-text-container">
          <div className="service-div-title">
            <h2 className="anim-title">
              <span className="line"><span className="line-inner">Når du trenger litt ekstra magi</span></span>
            </h2>
            <h4 className=" anim-paragraph">
              <span className="line-p"><span className="line-inner-p">FLERE TJENESTER</span></span>
            </h4>
            <p className="anim-paragraph">
              <span className="line-p line-height"><span className="line-inner-p">
                Vår utvidede tjenesteportefølje omfatter skreddersydd prosjektledelse og dedikert brukerstøtte, som sammen sikrer at prosjektene dine leveres sømløst og vedlikeholdes effektivt over tid.
              </span></span>
            </p>
          </div>
        </div>
        <div className="service-div-boxes ">
          <div className="service-div-box Primary">
            <div
              className="service-div-img"
              style={{ backgroundImage: `url('/images/img-1.webp')` }}

            ></div>
            <h3>
              Prosjektledelse
            </h3>
            <p className="line-height">
              Effektiv prosjektledelse med fokus på smidighet, risikostyring og kvalitet sikrer at prosjektene dine leveres i tide og oppfyller forretningsmålene.
            </p>
          </div>
          <div className="service-div-box Primary">
            <div
              className="service-div-img"
              style={{ backgroundImage: `url('/images/img-2.webp')` }}
            ></div>
            <h3>
              Brukerstøtte
            </h3>
            <p className="line-height">
              Vi tilbyr pålitelig vedlikehold og support som sørger for at dine digitale løsninger er oppdatert, stabile og yter optimalt for brukerne dine.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDiv;
