// src/components/ContactDallas.js
"use client"

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import './ContactDallas.css';

const ContactDallas = () => {
  const router = useRouter();

  const content = {
    '/': {
      heading: 'Fremtiden venter',
      paragraph: 'Har du et prosjekt?',
    },
    '/tjenester': {
      heading: 'Klar for neste steg?',
      paragraph: 'Snakk med oss i dag',
    },
    '/losninger': {
      heading: 'Veien fremover',
      paragraph: 'Hør hvordan vi kan hjelpe deg',
    },
  };

  const currentContent = content[router.pathname] || content['/'];

  return (
    <div className="contact-dallas">
      <h2>{currentContent.heading}</h2>
      <div className="contact-info">
        <p className="contact-text">{currentContent.paragraph}</p>
        <Link href="/kontakt" className="contact">Kontakt oss -&gt;</Link>
      </div>
    </div>
  );
};

export default ContactDallas;
