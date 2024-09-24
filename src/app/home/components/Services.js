// src/components/Services.js
import React from 'react';
import './Services.css';
import Link from 'next/link';

const Services = () => {
  return (
    <div className="section services-slide">
      <h2 className="title-services anim-title mobile-title">
        <span className="line"><span className="line-inner">Vi gjør <span className="marked-text">alt</span> for at bedriften din skal lykkes</span></span>
      </h2>

      <div className="service-box">
        <div data-service="service1" className="text-box">
          <svg className="svg-image" width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <rect data-color-role="secondary" style={{ fill: 'var(--secondary-color)', fillOpacity: 1, strokeWidth: 0.287071 }} id="rect2-6" width="19.28797" height="271.05414" x="191.49821" y="-213.03105" ry="9.3929653" rx="0" transform="rotate(75)" />
            <rect data-color-role="border" style={{ fill: 'var(--border-color)', fillOpacity: 1, strokeWidth: 0.322417 }} id="rect2-6-3" width="17.097992" height="385.70346" x="-11.131286" y="-67.129852" ry="13.365962" rx="0" transform="rotate(-60)" />
            <rect data-color-role="border" style={{ fill: 'var(--border-color)', fillOpacity: 1, strokeWidth: 0.151661 }} id="rect2-6-3-3" width="8.0426674" height="181.42976" x="38.034428" y="-33.408745" ry="6.2871704" rx="0" transform="rotate(-60)" />
            <rect data-color-role="border" style={{ fill: 'var(--border-color)', fillOpacity: 1, strokeWidth: 0.151661 }} id="rect2-6-3-3-3" width="8.0426674" height="181.42976" x="163.35501" y="-211.56506" ry="6.2871704" rx="0" transform="rotate(30)" />
            <rect data-color-role="border" style={{ fill: 'var(--border-color)', fillOpacity: 1, strokeWidth: 0.151661 }} id="rect2-6-3-3-3-1" width="8.0426674" height="181.42976" x="-44.129066" y="-336.52634" ry="6.2871704" rx="0" transform="rotate(120)" />
            <rect data-color-role="secondary" style={{ fill: 'var(--secondary-color)', fillOpacity: 1, strokeWidth: 0.67714 }} id="rect2-6-3-8" width="35.909199" height="810.05432" x="-71.926659" y="-233.78824" ry="28.07119" rx="0" transform="rotate(-45)" />
            <rect style={{ fill: '#000000', fillOpacity: 0, strokeWidth: 0.322417 }} id="rect2-6-2" width="17.097992" height="385.70346" x="25.429953" y="36.877998" ry="13.365962" rx="0" transform="rotate(-60)" />
            <rect data-color-role="border" style={{ fill: 'var(--border-color)', fillOpacity: 1, strokeWidth: 0.342118 }} id="rect2-6-0" width="26.194841" height="283.46561" x="91.77298" y="191.97331" ry="9.8230677" rx="0" transform="rotate(-60)" />
            <rect data-color-role="text" style={{ fill: 'var(--text-color)', fillOpacity: 1, strokeWidth: 0.342118 }} id="rect2" width="26.194841" height="283.46561" x="2.4011037" y="-274.06396" ry="9.8230677" rx="0" transform="rotate(120)" />
            <rect data-color-role="text" style={{ fill: 'var(--text-color)', fillOpacity: 1, strokeWidth: 0.342118 }} id="rect2-7" width="26.194841" height="283.46561" x="-38.248699" y="-273.16248" ry="9.8230677" rx="0" transform="rotate(120)" />
            <rect data-color-role="text" style={{ fill: 'var(--text-color)', fillOpacity: 1, strokeWidth: 0.342118 }} id="rect2-7-4" width="26.194841" height="283.46561" x="137.778" y="-305.74829" ry="9.8230677" rx="0" transform="rotate(30)" />
          </svg>
          <h3>Design</h3>
          <p className='line-height'>Vi tilbyr profesjonell design som realiserer dine visjoner. Vi skaper visuelle konsepter for nettsider og prosjekter, tilpasset dine behov og ønsker.</p>
          <Link href="/tjenester#service1" className="text-box-link">Lær mer -&gt;</Link>
        </div>

        <div data-service="service2" className="text-box">
          <svg className="svg-image" width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <rect data-color-role="secondary" style={{ fill: 'var(--secondary-color)', fillOpacity: 1, strokeWidth: 0.254477 }} id="rect2-6" width="17.097992" height="240.27837" x="14.86834" y="-59.211163" ry="8.326478" rx="0" transform="rotate(-60)" />
            <rect data-color-role="border" style={{ fill: 'var(--border-color)', fillOpacity: 1, strokeWidth: 0.322417 }} id="rect2-6-3" width="17.097992" height="385.70346" x="-44.654987" y="-49.29018" ry="13.365962" rx="0" transform="rotate(-60)" />
            <rect data-color-role="secondary" style={{ fill: 'var(--secondary-color)', fillOpacity: 1, strokeWidth: 0.322417 }} id="rect2-6-3-8" width="17.097992" height="385.70346" x="-35.654179" y="-48.884876" ry="13.365962" rx="0" transform="rotate(-60)" />
            <rect style={{ fill: '#000000', fillOpacity: 0, strokeWidth: 0.322417 }} id="rect2-6-2" width="17.097992" height="385.70346" x="25.429953" y="36.877998" ry="13.365962" rx="0" transform="rotate(-60)" />
            <rect data-color-role="border" style={{ fill: 'var(--border-color)', fillOpacity: 1, strokeWidth: 0.342118 }} id="rect2-6-0" width="26.194841" height="283.46561" x="91.77298" y="191.97331" ry="9.8230677" rx="0" transform="rotate(-60)" />
            <rect data-color-role="secondary" style={{ fill: 'var(--secondary-color)', fillOpacity: 1, strokeWidth: 0.530228 }} id="rect2-6-0-9" width="40.597805" height="439.32626" x="-115.41273" y="-60.43663" ry="15.22418" rx="0" transform="rotate(-60)" />
            <rect data-color-role="text" style={{ fill: 'var(--text-color)', strokeWidth: 0.342118, fillOpacity: 1 }} id="rect2" width="26.194841" height="283.46561" x="155.39381" y="-115.78461" ry="9.8230677" rx="0" transform="rotate(30)" />
          </svg>
          <h3>Utvikling</h3>
          <p className='line-height'>Vårt team kan utvikle nye prosjekter eller videreutvikle eksisterende løsninger. Vi tilbyr også bistand og ekspertise for å optimalisere og forbedre dine nåværende prosjekter.</p>
          <Link href="/tjenester#service2" className="text-box-link">Lær mer -&gt;</Link>
        </div>

       
        
        <div data-service="service4" className="text-box">
          <svg className="svg-image" width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <rect data-color-role="secondary" style={{ fill: 'var(--secondary-color)', fillOpacity: 1, strokeWidth: 0.287071 }} id="rect2-6" width="19.28797" height="271.05414" x="-166.95384" y="-253.32239" ry="9.3929653" rx="0" transform="scale(-1)" />
            <rect style={{ fill: '#000000', fillOpacity: 0, strokeWidth: 0.322417 }} id="rect2-6-2" width="17.097992" height="385.70346" x="25.429953" y="36.877998" ry="13.365962" rx="0" transform="rotate(-60)" />
            <rect data-color-role="secondary" style={{ fill: 'var(--secondary-color)', fillOpacity: 1, strokeWidth: 0.681141 }} id="rect2-6-3-8" width="45.020302" height="653.77661" x="28.937443" y="11.789859" ry="22.655626" rx="0" />
            <rect data-color-role="border" style={{ fill: 'var(--border-color)', fillOpacity: 1, strokeWidth: 0.342118 }} id="rect2-6-0" width="26.194841" height="283.46561" x="-35.266659" y="-2.0195117" ry="9.8230677" rx="0" transform="rotate(-60)" />
            <rect data-color-role="secondary" style={{ fill: 'var(--secondary-color)', fillOpacity: 1, strokeWidth: 0.342118 }} id="rect2" width="26.194841" height="283.46561" x="51.326" y="-290.61465" ry="9.8230677" rx="0" transform="rotate(120)" />
            <rect data-color-role="text" style={{ fill: 'var(--text-color)', fillOpacity: 1, strokeWidth: 0.342118 }} id="rect2-7-4" width="26.194841" height="283.46561" x="111.30431" y="-45.54739" ry="9.8230677" rx="0" />
          </svg>
          <h3>Konsultasjon</h3>
          <p className='line-height'>Vi støtter din virksomhet i digitaliseringsprosesser og tilbyr rådgivning og strategi ved implementering av nye produkter og tjenester. Vårt mål er å hjelpe deg med å navigere i det digitale landskapet og oppnå suksess.</p>
          <Link href="/tjenester#service4" className="text-box-link">Lær mer -&gt;</Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
