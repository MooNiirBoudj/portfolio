import React, { useState } from 'react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Plants Management System",
      description: "A project where we manage the work of a planting association, includes a plants and projects database. Mainly developped with react framework.",
      image: "./src/assets/login-bg-image.jpg",
      codeLink: "https://github.com/mooniirrr/green-algeria"
    },
    {
      title: "KEROSTI",
      description: "Kerosti is a web application for cars related  operations: compare between cars in our DB, filter them and 'SELEKNI', a system that suggests solutions to your car problems, hopefully in the future AI will be integrated to this part. Developped with HTML, CSS and JS. PHP for the backend",
      image: "./src/assets/Kerosti_LOGO.png",
      codeLink: "https://github.com/mooniirrr/kerosti"
    },
    {
      title: "RateIt",
      description: "RateIt is a mobile application for users to rate and post their own things/ ideas.. to be rated. Many rooms exist for different topics. Developped mainly with DART.",
      image: "./src/assets/logo-horizental-removebg-preview.png",
      codeLink: "https://github.com/mooniirrr/rate-it"
    },
    {
      title: "Supply Chain and Logistics Management System",
      description: "Intro to AI project, where we applied search algorithms to find the best path for trucks to take when  going from pruducing cities to consuming ones. Has a web interface visualizing the maps.",
      image: "/assets/Transportation-Management-System-Development-A-Detailed-Analysis-01-scaled.webp",
      codeLink: "https://github.com/mooniirrr/supply-chain-and-logistics"
    },
    {
      title: "Analyzing data about Thyroid cancer ",
      description: "Data mining projects where we worked on analyzing Thyroid Cancer data using data mining techiques such us clustering and classification using one class SVM. PYTHON was the mainly used language",
      image: "/assets/tcd.jpg",
      codeLink: "https://github.com/mooniirrr/analyzing-thyroid-cancer-data"
    }
  ];

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <div style={styles.titleBox}>
          <h1 style={styles.title}>PROJECTS</h1>
        </div>

        <div style={styles.projectsGrid}>
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              codeLink={project.codeLink}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const ProjectCard = ({ title, description, image, codeLink }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      style={styles.projectCard}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={styles.projectImageContainer}>
        <img src={image} alt={title} style={styles.projectImage} />
        {isHovered && (
          <div style={styles.overlay}>
            <a 
              href={codeLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              style={styles.codeButton}
            >
              SEE CODE
            </a>
          </div>
        )}
      </div>
      <h3 style={styles.projectTitle}>{title}</h3>
      <p style={styles.projectDescription}>{description}</p>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#f0f0f0',
    width: '100%',
    padding: '60px 20px',
    display: 'flex',
    justifyContent: 'center'
  },
  content: {
    maxWidth: '1200px',
    width: '100%',
  },
  titleBox: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '40px'
  },
  title: {
    border: '2px solid black',
    padding: '10px 40px',
    fontSize: '24px',
    fontWeight: 'bold',
    letterSpacing: '4px',
    margin: 0
  }
,  
  projectsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
    gap: '30px',
  },
  projectCard: {
    backgroundColor: 'white',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    transition: 'transform 0.3s ease',
    position: 'relative',
  },
  projectImageContainer: {
    position: 'relative',
    height: '200px',
    overflow: 'hidden',
  },
  projectImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.7)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    transition: 'opacity 0.3s ease',
  },
  codeButton: {
    padding: '12px 24px',
    backgroundColor: '#ffffff',
    color: '#000000',
    textDecoration: 'none',
    fontWeight: 'bold',
    letterSpacing: '1px',
    borderRadius: '4px',
    transition: 'all 0.3s ease',
  },
  projectTitle: {
    fontSize: '18px',
    fontWeight: 'bold',
    margin: '20px 20px 10px',
  },
  projectDescription: {
    fontSize: '14px',
    color: '#666',
    margin: '0 20px 20px',
    lineHeight: '1.5',
  }
};

export default ProjectsSection;