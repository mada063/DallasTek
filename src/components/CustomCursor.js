"use client"

import React, { useEffect, useState, useRef } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollPosition, setScrollPosition] = useState({ x: 0, y: 0 });
  const [cursorStyle, setCursorStyle] = useState({});
  const [cursorOuterStyle, setCursorOuterStyle] = useState({});
  const [cursorClass, setCursorClass] = useState('');
  const [cursorTransform, setCursorTransform] = useState('translate(-50%, -50%) scale(1)');
  const [cursorOuterTransform] = useState('translate(-50%, -50%)');
  const [cursorX, setCursorX] = useState(0);
  const [cursorY, setCursorY] = useState(0);
  const [cursorOuterX, setCursorOuterX] = useState(0);
  const [cursorOuterY, setCursorOuterY] = useState(0);
  const [showCircularText, setShowCircularText] = useState(false);
  const [hoveringPrimary, setHoveringPrimary] = useState(false);
  const cursorRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollPosition({ x: window.scrollX, y: window.scrollY });
    };

    const handleClick = () => {
      setCursorClass('click');
      setCursorTransform('translate(-50%, -50%) scale(1.8)'); // Expand the cursor
      setTimeout(() => {
        setCursorClass('');
        setCursorTransform('translate(-50%, -50%) scale(1)'); // Reset the cursor
      }, 300); // Duration of the expansion
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleClick);
    };
  }, []);

  // Change cursor color when hovering over .Primary
  useEffect(() => {
    const primaryElements = document.querySelectorAll('.Primary');
    const handleMouseEnter = () => setHoveringPrimary(true);
    const handleMouseLeave = () => setHoveringPrimary(false);

    primaryElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      primaryElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  useEffect(() => {
    const hoverElements = document.querySelectorAll('.container');
    hoverElements.forEach(el => {
      el.addEventListener('mouseenter', () => {
        setShowCircularText(true);
        setCursorClass('hover-container');
      });
      el.addEventListener('mouseleave', () => {
        setShowCircularText(false);
        setCursorClass('');
      });
    });

    return () => {
      hoverElements.forEach(el => {
        el.removeEventListener('mouseenter', () => {
          setShowCircularText(true);
          setCursorClass('hover-container');
        });
        el.removeEventListener('mouseleave', () => {
          setShowCircularText(false);
          setCursorClass('');
        });
      });
    };
  }, []);

  useEffect(() => {
    const blendElements = document.querySelectorAll('.header-left a, .title-services, .title-skills, .sub-title-skills, .about-title, .about-title-middle, .contact-title, .services-title, .projects-title');
    const addHoverEffect = () => {
      if (cursorRef.current) {
        cursorRef.current.classList.add('hover-effect');
        setCursorTransform('translate(-50%, -50%) scale(4)');
      }
    };
    const removeHoverEffect = () => {
      if (cursorRef.current) {
        cursorRef.current.classList.remove('hover-effect');
        setCursorTransform('translate(-50%, -50%) scale(1)');
      }
    };

    blendElements.forEach(el => {
      el.addEventListener('mouseenter', addHoverEffect);
      el.addEventListener('mouseleave', removeHoverEffect);
    });

    return () => {
      blendElements.forEach(el => {
        el.removeEventListener('mouseenter', addHoverEffect);
        el.removeEventListener('mouseleave', removeHoverEffect);
      });
    };
  }, []);

  useEffect(() => {
    const hoverElements = document.querySelectorAll('.notfound-button, .form-button, .subject-button, .budget-button, .text-box-link, .contact, .header-middle a, .header-right a, .contact-button, .close-btn, .footer-option, .footer-social, .project-image, .indicator, .customer');
    const addExpandEffect = () => {
      if (cursorRef.current) {
        cursorRef.current.classList.add('expand');
        setCursorTransform('translate(-50%, -50%) scale(1.5)');
      }
    };
    const removeExpandEffect = () => {
      if (cursorRef.current) {
        cursorRef.current.classList.remove('expand');
        setCursorTransform('translate(-50%, -50%) scale(1)');
      }
    };

    hoverElements.forEach(el => {
      el.addEventListener('mouseenter', addExpandEffect);
      el.addEventListener('mouseleave', removeExpandEffect);
    });

    return () => {
      hoverElements.forEach(el => {
        el.removeEventListener('mouseenter', addExpandEffect);
        el.removeEventListener('mouseleave', removeExpandEffect);
      });
    };
  }, []);

  useEffect(() => {
    const updateCursor = () => {
      const newCursorX = cursorX + (mousePosition.x + scrollPosition.x - cursorX) * 0.4;
      const newCursorY = cursorY + (mousePosition.y + scrollPosition.y - cursorY) * 0.4;
      const newCursorOuterX = cursorOuterX + (mousePosition.x + scrollPosition.x - cursorOuterX) * 0.2;
      const newCursorOuterY = cursorOuterY + (mousePosition.y + scrollPosition.y - cursorOuterY) * 0.2;

      setCursorX(newCursorX);
      setCursorY(newCursorY);
      setCursorOuterX(newCursorOuterX);
      setCursorOuterY(newCursorOuterY);

      setCursorStyle({
        left: `${newCursorX}px`,
        top: `${newCursorY}px`,
        transform: cursorTransform,
        backgroundColor: hoveringPrimary ? 'var(--text-color)' : 'var(--primary-color)', // Change color when hovering
      });
      setCursorOuterStyle({
        left: `${newCursorOuterX}px`,
        top: `${newCursorOuterY}px`,
        transform: cursorOuterTransform
      });
    };

    const animationFrame = requestAnimationFrame(updateCursor);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [mousePosition, scrollPosition, cursorX, cursorY, cursorOuterX, cursorOuterY, cursorTransform, cursorOuterTransform, hoveringPrimary]);

  useEffect(() => {
    const str = "TRYKK PÅ MEG - TRYKK PÅ MEG -";
    const textElement = document.getElementById("circular-text");
    if (textElement) {
      textElement.innerHTML = "";
      for (let i = 0; i < str.length; i++) {
        let span = document.createElement('span');
        span.innerHTML = str[i];
        textElement.appendChild(span);
        span.style.transform = `rotate(${12 * i}deg)`;
      }
    }
  }, [showCircularText]);

  return (
    <>
      <div ref={cursorRef} className={`cursor ${cursorClass}`} style={cursorStyle}>
        {showCircularText && <div id="circular-text" className="circular-text-container"></div>}
      </div>
      {!showCircularText && <div className={`cursor-outer ${cursorClass}`} style={cursorOuterStyle}></div>}
    </>
  );
};

export default CustomCursor;
