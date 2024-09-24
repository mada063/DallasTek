import React, { useState, useEffect } from 'react';
import useAnimateTitles from '../../components/useAnimateTitles';
import './AboutFounder.css';

const AboutFounder = () => {
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    setStartAnimation(true);
  }, []);

  useAnimateTitles(startAnimation);

  return (
    <div className='about-founder-wrapper'>
        <div className="about-founder">
            <h2 className="anim-title founder-title">
                <span className="line"><span className="line-inner">Si hei til Mathias</span></span>
            </h2>

            <div className="founder-container">
            <p className="anim-paragraph location-p">
                    <span className="line-p"><span className="line-inner-p">Dallas Tek ble grunnlagt av Mathias Dallas, en teknologi-entusiast med lidenskap for problemløsning. Mathias har bakgrunn innen informatikk og har spesialisert seg på web og programvareutvikling. <br></br><br></br>
                    Mathias startet Dallas Tek da han så potensiale i digitalisering av "eldre" bedrifter. Ved å gi de verktøyene de trengte for å nå større og flere kunder ville de få økt verdiskapning. Dette ble gjort ved å utvikle nettsider skreddersydd til brukerens behov i dagens marked. <br></br><br></br>
                    Med sin lidenskap for kontinuerlig forbedring, læring og utvikling ser han på Dallas tek som en plattform for å realisere ideer og hjelpe selskaper lykkes i en stadig mer digitalisert verden.</span></span>
                </p>

                <img src='/images/portrett dallas.png' className='founder-image'></img>
                
            </div>
        </div>
    </div>
  );
};

export default AboutFounder;