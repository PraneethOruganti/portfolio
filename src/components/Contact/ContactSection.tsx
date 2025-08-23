import SlideInSection from '../SlideInSection';
import ContactCard, { type ContactCardProps } from './ContactCard';
import './ContactSection.css';
import emailLogoUrl from '../../images/email.svg';
import githubLogoUrl from '../../images/github.svg';
import linkedinLogoUrl from '../../images/linkedin.svg';

type ContactSectionProps = {
  ref: React.RefObject<HTMLElement | null>;
};

function ContactSection({ ref }: ContactSectionProps) {
  const contacts: ContactCardProps[] = [
    {
      name: 'Email',
      link: 'mailto:sporuganti.dev@gmail.com',
      imagePath: emailLogoUrl,
    },
    {
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/in/sp-oruganti/',
      imagePath: linkedinLogoUrl,
    },
    {
      name: 'GitHub',
      link: 'https://github.com/PraneethOruganti',
      imagePath: githubLogoUrl,
    },
  ];

  return (
    <SlideInSection>
      <section ref={ref} id="contact-section">
        <h1>Contact Me!</h1>
        <div className="contact-cards-container">
          {contacts.map((contact, index) => {
            return (
              <ContactCard
                key={index}
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
