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
  findNOK,
  rewahrproject,
  LeadProject,
  rmsProject,
  digitalMenu,
  CaseManagementSystem,
} from "../assets";

import d3eLogo from "../assets/company/d3e-logo.jpeg";
import nityaLogo from "../assets/company/nitya-software-logo.png";

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
    title: "AI Developer",
    icon: mobile,
  },
  {
    title: "Full Stack Development",
    icon: backend,
  },
  {
    title: "Software Engineering",
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
    company_name: "D3E Studio Private Limited",
    icon: d3eLogo,
    iconBg: "#ffffff",
    date: "Sep 2025 - Present",
    points: [
      "Develop AI-powered software-generation capabilities that transform natural-language prompts into complete software applications.",
      "Implement AI-assisted code-generation workflows and prompt-engineering techniques that reduced development time by 80%.",
      "Contribute to scalable application architecture, multi-tenant deployment workflows, automated testing, and production integrations.",
      "Develop and maintain React/TypeScript and Dart/Flutter code-generation capabilities within the D3E Studio model-driven development platform.",
      "Apply AI tools, prompting techniques, MCP-based workflows, and AI-assisted development practices to improve software engineering productivity.",
      "Collaborate with cross-functional teams to integrate AI capabilities into production-grade software systems.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "NITYA Software Solutions Inc",
    icon: nityaLogo,
    iconBg: "#ffffff",
    date: "Aug 2022 - Sep 2025",
    points: [
      "Developed and maintained 5+ client-facing applications using Flutter and React.js across the full software development lifecycle.",
      "Improved delivery efficiency by 40% through structured development workflows and automation.",
      "Designed RESTful APIs and integrated third-party services to extend application functionality.",
      "Optimized application and database performance, reducing application load times by 35%.",
      "Collaborated with cross-functional teams of 5–10 members to deliver production software and resolve technical issues.",
      "Mentored junior developers through code reviews, technical guidance, and software engineering best practices.",
    ],
  },
];

const educations = [
  {
    degree: "Bachelor of Technology — Computer Science",
    school: "Sri Chaitanya Technical Campus, Hyderabad, Telangana",
    date: "Oct 2022 - Jul 2025",
    description:
      "Admitted after Diploma in ECE via Lateral Entry (TS ECET) — a 3-year AICTE-approved pathway. Pursued B.Tech while working full-time as a Software Engineer.",
  },
  {
    degree: "Diploma — Electronics & Communications Engineering",
    school: "Government Model Residential Polytechnic, Gajwel, Telangana",
    date: "Jun 2019 - May 2022",
    description:
      "Built a strong foundation in core electronics, communication systems, and practical, hands-on engineering skills.",
  },
];

const achievements = [
  "Received a Certificate of Appreciation from the President and CEO of D3E Studio for exceptional contributions and technical excellence.",
  "Contributed to an AI-driven application-generation platform enabling non-technical users to create functional software.",
  "Conducted AI Tools Awareness Classes covering practical adoption of ChatGPT, Claude, Gemini, and Cursor.",
];

const projects = [
  {
    name: "D3E Studio - Low-Code Platform",
    description:
      "Contributed to the D3E Studio low-code development platform with React and Dart code-generation for models, components, pages, and application logic. Built and maintained Studio components, UI definitions, templates, and generated application structures with frontend–backend integration.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "TypeScript", color: "green-text-gradient" },
      { name: "Flutter", color: "pink-text-gradient" },
    ],
    image: d3eproject,
    source_code_link: "https://github.com/",
    height: "500px",
  },
  {
    name: "D3E AI Website Builder",
    description:
      "AI-assisted website generation platform that converts natural-language business requirements into multi-page websites. Features a registry-driven architecture with reusable components, themes, industry templates, design tokens, PostgreSQL auth, Stripe billing, OAuth, previews, and deployment workflows.",
    tags: [
      { name: "Next.js", color: "blue-text-gradient" },
      { name: "OpenAI", color: "green-text-gradient" },
      { name: "PostgreSQL", color: "pink-text-gradient" },
    ],
    image: digitalMenu,
    source_code_link: "https://github.com/",
    height: "500px",
  },
  {
    name: "Restaurant Management & AI Virtual Human",
    description:
      "Full-stack restaurant platform covering orders, menus, reservations, inventory, employees, reporting, and payments with offline-first SQLite edge sync to cloud PostgreSQL. Built an AI reception kiosk with MCP, voice interaction, and a GPU-accelerated virtual human using MuseTalk, SadTalker, Wav2Lip, and CUDA.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "PyTorch", color: "green-text-gradient" },
      { name: "MCP", color: "pink-text-gradient" },
    ],
    image: rmsProject,
    source_code_link: "https://github.com/",
    height: "500px",
  },
  {
    name: "Semantic Image Search Platform",
    description:
      "Semantic image search using CLIP embeddings and cosine-similarity ranking for natural-language image retrieval. Includes image ingestion, 512-dimensional embeddings, Qdrant vector indexing, metadata filtering, async processing, batching, caching, and request deduplication.",
    tags: [
      { name: "FastAPI", color: "blue-text-gradient" },
      { name: "OpenCLIP", color: "green-text-gradient" },
      { name: "Qdrant", color: "pink-text-gradient" },
    ],
    image: findNOK,
    source_code_link: "https://github.com/",
    height: "500px",
  },
  {
    name: "FLUX.2 AI Image Generation Lab",
    description:
      "Prompt-to-image generation app with multi-reference image editing supporting up to 10 reference images. Optimized GPU inference using 4-bit NF4 quantization, CPU offloading, and Diffusers group offloading; deployed on a rented Vast.ai GPU.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "FLUX.2", color: "green-text-gradient" },
      { name: "CUDA", color: "pink-text-gradient" },
    ],
    image: CaseManagementSystem,
    source_code_link: "https://github.com/",
    height: "500px",
  },
  {
    name: "FreshMart Inventory Management",
    description:
      "Multi-tenant inventory platform for product catalogs, warehouses, procurement, stock movements, sales, returns, batch/expiry tracking, alerts, and reporting. Built with REST APIs, JWT/OTP auth, RBAC, audit logging, WebSocket notifications, Flyway migrations, and Docker deployment.",
    tags: [
      { name: "Spring Boot", color: "blue-text-gradient" },
      { name: "React", color: "green-text-gradient" },
      { name: "Docker", color: "pink-text-gradient" },
    ],
    image: LeadProject,
    source_code_link: "https://github.com/",
    height: "500px",
  },
  {
    name: "RewaHR - HR Management Portal",
    description:
      "Full-featured HR management portal for attendance, payroll, leave management, and employee tracking. Implements secure role-based access for different organizational responsibilities and real-time reporting dashboards for workforce visibility.",
    tags: [
      { name: "Java", color: "blue-text-gradient" },
      { name: "Flutter", color: "green-text-gradient" },
      { name: "React", color: "pink-text-gradient" },
    ],
    image: rewahrproject,
    source_code_link: "https://github.com/",
    height: "500px",
  },
];

export { services, technologies, experiences, educations, achievements, projects };
