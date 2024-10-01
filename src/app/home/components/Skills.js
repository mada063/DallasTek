// src/components/Skills.js
import Image from 'next/image';
import React from 'react';
import './Skills.css';

const Skills = () => {
  const skills = [
    { src: '/images/Figma.png', alt: 'Figma Ikon', name: 'Figma' },
    { src: '/images/Xd.png', alt: 'XD Ikon', name: 'Adobe Xd' },
    { src: '/images/next.png', alt: 'Next Ikon', name: 'Next.js' },
    { src: '/images/React.png', alt: 'React Ikon', name: 'React' },
    { src: '/images/Vue.png', alt: 'Vue Ikon', name: 'Vue.js' },
    { src: '/images/Java.png', alt: 'Java Ikon', name: 'Java' },
    { src: '/images/Python.png', alt: 'Python Ikon', name: 'Python' },
    { src: '/images/Sql.png', alt: 'SQL Ikon', name: 'MySQL' },
    { src: '/images/Php.png', alt: 'PHP Ikon', name: 'PHP' },
    { src: '/images/AWS.png', alt: 'AWS Ikon', name: 'AWS' },
    { src: '/images/Jira.png', alt: 'Jira Ikon', name: 'Jira' },
    { src: '/images/Dynamics.png', alt: 'Dynamics Ikon', name: 'Dynamics' },
    { src: '/images/Office.png', alt: 'Office Ikon', name: 'M365' },
    { src: '/images/Azure.png', alt: 'Azure Ikon', name: 'Azure' },
  ];

  return (
    <div className="section skill-boxes">
      <h2 className="title-skills anim-title">
        <span className="line"><span className="line-inner">Vår kunnskap og erfaring løfter deg og dine prosjekter til neste <span className="marked-text">nivå</span></span></span>
      </h2>
      <p className="sub-title-skills anim-title ">
        <span className="line"><span className="line-inner">Vi tilnærmer oss ny kunnskap basert på dine behov</span></span>
      </p>
      <div className="skills">
        {skills.map((skill, index) => (
          <div key={index} className="skill-box">
            <Image src={skill.src} alt={skill.alt} width={150} height={100}/>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
