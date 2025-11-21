'use client';

import { useState, useEffect, useMemo } from 'react';
import { NAV_LINKS, SKILLS, EXPERIENCE, PROJECTS, EDUCATION } from '@/data/portfolioData';
import {
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  FileTextIcon,
  ExternalLinkIcon,
  CodeIcon,
  TerminalIcon,
  CpuIcon,
  DatabaseIcon,
  MenuIcon,
  XIcon,
  BookOpenIcon,
  AwardIcon,
  UsersIcon
} from '@/components/icons';
import SectionHeader from '@/components/ui/SectionHeader';
import ParticleBackground from '@/components/ui/ParticleBackground';
import VSCodeAnimation from '@/components/ui/VSCodeAnimation';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [projectFilter, setProjectFilter] = useState('All');
  const [gsapLoaded, setGsapLoaded] = useState(false);

  useEffect(() => {
    const loadGSAP = async () => {
      if ((window as any).gsap) {
        setGsapLoaded(true);
        return;
      }
      const script = document.createElement('script');
      script.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js";
      script.onload = () => {
        const stScript = document.createElement('script');
        stScript.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js";
        stScript.onload = () => {
          (window as any).gsap.registerPlugin((window as any).ScrollTrigger);
          setGsapLoaded(true);
        };
        document.body.appendChild(stScript);
      };
      document.body.appendChild(script);
    };
    loadGSAP();
  }, []);

  useEffect(() => {
    if (!gsapLoaded || !(window as any).gsap) return;

    const gsap = (window as any).gsap;
    const ScrollTrigger = (window as any).ScrollTrigger;

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.to(".hello-text", {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: "power3.out"
    })
      .to(".hello-text", {
        opacity: 0,
        y: -20,
        duration: 0.5,
        delay: 0.8,
        ease: "power3.in"
      })
      .to(".hero-loader", {
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
          const loader = document.querySelector('.hero-loader') as HTMLElement;
          if (loader) loader.style.display = 'none';
        }
      })
      .fromTo(".hero-subtitle", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 })
      .fromTo(".hero-title", { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 }, "-=0.3")
      .fromTo(".hero-desc", { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 }, "-=0.3")
      .fromTo(".hero-btn", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 }, "-=0.3");

    gsap.utils.toArray('.section-header').forEach((header: any) => {
      gsap.fromTo(header,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: header,
            start: "top 80%",
          }
        }
      );
    });

    ScrollTrigger.batch(".project-card", {
      start: "top 85%",
      onEnter: (batch: any) => gsap.to(batch, { autoAlpha: 1, y: 0, stagger: 0.15, overwrite: true }),
      onLeaveBack: (batch: any) => gsap.set(batch, { autoAlpha: 0, y: 50, overwrite: true })
    });

  }, [gsapLoaded]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_LINKS.map(link => document.getElementById(link.id));
      const scrollPos = window.scrollY + 200;

      sections.forEach(section => {
        if (section && section.offsetTop <= scrollPos && (section.offsetTop + section.offsetHeight) > scrollPos) {
          setActiveSection(section.id);
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const filteredProjects = useMemo(() => {
    if (projectFilter === 'All') return PROJECTS;
    return PROJECTS.filter(p => p.category.includes(projectFilter) || (projectFilter === 'DevOps' && p.category.includes('DevOps')));
  }, [projectFilter]);

  return (
    <div className="min-h-screen bg-[#0a192f] text-slate-400 font-sans selection:bg-teal-300 selection:text-[#0a192f]">

      <div className="hero-loader fixed inset-0 bg-[#0a192f] z-50 flex items-center justify-center pointer-events-none">
        <h1 className="hello-text text-teal-300 font-mono text-3xl md:text-5xl font-bold opacity-0 translate-y-4">
          Hello World.
        </h1>
      </div>

      <aside className="hidden lg:flex fixed top-0 left-0 w-24 xl:w-32 h-screen flex-col items-center justify-between py-10 bg-[#0a192f] border-r border-slate-800/50 z-40">
        <div className="w-10 h-10 bg-teal-300/10 border border-teal-300 text-teal-300 flex items-center justify-center font-mono font-bold text-xl rounded hover:bg-teal-300/20 transition-all cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          M
        </div>

        <nav className="flex flex-col items-center gap-8 w-full">
          {NAV_LINKS.map((link, idx) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="group w-full flex flex-col items-center justify-center gap-1"
            >
              <span
                className={`
                   text-xs font-mono tracking-widest uppercase transition-all duration-300 py-1
                   ${activeSection === link.id
                    ? 'text-teal-300 font-bold scale-105'
                    : 'text-slate-500 hover:text-slate-300 hover:scale-105'}
                 `}
              >
                {link.name}
              </span>
              <div className={`h-[2px] bg-teal-300 transition-all duration-300 ${activeSection === link.id ? 'w-4 shadow-[0_0_8px_rgba(100,255,218,0.6)]' : 'w-0'}`}></div>
            </button>
          ))}
        </nav>

        <div className="flex flex-col gap-6 text-slate-400 items-center">
          <a href="https://github.com/katydu" target="_blank" rel="noreferrer" className="hover:text-teal-300 hover:-translate-y-1 transition-all"><GithubIcon size={20} /></a>
          <a href="https://linkedin.com/in/min-ting-tu-68491b20b" target="_blank" rel="noreferrer" className="hover:text-teal-300 hover:-translate-y-1 transition-all"><LinkedinIcon size={20} /></a>
          <a href="mailto:mtu@ncsu.edu" className="hover:text-teal-300 hover:-translate-y-1 transition-all"><MailIcon size={20} /></a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" aria-label="Resume" className="flex flex-col items-center gap-1 hover:text-teal-300 hover:-translate-y-1 transition-all">
            <FileTextIcon size={20} />
            <span className="text-[10px] font-mono uppercase tracking-wider">Resume</span>
          </a>
          <div className="w-[1px] h-24 bg-slate-700 mx-auto mt-2"></div>
        </div>
      </aside>

      <header className="lg:hidden fixed top-0 w-full bg-[#0a192f]/90 backdrop-blur-md z-40 px-6 py-4 flex justify-between items-center border-b border-slate-800/50">
        <div className="w-10 h-10 border border-teal-300 text-teal-300 flex items-center justify-center font-mono font-bold text-lg rounded">
          M
        </div>
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-teal-300">
          {mobileMenuOpen ? <XIcon size={32} /> : <MenuIcon size={32} />}
        </button>
      </header>

      <div className={`fixed inset-0 bg-[#112240] z-30 flex items-center justify-center transition-transform duration-300 lg:hidden ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <nav className="flex flex-col items-center gap-8 text-lg font-mono">
          {NAV_LINKS.map(link => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-slate-200 hover:text-teal-300"
            >
              <span className="text-teal-300 mr-2">0{NAV_LINKS.indexOf(link) + 1}.</span>
              {link.name}
            </button>
          ))}
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="mt-8 px-8 py-3 border border-teal-300 text-teal-300 rounded hover:bg-teal-300/10 transition-colors">
            Resume
          </a>
        </nav>
      </div>

      <main className="lg:pl-40 xl:pl-52 px-6 md:px-12 lg:px-24 max-w-[1600px] mx-auto w-full">

        <section id="about" className="relative min-h-screen flex flex-col justify-center pt-20 lg:pt-0 overflow-hidden">

          <ParticleBackground />
          <VSCodeAnimation />

          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a192f]/50 to-[#0a192f] z-0 pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(100,255,218,0.05),transparent_60%)] z-0 pointer-events-none"></div>

          <div className="space-y-5 relative z-10">
            <p className="hero-subtitle text-teal-300 font-mono text-lg mb-4">Hi, my name is</p>
            <h1 className="hero-title text-slate-200 text-5xl md:text-7xl font-bold tracking-tight">
              Min Ting Tu.
            </h1>
            <h2 className="hero-desc text-slate-400 text-4xl md:text-6xl font-bold tracking-tight">
              I build intelligent web applications.
            </h2>
            <p className="hero-desc max-w-xl mt-6 text-slate-400 text-lg leading-relaxed">
              I'm a Master of Computer Science student at <span className="text-teal-300">NC State University</span> specializing in <span className="text-teal-300">Software Engineering</span> and <span className="text-teal-300">Software Security</span>.
              I build web applications to solve real-world problems.
            </p>
            <div className="hero-btn pt-10 flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects') }} className="px-8 py-4 border border-teal-300 text-teal-300 font-mono rounded hover:bg-teal-300/10 transition-all duration-300 bg-[#0a192f]/50 backdrop-blur-sm">
                Check out my work
              </a>
              <div className="flex items-center gap-6 text-slate-400">
                <a href="https://github.com/katydu" target="_blank" rel="noreferrer" aria-label="Github" className="hover:text-teal-300 hover:-translate-y-1 transition-all"><GithubIcon size={24} /></a>
                <a href="https://linkedin.com/in/min-ting-tu-68491b20b" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-teal-300 hover:-translate-y-1 transition-all"><LinkedinIcon size={24} /></a>
                <a href="mailto:mtu@ncsu.edu" aria-label="Email" className="hover:text-teal-300 hover:-translate-y-1 transition-all"><MailIcon size={24} /></a>
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" aria-label="Resume" className="flex flex-col items-center gap-1 hover:text-teal-300 hover:-translate-y-1 transition-all">
                  <FileTextIcon size={24} />
                  <span className="text-xs font-mono">Resume</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="py-20 md:py-32">
          <SectionHeader number="01" title="Technical Skills" />

          <p className="max-w-2xl mb-12 text-slate-400 text-lg">
            I've worked with a wide variety of technologies across the stack. Here is a breakdown of my technical arsenal:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(SKILLS).map(([category, items]) => (
              <div
                key={category}
                className="bg-[#112240] p-6 rounded-lg hover:-translate-y-2 transition-all duration-300 border border-transparent hover:border-teal-900 group"
              >
                <h3 className="text-slate-200 font-bold mb-4 flex items-center gap-3 text-lg">
                  {category === 'AI / ML' ? <CpuIcon size={20} className="text-teal-300" /> :
                    category === 'Backend' ? <DatabaseIcon size={20} className="text-teal-300" /> :
                      category === 'Frontend' ? <CodeIcon size={20} className="text-teal-300" /> :
                        category === 'Soft Skills' ? <UsersIcon size={20} className="text-teal-300" /> :
                          <TerminalIcon size={20} className="text-teal-300" />
                  }
                  <span className="group-hover:text-teal-300 transition-colors">{category}</span>
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map(item => (
                    <span key={item} className="text-sm font-mono text-slate-400 bg-teal-300/5 border border-teal-300/10 px-3 py-1.5 rounded hover:bg-teal-300/10 hover:text-teal-300 transition-colors cursor-default">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="experience" className="py-20 md:py-32">
          <SectionHeader number="02" title="Work Experience" />

          <div className="max-w-3xl mx-auto">
            <div className="relative border-l border-slate-800 ml-3 md:ml-6 space-y-12">
              {EXPERIENCE.map((job, index) => (
                <div key={index} className="relative pl-8 md:pl-12 group">
                  <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-teal-300 box-content border-4 border-[#0a192f] group-hover:scale-125 transition-transform"></div>

                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="text-xl font-bold text-slate-200 group-hover:text-teal-300 transition-colors">{job.role}</h3>
                    <span className="font-mono text-sm text-teal-300 bg-teal-300/10 px-2 py-1 rounded w-fit mt-2 sm:mt-0">{job.period}</span>
                  </div>

                  <h4 className="text-lg text-slate-400 mb-1 flex items-center gap-2 font-mono">
                    @ {job.company}
                  </h4>
                  <p className="text-xs text-slate-500 mb-4 uppercase tracking-widest">{job.location}</p>

                  <ul className="space-y-2">
                    {job.description.map((desc, i) => (
                      <li key={i} className="text-slate-400 text-sm md:text-base flex items-start gap-2">
                        <span className="text-teal-300 mt-1.5 text-xs">▹</span>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="py-20 md:py-32">
          <SectionHeader number="03" title="Things I've Built" />

          <div className="flex flex-wrap gap-4 mb-10 justify-center md:justify-start font-mono text-sm">
            {['All', 'DevOps', 'Frontend', 'Full Stack'].map(filter => (
              <button
                key={filter}
                onClick={() => setProjectFilter(filter)}
                className={`px-4 py-2 rounded transition-all ${projectFilter === filter ? 'bg-teal-300/10 text-teal-300 border border-teal-300' : 'text-slate-400 hover:text-teal-300'}`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="project-card group relative bg-[#112240] rounded overflow-hidden hover:-translate-y-2 transition-all duration-300 opacity-0 translate-y-8"
              >
                <div className="p-6 flex justify-between items-start">
                  <div className="text-teal-300">
                    <BookOpenIcon size={40} strokeWidth={1.5} />
                  </div>
                  <div className="flex gap-4">
                    {project.github && (
                      <a href={project.github} className="text-slate-400 hover:text-teal-300 transition-colors">
                        <GithubIcon size={20} />
                      </a>
                    )}
                    {project.demo && (
                      <a href={project.demo} className="text-slate-400 hover:text-teal-300 transition-colors">
                        <ExternalLinkIcon size={20} />
                      </a>
                    )}
                  </div>
                </div>

                <div className="px-6 pb-6 h-full flex flex-col">
                  <h3 className="text-xl font-bold text-slate-200 mb-2 group-hover:text-teal-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-400 mb-4 line-clamp-4 flex-grow">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-3 mt-auto pt-4">
                    {project.tech.map(t => (
                      <span key={t} className="text-sm font-mono text-slate-500 hover:text-teal-300 transition-colors cursor-default">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="absolute inset-0 border-2 border-teal-300 opacity-0 group-hover:opacity-10 rounded transition-opacity duration-300 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </section>

        <section id="education" className="py-20 md:py-32">
          <SectionHeader number="04" title="Education" />

          <div className="max-w-3xl mx-auto">
            <div className="relative border-l border-slate-800 ml-3 md:ml-6 space-y-12">
              {EDUCATION.map((edu, index) => (
                <div key={index} className="relative pl-8 md:pl-12">
                  <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-teal-300 box-content border-4 border-[#0a192f]"></div>

                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="text-xl font-bold text-slate-200">{edu.degree}</h3>
                    <span className="font-mono text-sm text-teal-300 bg-teal-300/10 px-2 py-1 rounded w-fit mt-2 sm:mt-0">{edu.year}</span>
                  </div>

                  <h4 className="text-lg text-slate-400 mb-4 flex items-center gap-2">
                    <AwardIcon size={18} /> {edu.school}
                  </h4>

                  <p className="text-slate-400 mb-4 text-sm md:text-base">
                    {edu.details}
                  </p>

                  {edu.courses.length > 0 && (
                    <div>
                      <p className="text-sm font-bold text-slate-300 mb-2">Relevant Coursework:</p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {edu.courses.map(course => (
                          <li key={course} className="text-sm text-slate-500 font-mono flex items-center gap-2">
                            <span className="text-teal-300">▹</span> {course}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 md:py-32 text-center max-w-2xl mx-auto">
          <p className="text-teal-300 font-mono mb-4">05. What's Next?</p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-200 mb-6">Get In Touch</h2>
          <p className="text-slate-400 text-lg leading-relaxed mb-12">
            I'm currently looking for internships and full-time positions.
            Whether you have a question about my work or just want to say hi, my inbox is always open.
          </p>
          <a href="mailto:mtu@ncsu.edu" className="px-8 py-4 border border-teal-300 text-teal-300 font-mono rounded hover:bg-teal-300/10 transition-all duration-300 inline-block">
            Say Hello
          </a>
        </section>

        <footer className="py-8 text-center text-slate-500 text-sm font-mono">
          <div className="flex justify-center gap-6 mb-4 lg:hidden">
            <GithubIcon size={20} />
            <LinkedinIcon size={20} />
          </div>
          <p className="hover:text-teal-300 transition-colors cursor-pointer">
            Designed & Built by Min Ting Tu
          </p>
        </footer>

      </main>
    </div>
  );
}