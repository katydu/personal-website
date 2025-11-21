export const NAV_LINKS = [
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Experience', id: 'experience' },
    { name: 'Projects', id: 'projects' },
    { name: 'Education', id: 'education' },
    { name: 'Contact', id: 'contact' },
];

export const SKILLS = {
    "Languages": ["JavaScript", "Python", "SQL", "C#", "C++", "HTML/CSS"],
    "Frontend": ["React.js", "Next.js", "Tailwind CSS", "Bootstrap", "GSAP", "Ajax"],
    "Backend": ["Node.js", "ASP.NET", "PostgreSQL", "MongoDB", "Docker"],
    "DevOps / Tools": ["AWS", "Ansible", "Jenkins", "GitHub Actions", "Git", "VS Code"],
    "Soft Skills": ["Communication", "Collaboration", "Problem Solving", "Teamwork", "Time Management"]
};

export const EXPERIENCE = [
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
        title: "DevOps CI/CD Pipeline",
        category: "DevOps",
        description: "Built a GitHub Actions pipeline with automated linting, testing, and Snyk security checks. Deployed to AWS EC2 using Docker and Ansible, integrated CloudFront CDN, and managed AWS-hosted PostgreSQL.",
        tech: ["AWS", "Docker", "Ansible", "GitHub Actions"],
        github: "#",
        demo: null,
    },
    {
        title: "Taiwan Impact Platform",
        category: "Web",
        description: "Developed Taiwan's only cultural impact platform from scratch. Integrated nationwide data into a scalable React/TypeScript website hosted on Vercel to promote cultural preservation.",
        tech: ["React", "TypeScript", "Vercel", "Next.js"],
        github: "#",
        demo: "#",
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
