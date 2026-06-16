import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  css,
  mysql,
  figma,
  git,
  html,
  javascript,
  reactjs,
  java,
  gitbash,
  eclipse,
  vscode,
  fork,
  cursor,
  postgresql,
  d3eproject,
  eventSphereProject,
  findNOK,
  hostelproproject,
  rewahrproject,
  syllabusmanagemenProject,
  LeadProject,
  rmsProject,
  digitalMenu,
  CaseManagementSystem,
  ServiceEdge,
} from "../assets";

import d3eLogo from "../assets/company/d3e-logo.jpeg";
import nityaLogo from "../assets/company/nitya-software-logo.png";
import sunglareLogo from "../assets/company/sunglare-logo.jpeg";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "hire",
    title: "Hire Me",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Java Developer",
    icon: web,
  },
  {
    title: "Flutter Developer",
    icon: mobile,
  },
  {
    title: "React Developer",
    icon: backend,
  },
  {
    title: "Software Builder",
    icon: creator,
  },
];

import flutter from "../assets/tech/flutter.png";
const technologies = [
  {
    name: "HTML",
    icon: html,
  },
  {
    name: "CSS",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Flutter",
    icon: flutter,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "GitHub",
    icon: github,
  },
  {
    name: "GitBash",
    icon: gitbash,
  },
  {
    name: "Eclipse",
    icon: eclipse,
  },
  {
    name: "VSCode",
    icon: vscode,
  },
  {
    name: "Fork",
    icon: fork,
  },
  {
    name: "Cursor",
    icon: cursor,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "React",
    icon: reactjs,
  },
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "D3E Studio",
    icon: d3eLogo,
    iconBg: "#ffffff",
    date: "Sep 2025 - Present",
    points: [
      "Architecting and developing D3E (Design Develop Deploy), a revolutionary AI-powered platform that generates complete software applications from a single natural-language prompt.",
      "Implementing advanced AI models and prompt-engineering techniques to automate code generation, reducing development time by up to 80%.",
      "Building scalable microservices architecture to support multi-tenant application deployment and management.",
      "Collaborating with cross-functional teams to integrate AI capabilities into production-grade software systems.",
      "Establishing best practices for AI-driven development workflows and automated testing pipelines.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "NITYA Software Solutions Inc",
    icon: nityaLogo,
    iconBg: "#ffffff",
    date: "Aug 2022 - Sep 2025",
    points: [
      "Developed and maintained 5+ client-facing applications using Flutter and React.js, ensuring adherence to industry standards and client specifications.",
      "Led the full software development lifecycle from requirements gathering to deployment, improving delivery efficiency by 40%.",
      "Designed and implemented RESTful APIs and integrated third-party services to enhance application functionality.",
      "Collaborated with cross-functional teams of 5–10 members to deliver high-quality software solutions on schedule.",
      "Optimized application performance through code refactoring and database query optimization, reducing load times by 35%.",
      "Mentored junior developers on best coding practices, code reviews, and modern frameworks.",
    ],
  },
  {
    title: "Fiber Technician (Industrial Training)",
    company_name: "SUNGLARE TECHNOLOGIES PVT LTD",
    icon: sunglareLogo,
    iconBg: "#ffffff",
    date: "Jan 2022 - Jul 2022",
    points: [
      "Completed comprehensive industrial training in Optical Fiber technology, gaining practical technical expertise.",
      "Developed strong problem-solving skills and attention to detail through hands-on infrastructure work.",
    ],
  },
];

const educations = [
  {
    degree: "Bachelor of Technology — Computer Science",
    school: "Sri Chaitanya Technical Campus (AICTE Approved), Hyderabad",
    date: "Oct 2022 - Jul 2025",
    description:
      "Pursued B.Tech via Lateral Entry (TS ECET) while working full-time as a Software Engineer — an AICTE-approved pathway for Diploma holders entering directly into the second year.",
  },
  {
    degree: "Diploma — Electronics & Communications Engineering",
    school: "Government Model Residential Polytechnic, Gajwel",
    date: "Jun 2019 - May 2022",
    description:
      "Built a strong foundation in core electronics, communication systems, and practical, hands-on engineering skills.",
  },
];

