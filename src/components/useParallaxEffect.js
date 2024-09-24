import { useEffect } from 'react';

const useParallaxEffect = (containerRef) => {
  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const imgContainer = container.querySelector('.service-parallax-img-container');
      const img = container.querySelector('.service-parallax-img');
      if (!img || !imgContainer) return;

      const containerRect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Only apply the effect when the component is in the viewport
      if (containerRect.top < windowHeight && containerRect.bottom > 0) {
        const scrollPosition = window.scrollY;
        const imgSpeed = 0.3; // Speed factor for the image
        const containerSpeed = 0; // Speed factor for the container

        // Calculate the scroll relative to the component's position
        const offset = scrollPosition - container.offsetTop;

        // Apply transformations
        imgContainer.style.transform = `translateY(${offset * containerSpeed}px)`;
        img.style.transform = `translateY(${offset * imgSpeed}px)`; // Move the image upwards
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [containerRef]);
};

export default useParallaxEffect;
