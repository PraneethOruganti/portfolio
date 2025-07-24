import Navbar from './components/Navbar/Navbar';
import './App.css';
import HeroSection from './components/Hero/HeroSection';
import ProjectsSection from './components/Projects/ProjectsSection';
import ContactSection from './components/Contact/ContactSection';
import BlogSection from './components/Blog/BlogSection';
import AboutSection from './components/About/About';
import { useRef } from 'react';

function App() {
  const heroSectionRef = useRef<HTMLElement | null>(null);
  const aboutSectionRef = useRef<HTMLElement | null>(null);
  const projectsSectionRef = useRef<HTMLElement | null>(null);
  const blogSectionRef = useRef<HTMLElement | null>(null);
  const contactSectionRef = useRef<HTMLElement | null>(null);

  const sectionRefs = {
    home: heroSectionRef,
    about: aboutSectionRef,
    projects: projectsSectionRef,
    blog: blogSectionRef,
    contact: contactSectionRef,
  };

  return (
    <>
      <Navbar sectionRefs={sectionRefs}></Navbar>
      <main className="main-container">
        <HeroSection ref={sectionRefs.home}></HeroSection>
        <AboutSection ref={sectionRefs.about}></AboutSection>
        <ProjectsSection ref={sectionRefs.projects}></ProjectsSection>
        <BlogSection ref={sectionRefs.blog}></BlogSection>
        <ContactSection ref={sectionRefs.contact}></ContactSection>
      </main>
    </>
  );
}

export default App;
