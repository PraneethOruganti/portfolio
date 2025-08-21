import SlideInSection from '../SlideInSection';
import ProjectCard, { type ProjectCardProps } from './ProjectCard';
import portfolioUrl from '../../images/portfolio.png';

interface ProjectsSectionProps {
  ref: React.RefObject<HTMLElement | null>;
}

function ProjectsSection({ ref }: ProjectsSectionProps) {
  const projects: ProjectCardProps[] = [
    {
      title: 'Portfolio Website',
      description:
        'Responsive personal portfolio website built with React. I am currently working on implementing a headless CMS in order to easily auto-generate blog and project components without having to redeploy the website every time. Stay tuned...',
      image: portfolioUrl,
      tags: ['React', 'TypeScript', 'CSS', 'HTML'],
    },
  ];

  return (
    <SlideInSection>
      <section ref={ref} id="projects-section">
        <h1>Projects</h1>
        {projects.map((project) => {
          return (
            <ProjectCard
              title={project.title}
              description={project.description}
              image={project.image}
              tags={project.tags}
            />
          );
        })}
      </section>
    </SlideInSection>
  );
}

export default ProjectsSection;
