// src/components/Footer.js
import React from 'react';
import './Footer.css';
import Link from 'next/link';

import DallasTekLogoLS from '../app/assets/dallastek-logo-l-s';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <div className="footer-main-title">
            <DallasTekLogoLS />
          </div>
          <p className="footer-sub-title">Din neste</p>
          <p className="footer-sub-title footer-color">Partner</p>
        </div>

        <div className="footer-section">
          <p className="footer-title">Meny</p>
          <Link href="/tjenester" className="footer-option">Tjenester</Link>
          <Link href="/losninger" className="footer-option">Løsnigner</Link>
          <Link href="/om" className="footer-option">Om oss</Link>
        </div>

        <div className="footer-section">
          <p className="footer-title">Kontakt</p>
          <Link href="/kontakt" className="contact-footer footer-option">Få et tilbud</Link>
          <a className="footer-option" href="mailto:mathias@dallastek.no">Si hei</a>
        </div>
      </div>
      
      <div className="footer-bottom">
        <a>DALLAS TEK LØSNINGER® ALLE RETTIGHETER FORBEHOLDT</a>
        <div className="footer-socials">
          <a className="footer-social" href="https://www.linkedin.com/company/dallas-tek-l%C3%B8sninger/" target="_blank" rel="noopener noreferrer">
            <svg className="footer-svg-image" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="40px" height="40px">    
              <path d="M9,25H4V10h5V25z M6.501,8C5.118,8,4,6.879,4,5.499S5.12,3,6.501,3C7.879,3,9,4.121,9,5.499C9,6.879,7.879,8,6.501,8z M27,25h-4.807v-7.3c0-1.741-0.033-3.98-2.499-3.98c-2.503,0-2.888,1.896-2.888,3.854V25H12V9.989h4.614v2.051h0.065c0.642-1.18,2.211-2.424,4.551-2.424c4.87,0,5.77,3.109,5.77,7.151C27,16.767,27,25,27,25z" data-color-role="text" fill="#d9d9d9"/>
            </svg>                     
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
