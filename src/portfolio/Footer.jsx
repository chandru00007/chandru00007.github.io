import { owner } from "./data";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#050816] border-t border-white/10 py-8 px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-[#aaa6c3] text-sm">
          © {year} <span className="text-white font-semibold">{owner.name}</span> · Built
          with React &amp; Vite · Deployed on GitHub Pages
        </p>
        <div className="flex gap-6">
          <a
            href={owner.github}
            target="_blank"
            rel="noreferrer"
            className="text-[#aaa6c3] hover:text-white transition-colors text-sm"
          >
            GitHub
          </a>
          <a
            href={owner.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-[#aaa6c3] hover:text-white transition-colors text-sm"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${owner.email}`}
            className="text-[#aaa6c3] hover:text-white transition-colors text-sm"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
