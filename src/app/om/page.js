
import React from 'react';
import CustomCursor from '@/components/CustomCursor';
import AboutWelcome from './components/AboutWelcome';
import AboutLocation from './components/AboutLocation';
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "../mobile.css";

export const metadata = {
  title: 'Dallas Tek - Om',
  description: "Dallas Tek ble grunnlagt 2024 i Bergen. Med bakgrunn i en dyp fascinasjon for datamaskiner og teknologi, startet vi som et sideprosjekt og har utviklet oss til å bli et selskap med fokus på å levere skreddersydde teknologiløsninger. ",
};

const About = () => {
  return (
    <div className={`App`}>
        <CustomCursor />
        <main>
          <div className={`Primary`}>
            <AboutWelcome/>
          </div>
            <AboutLocation />
          <div className={`Primary`}>
            <Footer />
          </div>
        </main>
      </div>
  );
};

export default About;
