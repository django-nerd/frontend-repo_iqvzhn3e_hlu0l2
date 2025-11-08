import About from './About';
import Services from './Services';
import Gallery from './Gallery';
import Testimonials from './Testimonials';
import Contact from './Contact';
import Blog from './Blog';
import InstagramFeed from './Instagram';
import SEO from './SEO';

export default function MainSections() {
  return (
    <div>
      <SEO />
      <About />
      <Services />
      <Gallery />
      <Testimonials />
      <Blog />
      <InstagramFeed />
      <Contact />
    </div>
  );
}
