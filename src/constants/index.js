import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  mysql,
  figma,
  git,
  html,
  javascript,
  reactjs,
  sunglare,
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

import tekisky from "../assets/company/tekisky.png";

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
    icon: d3eproject,
    iconBg: "#383E56",
    date: "Sep 2025 - Present",
    points: [
      "Building, developing, and maintaining cutting-edge software applications.",
      "Currently working on D3E (Design Develop Deploy), a fully AI-driven product that can generate entire applications from a single prompt.",
      "Focused on automating complex workflows, scaling products efficiently, and turning innovative ideas into functional software solutions.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "NITYA Software Solutions Inc",
    icon: tekisky,
    iconBg: "#383E56",
    date: "Aug 2022 - Sep 2025",
    points: [
      "Designed, developed, and maintained software applications aligned with client requirements and industry standards.",
      "Solved complex engineering problems through coding and technical analysis.",
      "Collaborated with cross-functional teams to deliver high-quality software solutions.",
    ],
  },
  {
    title: "Fiber Technician (Internship)",
    company_name: "SUNGLARE TECHNOLOGIES PVT LTD",
    icon: sunglare,
    iconBg: "#383E56",
    date: "Jan 2022 - Jul 2022",
    points: [
      "Completed industrial training in Optical Fiber at SunGlare Technologies Pvt. Ltd.",
      "Gained hands-on field experience in optical fiber operations.",
      "Strengthened technical fundamentals and practical problem-solving skills for future industry challenges.",
    ],
  },
];

const projects = [
  {
    name: "D3E Studio – Low-Code Development Platform",
    description:
      "A low-code platform designed to build and deploy cross-platform applications with minimal coding. It supports end-to-end workflows from UI design to backend integrations.",
    tags: [],
    image: d3eproject,
    source_code_link: "https://github.com/",
    height: "500px",
  },
  {
    name: "RewaHR – HR Management Portal",
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
    name: "FindNok – Next of Kin Web App",
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
    name: "ServiceEdge – Home Service Booking App",
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
    name: "DWS Event Sphere – Event Calendar App",
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

export { services, technologies, experiences, projects };
