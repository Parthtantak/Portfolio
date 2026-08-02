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
    githubUsername: "parthtantak",
    statusText: "Pursuing B.Tech IT (2nd Year) • Open for Internships & Projects",
    statusAvailable: true,
    typingRoles: [
      "B.Tech IT Student",
      "Full-Stack Web Developer",
      "Software Developer",
      "C / C++ Programmer",
      "Problem Solver"
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
    { label: "Core Focus", value: "Software", suffix: " Dev", icon: "Code2" },
    { label: "Academic Standing", value: "Top Grades", suffix: " PCM", icon: "Trophy" },
    { label: "Special Interests", value: "UI/UX & Systems", suffix: " Creative", icon: "Award" }
  ],

  about: {
    title: "About Me",
    subtitle: "Designing Intelligent Web Systems & Building C++ Applications",
    paragraphs: [
      "I am an enthusiastic Information Technology student currently pursuing my B.Tech degree at Zeal College of Engineering & Research, Pune. I focus on building software systems that are efficient, structured, and user-centric.",
      "My technical expertise spans full-stack web development (React, Node.js, Express, MySQL, Tailwind CSS) alongside object-oriented programming in C and C++, file handling architectures, and database design.",
      "Beyond coding, I am passionate about software design patterns, keeping up with global technology advancements, and playing outdoor sports like Cricket, Basketball, Volleyball, and E-Sports."
    ],
    highlights: [
      "Pursuing B.Tech in Information Technology at Zeal COE, Pune",
      "Self-motivated, disciplined & quick learner with curiosity for system architecture",
      "Proficient in Full-Stack Web Development (React, Node, Express, MySQL) & C/C++",
      "Strong background in Problem Solving & Clean Code Architecture"
    ],
    strengths: [
      "Self-motivated and disciplined approach to software development",
      "Quick learner with genuine curiosity for full-stack and systems paradigms",
      "Positive attitude towards complex technical challenges & team collaboration",
      "Ability to engineer reliable, scalable software solutions"
    ]
  },

  skills: {
    categories: [
      { id: "all", label: "All Skills" },
      { id: "web", label: "Web Development" },
      { id: "programming", label: "Programming" },
      { id: "tools", label: "Tools & Databases" }
    ],
    items: [
      { name: "React.js & Tailwind CSS", category: "web", level: 88, icon: "Atom", tag: "Frontend" },
      { name: "Node.js & Express.js", category: "web", level: 82, icon: "Server", tag: "Backend" },
      { name: "MySQL & Database Management", category: "web", level: 80, icon: "Database", tag: "Database" },
      { name: "JavaScript & ES6+", category: "web", level: 85, icon: "FileCode2", tag: "Advanced" },
      { name: "C++ Programming & OOP", category: "programming", level: 84, icon: "FileTerminal", tag: "OOP & File I/O" },
      { name: "C Programming", category: "programming", level: 80, icon: "Cpu", tag: "Core Language" },
      { name: "Git / GitHub / Version Control", category: "tools", level: 85, icon: "GitBranch", tag: "Essential" },
      { name: "MS Office & Document Systems", category: "tools", level: 92, icon: "Box", tag: "Productivity" }
    ]
  },

  projects: [
    {
      id: "cie2-tracker",
      num: "01",
      badge: "Full-Stack Web App",
      headerTitle: "CIE-2 & Termwork System",
      title: "CIE-2 Tracker & Termwork Management System",
      category: "web",
      description: "A full-stack web application for managing CIE-2 activities, termwork submissions, teacher evaluation, marks tracking, performance analysis, PDF uploads, role-based authentication, and report generation for students and faculty.",
      tags: ["React", "Node.js", "Express.js", "MySQL", "Tailwind CSS"]
    },
    {
      id: "airport-reservation",
      num: "02",
      badge: "C++ Console App",
      headerTitle: "Airport Reservation",
      title: "Airport Reservation Management System",
      category: "programming",
      description: "A console-based C++ application that manages flight schedules, ticket booking, cancellation, passenger records, seat allocation, and reservation management using Object-Oriented Programming and file handling.",
      tags: ["C++", "OOP", "File Handling"]
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
        "Web Engineering & Full-Stack Systems",
        "Database Management Systems (DBMS)",
        "Engineering Mathematics",
        "Computer Fundamentals & Architecture"
      ],
      description: "Engaged in B.Tech Information Technology coursework focusing on software engineering, web architectures, database design, and algorithmic problem solving."
    },
    {
      degree: "Higher Secondary Certificate (HSC - 12th)",
      institution: "Pratibha Jr. College, Kalbhor Nagar, Akurdi, Pune",
      period: "Completed",
      score: "Secured Top Grades in PCM",
      status: "Completed with Distinction",
      courses: ["Physics", "Chemistry", "Mathematics", "English", "Computer Science"],
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
