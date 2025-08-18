import './ProjectCard.css';

export interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
}

function ProjectCard({ title, description, image, tags, link }: ProjectCardProps) {
  return (
    <div className="project-card group">
      <div className="image-container">
        <img className="project-image" src={image} alt={title} loading="lazy" />
        <div className="overlay">
          <button className="view-btn">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
            View Project
          </button>
        </div>
      </div>

      <div className="project-content">
        <div className="project-header">
          <h3 className="project-title">{title}</h3>
          <div className="tags-container">
            {tags.map((tag, index) => (
              <span key={index} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <p className="project-description">{description}</p>

        <div className="project-footer">
          <a href={link} className="learn-more">
            Learn More
            <svg className="arrow-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
export default ProjectCard;
