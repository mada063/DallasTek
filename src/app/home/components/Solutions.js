"use client"

import React, { useEffect, useState, useRef, useCallback } from 'react';
import './Solutions.css';
import useAnimateTitles from '../../../components/useAnimateTitles';
import { useSwipeable } from 'react-swipeable';
import Image from 'next/image';


const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startAnimation, setStartAnimation] = useState(false);
  const itemsRef = useRef([]);
  const titleDelay = 1000; // Delay in milliseconds
  const animationInitDelay = 2000; // Delay for starting useAnimateTitles

  const items = [
    {
      title: 'Norengros HX',
      description: 'Dette prosjektet innebar flere komponenter. Fra design og utvikling av flere nettsteder, til produkt enrikende arbeid. Ideen på designet var å gi et sofistikert bilde av bedriften og for å ta besøkende på en reise. Samtidig som å gi et godt overblikk over alle produktene deres. Dette ble gjort ved å <mark> forbedre brukeropplevelsen.</mark> Utviklingen av nettsidene ble gjort gjennom flere platformer. En på Norengros.no, ved bruk av Sanity, og en egen gjennom X. Flere produkter fikk oppfriskning og ble fremmet på de nylig skapte sidene.',
      imgSrc: '/images/mockup-norengroshx.jpg',
      link: '',
      alt: 'Norengros HX prosjekt',
    },
    {
      title: 'Foreningen Brørvikskuto',
      description: 'Prosjektet gjaldt utvikling av nettsiden for Foreningen Brørvikskuto, med mål om å fremme foreningens formål og aktiviteter. Fra design til utvikling var det fokus på å skape en <mark>brukervennlig og visuelt tiltalende nettside.</mark> Markedsføring for foreningen var en integrert del av prosjektet, med strategier for å øke bevisstheten og engasjementet rundt foreningens arbeid. Google søk optimalisering var også et fokusområde for å forbedre synlighet og tiltrekke flere besøkende til nettsiden.',
      imgSrc: '/images/mockup-brørvikskuto.jpg',
      link: '',
      alt: 'Brørvikskuto prosjekt',
    },
    {
      title: 'Onlan',
      description: 'On Lan prosjektet gikk ut på å utvikle nettside for foreningen. Dette var i hovedsak en informasjonside for å fremme foreningens Lan eventer og gi deltakere en oversiktlig side med god informasjon. Her var designet laget for å ta besøkende på en reise, med flere effekter og endringer i sideoppbygging.',
      imgSrc: '/images/mockup-onlan.png',
      link: 'http://www.onlan.gg/',
      alt: 'Onlan Prosjekt',
    }
  ];

  const handlers = useSwipeable({
    onSwipedLeft: () => setCurrentIndex((currentIndex + 1) % items.length),
    onSwipedRight: () => setCurrentIndex((currentIndex - 1 + items.length) % items.length),
  });

  useEffect(() => {
    // Set a delay before allowing animations to start
    const timer = setTimeout(() => {
      setStartAnimation(true);
    }, animationInitDelay);

    return () => clearTimeout(timer); // Cleanup on component unmount
  }, []);

  // Always call useAnimateTitles, but pass the startAnimation flag
  useAnimateTitles(startAnimation);

  const showSlide = useCallback((index) => {
    itemsRef.current.forEach((item, i) => {
      const title = item.querySelector('.anim-title-left');
      const paragraph = item.querySelector('.anim-paragraph');

      if (i === index) {
        item.classList.add('active');
        item.style.opacity = '1';
        item.style.visibility = 'visible';

        // Remove classes first to reset state
        title.classList.remove('visible', 'delayed');
        paragraph.classList.remove('visible', 'delayed');

        // Force reflow
        void item.offsetWidth;

        // Apply classes after a delay to trigger animation
        setTimeout(() => {
          title.classList.add('visible', 'delayed');
          paragraph.classList.add('visible', 'delayed');
        }, titleDelay);
      } else {
        item.classList.remove('active');
        item.style.opacity = '0';
        item.style.visibility = 'hidden';

        title.classList.add('hidden');
        title.classList.remove('visible', 'delayed');
        paragraph.classList.add('hidden');
        paragraph.classList.remove('visible', 'delayed');
      }
    });
  }, [titleDelay]);

  useEffect(() => {
    showSlide(currentIndex);
  }, [currentIndex, showSlide]);

  return (
    <div className="solutions-container">
     
      <div {...handlers} className="carousel">
        <div className="carousel-inner">
          {items.map((item, index) => (
            <div
              className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
              ref={el => itemsRef.current[index] = el}
              key={index}
            >
              <div className="project">
                <div className="project-description">
                  <h2 className="project-title anim-title-left">
                    <span className="line-left"><span className="line-inner-left">{item.title}</span></span>
                  </h2>
                  <p className="anim-paragraph line-height">
                    <span className="line-p"><span className="line-inner-p" dangerouslySetInnerHTML={{ __html: item.description }}></span></span>
                  </p>
                </div>
                <div className="project-image">
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    <Image src={item.imgSrc} alt={item.alt} width={2000} height={2000}/>
                    <div className="overlay">Ta en titt</div>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-control prev" onClick={() => setCurrentIndex((currentIndex - 1 + items.length) % items.length)}></button>
        <button className="carousel-control next" onClick={() => setCurrentIndex((currentIndex + 1) % items.length)}></button>
        <div className="carousel-indicators">
          {items.map((_, index) => (
            <span
              key={index}
              className={`indicator ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;