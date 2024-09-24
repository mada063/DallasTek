"use client"
import React, { useState, useEffect } from 'react';
import useAnimateTitles from '../../../components/useAnimateTitles';
import './AboutLocation.css';

const AboutLocation = () => {
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    setStartAnimation(true);
  }, []);

  useAnimateTitles(startAnimation);

  return (
    <div className="about-location">
        <img className="location-img" alt='Bryggen i bergen' src='/images/Bergen-bryggen.jpg'></img>

        <div className="location-container">
            <h2 className="anim-title location-title">
                <span className="line"><span className="line-inner"><span className=' border-color'>Vår</span> historie</span></span>
            </h2>
            <p className="anim-paragraph location-p">
                <span className="line-p"><span className="line-inner-p">Dallas Tek ble grunnlagt 2024 i Bergen. Med bakgrunn i en dyp fascinasjon for datamaskiner og teknologi, startet vi som et sideprosjekt og har utviklet oss til å bli et selskap med fokus på å levere skreddersydde teknologiløsninger. <br></br><br></br>
Vårt fokus ligger på å anvende banebrytende teknologier for å sikre at vi leverer løsninger av høy kvalitet. Vi har etablert JavaScript som vår primær teknologistabel, noe som gjør det mulig å ha en ren kodebase og enkelt kunnskapsdeling i vårt utviklingsteam. Vi har spesialisert oss på rammeverk som React, React Native og Node.js, og tilbyr dermed et bredt spekter av tjenester innen web- og programvareutvikling. <br></br><br></br>
Vi er dedikerte til å skape et miljø og hverdag som gir verdi for ansatte, og for våre kunder. Gjennom vårt arbeid streber vi etter å levere ikke bare teknologi, men også innsikt og råd som hjelper våre kunder å navigere og lykkes i den digitale verden.
</span></span>
            </p>
        </div>
    </div>
  );
};

export default AboutLocation;
