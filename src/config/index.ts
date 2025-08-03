import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Abdulrahman Ahmed — Software Developer",
  author: "Abdulrahman Ahmed Salih",
  description:
    "Software Developer based in Baghdad, IRAQ. I specialize in Frontend and Backend application development and maintenance.",
  lang: "en",
  siteLogo: "/abdulrahman-small.jpg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://www.linkedin.com/in/abdulrahman-ahmed-5a1789312/" },
    { text: "Github", href: "https://github.com/KAJOiq" },
  ],
  socialImage: "",
  canonicalURL: "",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Abdulrahman Ahmed",
    specialty: "Software Developer",
    summary:
      "Software Developer based in Baghdad, IRAQ. I specialize in Frontend and Backend application development and maintenance.",
    email: "abdalrahmanahmed298@email.com",
  },
  experience: [
    {
      company: "Tabadul Co.",
      position: "Full-Stack Software Developer",
      startDate: "Jun 2025",
      endDate: "Present",
      summary: [
        "Worked on the Document Management System (DMS) using React.js, building form workflows, filters, incoming & outgoing letters, and document handling features integrated with RESTful APIs.",
      ],
    },
    {
      company: "Madar Dijla Co.",
      position: "Software Developer",
      startDate: "Nov 2024",
      endDate: "Jun 2025",
      summary: [
        "Worked on software solutions for the Iraqi General Traffic Directorate using C#, .NET, React.js, and SQL Server, contributing to the development and support of internal systems for managing traffic, vehicle data, driving licenses, and violations."
      ],
    },
  ],
  projects: [
    {
      name: "Document Management System (DMS)",
      summary: "A web-based system for managing official documents and correspondence, including workflows for letter creation, approval, assignment, and secure file handling.",
      linkPreview: "",
      linkSource: "",
      image: "/secret.png",
      isPrivate: true 
    },
    {
      name: "Vehicles Durability Check",
      summary: "A system for managing and tracking vehicle durability inspection requests, including application processing, document uploads, and result reporting.",
      linkPreview: "",
      linkSource: "",
      image: "/secret.png",
      isPrivate: true
    },
    {
      name: "Freelancer Platform",
      summary: "Developed during Aon Bootcamp to practice building production-ready APIs and databases using .NET and SQL Server.",
      linkPreview: "https://github.com/aon-mentees/AonFreelancing",
      linkSource: "https://github.com/aon-mentees/AonFreelancing",
      image: "/freelancerplatform.png",
      isPrivate: false
    },
    {
      name: "Compiler Discord Bot",
      summary: "This Compiler for programming languages like Python, Java, and C++. It enables users to write code in these languages, execute it, and receive results directly through Discord commands.",
      linkPreview: "https://github.com/KAJOiq/CompilerDiscordBot",
      linkSource: "https://github.com/KAJOiq/CompilerDiscordBot",
      image: "/compilerdiscordbot.png",
      isPrivate: false
    },
  ],
  courses: [
    {
      institution: "Aon",
      course: "Backend Development",
      startDate: "Oct 2024",
      endDate: "Dec 2024",
      summary: "Building excellent APIs with .NET and SQL Server databases. This course included building a freelancer platform.",
      sourceUrl: ""
    },
    {
      institution: "Harvard University",
      course: "CS50x 2025",
      startDate: "Jan 2025",
      endDate: "Jul 2025",
      summary: "Completed Harvard’s CS50x course, covering C, Python, SQL, and web development fundamentals through hands-on problem sets and a final project.",
      sourceUrl: "https://certificates.cs50.io/4aad2c85-3457-4a43-8e97-f8b33000b898.pdf?size=letter"
    },
  ],
  educations: [
    {
      institution: "Middle Technical University",
      degree: "Diploma in Optometry Techniques",
      startDate: "2021",
      endDate: "2023",
      summary: "Graduated"
    },
    {
      institution: "University Of Baghdad",
      degree: "Computer Science",
      startDate: "2020",
      endDate: "2021",
      summary: "Not Graduated"
    },
    {
      institution: "Al-Harithiya Distinguished High School",
      degree: "High School Certificate",
      startDate: "2014",
      endDate: "2020",
      summary: "Graduated"
    },
  ],
  about: {
    description:`
    Hi, I’m a passionate Full-Stack Software Developer with a strong focus on building real-world web applications. I specialize in front-end development using React.js and back-end technologies like C#, .NET, and SQL Server.

    I enjoy creating clean, responsive, and scalable user interfaces, as well as building reliable APIs and database systems. My work often involves handling complex forms, workflows, document management, and task tracking. I'm committed to writing clean code, learning continuously, and delivering solutions that solve real problems efficiently.
    `,
    image: "/abdulrahman-small.jpg",
  },
};

// #5755ff
