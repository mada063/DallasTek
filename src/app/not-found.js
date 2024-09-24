// src/pages/NotFound.js
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import Link from 'next/link';
import './not-found.css';

export const metadata = {
    title: 'Dallas Tek - 404',
  };

const NotFound = () => {
  return (
      <div className="App">
        <CustomCursor />
        <main className='Primary'>
        <Header />
        <div className='notfound-wrapper'>
            <div className='notfound-container'>
                <h1>
                    Beklager!
                </h1>

                <h2>
                    Vi fant ikke siden du leter etter
                </h2>
                <p className='notfound-tidbit'>Kanskje den finnes der ute et sted...</p>

                <p className='bold marked-text'>
                    Mulige grunner
                </p>
                    <li className='notfound-list'>
                        Adressen er feil
                    </li>
                    <li className='notfound-list'>
                        Lenken fungerer ikke eller er utdatert
                    </li>
            </div>
            <Link href="/" className="notfound-button">Hjem</Link>
        </div>
        <Footer />
        </main>
      </div>

  );
};

export default NotFound;
