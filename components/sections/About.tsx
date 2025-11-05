'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { name: 'React & Next.js', level: 95 },
  { name: 'Three.js & WebGL', level: 85 },
  { name: 'TypeScript', level: 90 },
  { name: 'GSAP & Animations', level: 88 },
  { name: 'Tailwind CSS', level: 92 },
  { name: 'Node.js & Backend', level: 80 },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
      gsap.fromTo(
        headingRef.current,
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 80%',
          },
        }
      );

      // Description animation
      gsap.fromTo(
        descriptionRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: descriptionRef.current,
            start: 'top 80%',
          },
        }
      );

      // Skills animation
      const skillBars = skillsRef.current?.querySelectorAll('.skill-bar');
      skillBars?.forEach((bar, index) => {
        gsap.fromTo(
          bar,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 1.5,
            delay: index * 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: bar,
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
      id="about"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center px-6 py-20"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
        {/* Left side - About text */}
        <div>
          <h2
            ref={headingRef}
            className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent"
          >
            About Me
          </h2>
          <div ref={descriptionRef} className="space-y-4 text-gray-300 text-lg">
            <p>
              I'm a passionate developer who loves creating immersive digital experiences
              that push the boundaries of web technology.
            </p>
            <p>
              With expertise in modern frameworks like React and Next.js, combined with
              3D graphics using Three.js, I craft websites that are not just functional,
              but truly memorable.
            </p>
            <p>
              My approach combines technical excellence with creative vision, ensuring
              every project delivers both stunning visuals and seamless performance.
            </p>

            <div className="pt-6 flex gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Right side - Skills */}
        <div ref={skillsRef}>
          <h3 className="text-3xl font-bold mb-8 text-purple-400">Technical Skills</h3>
          <div className="space-y-6">
            {skills.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-300 font-medium">{skill.name}</span>
                  <span className="text-gray-500">{skill.level}%</span>
                </div>
                <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div
                    className="skill-bar h-full bg-gradient-to-r from-cyan-500 to-purple-500 origin-left"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-2xl">
            <h4 className="text-xl font-semibold mb-3 text-cyan-400">
              Let's Create Something Amazing
            </h4>
            <p className="text-gray-400">
              I'm always open to new opportunities and exciting projects.
              Let's bring your ideas to life!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
