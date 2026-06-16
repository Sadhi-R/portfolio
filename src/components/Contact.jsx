import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
// emailjs removed; using local API via Nodemailer/Gmail SMTP

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  // Resolve API base from env (VITE_API_URL) or default to "/api" for Nginx/proxy setups
  const apiBase = (import.meta.env.VITE_API_URL || "/api").replace(/\/+$/, "");

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
    if (status.message) setStatus({ type: "", message: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    // HTML5 constraint validation first
    if (formRef.current && !formRef.current.checkValidity()) {
      setLoading(false);
      formRef.current.reportValidity();
      return;
    }

    const payload = {
      name: form.name.trim(),
      email: form.email.trim(),
      message: form.message.trim(),
    };

    // Simple email regex as an extra safeguard
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(payload.email)) {
      setLoading(false);
      alert('Please enter a valid email address.');
      return;
    }

    try {
      const res = await fetch(`${apiBase}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        let msg = "Unable to send your message right now. Please try WhatsApp or call me directly.";
        try {
          const raw = await res.text();
          const data = raw ? JSON.parse(raw) : null;
          if (data?.error) msg = data.error;
        } catch {}
        throw new Error(msg);
      }

      setStatus({
        type: "success",
        message: "Thank you. I will get back to you as soon as possible.",
      });
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      setStatus({
        type: "error",
        message: error?.message || "Ahh, something went wrong. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='mx-auto w-full max-w-2xl'>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='surface-card rounded-lg p-5 sm:p-8'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-10 flex flex-col gap-6'
        >
          <label className='flex flex-col'>
            <span className='mb-3 font-medium text-[var(--text-primary)]'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              required
              minLength={2}
              maxLength={120}
              autoComplete='name'
              className='theme-focus rounded-lg border border-[var(--border-color)] bg-[var(--surface-soft)] px-5 py-4 font-medium text-[var(--text-primary)] outline-none placeholder:text-secondary'
            />
          </label>
          <label className='flex flex-col'>
            <span className='mb-3 font-medium text-[var(--text-primary)]'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email address?"
              required
              inputMode='email'
              autoComplete='email'
              className='theme-focus rounded-lg border border-[var(--border-color)] bg-[var(--surface-soft)] px-5 py-4 font-medium text-[var(--text-primary)] outline-none placeholder:text-secondary'
            />
          </label>
          <label className='flex flex-col'>
            <span className='mb-3 font-medium text-[var(--text-primary)]'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              required
              minLength={5}
              maxLength={5000}
              className='theme-focus rounded-lg border border-[var(--border-color)] bg-[var(--surface-soft)] px-5 py-4 font-medium text-[var(--text-primary)] outline-none placeholder:text-secondary'
            />
          </label>

          <button
            type='submit'
            disabled={loading}
            className='theme-focus btn-primary w-full rounded-lg px-8 py-3 font-bold outline-none transition xs:w-fit'
          >
            {loading ? "Sending..." : "Send"}
          </button>

          {status.message && (
            <p
              role={status.type === "error" ? "alert" : "status"}
              className={`rounded-lg border px-4 py-3 text-sm font-medium ${
                status.type === "success"
                  ? "border-[var(--success)] bg-[var(--accent-soft)] text-[var(--text-primary)]"
                  : "border-red-500/40 bg-red-500/10 text-red-200"
              }`}
            >
              {status.message}
            </p>
          )}
        </form>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
