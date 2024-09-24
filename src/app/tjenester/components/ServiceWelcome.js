"use client"

import React, { useEffect, useState } from 'react';
import './ServiceWelcome.css';
import useAnimateTitles from "@/components/useAnimateTitles";
import Image from "next/image";

const ServiceWelcome = () => {
    const [startAnimation, setStartAnimation] = useState(false);

    useEffect(() => {
        setStartAnimation(true);
    }, []);

    useAnimateTitles(startAnimation);


    useEffect(() => {
        const handleScroll = () => {
            const offset = window.pageYOffset;

            const parallaxImage1 = document.querySelector('.parallax-img-1');
            const parallaxImage2 = document.querySelector('.parallax-img-2');

            if (parallaxImage1) {
                parallaxImage1.style.transform = `translateY(${offset * 0.2}px)`;
            }
            if (parallaxImage2) {
                parallaxImage2.style.transform = `translateY(${offset * -0.3}px)`;
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className='service-landing'>
            <div className='service-welcome-container'>
                <div className="service-title-container">
                    <div className="service-title">
                        <h2 className="anim-title animate-on-load services-title">
                            <span className="line"><span className="line-inner">Utforsk Nye <span className='border-color'>Horistonter</span></span></span>
                        </h2>
                        <p className="anim-paragraph animate-on-load">
                            <span className="line-p"><span className="line-inner-p">Vi spesialiserer oss på en rekke tjenester - fra design og produkt utvikling til rådgivning og freelancing. Vi er her for å hjelpe deg, finne løsningen som passer.</span></span>
                        </p>
                    </div>
                </div>

                <div className='service-elements-img'>
                    <div className='service-element'>
                        <Image className='service-welcome-img parallax-img-1 h-mob' src="/images/img-8.webp" layout="responsive" width={2000} height={2000}  alt="Parallax image1"/>
                    </div>
                    
                    <div className='service-element'>
                        <Image className='service-welcome-img parallax-img-2' src="/images/img-face-2.webp" layout="responsive" width={2000} height={2000}  alt="Parallax image2"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceWelcome;
