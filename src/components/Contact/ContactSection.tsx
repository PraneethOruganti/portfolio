import SlideInSection from '../SlideInSection';
import ContactCard, { type ContactCardProps } from './ContactCard';
import './ContactSection.css';

interface ContactSectionProps {
  ref: React.RefObject<HTMLElement | null>;
}

function ContactSection({ ref }: ContactSectionProps) {
  const contacts: ContactCardProps[] = [
    {
      name: 'Email',
      link: 'mailto:sporuganti.dev@gmail.com',
      imagePath: '/images/email.svg',
    },
    {
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/in/sp-oruganti/',
      imagePath: '/images/linkedin.svg',
    },
    {
      name: 'GitHub',
      link: 'https://github.com/PraneethOruganti',
      imagePath: '/images/github.svg',
    },
  ];

  return (
    <SlideInSection>
      <section ref={ref} id="contact-section">
        <h1>Contact Me!</h1>
        <div className="contact-cards-container">
          {contacts.map((contact) => {
            return (
              <ContactCard
                name={contact.name}
                link={contact.link}
                imagePath={contact.imagePath}
              ></ContactCard>
            );
          })}
        </div>
      </section>
    </SlideInSection>
  );
}

export default ContactSection;
