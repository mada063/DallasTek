"use client"
import React, { useEffect } from 'react';
import './Venndiagram2.css'

const VennDiagram2 = () => {
  useEffect(() => {
    const options = {
      root: null, // Use the viewport as the root
      rootMargin: '0px',
      threshold: 0.2 // Trigger when 20% of the element is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, options);

    const elements = document.querySelectorAll('#path5, #path1_9_4, #path4, #path21, #text1, #text2, #text3, #text4');
    elements.forEach(element => {
      observer.observe(element);
    });

    // Cleanup observer on component unmount
    return () => {
      elements.forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <svg
      width="189.61913mm"
      height="178.67203mm"
      viewBox="0 0 189.61913 178.67203"
      version="1.1"
      id="svg1"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs id="defs1">
        <pattern
          xlinkHref="#Hexagons"
          preserveAspectRatio="xMidYMid"
          id="pattern3"
          patternTransform="matrix(0.11,0,0,0.11,1,1)"
          x="0"
          y="0"
        />
        <pattern
          patternUnits="userSpaceOnUse"
          width="100"
          height="87"
          preserveAspectRatio="xMidYMid"
          patternTransform="translate(1,1) scale(0.5,0.5)"
          style={{ fill: 'var(--border-color)' }}
          id="Hexagons"
        >
          <path
            id="path27"
            style={{ stroke: 'none' }}
            d="M 23.246093,0 0,13.382812 V 44.689453 L 0.0839844,44.640625 24.033203,58.505859 24.001953,86.332031 22.841796,87 h 4.478516 L 26.068359,86.275391 26.099609,58.449219 50.083984,44.640625 74.033203,58.505859 74.001953,86.332031 72.841796,87 h 4.478516 L 76.068359,86.275391 76.099609,58.449219 100,44.689453 V 13.365234 L 76.919921,0 H 73.246093 L 50.015625,13.373047 26.919921,0 Z M 25.083984,1.25 49.033203,15.115234 49.001953,42.941406 25.017578,56.75 1.0019531,42.845703 l 0.033203,-27.75 z m 50,0 24.017576,13.904297 -0.0352,27.75 L 75.017578,56.75 51.068359,42.884766 51.099609,15.058594 Z"
          />
        </pattern>
        <rect x="269.35004" y="369.15994" width="418.38126" height="192.78352" id="rect4" />
        <rect x="73.831985" y="515.45667" width="563.31073" height="214.65967" id="rect3" />
        <rect x="529.12927" y="531.86377" width="306.26602" height="149.03123" id="rect2" />
        <rect x="418.38126" y="117.58428" width="358.22186" height="114.84976" id="rect1" />
      </defs>
      <g id="layer1" transform="translate(-16.272111,-20.647469)">
        <path
          id="path21"
          style={{
            fill: 'url(#pattern3)',
            fillOpacity: 1,
            stroke: 'none',
            strokeWidth: 2.34217,
            strokeLinecap: 'round',
            strokeLinejoin: 'miter',
            strokeDasharray: 'none',
            strokeDashoffset: 0,
            strokeOpacity: 1,
            paintOrder: 'markers stroke fill',
          }}
          d="M 110.02636,97.307637 A 54.568023,55.354783 89.255044 0 0 92.371666,131.91045 54.568023,55.354783 89.255044 0 0 116.10452,135.05 54.568023,55.354783 89.255044 0 0 130.87891,131.72605 54.568023,55.354783 89.255044 0 0 110.02636,97.307637 Z"
        />
        <path
          style={{
            fill: 'none',
            fillOpacity: 0.529086,
            stroke: 'var(--text-color)',
            strokeWidth: 1,
            strokeLinecap: 'round',
            strokeDasharray: '6, 6',
            strokeDashoffset: 0,
            strokeOpacity: 1,
          }}
          id="path1_9_4"
          d="M 124.16578,113.05544 A 57.42844,57.42844 0 0 1 102.56449,191.32212 57.42844,57.42844 0 0 1 24.285503,169.76548 57.42844,57.42844 0 0 1 45.79748,91.47421 57.42844,57.42844 0 0 1 124.10101,112.94152"
        />
        <path
          style={{
            fill: 'none',
            fillOpacity: 0.529086,
            stroke: 'var(--text-color)',
            strokeWidth: 1,
            strokeLinecap: 'round',
            strokeLinejoin: 'miter',
            strokeDasharray: '6, 6',
            strokeDashoffset: 0,
            strokeOpacity: 1,
          }}
          id="path4"
          d="m 90.574558,143.43281 a 57.42844,57.42844 0 0 1 55.162902,-59.563691 57.42844,57.42844 0 0 1 59.60777,55.115271 57.42844,57.42844 0 0 1 -55.06762,59.6518 57.42844,57.42844 0 0 1 -59.695794,-55.01991"
        />
        <path
          style={{
            fill: 'none',
            fillOpacity: 0.529086,
            stroke: 'var(--text-color)',
            strokeWidth: 1,
            strokeLinecap: 'round',
            strokeDasharray: '6, 6',
            strokeDashoffset: 0,
            strokeOpacity: 1,
          }}
          id="path5"
          d="M 92.932975,132.89127 A 57.42844,57.42844 0 0 1 57.307348,59.955837 57.42844,57.42844 0 0 1 130.20338,24.249643 57.42844,57.42844 0 0 1 165.99009,97.106175 57.42844,57.42844 0 0 1 93.173148,132.97337"
        />
        <text
          xmlSpace="preserve"
          id="text1"
          style={{
            fontSize: '26.6667px',
            fontFamily: 'inter',
            whiteSpace: 'pre',
            shapeInside: 'url(#rect1)',
            fill: 'var(--text-color)',
            fillOpacity: 1,
            stroke: 'none',
            strokeWidth: '9.39213',
            strokeDasharray: 'none',
            strokeOpacity: 1,
          }}
          transform="matrix(0.26458333,0,0,0.26458333,-12.661388,33.643118)"
        >
          <tspan x="418.38086" y="142.2679" id="tspan2">
            Utvikling
          </tspan>
        </text>
        <text
          xmlSpace="preserve"
          transform="matrix(0.26458333,0,0,0.26458333,9.2505781,-2.9587622)"
          id="text2"
          style={{
            fontSize: '26.6667px',
            fontFamily: 'inter',
            whiteSpace: 'pre',
            shapeInside: 'url(#rect2)',
            fill: 'var(--text-color)',
            fillOpacity: 1,
            stroke: 'none',
            strokeWidth: '9.39213',
            strokeDasharray: 'none',
            strokeOpacity: 1,
          }}
        >
          <tspan x="529.12891" y="556.5472" id="tspan6">
            Design
          </tspan>
        </text>
        <text
          xmlSpace="preserve"
          transform="matrix(0.26458333,0,0,0.26458333,32.402802,1.1238822)"
          id="text3"
          style={{
            fontSize: '26.6667px',
            fontFamily: 'inter',
            whiteSpace: 'pre',
            shapeInside: 'url(#rect3)',
            fill: 'var(--text-color)',
            fillOpacity: 1,
            stroke: 'none',
            strokeWidth: '9.39213',
            strokeDasharray: 'none',
            strokeOpacity: 1,
          }}
        >
          <tspan x="73.832031" y="540.14095" id="tspan7">
            Strategi
          </tspan>
        </text>
        <text
          xmlSpace="preserve"
          transform="matrix(0.26458333,0,0,0.26458333,27.8771,19.238326)"
          id="text4"
          style={{
            fontSize: '26.6667px',
            fontFamily: 'inter',
            whiteSpace: 'pre',
            shapeInside: 'url(#rect4)',
            fill: 'var(--text-color)',
            fillOpacity: 1,
            stroke: 'none',
            strokeWidth: '9.39213',
            strokeDasharray: 'none',
            strokeOpacity: 1,
          }}
        >
          <tspan x="269.34961" y="393.84407" id="tspan8">
            Produkt
          </tspan>
        </text>
      </g>
    </svg>
  );
};

export default VennDiagram2;
