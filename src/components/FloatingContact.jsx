import React from "react";
import { FaWhatsapp } from "react-icons/fa6";
import { FiMail, FiPhone } from "react-icons/fi";

const channels = [
  {
    label: "Chat on WhatsApp",
    href: "https://wa.me/917286821058",
    Icon: FaWhatsapp,
    bg: "#25D366",
    external: true,
  },
  {
    label: "Call +91 72868 21058",
    href: "tel:+917286821058",
    Icon: FiPhone,
    bg: "var(--accent)",
    external: false,
  },
  {
    label: "Email me",
    href: "mailto:ramtenkisadhi@gmail.com",
    Icon: FiMail,
    bg: "var(--success)",
    external: false,
  },
];

const FloatingContact = () => {
  return (
    <div className='fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3'>
      {channels.map(({ label, href, Icon, bg, external }) => (
        <a
          key={label}
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          aria-label={label}
          className='theme-focus group flex items-center gap-3'
        >
          <span className='pointer-events-none rounded-md border border-[var(--border-color)] bg-[var(--surface-bg)] px-3 py-1.5 text-xs font-semibold text-[var(--text-primary)] opacity-0 shadow-md transition group-hover:opacity-100'>
            {label}
          </span>
          <span
            className='flex h-12 w-12 items-center justify-center rounded-full text-white shadow-lg transition hover:scale-110'
            style={{ background: bg }}
          >
            <Icon size={22} aria-hidden='true' />
          </span>
        </a>
      ))}
    </div>
  );
};

export default FloatingContact;
