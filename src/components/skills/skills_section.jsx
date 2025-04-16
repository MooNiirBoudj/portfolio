import React from 'react';
import { Code, Database, Globe, PenTool, Cpu, Brush, Box, HeartHandshake } from 'lucide-react';

const SkillsPage = () => {
  const skillsCategories = [
    {
      title: "USING NOW:",
      skills: [
        { name: "PYTHON", icon: <Code size={30} color="#3776AB" /> },
        { name: "REACT", icon: <Code size={30} color="#61DAFB" /> },
        { name: "DART", icon: <Code size={30} color="#0175C2" /> },
        { name: "SQL", icon: <Database size={30} color="#4479A1" /> }
      ]
    },
    {
      title: "LEARNING:",
      skills: [
        { name: "NODE JS", icon: <Cpu size={30} color="#339933" /> },
        { name: "R", icon: <Code size={30} color="#276DC3" /> },
        { name: "UI/UX DESIGN", icon: <PenTool size={30} color="#FF7262" /> },
        { name: "3D DESIGN", icon: <Box size={30} color="#FF9800" /> }
      ]
    },
    {
      title: "FLUENTLY SPEAKING:",
      skills: [
        { name: "Arabic", icon: <Globe size={30} color="#006C35" /> },
        { name: "English", icon: <Globe size={30} color="#012169" /> },
        { name: "French", icon: <Globe size={30} color="#002654" /> },
        { name: "Kabyle", icon: <HeartHandshake size={30} color="#007ACC" /> }
      ]
    }
  ];

  return (
    <div className="skills-container" style={styles.container}>
      <div style={styles.content}>
        <div style={styles.titleBox}>
          <h1 style={styles.title}>SKILLS</h1>
        </div>
        
        {skillsCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} style={styles.categorySection}>
            <h2 style={styles.categoryTitle}>{category.title}</h2>
            
            <div style={styles.skillsGrid}>
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} style={styles.skillItem}>
                  <div style={styles.iconContainer}>
                    {skill.icon}
                  </div>
                  <p style={styles.skillName}>{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#f2f2f2',
    width: '100%',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    padding: '5rem 2rem'
  },
  content: {
    maxWidth: '1000px',
    width: '100%',
    margin: '0 auto'
  },
  titleBox: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '3rem'
  },
  title: {
    border: '2px solid black',
    padding: '1rem 2rem',
    fontSize: '1.3rem',
    fontWeight: '500',
    letterSpacing: '0.3rem',
    margin: 0
  },
  categorySection: {
    marginBottom: '4rem'
  },
  categoryTitle: {
    fontSize: '1.2rem',
    fontWeight: '500',
    marginBottom: '2rem',
    letterSpacing: '0.2rem'
  },
  skillsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gap: '30px',
  },
  skillItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    padding: '1.5rem',
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.05)',
    transition: 'transform 0.3s ease',
  },
  iconContainer: {
    marginBottom: '1rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '60px',
    height: '60px',
    borderRadius: '8px',
    backgroundColor: 'rgba(0,0,0,0.03)',
    padding: '12px'
  },
  skillName: {
    margin: 0,
    fontSize: '0.95rem',
    fontWeight: '500',
    letterSpacing: '0.1rem',
    color: '#333'
  }
};

export default SkillsPage;