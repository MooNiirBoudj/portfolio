
// AboutMe.jsx
import React from 'react';
import './about_section.css';

const AboutMe = () => {
  return (
    <section className="about-me">
      <div className="container">
        <div className="section-header">
          <h2>A B O U T    M E</h2>
        </div>
        
        <div className="section-content">
          <p className="about-text">
            Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem varius finibus. Sed ornare sit amet lorem 
            sed viverra. In vel urna quis libero viverra facilisis ut ac est.
          </p>
        </div>
        
        <div className="explore-button">
          <button className="btn-explore">EXPLORE</button>
        </div>
        
        <div className="divider">
          <span className="line"></span>
          <span className="chevron">
            <svg viewBox="0 0 24 12" xmlns="http://www.w3.org/2000/svg">
              <path d="M0,0 L12,12 L24,0" fill="none" stroke="currentColor" strokeWidth="1.5"/>
            </svg>
          </span>
          <span className="line"></span>
        </div>
        
        <div className="services">
          <div className="service-item">
            <div className="service-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="service-title">DESIGN</h3>
            <p className="service-description">
              I can design the site based on your needs and suggestions. I can 
              also design the site from scratch and consult you during the job.
            </p>
          </div>
          
          <div className="service-item">
            <div className="service-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 4H6a2 2 0 00-2 2v12c0 1.1.9 2 2 2h12a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="service-title">DEVELOPMENT</h3>
            <p className="service-description">
              I can design the site based on your needs and suggestions. I can 
              also design the site from scratch and consult you during the job.
            </p>
          </div>
          
          <div className="service-item">
            <div className="service-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="service-title">MAINTENANCE</h3>
            <p className="service-description">
              I can design the site based on your needs and suggestions. I can 
              also design the site from scratch and consult you during the job.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;