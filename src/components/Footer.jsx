import React from "react";
import { FaInstagram, FaXTwitter, FaLinkedin, FaFacebook } from "react-icons/fa6";

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ramtenki-sadaiah-ba1a50219/",
    Icon: FaLinkedin,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/sadhiramtenki",
    Icon: FaFacebook,
  },
  {
    label: "X (Twitter)",
    href: "https://x.com/sadhi_ramtenki",
    Icon: FaXTwitter,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/sadhi_ramtenki",
    Icon: FaInstagram,
  },
];

const Footer = () => {
  return (
    <footer className='flex w-full flex-col items-center gap-4 border-t border-[var(--border-color)] bg-[var(--surface-bg)]/80 py-6 text-[var(--text-primary)]'>
      <div className='flex justify-center gap-6'>
        {socials.map(({ label, href, Icon }) => (
          <a
            key={label}
            href={href}
            target='_blank'
            rel='noopener noreferrer'
            aria-label={label}
            className='theme-focus transition hover:text-[var(--accent)]'
          >
            <Icon size={24} aria-hidden='true' />
          </a>
        ))}
      </div>
      <p className='text-xs text-secondary'>
        &copy; {new Date().getFullYear()} Sadhi Ramtenki. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
