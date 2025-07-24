import SlideInSection from '../SlideInSection';
import './ContactSection.css';

interface ContactSectionProps {
  ref: React.RefObject<HTMLElement | null>;
}

function ContactSection({ ref }: ContactSectionProps) {
  return (
    <SlideInSection>
      <section ref={ref} id="contact-section">
        <h1>Contact Me!</h1>
        <div>Links...</div>
      </section>
    </SlideInSection>
  );
}

export default ContactSection;
