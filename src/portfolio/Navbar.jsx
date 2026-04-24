import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { owner } from "./data";

const links = [
  { label: "About",    href: "#about"    },
  { label: "Skills",   href: "#skills"   },
  { label: "Projects", href: "#projects" },
  { label: "Contact",  href: "#contact"  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050816]/80 backdrop-blur border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#" className="text-white font-black text-xl tracking-tight">
          &lt;{owner.name} /&gt;
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-8">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="text-[#aaa6c3] hover:text-white transition-colors text-sm font-medium"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* GitHub CTA */}
        <a
          href={owner.github}
          target="_blank"
          rel="noreferrer"
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#915EFF] text-white text-sm font-semibold hover:bg-[#7a4de0] transition-colors"
        >
          GitHub ↗
        </a>

        {/* Hamburger */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-[#050816] border-t border-white/10"
          >
            <ul className="flex flex-col px-6 py-4 gap-4">
              {links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="text-[#aaa6c3] hover:text-white transition-colors font-medium"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={owner.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#915EFF] font-semibold"
                >
                  GitHub ↗
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
