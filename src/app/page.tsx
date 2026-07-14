import Hero from '@/components/sections/Hero';
import Stats from '@/components/sections/Stats';
import ProcessFlow from '@/components/sections/ProcessFlow';
import Services from '@/components/sections/Services';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import HowItWorks from '@/components/sections/HowItWorks';
import Packages from '@/components/sections/Packages';
import SaaSProducts from '@/components/sections/SaaSProducts';
import ChatbotDemo from '@/components/sections/ChatbotDemo';
import Industries from '@/components/sections/Industries';
import About from '@/components/sections/About';
import Testimonials from '@/components/sections/Testimonials';
import FAQ from '@/components/sections/FAQ';
import Team from '@/components/sections/Team';
import CTABanner from '@/components/sections/CTABanner';
import Contact from '@/components/sections/Contact';
import ParticleCanvas from '@/components/shared/ParticleCanvas';

export default function Home() {
  return (
    <>
      <ParticleCanvas />
      <Hero />
      <Stats />
      <ProcessFlow />
      <Services />
      <WhyChooseUs />
      <HowItWorks />
      <Packages />
      <SaaSProducts />
      <ChatbotDemo />
      <Industries />
      <About />
      <Testimonials />
      <FAQ />
      <Team />
      <CTABanner />
      <Contact />
    </>
  );
}
