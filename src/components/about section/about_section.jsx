import React from 'react';
import './about_section.css';

const AboutMe = () => {
  const handleDownloadCV = () => {

    const cvUrl = "/other documents/CV_Boudjelal_Mounir.pdf";
    
    // Create an anchor element
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = "Boudjelal-Mounir-CV.pdf"; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="about-me">
      <div className="container">
        <div className="section-header">
          <h2>A B O U T    M E</h2>
        </div>
        
        <div className="section-content">
          <p className="about-text">
            A third year student at the National Higher School Of Artificial Intelligence (ENSIA) <br />
            A data science passionate who loves also being a frontend developer. I build responsive web / mobile applications.
          </p>
        </div>
        
        <div className="explore-button">
          <button className="btn-explore" onClick={handleDownloadCV}>GET MY CV</button>
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
            <h3 className="service-title">DEV</h3>
            <p className="service-description">
              I can build responsive web / mobile applications. 
              I use React framework for the frontend developement and Flatter for the mobile developement.
            </p>
          </div>
          
          <div className="service-item">
            <div className="service-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 4H6a2 2 0 00-2 2v12c0 1.1.9 2 2 2h12a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="service-title">DESIGN</h3>
            <p className="service-description">
              Currently on my learning phase to master the UI/UX desgin in addition to 3D design.
              Tools like FIGMA and BLENDER are part of my toolkits.
            </p>
          </div>
          
          <div className="service-item">
            <div className="service-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="service-title">DATA SCIENCE</h3>
            <p className="service-description">
              I am passionate about data science and artificial intelligence with all its differntt sub fields.
              I vision continuing in this domain as a career path.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;