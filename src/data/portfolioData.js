// Centralized Config & Data for Parth Nitin Tantak's Portfolio
export const portfolioData = {
  personal: {
    name: "Parth Nitin Tantak",
    shortName: "PARTH",
    role: "B.Tech Information Technology Student",
    university: "Zeal College of Engineering & Research, Narhe, Pune",
    location: "Kalewadi, Pimpri-Chinchwad, Pune, Maharashtra",
    email: "tantakparth@gmail.com",
    phone: "+91 88558 90656",
    bio: "Motivated B.Tech IT student at Zeal College of Engineering & Research, Pune. Focused on building minimal, calm, and intelligent web interfaces with modern frontend technologies, clean code architecture, and creative visual design.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    resumeUrl: "#resume-download",
    statusText: "Pursuing B.Tech IT (2nd Year) • Open for Internships & Projects",
    statusAvailable: true,
    typingRoles: [
      "B.Tech IT Student",
      "Frontend Web Developer",
      "UI/UX & Creative Designer",
      "C / C++ Programmer",
      "E-Sports & Tech Explorer"
    ],
    socials: {
      github: "https://github.com/parthtantak",
      linkedin: "https://linkedin.com/in/parthtantak",
      twitter: "https://twitter.com/parthtantak",
      portfolio: "https://parthtantak.github.io/portfolio/",
      email: "mailto:tantakparth@gmail.com"
    }
  },

  stats: [
    { label: "B.Tech IT Stream", value: "Zeal COE", suffix: " Pune", icon: "GraduationCap" },
    { label: "Core Focus", value: "Frontend", suffix: " Dev", icon: "Code2" },
    { label: "Academic Standing", value: "Top Grades", suffix: " PCM", icon: "Trophy" },
    { label: "Special Interests", value: "UI/UX & Drawing", suffix: " Creative", icon: "Award" }
  ],

  about: {
    title: "About Me",
    subtitle: "Designing Calm, Intelligent Interfaces & Building Web Systems",
    paragraphs: [
      "I am an enthusiastic Information Technology student currently pursuing my B.Tech degree at Zeal College of Engineering & Research, Pune. I focus on building interfaces that feel stable, intentional, clean, and distraction-free.",
      "My technical journey combines web development fundamentals (HTML5, CSS3, JavaScript, React) with structured programming in C and C++, as well as continuous exploration of modern UI architecture and emerging tech trends.",
      "Beyond coding, I am passionate about creative drawing, keeping up with global technology advancements, and playing outdoor sports like Cricket, Basketball, Volleyball, and E-Sports."
    ],
    highlights: [
      "Pursuing B.Tech in Information Technology at Zeal COE, Pune",
      "Self-motivated, disciplined & quick learner with curiosity for new tech",
      "Proficient in Web Development (HTML, CSS, JS, React) & C/C++ Programming",
      "Strong background in Creative Visual Design & Teamwork"
    ],
    strengths: [
      "Self-motivated and disciplined approach to problem solving",
      "Quick learner with genuine curiosity for new software paradigms",
      "Positive attitude towards technical challenges & collaborative teamwork",
      "Ability to work effectively in fast-paced team environments"
    ]
  },

  skills: {
    categories: [
      { id: "all", label: "All Skills" },
      { id: "web", label: "Web Development" },
      { id: "programming", label: "Programming" },
      { id: "tools", label: "Tools & Creative" }
    ],
    items: [
      { name: "Web Development (HTML5 / CSS3)", category: "web", level: 90, icon: "Layout", tag: "Advanced" },
      { name: "JavaScript & ES6+", category: "web", level: 85, icon: "FileCode2", tag: "Advanced" },
      { name: "React.js & Tailwind CSS", category: "web", level: 82, icon: "Atom", tag: "Proficient" },
      { name: "C Programming", category: "programming", level: 80, icon: "Cpu", tag: "Core Language" },
      { name: "C++ Programming", category: "programming", level: 78, icon: "FileTerminal", tag: "OOP Fundamentals" },
      { name: "MS Office (Word, PowerPoint, Excel)", category: "tools", level: 92, icon: "Box", tag: "Productivity" },
      { name: "Git / GitHub / Version Control", category: "tools", level: 85, icon: "GitBranch", tag: "Essential" },
      { name: "Creative Drawing & Visual UI Design", category: "tools", level: 88, icon: "Sparkles", tag: "Creative" }
    ]
  },

  projects: [
    {
      id: "minimal-portfolio",
      title: "Parth's Minimal Developer Portfolio",
      category: "web",
      categoryName: "Frontend & UI Design",
      featured: true,
      description: "A minimal, creative, and distraction-free developer portfolio designed to showcase calm and intelligent web interfaces.",
      longDescription: "Engineered with React, Vite, Tailwind CSS, and Framer Motion. Features dark glassmorphism aesthetics, ambient background glow, interactive particle canvas, 3D card tilt, custom cursor, theme switcher, and command palette navigation.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
      tags: ["React", "Vite", "Tailwind CSS", "Framer Motion", "GitHub Pages"],
      github: "https://github.com/parthtantak/portfolio",
      live: "https://parthtantak.github.io/portfolio/",
      highlights: ["Calm Intelligent UI", "Responsive Glassmorphism", "Theme Persistence"]
    },
    {
      id: "campus-activity-hub",
      title: "Zeal IT Campus & Activity Portal",
      category: "web",
      categoryName: "Web Application",
      featured: true,
      description: "Interactive web portal for B.Tech IT students to manage academic notices, timetable schedules, and team events.",
      longDescription: "Built with HTML5, CSS3, JavaScript, and React. Streamlines campus collaboration, assignment tracking, and student activity scheduling with a clean, dark-themed user interface.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
      tags: ["HTML5", "CSS3", "JavaScript", "React", "UI Design"],
      github: "https://github.com/parthtantak",
      live: "https://parthtantak.github.io/portfolio/",
      highlights: ["Student Workflow Automation", "Clean Minimalist UI", "Mobile First Design"]
    },
    {
      id: "cpp-algorithms-matrix",
      title: "C / C++ Algorithmic Workbench",
      category: "programming",
      categoryName: "Programming & Data Structures",
      featured: true,
      description: "Collection of optimized C/C++ algorithms, data structure implementations, and problem-solving solutions.",
      longDescription: "Features implementations of sorting algorithms, binary trees, linked lists, array manipulations, and dynamic memory allocation with structured comments and benchmark tests.",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80",
      tags: ["C", "C++", "Data Structures", "Algorithms", "GCC Compiler"],
      github: "https://github.com/parthtantak",
      live: "https://parthtantak.github.io/portfolio/",
      highlights: ["Structured Algorithms", "Memory Management", "Clean Code Standards"]
    }
  ],

  education: [
    {
      degree: "B.Tech in Information Technology",
      institution: "Zeal College of Engineering & Research, Narhe, Pune",
      period: "Pursuing (2nd Year)",
      score: "Engineering Degree Stream",
      status: "Currently Enrolled",
      courses: [
        "Programming & Problem Solving (C / C++)",
        "Web Engineering & UI Development",
        "Engineering Mathematics",
        "Basic Electrical & Electronics",
        "Computer Fundamentals & Systems"
      ],
      description: "Engaged in B.Tech Information Technology coursework focusing on software logic, web technologies, computer architecture, and innovative engineering applications."
    },
    {
      degree: "Higher Secondary Certificate (HSC - 12th)",
      institution: "Pratibha Jr. College, Kalbhor Nagar, Akurdi, Pune",
      period: "Completed",
      score: "Secured Top Grades in PCM",
      status: "Completed with Distinction",
      courses: ["Physics", "Chemistry", "Mathematics", "English", "Computer Science / Information Tech"],
      description: "Achieved excellent academic performance with top grades in Physics, Chemistry, and Mathematics."
    },
    {
      degree: "Secondary School Certificate (SSC - 10th)",
      institution: "Infant Jesus High School, Wakad, Pune",
      period: "Completed",
      score: "First Class Distinction",
      status: "Completed",
      courses: ["Mathematics", "Science", "Social Sciences", "English", "Languages"],
      description: "Laid strong foundational analytical, mathematical, and communication skills."
    }
  ],

  certifications: [
    {
      title: "Web Development & Responsive UI Engineering",
      issuer: "Self-Driven / Online Academy",
      date: "2024",
      credentialId: "PARTH-WEB-2024",
      verifyUrl: "https://parthtantak.github.io/portfolio/",
      icon: "Code"
    },
    {
      title: "C & C++ Programming Foundations",
      issuer: "Zeal College of Engineering & Research, Pune",
      date: "2024",
      credentialId: "ZCOER-IT-C24",
      verifyUrl: "https://parthtantak.github.io/portfolio/",
      icon: "Server"
    }
  ],

  achievements: [
    {
      title: "Academic Distinction in Physics, Chemistry & Math (12th)",
      category: "Academics",
      date: "HSC Board",
      description: "Secured outstanding grades in Physics, Chemistry, and Mathematics in 12th standard examinations.",
      badge: "⭐ Top Grades"
    },
    {
      title: "Sports & E-Sports Champion",
      category: "Co-Curricular",
      date: "Active",
      description: "Active athlete in Cricket, Basketball, Volleyball and competitive E-Sports tournaments.",
      badge: "🏆 Sports & Gaming"
    },
    {
      title: "Creative Arts & Drawing Accolade",
      category: "Creative Arts",
      date: "Active",
      description: "Demonstrated creative design abilities in sketch drawing, visual aesthetics, and graphic composition.",
      badge: "🎨 Visual Arts"
    }
  ],

  contact: {
    title: "Initiate Contact with Parth",
    subtitle: "Have an internship opportunity, project collaboration, or tech query? Let's connect.",
    emailJsConfig: {
      serviceId: "YOUR_SERVICE_ID",
      templateId: "YOUR_TEMPLATE_ID",
      publicKey: "YOUR_PUBLIC_KEY"
    }
  }
};
