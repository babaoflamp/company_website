'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 });

    tl.fromTo(
      titleRef.current,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
    ).fromTo(
      subtitleRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
      '-=0.5'
    );
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h1
          ref={titleRef}
          className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-emerald-400 bg-clip-text text-transparent"
          style={{ lineHeight: '1.2' }}
        >
          Creative Developer
          <br />
          & Designer
        </h1>
        <p
          ref={subtitleRef}
          className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto"
        >
          Crafting immersive digital experiences with cutting-edge web technologies
        </p>
        <div className="mt-12 flex gap-6 justify-center">
          <a
            href="#projects"
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full font-semibold hover:scale-105 transition-transform"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border-2 border-cyan-500 rounded-full font-semibold hover:bg-cyan-500/10 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-cyan-400 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
