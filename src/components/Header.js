"use client";

import React, { useState, useEffect } from 'react';
import './Header.css';
import DallasTekLogoL from '../app/assets/dallastek-logo-l';
import { FaBars } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import { TransitionLink } from './TransitionLink';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollPosition, setLastScrollPosition] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // Track if the mobile menu is open

  useEffect(() => {
    // Check if window and localStorage are available (i.e., on client-side)
    if (typeof window !== "undefined") {
      const storedIsScrolled = JSON.parse(localStorage.getItem('isScrolled'));
      const storedIsHidden = JSON.parse(localStorage.getItem('isHidden'));

      setIsScrolled(storedIsScrolled || false);
      setIsHidden(storedIsHidden || false);
      setIsMobile(window.innerWidth <= 768);

      const handleScroll = () => {
        const currentScrollPosition = window.scrollY;

        if (currentScrollPosition > 50) {
          setIsScrolled(true);
          localStorage.setItem('isScrolled', true);
        } else {
          setIsScrolled(false);
          localStorage.setItem('isScrolled', false);
        }

        if (currentScrollPosition > lastScrollPosition && currentScrollPosition > 100) {
          setIsHidden(true);
          localStorage.setItem('isHidden', true);
        } else if (currentScrollPosition < lastScrollPosition || currentScrollPosition <= 100) {
          setIsHidden(false);
          localStorage.setItem('isHidden', false);
        }

        setLastScrollPosition(currentScrollPosition);
      };

      const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
        if (window.innerWidth > 768) {
          setMenuOpen(false); // Close the mobile menu if resizing back to desktop
        }
      };

      window.addEventListener('scroll', handleScroll);
      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('resize', handleResize);
      };
    }
  }, [lastScrollPosition]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header className={`header Primary ${isScrolled ? 'scrolled' : ''} ${isHidden ? 'hide-header' : 'show-header'}`}>
        <div className="header-left">
          <TransitionLink href="/" className="title-container-header">
            <div className="header-logo-container">
              <span className="title-main"><DallasTekLogoL /></span>
            </div>
          </TransitionLink>
        </div>
        {isMobile ? (
          <div className="header-right mobile-menu">
            <button className="menu-icon" onClick={toggleMenu}>
              {menuOpen ? <IoMdClose size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        ) : (
          <div className="header-middle">
            <TransitionLink href="/tjenester" className="h-mob">
              Tjenester
            </TransitionLink>
            <TransitionLink href="/losninger" className="h-mob">
              Løsninger
            </TransitionLink>
            <TransitionLink href="/om" className="about-btn">
              Om
            </TransitionLink>
          </div>
        )}
        {!isMobile && (
          <div className="header-right">
            <TransitionLink href="/kontakt">
              Kontakt
            </TransitionLink>
          </div>
        )}
        <nav className={`mobile-nav ${menuOpen ? 'open' : 'closed'}`}>
          <TransitionLink href="/tjenester" onClick={toggleMenu}>
            Tjenester -&gt;
          </TransitionLink>
          <TransitionLink href="/losninger" onClick={toggleMenu}>
            Løsninger -&gt;
          </TransitionLink>
          <TransitionLink href="/om" onClick={toggleMenu}>
            Om -&gt;
          </TransitionLink>
          <TransitionLink href="/kontakt" onClick={toggleMenu}>
            Kontakt -&gt;
          </TransitionLink>
        </nav>
      </header>
      <div className="transition-overlay"></div>
    </>
  );
};

export default Header;
