import React from 'react';
import Navbar from '../nav_bar';
import SocialLinks from './../hero section/social_links';
import './hero_section.css';

const HomeSection = () => {
  return (
    <div className="HomeSection">
      <div className="portfolio-container">
        <div className="left-section">
          <div className="logo-container">
            <img src="/src/assets/portfolio_logo-removebg-preview.png" alt="Logo" className="logo" />
          </div>
          <div className="intro-content">
            <p className="greeting">Hey there, I am</p>
            <h1 className="name">Mounir BOUDJELAL</h1>
            <p className="role">Front-end Developer  </p>
            <p className="role">AI Undergraduate</p>
            <p className="role">Software Developer</p>
            
            <SocialLinks />
          </div>
        </div>
        
        <div className="right-section">
          <Navbar />
          <div className="profile-image-container">
            <img src="/assets/portfolio_logo-removebg-preview.png" alt="Profile" className="profile-image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;