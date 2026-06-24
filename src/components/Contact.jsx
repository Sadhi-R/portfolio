import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiMapPin, FiSend, FiUser } from "react-icons/fi";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, staggerContainer } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

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

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(payload.email)) {
      setLoading(false);
      alert("Please enter a valid email address.");
      return;
    }

    try {
      const res = await fetch(`${apiBase}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        let msg = "Unable to send your message right now. Please try again later.";
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
    <motion.div
      variants={staggerContainer(0.1, 0.08)}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.15 }}
      className='mx-auto w-full max-w-2xl'
    >
      <motion.div variants={fadeIn("up", "spring", 0, 0.8)} className='text-center'>
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <p className='mx-auto mt-4 max-w-lg text-base leading-7 text-secondary'>
          Have a project in mind or want to discuss an opportunity? Send a message and I&apos;ll
          get back to you within 24 hours.
        </p>
        <div className='contact-location-chip mx-auto mt-5 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm text-secondary'>
          <FiMapPin className='shrink-0 text-[var(--accent)]' aria-hidden='true' />
          Based in India · Open to remote & on-site
        </div>
      </motion.div>

      <motion.div
        variants={fadeIn("up", "spring", 0.12, 0.8)}
        className='contact-form-panel surface-card mt-10 rounded-2xl p-6 sm:p-8'
      >
        <form ref={formRef} onSubmit={handleSubmit} className='flex flex-col gap-5'>
          <label className='contact-field'>
            <span className='contact-field-label'>Your Name</span>
            <span className='contact-field-input-wrap'>
              <FiUser className='contact-field-icon' aria-hidden='true' />
              <input
                type='text'
                name='name'
                value={form.name}
                onChange={handleChange}
                placeholder='John Doe'
                required
                minLength={2}
                maxLength={120}
                autoComplete='name'
                className='contact-field-input theme-focus'
              />
            </span>
          </label>

          <label className='contact-field'>
            <span className='contact-field-label'>Your Email</span>
            <span className='contact-field-input-wrap'>
              <FiMail className='contact-field-icon' aria-hidden='true' />
              <input
                type='email'
                name='email'
                value={form.email}
                onChange={handleChange}
                placeholder='you@example.com'
                required
                inputMode='email'
                autoComplete='email'
                className='contact-field-input theme-focus'
              />
            </span>
          </label>

          <label className='contact-field'>
            <span className='contact-field-label'>Your Message</span>
            <span className='contact-field-input-wrap contact-field-input-wrap--textarea'>
              <textarea
                rows={5}
                name='message'
                value={form.message}
                onChange={handleChange}
                placeholder='Tell me about your project or opportunity...'
                required
                minLength={5}
                maxLength={5000}
                className='contact-field-input contact-field-textarea theme-focus'
              />
            </span>
          </label>

          <button
            type='submit'
            disabled={loading}
            className='theme-focus btn-primary contact-submit-btn inline-flex items-center justify-center gap-2 rounded-xl px-8 py-3.5 font-bold outline-none transition disabled:opacity-70'
          >
            {loading ? (
              "Sending..."
            ) : (
              <>
                <FiSend size={18} aria-hidden='true' />
                Send Message
              </>
            )}
          </button>

          {status.message && (
            <p
              role={status.type === "error" ? "alert" : "status"}
              className={`contact-status rounded-xl border px-4 py-3 text-sm font-medium ${
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
    </motion.div>
  );
};

export default SectionWrapper(Contact, "contact");