const achievements = [
  "Received a Certificate of Appreciation from the President & CEO of D3E Studio for exceptional contributions and technical excellence.",
  "Pioneered an AI-driven application-generation platform that enables non-technical users to create functional software.",
  "Delivered 15+ production applications serving 1,000+ users with 99.5% uptime.",
  "Reduced development cycle time by 40% through automated workflows and CI/CD pipelines.",
];

const projects = [
  {
    name: "D3E Studio - Low-Code Development Platform",
    description:
      "A low-code platform designed to build and deploy cross-platform applications with minimal coding. It supports end-to-end workflows from UI design to backend integrations.",
    tags: [],
    image: d3eproject,
    source_code_link: "https://github.com/",
    height: "500px",
  },
  {
    name: "RewaHR - HR Management Portal",
    description:
      "A full-featured portal designed to streamline HR operations such as attendance, payroll, leave management, and employee tracking. It provides secure, role-based access and real-time reporting dashboards for HR teams.",
    tags: [],
    image: rewahrproject,
    source_code_link: "https://github.com/",
    height: "500px",
  },
  {
    name: "Lead Management System",
    description:
      "A tool built for sales teams to manage client interactions and track lead stages. Automates lead fetching and reduces manual input while improving team productivity. Includes features like call logging, status tracking, and performance dashboards.",
    tags: [],
    image: LeadProject,
    source_code_link: "https://github.com/",
    height: "500px",
  },
  {
    name: "FindNok - Next of Kin Web App",
    description:
      "A secure web app that helps users store and manage next of kin information. Users can update, view, and map family relationships easily within the platform. Designed for simplicity, security, and accessibility.",
    tags: [],
    image: findNOK,
    source_code_link: "https://github.com/",
    height: "500px",
  },
  {
    name: "Hostel Management App",
    description:
      "A mobile application to handle hostel operations such as room allotments, attendance, and complaint tracking. Includes real-time notifications and admin-student communication features.",
    tags: [],
    image: hostelproproject,
    source_code_link: "https://github.com/",
    height: "500px",
  },
  {
    name: "Restaurant Management System",
    description:
      "Web platform to manage restaurant operations including menus, orders, and kitchen workflows. Allows staff to process orders live and monitor kitchen updates efficiently.",
    tags: [],
    image: rmsProject,
    source_code_link: "https://github.com/",
    height: "500px",
  },
  {
    name: "Syllabus Management System",
    description:
      "A system for colleges to manage and share academic syllabi by course and department. Faculty can easily update content while students get structured access. Improves transparency and simplifies academic coordination.",
    tags: [],
    image: syllabusmanagemenProject,
    source_code_link: "https://github.com/",
    height: "500px",
  },
  {
    name: "ServiceEdge - Home Service Booking App",
    description:
      "An app for booking home services like electrical repairs, plumbing, and appliance maintenance. Customers can schedule appointments, and vendors manage bookings through a dashboard.",
    tags: [],
    image: ServiceEdge,
    source_code_link: "https://github.com/",
    height: "500px",
  },
  {
    name: "Case Management System",
    description:
      "Platform to manage and track legal or client cases from start to finish. Supports secure record keeping, task assignment, and status updates. Improves team collaboration with logs, notifications, and user roles.",
    tags: [],
    image: CaseManagementSystem,
    source_code_link: "https://github.com/",
    height: "500px",
  },
  {
    name: "DWS Event Sphere - Event Calendar App",
    description:
      "A calendar-based app for scheduling and discovering events with RSVP functionality. Users can explore upcoming events, set reminders, and filter by category.",
    tags: [],
    image: eventSphereProject,
    source_code_link: "https://github.com/",
    height: "500px",
  },
  {
    name: "Digital Menu Project",
    description:
      "A digital menu platform for restaurants to showcase food items with images, pricing, and availability. Customers can scan a QR code to view the live menu and place orders.",
    tags: [],
    image: digitalMenu,
    source_code_link: "https://github.com/",
    height: "500px",
  },
];

export { services, technologies, experiences, educations, achievements, projects };
