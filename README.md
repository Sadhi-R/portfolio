# Sadhi Ramtenki Portfolio

A modern personal portfolio website for Sadhi Ramtenki, built to showcase software engineering experience, skills, projects, resume access, and contact options in a clean responsive interface.

Live portfolio: https://sadhi.onrender.com/

## Project Overview

This portfolio presents professional experience, technical capabilities, selected projects, and a dedicated hiring flow for recruiters, clients, and collaborators. The interface supports light and dark themes, responsive layouts, smooth animations, and a contact form backed by a Node/Express API.

## Features

- Fully responsive UI for desktop, tablet, and mobile
- Light theme and dark theme toggle with saved preference
- Dedicated Hire Me section with collaboration highlights
- Downloadable Resume/CV button
- Profile image area integrated into the hero and Hire Me sections
- Work experience timeline
- Technology and tools showcase
- Project portfolio grid
- Contact form connected to a backend API
- Modern spacing, typography, theme-aware cards, and accessible controls

## Technologies Used

- React 18
- Vite
- Tailwind CSS
- Framer Motion
- GSAP
- Three.js
- React Three Fiber
- Drei
- React Icons
- Node.js
- Express
- Nodemailer

## Setup and Installation

1. Clone the repository:

   ```bash
   git clone <your-repository-url>
   cd portfolio
   ```

2. Install dependencies:

   ```bash
   npm ci
   ```

3. Configure environment variables:

   ```bash
   cp .env.example .env
   ```

   Update `.env` with the email/contact settings required by the backend server.

4. Start the frontend development server:

   ```bash
   npm run dev
   ```

5. In a separate terminal, start the backend server:

   ```bash
   npm run server
   ```

6. Build for production:

   ```bash
   npm run build
   ```

7. Run the production server:

   ```bash
   npm start
   ```

## Deployment Information

The portfolio is deployed on Render at:

https://sadhi.onrender.com/

Recommended Render settings:

- Build command: `npm ci && npm run build`
- Start command: `npm start`
- Environment variables: configure the same contact/email variables from `.env.example`

The production build is generated in the `dist` folder and served through the Node/Express server.
