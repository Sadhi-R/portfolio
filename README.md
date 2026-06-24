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

### Avoiding Render's "Service Waking Up" screen

On Render's free tier, a **Web Service** spins down after ~15 minutes of inactivity. The next visitor sees Render's default wake-up page for 30–90 seconds **before your app code runs**, so you cannot replace that screen from inside the portfolio alone.

Use one of these approaches:

#### Option A — Recommended: Static Site + API (no cold start for visitors)

Split the deploy so the UI is always served instantly:

1. **Static Site** (`sadhi-portfolio`) — `npm ci && npm run build`, publish `./dist`
2. **Web Service** (`sadhi-portfolio-api`) — `node server/index.js` with `SERVE_STATIC=false`
3. Set `VITE_API_URL=https://sadhi-portfolio-api.onrender.com/api` on the static site build
4. Set `CORS_ORIGINS` on the API to your static site URL

A `render.yaml` blueprint is included in the repo for this layout.

#### Option B — Branded standby page (custom loading while the server wakes)

Host `public/standby.html` on an always-on static host (Cloudflare Pages, Netlify, GitHub Pages):

- Deploy the file as your domain's `index.html`
- It polls `https://sadhi.onrender.com/api/health` and redirects when ready
- Optional query param: `?target=https://your-render-url.onrender.com`

You can also open `/standby` on the live site after the server is running.

#### Option C — Single Web Service (current setup)

- Build command: `npm ci && npm run build`
- Start command: `npm start`
- Health check path: `/api/health`
- Configure contact/email variables from `.env.example`

Visitors may still see Render's wake-up screen on the first request after idle time. Use [UptimeRobot](https://uptimerobot.com) or similar to ping `/api/health` every 10–14 minutes to reduce cold starts (not guaranteed on free tier).

### In-app loading splash

`index.html` includes a branded splash screen that shows while the React bundle loads after the server responds.
