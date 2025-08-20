# 3D Portfolio

A modern, interactive 3D portfolio website built with React, Three.js, and Framer Motion.

## 🚀 Features

- Interactive 3D models and animations
- Smooth page transitions
- Responsive design
- Contact form functionality
- Modern UI/UX with TailwindCSS
- Timeline component for experience/projects

## 🛠️ Technologies Used

- React 18
- Three.js
- React Three Fiber
- GSAP for animations
- Framer Motion
- TailwindCSS
- Vite
- Gmail SMTP (via Nodemailer) contact form API

## 📦 Installation

1. Clone the repository:
```bash
git clone [your-repository-url]
```

2. Install dependencies:
```bash
npm install
```

3. Start the development servers (frontend + email API):
```bash
# terminal 1 – email API (Gmail SMTP)
npm run server

# terminal 2 – frontend
npm run dev
```

4. Build for production (frontend):
```bash
npm run build
```
Then deploy `dist/` as static assets and deploy `server/index.js` as a Node service.
If you run the API on a different host/path, set `VITE_API_URL` accordingly (e.g., `https://yourdomain.com/api`).

### Deploying on Render (single service)

- Service Type: Web Service, Runtime: Node
- Build Command:
	- `npm ci`
	- `npm run build`
- Start Command:
	- `npm start`

The server serves the built frontend from `dist/` and exposes API under `/api`. Set environment variables in Render Dashboard:
- `PORT` (Render provides one automatically; no need to set unless customizing)
- `GMAIL_USER`, `GMAIL_APP_PASSWORD`, `TO_EMAIL` (and optional CC/BCC)
- `CORS_ORIGINS` to your frontend URL if you also access API from another origin
- Leave `VITE_API_URL` empty to use the same-origin `/api` in production

## 🔧 Environment Setup

Two options for contact form:

1) Gmail SMTP (recommended)
- Copy `.env.example` to `.env` and set:
	- GMAIL_USER=your_gmail_address
	- GMAIL_APP_PASSWORD=your_16_char_google_app_password (no spaces)
	- TO_EMAIL=recipient1@example.com, recipient2@example.com (optional; defaults to GMAIL_USER)
	- Optional: CC_EMAILS=copy1@example.com;copy2@example.com, BCC_EMAILS=archive@example.com
- Start servers:
		- `npm run server` (email API at http://localhost:3001)
		- In another terminal: `npm run dev` (frontend at http://localhost:5173)
	Optional: configure CORS allowed origins via `CORS_ORIGINS` (comma/semicolon/space separated) in `.env`.

2) API base URL
- By default, the client posts to `/api` so it works behind Nginx or the Vite dev proxy.
- To target a different origin (e.g., hosted API), set `VITE_API_URL` in `.env` to the full base, e.g. `https://api.yourdomain.com/api`.

## 📁 Project Structure

```
src/
├── components/     # Reusable components
├── assets/        # Static assets (images, 3D models)
├── styles/        # Global styles
├── utils/         # Helper functions
└── App.jsx        # Main application component
```

## 🎨 Customization

- Update 3D models in the `assets` folder
- Modify colors and styles in `tailwind.config.js`
- Edit content in respective component files


## ▶️ Run & Test

Development
- Terminal 1: `npm run server`
- Terminal 2: `npm run dev`

Quick API checks (PowerShell)
```powershell
# health
Invoke-RestMethod http://localhost:3001/api/health

# send test message
Invoke-RestMethod http://localhost:3001/api/contact -Method Post -ContentType "application/json" -Body (@{
	name    = "Test User"
	email   = "test@example.com"
	message = "Hello from API"
} | ConvertTo-Json)
```

Testing via UI
- Open http://localhost:5173
- Go to the Contact section, submit the form
- On success you’ll see a thank you alert; check the recipient inbox

Validation
- Frontend: HTML5 required fields + an email format check
- Backend: validates name/email/message and returns 400 for invalid input

## 🧰 Troubleshooting

- 500 from /api/contact: check the server console for "Email send error:" details
- Gmail: use a Google App Password (16 chars, no spaces). 2‑Step Verification must be enabled
- After editing `.env`, restart the email server
- Multiple recipients: use commas/semicolons in TO_EMAIL; CC/BCC via CC_EMAILS/BCC_EMAILS

## 🔐 Environment Variables

From `.env.example` (copy to `.env`):
- PORT: server port (default 3001)
- CORS_ORIGINS: allowed origins list for CORS (comma/semicolon/space separated); defaults to allow-all in dev
- CORS_METHODS, CORS_HEADERS: optional CORS overrides
- GMAIL_USER: Gmail address used to send
- GMAIL_APP_PASSWORD: Google App Password for that account (no spaces)
- TO_EMAIL: one or more recipients (comma/semicolon separated). Falls back to GMAIL_USER if empty
- CC_EMAILS, BCC_EMAILS: optional CC/BCC lists
- VITE_API_URL: client API base (leave empty if using `/api` behind proxy)

## 📄 Asset Credits & Licenses

Some 3D assets are licensed under CC‑BY‑4.0 and require attribution. Keep the attribution in your site (e.g., footer or credits page) or include the provided license files when redistributing the models.
Examples from `public/`:
- "Gaming Desktop PC" by Yolala1232 — CC‑BY‑4.0
- "Stylized planet" by cmzw — CC‑BY‑4.0


