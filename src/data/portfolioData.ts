export const NAV_LINKS = [
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Experience', id: 'experience' },
    { name: 'Projects', id: 'projects' },
    { name: 'Education', id: 'education' },
    { name: 'Contact', id: 'contact' },
];

export const SKILLS = {
    "Languages": ["JavaScript", "Python", "TypeScript", "SQL", "C#", "C++", "HTML/CSS"],
    "Frontend": ["React.js", "Next.js", "Tailwind CSS", "Bootstrap", "GSAP", "Ajax", "WebGL"],
    "Backend & Database": ["Node.js", "ASP.NET", "PostgreSQL", "MongoDB"],
    "DevOps / Tools": ["Docker", "AWS (EC2, S3, CloudFront)", "Ansible", "Jenkins", "GitHub Actions", "Git", "Selenium","Snyk"],
    "Soft Skills": ["Communication", "Collaboration", "Problem Solving", "Teamwork", "Time Management"]
};

export const EXPERIENCE = [
    {
        role: "Co-Founder/CTO",
        company: "MeowTopia Inc.",
        location: "Taoyuan, Taiwan",
        period: "May 2025 - Now",
        description: [
            "Developed a full-stack cultural heritage platform using React and Next.js, implementing server-side rendering (SSR) and API routes to deliver exhibitions, events, long-form articles, and multimedia galleries with optimized performance and SEO.",
            "Built an interactive browser-based 3D exhibition experience by embedding Unity WebGL builds into React components, enabling immersive cultural storytelling directly within the web application.",
            "Led the entire software development lifecycle (SDLC) from concept to deployment, including requirement analysis, system architecture design, implementation, testing, iteration, and production release.",
            "Architected the platform’s front-end, back-end, and data layer from scratch, selecting appropriate technologies and languages with consideration for scalability, maintainability, and performance.",
            "Functioned as the primary point of contact for client communication and demand analysis, iteratively refining features based on user feedback and real-world usage."
        ]
    },
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

export const PROJECTS = [
    {
        title: "Taiwan Impact Platform for Culture",
        category: "Web",
        description: "Developed Taiwan's only cultural impact platform from scratch. Integrated nationwide data into a scalable React/TypeScript website hosted on Vercel to promote cultural preservation.",
        tech: ["React", "Next.js", "Tailwind CSS", "Unity", "TypeScript", "GSAP"],
        github: "#",
        demo: null,
    },
    {
        title: "DevOps CI/CD Pipeline",
        category: "DevOps",
        description: "Automated the full release lifecycle by building a GitHub Actions pipeline that runs security checks with Snyk and provisions AWS infrastructure using Docker and Ansible for zero-touch deployments",
        tech: ["AWS (EC2, S3, CloudFront)", "Docker", "Ansible", "GitHub Actions"],
        github: "#",
        demo: null,
    },
    {
        title: "WolfJobs (NC State)",
        category: "Open Source Contribution",
        description: "An application streamlining job opportunities for students at NC State University, connecting students with on-campus and local employment.",
        tech: ["React", "Node.js", "Express", "MongoDB"],
        github: "https://github.com/katydu/WolfJobs",
        demo: null,
    },
    {
        title: "SlackBot Enhancement",
        category: "Open Source Contribution",
        description: "Enhanced Slackbot with NLP and AI for improved user interactions and automated responses.",
        tech: ["Python", "Machine Learning", "NLP"],
        github: "https://github.com/katydu/SlackBot-Enhancement",
        demo: null,
    },
    {
        title: "Galaxian Game",
        category: "Game",
        description: "A classic arcade-style game recreation built with modern web technologies.",
        tech: ["JavaScript", "HTML5 Canvas", "CSS"],
        github: "https://github.com/katydu/Galaxian-Game",
        demo: null,
    },
    {
        title: "MariaDB Implementation",
        category: "DataBase",
        description: "Database implementation and optimization project using MariaDB for large-scale data management.",
        tech: ["MariaDB", "SQL", "Database Design"],
        github: "https://github.com/katydu/MariaDB-Project",
        demo: null,
    }
];

export const EDUCATION = [
    {
        degree: "Master of Computer Science",
        school: "NC State University",
        year: "Expected May 2026",
        details: "GPA: 3.81/4.0",
        courses: ["Algorithms", "Database Management", "Software Engineering", "Software Security", "DevOps", "Computer Network"]
    },
    {
        degree: "B.S. Information Management",
        school: "Yuan Ze University",
        year: "2018 - 2022",
        details: "GPA: 3.68/4.0. Recognized as top 35 student for academic excellence (Academic Silver Award).",
        courses: []
    }
];
