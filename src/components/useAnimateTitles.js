"use client"
import { useEffect, useRef } from 'react';

const useAnimateTitles = (startAnimation) => {
  const transitionCompleteRef = useRef(false);

  useEffect(() => {
    if (!startAnimation) return;

    const elements = document.querySelectorAll('.anim-title, .anim-title-left, .anim-paragraph');

    const animateTitles = (entries) => {
      
      entries.forEach((entry) => {
        const element = entry.target;

        // Check if the element has already been animated
        const isAlreadyAnimated = element.dataset.animated === 'true';

        if (entry.isIntersecting && transitionCompleteRef.current && !isAlreadyAnimated) {
          const visibilityDelay = 250; // Add your desired delay in milliseconds
          const delay = element.classList.contains('animate-on-load') ? 250 : 0;
    
          setTimeout(() => {
            setTimeout(() => {
              element.classList.add('visible');
              element.dataset.animated = 'true'; // Mark as animated
              const lines = element.querySelectorAll('.line-inner, .line-inner-left, .line-inner-p');
              lines.forEach((line, lineIndex) => {
                setTimeout(() => {
                  line.style.transform = 'translateY(0)';
                  line.style.opacity = '1';
                }, lineIndex * 100);
              });
            }, delay);
          }, visibilityDelay);
        } else if (!isAlreadyAnimated) {
          element.classList.remove('visible');
          const lines = element.querySelectorAll('.line-inner, .line-inner-left, .line-inner-p');
          lines.forEach((line) => {
            line.style.transform = 'translateY(100%)';
            line.style.opacity = '0';
          });
        }
      });
    };

    const observer = new IntersectionObserver(animateTitles, { threshold: 0.3 });

    elements.forEach((element) => {
      observer.observe(element);
    });

    // Trigger animations for elements already in view
    elements.forEach((element) => {
      if (element.getBoundingClientRect().top < window.innerHeight) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [startAnimation]);

  useEffect(() => {
    const checkTransitionComplete = () => {
      transitionCompleteRef.current = document.body.classList.contains('transition-complete');     
    };

    checkTransitionComplete(); // Initial check
    document.body.addEventListener('transitionCompleteEvent', checkTransitionComplete);

    return () => {
      document.body.removeEventListener('transitionCompleteEvent', checkTransitionComplete);
    };
  }, []);

};

export default useAnimateTitles;
