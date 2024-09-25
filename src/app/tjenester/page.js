import React from 'react';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import Divider from '../home/components/Divider';
import ServiceWelcome from './components/ServiceWelcome';
import ServiceDesign from './components/ServiceDesign';
import ServiceDivider from './components/ServiceDivider';
import ServiceDevelopment from './components/ServiceDevelopment';
import ServiceShowcase from './components/ServiceShowcase';
import ServiceStrategy from './components/ServiceStrategy';
import ServiceConsulting from './components/ServiceConsulting';
import ServiceDiv from './components/ServiceDiv';
import ContactDallas from '../home/components/ContactDallas';

export const metadata = {
  title: 'Dallas Tek - Tjenester',
  description: "Tjenestene vi tilbyr inkluderer Strategi, Design, Utvikling, Rådgivning, Prosjektledelse og Brukerstøtte"
};

const Services = () => {

  return (
    <div>
      <main className='BlackText'>
        <div className='Primary'>
          
          <ServiceWelcome />
          <ServiceShowcase />
          <ServiceDivider />
        </div>
        <ServiceStrategy />
          <ServiceDesign />

          <ServiceDevelopment />

          <ServiceConsulting />

        <ServiceDiv />
        <Divider />
        <ContactDallas />
      </main>
      <div className='Primary'>
        <Footer />
      </div>
      <CustomCursor />
      </div>
  );
};

export default Services;
