import './HeroSection.css';

type HeroSectionProps = {
  ref: React.RefObject<HTMLElement | null>;
};
function HeroSection({ ref }: HeroSectionProps) {
  return (
    <section ref={ref}>
      <div id="hero-container">
        <div className="hero-intro-text">Hi, I'm</div>
        <div className="my-name-container">
          <div id="my-name">Praneeth.</div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
