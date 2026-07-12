import { Navbar } from '@/components/sections/navbar';
import { Hero } from '@/components/sections/hero';
import { ScrollProgress } from '@/components/scroll-progress';
import { LoadingScreen } from '@/components/loading-screen';
import dynamic from 'next/dynamic';

const WhyChooseUs = dynamic(() =>
  import('@/components/sections/why-choose-us').then((m) => ({
    default: m.WhyChooseUs,
  }))
);

const Programs = dynamic(() =>
  import('@/components/sections/programs').then((m) => ({
    default: m.Programs,
  }))
);

const Coaching = dynamic(() =>
  import('@/components/sections/coaching').then((m) => ({
    default: m.Coaching,
  }))
);

const Gallery = dynamic(() =>
  import('@/components/sections/gallery').then((m) => ({
    default: m.Gallery,
  }))
);

const Blog = dynamic(() =>
  import('@/components/sections/blog').then((m) => ({
    default: m.Blog,
  }))
);

const FAQ = dynamic(() =>
  import('@/components/sections/faq').then((m) => ({
    default: m.FAQ,
  }))
);

const Contact = dynamic(() =>
  import('@/components/sections/contact').then((m) => ({
    default: m.Contact,
  }))
);

const Footer = dynamic(() =>
  import('@/components/sections/footer').then((m) => ({
    default: m.Footer,
  }))
);

const FloatingButtons = dynamic(() =>
  import('@/components/sections/floating-buttons').then((m) => ({
    default: m.FloatingButtons,
  }))
);
export default function Home() {
  return (
    <>
      <LoadingScreen />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <WhyChooseUs />
        <Programs />
        <Coaching />
        <Gallery />
        <Blog />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
