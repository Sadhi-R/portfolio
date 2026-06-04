# Sadhi Ramtenki Portfolio

A modern, responsive portfolio website showcasing experience, projects, technical skills, and contact options with light/dark theme support.

## Project Overview

This project is a personal portfolio built with React and Vite. It is designed to present professional experience, featured work, and a direct way for recruiters/clients to connect.

## Features

- Fully responsive layout for desktop, tablet, and mobile
- Light Theme / Dark Theme toggle with saved preference
- Dedicated **Hire Me** section
- Resume/CV download button in the Hire Me section
- Profile image integrated into hero and Hire Me sections
- Project showcase, skills, experience timeline, AI interests, and contact form
- Smooth animations and modern UI styling

## Technologies Used

- React 18
- Vite
- Tailwind CSS
- Framer Motion
- GSAP
- Three.js + React Three Fiber + Drei
- Node.js + Express (contact API)
- Nodemailer

## Setup and Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm ci
   ```

3. **Run development servers**
   ```bash
   # Terminal 1 - backend API
   npm run server

   # Terminal 2 - frontend app
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Run production server**
   ```bash
   npm start
   ```

## Deployment Information

This portfolio is deployed on Render.

- Build command: `npm ci && npm run build`
- Start command: `npm start`
- Configure environment variables for email/contact API (`GMAIL_USER`, `GMAIL_APP_PASSWORD`, `TO_EMAIL`, etc.)

## Live Portfolio URL

https://sadhi.onrender.com/
