'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A modern e-commerce solution with 3D product visualization and seamless checkout experience.',
    tech: ['Next.js', 'Three.js', 'Stripe', 'Tailwind'],
    color: 'from-cyan-500 to-blue-500',
  },
  {
    title: 'Interactive Portfolio',
    description: 'An immersive portfolio website featuring scroll-based animations and WebGL effects.',
    tech: ['React', 'GSAP', 'WebGL', 'Framer Motion'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'AI Dashboard',
    description: 'Real-time data visualization dashboard with AI-powered insights and predictions.',
    tech: ['Next.js', 'TypeScript', 'D3.js', 'Python'],
    color: 'from-emerald-500 to-teal-500',
  },
  {
    title: 'Metaverse Experience',
    description: 'A virtual world experience with multiplayer capabilities and custom avatars.',
    tech: ['Three.js', 'WebRTC', 'Node.js', 'MongoDB'],
    color: 'from-orange-500 to-red-500',
  },
  {
    title: 'Mobile App',
    description: 'Cross-platform mobile application with native performance and modern UI.',
    tech: ['React Native', 'TypeScript', 'Firebase', 'Redux'],
    color: 'from-indigo-500 to-purple-500',
  },
  {
    title: 'SaaS Platform',
    description: 'Full-stack SaaS solution with team collaboration and project management features.',
    tech: ['Next.js', 'PostgreSQL', 'Prisma', 'tRPC'],
    color: 'from-pink-500 to-rose-500',
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
      gsap.fromTo(
        headingRef.current,
        { y: -50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 80%',
          },
        }
      );

      // Project cards animation
      const cards = gridRef.current?.querySelectorAll('.project-card');
      cards?.forEach((card, index) => {
        gsap.fromTo(
          card,
          { y: 100, opacity: 0, scale: 0.8 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            delay: index * 0.1,
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center px-6 py-20"
    >
      <div className="max-w-7xl mx-auto w-full">
        <h2
          ref={headingRef}
          className="text-5xl md:text-6xl font-bold mb-16 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
        >
          Featured Projects
        </h2>

        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card group relative bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300 cursor-pointer overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

              <div className="relative z-10">
                {/* Project number */}
                <div className="text-6xl font-bold text-gray-800 mb-4">
                  {String(index + 1).padStart(2, '0')}
                </div>

                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-cyan-400 group-hover:to-purple-400 transition-all">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-sm bg-gray-800 border border-gray-700 rounded-full text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* View button */}
                <div className="mt-6 flex items-center gap-2 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-sm font-semibold">View Project</span>
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold hover:scale-105 transition-transform"
          >
            <span>View All Projects on GitHub</span>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
