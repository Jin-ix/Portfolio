import { useState } from 'react';
import { Reveal } from './Reveal';

function CopyIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="9" y="9" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="2" />
      <path
        d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}

export default function Contact() {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText('jinixch@gmail.com');
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      /* clipboard unavailable, no-op */
    }
  }

  return (
    <section id="contact" className="relative z-10 bg-[#ffffff] text-black px-5 sm:px-8 md:px-10 py-24 md:py-36">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <p className="text-[14px] uppercase tracking-widest text-black/40 mb-3">Get in Touch</p>
          <h2
            className="mb-6"
            style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(32px, 5vw, 52px)', lineHeight: 1.1 }}
          >
            Let's build intelligent, explainable systems.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="text-black/60 text-[17px] leading-relaxed max-w-2xl mb-12">
            Whether you want to discuss the intricacies of digital twin architecture, chat about explainable AI, or explore potential collaborations—my inbox is always open.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="flex flex-wrap gap-y-2">
            <a
              href="mailto:jinixch@gmail.com"
              className="inline-flex items-center justify-center bg-black text-white rounded-full text-[15px] px-6 py-[0.6em] mx-[0.2em] mb-[0.4em] whitespace-nowrap hover:opacity-80 transition-opacity"
            >
              Email me directly
            </a>
            <a
              href="https://www.linkedin.com/in/jinixchacko"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-transparent text-black border border-black/20 rounded-full text-[15px] px-6 py-[0.6em] mx-[0.2em] mb-[0.4em] whitespace-nowrap hover:bg-black hover:text-white transition-colors duration-200"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Jin-ix"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-transparent text-black border border-black/20 rounded-full text-[15px] px-6 py-[0.6em] mx-[0.2em] mb-[0.4em] whitespace-nowrap hover:bg-black hover:text-white transition-colors duration-200"
            >
              GitHub
            </a>
            <a
              href="/Jinix_Chacko_Resume.pdf"
              download
              className="inline-flex items-center justify-center bg-transparent text-black border border-black/20 rounded-full text-[15px] px-6 py-[0.6em] mx-[0.2em] mb-[0.4em] whitespace-nowrap hover:bg-black hover:text-white transition-colors duration-200"
            >
              Download Résumé
            </a>
            <button
              type="button"
              onClick={handleCopy}
              className="inline-flex items-center justify-center gap-2 bg-transparent text-black border border-black/10 rounded-full text-[13px] px-4 py-[0.6em] mx-[0.2em] mb-[0.4em] whitespace-nowrap hover:bg-black hover:text-white transition-colors duration-200"
            >
              {copied ? 'Copied \u2713' : 'Copy email'}
              <CopyIcon />
            </button>
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-12 text-black/60 text-[15px]">
            <p>📍 Idukki, Kerala, India</p>
            <p className="mt-1">📱 +91 9400963798</p>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.4} width="100%">
        <footer className="max-w-4xl mx-auto flex justify-between text-[13px] text-black/40 mt-32 pt-8 border-t border-black/10">
          <span style={{ fontFamily: 'var(--font-heading)' }}>Jinix Chacko © 2026</span>
          <span>Architected with Explainability</span>
        </footer>
      </Reveal>
    </section>
  );
}
