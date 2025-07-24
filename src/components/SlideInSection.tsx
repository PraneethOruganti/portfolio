import { useEffect, useRef, useState, type ReactNode } from 'react';
import './SlideInSection.css';

interface SlideInSectionProps {
  children: ReactNode;
}

function SlideInSection({ children }: SlideInSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    // create observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true); //
            observer.disconnect(); // stop observing (animation only shows once)
          }
        });
      },
      { threshold: 0.1 }
    );

    // attach observer to DOM element
    if (ref.current) {
      observer.observe(ref.current);
    }

    // clean up
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`slide-in-section ${isVisible ? 'is-visible' : ''}`}>
      {children}
    </div>
  );
}

export default SlideInSection;
