import dynamic from 'next/dynamic';
import Navbar from '@/components/ui/Navbar';
import Hero from '@/components/sections/Hero';

// Dynamically import Scene to avoid SSR issues with Three.js
const Scene = dynamic(() => import('@/components/3d/Scene'), { ssr: false });

export default function Home() {
  return (
    <>
      <Navbar />
      <Scene />
      <main>
        <Hero />

        {/* Temporary placeholder sections for scrolling */}
        <section id="about" className="relative min-h-screen flex items-center justify-center px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold mb-8 text-cyan-400">About</h2>
            <p className="text-xl text-gray-400">Coming soon...</p>
          </div>
        </section>

        <section id="projects" className="relative min-h-screen flex items-center justify-center px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold mb-8 text-purple-400">Projects</h2>
            <p className="text-xl text-gray-400">Coming soon...</p>
          </div>
        </section>

        <section id="contact" className="relative min-h-screen flex items-center justify-center px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold mb-8 text-emerald-400">Contact</h2>
            <p className="text-xl text-gray-400">Coming soon...</p>
          </div>
        </section>
      </main>
    </>
  );
}
