"use client"
import React, { useEffect, useState } from 'react';
import useAnimateTitles from '../../../components/useAnimateTitles';
import './ProjectsWelcome.css';
import Image from 'next/image';

const ProjectsWelcome = () => {
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    setStartAnimation(true);
  }, []);

  useAnimateTitles(startAnimation);

  useEffect(() => {
    const handleScroll = () => {
        const offset = window.pageYOffset;

        const parallaxImage1 = document.querySelector('.project-parallax-img-1');

        if (parallaxImage1) {
            parallaxImage1.style.transform = `translateY(${offset * 0.2}px)`;
        }
        
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, []);

  return (
    <div className='project-container-wrapper'>
        <div className="project-container">
          <div className='project-text'>
            <h2 className="anim-title animate-on-load">
              <span className="line"><span className="line-inner">Lidenskap i hver <mark>detalj</mark></span></span>
            </h2>
            <p className="anim-paragraph animate-on-load">
              <span className="line-p"><span className="line-inner-p">"Lidenskap i hver detalj" handler om vår dedikasjon til kvalitet. Vi tror at ekte håndverk ligger i presisjon og omtanke – fra de første idéene til siste finpuss. Hver linje kode, hver designelement, og hver beslutning vi tar er preget av en lidenskap for det vi gjør.</span></span>
            </p>
          </div>

          <div className='service-elements-img'>
                <div className='service-element'>
                    <Image src="/images/img-4.webp" alt="Lidenskap" layout="responsive" width={2000} height={3000}className='project-welcome-img project-parallax-img-1'/>
                </div>       
          </div>
        </div>
    </div>
    
  );
};

export default ProjectsWelcome;
