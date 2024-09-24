// src/pages/Serices.js
import React from 'react';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import ContactForm from './components/ContactForm';

export const metadata = {
  title: 'Dallas Tek - Kontakt',
  description: "Ta kontakt med oss i dag, la oss realisere prosjektet ditt",
};

const Contact = () => {
  return (
      <div className="App">
        <CustomCursor />
        <main>
          <div className='Primary'>
          <ContactForm />
          <Footer />
          </div>
        </main>
      </div>
  );
};

export default Contact;
