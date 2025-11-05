import dynamic from 'next/dynamic';
import Navbar from '@/components/ui/Navbar';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Projects from '@/components/sections/Projects';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/ui/Footer';

// Dynamically import Scene to avoid SSR issues with Three.js
const Scene = dynamic(() => import('@/components/3d/Scene'), { ssr: false });

export default function Home() {
  return (
    <>
      <Navbar />
      <Scene />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
