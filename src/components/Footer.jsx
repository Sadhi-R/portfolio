import React from "react";
import { FaInstagram, FaXTwitter, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className='flex w-full justify-center gap-6 border-t border-[var(--border-color)] bg-[var(--surface-bg)]/80 py-5 text-[var(--text-primary)]'>
      <a
        href="https://www.instagram.com/sadhi_ramtenki?igsh=MXN1aHlxNmp5aHV6Yw=="
        target="_blank"
        rel="noopener noreferrer"
        aria-label='Instagram'
        className='transition hover:text-[var(--accent)]'
      >
        <FaInstagram size={24} />
      </a>
      <a
        href="https://x.com/sadhi_ramtenki?t=8QsLuIlY2Z6A2WR7vDHJiQ&s=09"
        target="_blank"
        rel="noopener noreferrer"
        aria-label='X'
        className='transition hover:text-[var(--accent)]'
      >
        <FaXTwitter size={24} />
      </a>
      <a
        href="https://www.linkedin.com/in/sadaiah-ramtenki-ba1a50219?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        target="_blank"
        rel="noopener noreferrer"
        aria-label='LinkedIn'
        className='transition hover:text-[var(--accent)]'
      >
        <FaLinkedin size={24} />
      </a>
    </footer>
  );
};

export default Footer;
