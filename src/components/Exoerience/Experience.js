import React from 'react';
import './Experience.css';
import Particles from '../Particles';

function Experience() {
  const experiences = [
    {
      title: 'Web Development Intern',
      company: 'OctaNet Services Pvt Ltd',
      date: 'Aug 10-2025 – Present · 1 mo',
      location: 'Remote · India',
      img:"",
      description:
        'Selected for a 2-month internship focusing on live training and hands-on experience in web development with OctaNet Services Pvt Ltd.',
    },
    {
      title: 'Open Source Contributor',
      company: 'Open Source Connect · Internship',
      date: 'Aug 2025 – Present · 1 mo',
      location: 'Remote · India',
      description:
        'Selected as an official contributor for Open Source Connect India, a nationwide open-source collaboration program.',
    },
    {
      title: 'Contributor – GirlScript Summer of Code 2025 (GSSoC \'25)',
      company: 'GirlScript Summer of Code · Internship',
      date: 'Jul 2025 – Present · 2 mos',
      location: 'Remote · Remote',
      description:
        'Contributing to impactful open-source projects while enhancing technical skills and collaborating with mentors and fellow developers.',
    },
  ];

  return (
    <section className="experience-section">
      {/* Particle background */}
      <div className="particle-bg">
        <Particles
          particleColors={["#8f2121ff", "#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* Foreground content */}
      <div className="experience-content-wrapper">
        <h2 className="section-title">Experience</h2>
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div className="experience-card" key={index}>
              <div className="experience-content">
                <h3>{exp.title}</h3>
                <h4>{exp.company}</h4>
                <p className="date">{exp.date}</p>
                <p className="location">{exp.location}</p>
                <p>{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
