import SlideInSection from '../SlideInSection';
import './BlogSection.css';

interface BlogSectionProps {
  ref: React.RefObject<HTMLElement | null>;
}

function BlogSection({ ref }: BlogSectionProps) {
  return (
    <SlideInSection>
      <section ref={ref} id="blog-section">
        <h1>Blog Posts</h1>
        <p>Coming soon...</p>
      </section>
    </SlideInSection>
  );
}

export default BlogSection;
