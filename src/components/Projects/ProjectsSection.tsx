import SlideInSection from '../SlideInSection';
import ProjectCard from './ProjectCard';

interface ProjectsSectionProps {
  ref: React.RefObject<HTMLElement | null>;
}

function ProjectsSection({ ref }: ProjectsSectionProps) {
  return (
    <SlideInSection>
      <section ref={ref} id="projects-section">
        <h1>Projects</h1>
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
      </section>
    </SlideInSection>
  );
}

export default ProjectsSection;
