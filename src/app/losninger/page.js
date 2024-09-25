// src/pages/Serices.js
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import ProjectsWelcome from './components/ProjectsWelcome';
import Solutions from '../home//components/Solutions'
import ContactDallas from '../home/components/ContactDallas';

export const metadata = {
  title: 'Dallas Tek - Løsninger',
  description: "Hver linje kode, hver designelement, og hver beslutning vi tar er preget av en lidenskap for det vi gjør.",
};

const Solution = () => {
  return (
      <div className="App">
        <CustomCursor />
        <main>
          <div className='Primary'>
            <ProjectsWelcome />
            <Solutions />
          </div>
            <ContactDallas />
        </main>
        
        <div className='Primary'>
          <Footer />
        </div>
      </div>
      
  );
};

export default Solution;
