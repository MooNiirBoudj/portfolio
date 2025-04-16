import React from 'react';
import HomeSection from '../components/hero section/hero_section'; 
import AboutMe from "../components/about section/about_section"; 
import SkillsSection from "../components/skills/skills_section";
import Footer from "../components/footer";
import ProjectsSection from "../components/projects/projects_section";

const Everything = () => {
  return (
    <div>
  <HomeSection/>
  <AboutMe/>
  <SkillsSection/>
  <ProjectsSection/>
  <Footer/>
  </div>
  );
};

export default Everything;