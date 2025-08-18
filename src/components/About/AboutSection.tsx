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
        <ul>
          <li>
            <h4>
              I'm currently a student at the University of Maryland-College Park double majoring in
              CS and Math.
            </h4>
          </li>
          <li>
            <h4>
              In my free time, I like to watch Formula One, play video games, or play basketball. 🏎️
              🎮 🏀
            </h4>
          </li>
        </ul>
      </section>
    </SlideInSection>
  );
}

export default AboutSection;
