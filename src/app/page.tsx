'use client';

import React, { useState, useEffect, useMemo, useRef } from 'react';

// --- Icons (Inline SVGs) ---
const Icon = ({ children, className, size = 24 }: { children: React.ReactNode, className?: string, size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {children}
  </svg>
);

const GithubIcon = (props: any) => (
  <Icon {...props}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </Icon>
);

const LinkedinIcon = (props: any) => (
  <Icon {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </Icon>
);

const MailIcon = (props: any) => (
  <Icon {...props}>
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </Icon>
);

const FileTextIcon = (props: any) => (
  <Icon {...props}>
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" x2="8" y1="13" y2="13" />
    <line x1="16" x2="8" y1="17" y2="17" />
    <line x1="10" x2="8" y1="9" y2="9" />
  </Icon>
);

const ExternalLinkIcon = (props: any) => (
  <Icon {...props}>
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" x2="21" y1="14" y2="3" />
  </Icon>
);

const CodeIcon = (props: any) => (
  <Icon {...props}>
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </Icon>
);

const TerminalIcon = (props: any) => (
  <Icon {...props}>
    <polyline points="4 17 10 11 4 5" />
    <line x1="12" x2="20" y1="19" y2="19" />
  </Icon>
);

const CpuIcon = (props: any) => (
  <Icon {...props}>
    <rect x="4" y="4" width="16" height="16" rx="2" />
    <rect x="9" y="9" width="6" height="6" />
    <path d="M15 2v2" /><path d="M15 20v2" /><path d="M2 15h2" /><path d="M2 9h2" /><path d="M20 15h2" /><path d="M20 9h2" /><path d="M9 2v2" /><path d="M9 20v2" />
  </Icon>
);

const DatabaseIcon = (props: any) => (
  <Icon {...props}>
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
  </Icon>
);

const MenuIcon = (props: any) => (
  <Icon {...props}>
    <line x1="4" x2="20" y1="12" y2="12" />
    <line x1="4" x2="20" y1="6" y2="6" />
    <line x1="4" x2="20" y1="18" y2="18" />
  </Icon>
);

const XIcon = (props: any) => (
  <Icon {...props}>
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </Icon>
);

const ChevronRightIcon = (props: any) => (
  <Icon {...props}>
    <polyline points="9 18 15 12 9 6" />
  </Icon>
);

const BookOpenIcon = (props: any) => (
  <Icon {...props}>
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
  </Icon>
);

const AwardIcon = (props: any) => (
  <Icon {...props}>
    <circle cx="12" cy="8" r="7" />
    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
  </Icon>
);

const BriefcaseIcon = (props: any) => (
  <Icon {...props}>
    <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </Icon>
);


// --- Data from CV ---

const NAV_LINKS = [
  { name: 'About', id: 'about' },
  { name: 'Skills', id: 'skills' },
  { name: 'Experience', id: 'experience' },
  { name: 'Projects', id: 'projects' },
  { name: 'Education', id: 'education' },
  { name: 'Contact', id: 'contact' },
];

const SKILLS = {
  "Languages": ["JavaScript", "Python", "SQL", "C#", "C++", "HTML/CSS"],
  "Frontend": ["React.js", "Next.js", "Tailwind CSS", "Bootstrap", "GSAP", "Ajax"],
  "Backend": ["Node.js", "ASP.NET", "PostgreSQL", "MongoDB", "Docker"],
  "DevOps / Tools": ["AWS", "Ansible", "Jenkins", "GitHub Actions", "Git", "VS Code"],
  "Other": ["Software Security", "Algorithms", "Computer Networks"]
};

const EXPERIENCE = [
  {
    role: "Management Information System Intern",
    company: "YS-infoware",
    location: "Taoyuan, Taiwan",
    period: "Jan 2024 - June 2024",
    description: [
      "Utilized JavaScript and SQL to customize forms, delivering reports and functionalities for clients.",
      "Maintained company network servers, managed firewalls, and optimized six server hosts.",
      "Ensured the stable operation of over 70 form systems."
    ]
  },
  {
    role: "Programming Tutor (Freelance)",
    company: "Self-Employed",
    location: "Remote",
    period: "Jan 2023 - Jan 2024",
    description: [
      "Guided a student in ASP.NET Core MVC and JavaScript to launch a commercial fruit sales website.",
      "Resulted in increased online sales for the client's family business."
    ]
  },
  {
    role: "Information Security Intern",
    company: "Galaxy Software Services",
    location: "Taipei, Taiwan",
    period: "July 2022 - Dec 2022",
    description: [
      "Built a library management system using ASP.NET MVC framework.",
      "Programmed automated testing with Selenium, Jenkins, and Python.",
      "Resolved 5+ client systems' security vulnerabilities via source code analysis."
    ]
  }
];

const PROJECTS = [
  {
    title: "DevOps CI/CD Pipeline",
    category: "DevOps",
    description: "Built a GitHub Actions pipeline with automated linting, testing, and Snyk security checks. Deployed to AWS EC2 using Docker and Ansible, integrated CloudFront CDN, and managed AWS-hosted PostgreSQL.",
    tech: ["AWS", "Docker", "Ansible", "GitHub Actions"],
    github: "#", // Paste your GitHub Repo link here
    demo: null,
  },
  {
    title: "Taiwan Impact Platform",
    category: "Frontend",
    description: "Developed Taiwan's only cultural impact platform from scratch. Integrated nationwide data into a scalable React/TypeScript website hosted on Vercel to promote cultural preservation.",
    tech: ["React", "TypeScript", "Vercel", "Next.js"],
    github: "#", // Paste your GitHub Repo link here
    demo: "#",
  },
  {
    title: "Job Application System",
    category: "Full Stack",
    description: "Enhanced a job application platform by integrating job editing, AI-driven questionnaires, and a real-time chat room using React and MongoDB.",
    tech: ["React", "JavaScript", "MongoDB", "AI Integration"],
    github: "#", // Paste your GitHub Repo link here
    demo: null,
  }
];

const EDUCATION = [
  {
    degree: "Master of Computer Science",
    school: "NC State University",
    year: "Expected May 2026",
    details: "GPA: 3.72/4.0",
    courses: ["Algorithms", "Database Management", "Software Engineering", "Software Security", "DevOps"]
  },
  {
    degree: "B.S. Information Management",
    school: "Yuan Ze University",
    year: "2018 - 2022",
    details: "GPA: 3.68/4.0. Recognized as top 35 student for academic excellence (Academic Silver Award).",
    courses: []
  }
];

// --- Components ---

const VSCodeAnimation = () => {
  const [visibleCount, setVisibleCount] = useState(0);

  const tokens = useMemo(() => [
    { text: 'def', color: 'text-pink-400' },
    { text: ' ', color: '' },
    { text: 'intro', color: 'text-yellow-300' },
    { text: '():', color: 'text-slate-400' },
    { text: '\n    ', color: '' },
    { text: 'user', color: 'text-teal-300' },
    { text: ' = ', color: 'text-slate-400' },
    { text: '"Min Ting"', color: 'text-green-300' },
    { text: '\n    ', color: '' },
    { text: 'print', color: 'text-blue-300' },
    { text: '(', color: 'text-slate-400' },
    { text: 'f"Hello, {user}!"', color: 'text-green-300' },
    { text: ')', color: 'text-slate-400' },
    { text: '\n\n', color: '' },
    { text: 'if', color: 'text-pink-400' },
    { text: ' ', color: '' },
    { text: '__name__', color: 'text-blue-300' },
    { text: ' == ', color: 'text-slate-400' },
    { text: '"__main__"', color: 'text-green-300' },
    { text: ':', color: 'text-slate-400' },
    { text: '\n    ', color: '' },
    { text: 'intro', color: 'text-yellow-300' },
    { text: '()', color: 'text-slate-400' },
  ], []);

  const totalChars = tokens.reduce((acc, t) => acc + t.text.length, 0);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const runAnimation = (currentIndex: number) => {
      if (currentIndex < totalChars) {
        timeout = setTimeout(() => {
          setVisibleCount(currentIndex + 1);
          runAnimation(currentIndex + 1);
        }, 100);
      } else {
        timeout = setTimeout(() => {
          setVisibleCount(0);
          runAnimation(0);
        }, 3000);
      }
    };
    runAnimation(0);
    return () => clearTimeout(timeout);
  }, [totalChars]);

  const renderTokens = () => {
    let charCount = 0;
    return tokens.map((token, index) => {
      const start = charCount;
      const end = charCount + token.text.length;
      charCount += token.text.length;
      if (visibleCount >= end) return <span key={index} className={token.color}>{token.text}</span>;
      else if (visibleCount > start) {
        const slice = visibleCount - start;
        return <span key={index} className={token.color}>{token.text.slice(0, slice)}</span>;
      }
      return null;
    });
  };

  return (
    <div className="absolute right-0 top-1/4 md:right-10 lg:right-0 xl:right-0 w-full max-w-[500px] opacity-20 lg:opacity-40 transform rotate-[-5deg] z-0 pointer-events-none transition-all duration-1000 select-none">
      <div className="bg-[#112240] rounded-t-lg p-2 flex items-center gap-2 border-b border-slate-700/50">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
        <div className="ml-4 text-xs text-slate-500 font-mono">hello.py</div>
      </div>
      <div className="bg-[#0a192f]/90 p-6 rounded-b-lg font-mono text-sm md:text-base shadow-2xl border border-slate-700/30 backdrop-blur-sm">
        <pre className="whitespace-pre-wrap break-words">
          {renderTokens()}
          <span className="animate-pulse text-teal-300">|</span>
        </pre>
      </div>
    </div>
  );
};

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    let mouse = { x: -1000, y: -1000, radius: 150 };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = event.x;
      mouse.y = event.y;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    class Particle {
      x: number;
      y: number;
      size: number;
      baseX: number;
      baseY: number;
      density: number;
      speedX: number;
      speedY: number;

      constructor() {
        this.x = Math.random() * (canvas?.width || 0);
        this.y = Math.random() * (canvas?.height || 0);
        this.size = Math.random() * 2 + 1;
        this.baseX = this.x;
        this.baseY = this.y;
        this.density = (Math.random() * 30) + 1;
        this.speedX = (Math.random() * 0.5) - 0.25;
        this.speedY = (Math.random() * 0.5) - 0.25;
      }

      update() {
        if (!canvas || !ctx) return;
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x > canvas.width || this.x < 0) this.speedX = -this.speedX;
        if (this.y > canvas.height || this.y < 0) this.speedY = -this.speedY;
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < mouse.radius) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(100, 255, 218, ${1 - distance / mouse.radius})`;
          ctx.lineWidth = 1;
          ctx.moveTo(this.x, this.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
          ctx.closePath();
        }
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = 'rgba(100, 255, 218, 0.5)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      }
    }

    function initParticles() {
      if (!canvas) return;
      particles = [];
      const numberOfParticles = (canvas.width * canvas.height) / 15000;
      for (let i = 0; i < numberOfParticles; i++) {
        particles.push(new Particle());
      }
    }

    function animate() {
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(100, 255, 218, ${0.2 - distance / 100})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
            ctx.closePath();
          }
        }
      }
      animationFrameId = requestAnimationFrame(animate);
    }

    handleResize();
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0 pointer-events-none opacity-60" />;
};

const SectionHeader = ({ number, title }: { number: string, title: string }) => (
  <div className="flex items-center gap-4 mb-8 w-full section-header opacity-0 translate-y-4">
    <span className="text-teal-300 font-mono text-xl md:text-2xl">{number}.</span>
    <h2 className="text-slate-200 font-bold text-2xl md:text-4xl whitespace-nowrap">{title}</h2>
    <div className="h-[1px] w-full max-w-[300px] bg-slate-700 ml-4"></div>
  </div>
);

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
          {/* UPDATE: Added placeholders for your social links */}
          <a href="https://github.com/your-username" target="_blank" rel="noreferrer" className="hover:text-teal-300 hover:-translate-y-1 transition-all"><GithubIcon size={20} /></a>
          <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noreferrer" className="hover:text-teal-300 hover:-translate-y-1 transition-all"><LinkedinIcon size={20} /></a>
          <a href="mailto:mtu@ncsu.edu" className="hover:text-teal-300 hover:-translate-y-1 transition-all"><MailIcon size={20} /></a>
          <a href="/resume.pdf" aria-label="Resume" className="flex flex-col items-center gap-1 hover:text-teal-300 hover:-translate-y-1 transition-all">
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
          <a href="#" className="mt-8 px-8 py-3 border border-teal-300 text-teal-300 rounded hover:bg-teal-300/10 transition-colors">
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
              I build intelligent systems.
            </h2>
            <p className="hero-desc max-w-xl mt-6 text-slate-400 text-lg leading-relaxed">
              I'm a Master of Computer Science student at <span className="text-teal-300">NC State University</span> (GPA 3.72) specializing in <span className="text-teal-300">DevOps</span> and <span className="text-teal-300">Software Security</span>.
              I build robust CI/CD pipelines and scalable web applications.
            </p>
            <div className="hero-btn pt-10 flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects') }} className="px-8 py-4 border border-teal-300 text-teal-300 font-mono rounded hover:bg-teal-300/10 transition-all duration-300 bg-[#0a192f]/50 backdrop-blur-sm">
                Check out my work
              </a>
              <div className="flex items-center gap-6 text-slate-400">
                {/* UPDATE: Added placeholders for your social links in Hero section */}
                <a href="https://github.com/your-username" target="_blank" rel="noreferrer" aria-label="Github" className="hover:text-teal-300 hover:-translate-y-1 transition-all"><GithubIcon size={24} /></a>
                <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-teal-300 hover:-translate-y-1 transition-all"><LinkedinIcon size={24} /></a>
                <a href="mailto:mtu@ncsu.edu" aria-label="Email" className="hover:text-teal-300 hover:-translate-y-1 transition-all"><MailIcon size={24} /></a>
                <a href="/resume.pdf" aria-label="Resume" className="flex flex-col items-center gap-1 hover:text-teal-300 hover:-translate-y-1 transition-all">
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

        {/* Experience Section (New) */}
        <section id="experience" className="py-20 md:py-32">
          <SectionHeader number="02" title="Work Experience" />

          <div className="max-w-3xl mx-auto">
            <div className="relative border-l border-slate-800 ml-3 md:ml-6 space-y-12">
              {EXPERIENCE.map((job, index) => (
                <div key={index} className="relative pl-8 md:pl-12 group">
                  {/* Timeline Dot */}
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
            I'm currently looking for new opportunities to apply my research in a production environment.
            Whether you have a question about my paper or just want to say hi, my inbox is always open.
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