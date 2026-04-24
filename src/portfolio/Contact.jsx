import { useState } from "react";
import { motion } from "framer-motion";
import { owner } from "./data";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | done | error

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(`https://formsubmit.co/${owner.email}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...form, _captcha: "false" }),
      });
      if (res.ok) {
        setStatus("done");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#0d0b1f] px-6">
      <div className="max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-[#aaa6c3] text-sm uppercase tracking-widest"
        >
          Let&apos;s Connect
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-white font-black text-4xl sm:text-5xl mt-2"
        >
          Get In Touch.
        </motion.h2>

        <div className="mt-12 grid md:grid-cols-2 gap-12">
          {/* Left: info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <p className="text-[#aaa6c3] text-base leading-relaxed">
              Whether you have a project idea, want to collaborate, or just want to
              say hi — my inbox is always open. I try to reply within 24 hours.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href={`mailto:${owner.email}`}
                className="flex items-center gap-3 text-[#aaa6c3] hover:text-white transition-colors group"
              >
                <span className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#915EFF]/15 group-hover:bg-[#915EFF]/30 transition-colors text-lg">
                  ✉️
                </span>
                <span>{owner.email}</span>
              </a>
              <a
                href={owner.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-[#aaa6c3] hover:text-white transition-colors group"
              >
                <span className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#915EFF]/15 group-hover:bg-[#915EFF]/30 transition-colors text-lg">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                  </svg>
                </span>
                <span>github.com/chandru00007</span>
              </a>
              <a
                href={owner.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-[#aaa6c3] hover:text-white transition-colors group"
              >
                <span className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#915EFF]/15 group-hover:bg-[#915EFF]/30 transition-colors text-lg">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </span>
                <span>LinkedIn</span>
              </a>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-5"
          >
            <div>
              <label className="block text-[#aaa6c3] text-sm font-medium mb-2">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full bg-[#151030] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-[#6b7280] focus:outline-none focus:border-[#915EFF] transition-colors"
              />
            </div>
            <div>
              <label className="block text-[#aaa6c3] text-sm font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="w-full bg-[#151030] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-[#6b7280] focus:outline-none focus:border-[#915EFF] transition-colors"
              />
            </div>
            <div>
              <label className="block text-[#aaa6c3] text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Hey Chandru, I'd love to..."
                className="w-full bg-[#151030] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-[#6b7280] focus:outline-none focus:border-[#915EFF] transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full py-3 bg-[#915EFF] text-white font-semibold rounded-lg hover:bg-[#7a4de0] disabled:opacity-60 transition-colors"
            >
              {status === "sending" ? "Sending…" : "Send Message"}
            </button>
            {status === "done" && (
              <p className="text-green-400 text-sm text-center">
                ✅ Message sent! I&apos;ll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="text-red-400 text-sm text-center">
                ❌ Something went wrong. Please email me directly.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
