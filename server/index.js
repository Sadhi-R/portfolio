/*
 Minimal email API using Express + Nodemailer.
 - In production, set GMAIL_USER, GMAIL_APP_PASSWORD (Google App Password), and TO_EMAIL.
 - In dev without creds, falls back to a stream transport (no email sent; logs to console).
*/
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const path = require('path');
const fs = require('fs');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// CORS configuration: allow specific origins from env or all in dev
const corsOrigins = (process.env.CORS_ORIGINS || '')
  .split(/[,;\s]+/)
  .map((s) => s.trim())
  .filter(Boolean);

app.use(
  cors({
    origin: corsOrigins.length ? corsOrigins : true,
    methods: process.env.CORS_METHODS || 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: process.env.CORS_HEADERS || undefined,
    credentials: true,
  })
);
app.use(express.json());

const hasGmailCreds = !!(process.env.GMAIL_USER && process.env.GMAIL_APP_PASSWORD);
const isProduction = process.env.NODE_ENV === 'production';

function parseList(val) {
  if (!val) return [];
  return String(val)
    .split(/[,;]+/)
    .map((s) => s.trim())
    .filter(Boolean);
}

// Create transporter: real Gmail SMTP if creds present; otherwise dev stream transport
const transporter = hasGmailCreds
  ? nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    })
  : nodemailer.createTransport({
      streamTransport: true,
      newline: 'unix',
      buffer: true,
    });

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body || {};
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields: name, email, message' });
    }

    const nameStr = String(name).trim();
    const emailStr = String(email).trim();
    const msgStr = String(message).trim();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (nameStr.length < 2 || nameStr.length > 120) {
      return res.status(400).json({ error: 'Invalid name length' });
    }
    if (!emailPattern.test(emailStr)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }
    if (msgStr.length < 5 || msgStr.length > 5000) {
      return res.status(400).json({ error: 'Invalid message length' });
    }

    const toList = parseList(process.env.TO_EMAIL);
    const ccList = parseList(process.env.CC_EMAILS);
    const bccList = parseList(process.env.BCC_EMAILS);

    const fallbackTo = process.env.GMAIL_USER ? [process.env.GMAIL_USER] : [];
    const devTo = !isProduction && !hasGmailCreds ? ['dev@example.local'] : [];
    const finalTo = toList.length ? toList : fallbackTo.length ? fallbackTo : devTo;

    if (!finalTo.length) {
      return res.status(500).json({ error: 'Server email not configured (set TO_EMAIL or GMAIL_USER)' });
    }

    const mailOptions = {
      from: hasGmailCreds ? process.env.GMAIL_USER : 'dev@example.local',
      to: finalTo,
      cc: ccList.length ? ccList : undefined,
      bcc: bccList.length ? bccList : undefined,
      subject: `Portfolio contact from ${name}`,
      replyTo: emailStr,
      text: `From: ${nameStr} <${emailStr}>\n\n${msgStr}`,
    };

    const info = await transporter.sendMail(mailOptions);

    if (!hasGmailCreds) {
      console.log('DEV EMAIL (not sent):');
      console.log(info.message.toString());
    }

    return res.json({ ok: true });
  } catch (err) {
    console.error('Email send error:', err);
    return res.status(500).json({ error: 'Failed to send message' });
  }
});

app.get('/api/health', (req, res) => {
  res.set('Cache-Control', 'no-store');
  res.json({ ok: true, smtp: hasGmailCreds ? 'gmail' : 'dev-stream' });
});

const serveStatic = process.env.SERVE_STATIC !== 'false';
const distPath = path.resolve(__dirname, '../dist');

if (serveStatic && fs.existsSync(distPath)) {
  app.use(express.static(distPath, { maxAge: '1d', index: false }));

  // Branded standby page (also copied to dist/standby.html via Vite public/)
  app.get('/standby', (req, res) => {
    res.sendFile(path.join(distPath, 'standby.html'));
  });

  // React Router catch-all for non-API GETs (Express 5-safe using RegExp)
  app.get(/^(?!\/api).*/, (req, res) => {
    res.sendFile(path.join(distPath, 'index.html'));
  });
} else if (!serveStatic) {
  app.get('/', (req, res) => {
    res.json({ ok: true, service: 'portfolio-api' });
  });
} else {
  console.warn('Static frontend not found at', distPath, '- skipping static hosting');
}

app.listen(PORT, () => {
  console.log(`Email API server listening on http://localhost:${PORT}`);
});
