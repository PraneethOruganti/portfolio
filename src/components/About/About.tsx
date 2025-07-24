import './AboutSection.css';
import SlideInSection from '../SlideInSection';

interface AboutSectionProps {
  ref: React.RefObject<HTMLElement | null>;
}

function AboutSection({ ref }: AboutSectionProps) {
  return (
    <SlideInSection>
      <section ref={ref} id="about-section">
        <h1 className="about-header">About Me</h1>
        <p>
          I am a student at the University of Maryland majoring in computer science and mathematics.
          I am especially passionate about AI/ML and systems.
        </p>
      </section>
    </SlideInSection>
  );
}

export default AboutSection;
