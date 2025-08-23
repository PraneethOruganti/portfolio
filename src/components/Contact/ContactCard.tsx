import './ContactCard.css';

export type ContactCardProps = {
  name: string;
  link: string;
  imagePath: string;
};

export default function ContactCard({ name, link, imagePath }: ContactCardProps) {
  return (
    <a className="contact-card" href={link}>
      <img className="contact-card_image" src={imagePath} alt={name} width={64} height={64} />
      <span className="contact-card_label">{name}</span>
    </a>
  );
}
