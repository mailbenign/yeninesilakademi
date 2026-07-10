import { Navbar } from '@/components/sections/navbar';
import { Hero } from '@/components/sections/hero';
import { WhyChooseUs } from '@/components/sections/why-choose-us';
import { Programs } from '@/components/sections/programs';
import { Coaching } from '@/components/sections/coaching';
import { Gallery } from '@/components/sections/gallery';
import { Blog } from '@/components/sections/blog';
import { FAQ } from '@/components/sections/faq';
import { Contact } from '@/components/sections/contact';
import { Footer } from '@/components/sections/footer';
import { FloatingButtons } from '@/components/sections/floating-buttons';
import { ScrollProgress } from '@/components/scroll-progress';
import { LoadingScreen } from '@/components/loading-screen';

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
