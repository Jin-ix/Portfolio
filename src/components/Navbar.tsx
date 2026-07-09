import { useState } from 'react';

const NAV_LINKS = [
  { label: 'Work', href: '#work' },
  { label: 'Research', href: '#research' },
  { label: 'Background', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-10 flex items-center justify-between px-5 sm:px-8 py-4 sm:py-5">
        <a href="#top" className="flex items-center gap-3" onClick={closeMenu}>
          <span
            className="text-[21px] sm:text-[26px] tracking-tight text-white"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Jinix Chacko
          </span>
          <span
            className="text-[25px] sm:text-[30px] text-white select-none"
            style={{ letterSpacing: '-0.02em' }}
            aria-hidden="true"
          >
            ✳︎
          </span>
        </a>

        <div className="hidden md:flex flex-row items-center gap-1 text-[23px] text-white">
          {NAV_LINKS.map((link, i) => (
            <span key={link.href} className="flex items-center">
              <a href={link.href} className="hover:opacity-60 transition-opacity">
                {link.label}
              </a>
              {i < NAV_LINKS.length - 1 && <span className="mr-0">, </span>}
            </span>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-6">
          <a
            href="/Jinix_Chacko_Resume.pdf"
            download
            className="text-[17px] text-white border border-white/20 bg-white/5 rounded-full px-4 py-1.5 hover:bg-white hover:text-black transition-colors"
          >
            Download Résumé
          </a>
          <a
            href="#contact"
            className="text-[23px] text-white underline underline-offset-2 hover:opacity-60 transition-opacity"
          >
            Get in touch
          </a>
        </div>

        <button
          type="button"
          className="md:hidden flex flex-col gap-[5px] items-end p-2 -mr-2"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span
            className={`w-6 h-[2px] bg-white transition-all duration-300 ${
              open ? 'rotate-45 translate-y-[7px]' : ''
            }`}
          />
          <span
            className={`w-6 h-[2px] bg-white transition-all duration-300 ${
              open ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <span
            className={`w-6 h-[2px] bg-white transition-all duration-300 ${
              open ? '-rotate-45 -translate-y-[7px]' : ''
            }`}
          />
        </button>
      </nav>

      <div
        className="md:hidden fixed inset-0 z-[9] bg-black/95 backdrop-blur-sm flex flex-col justify-center items-start px-8 gap-8 transition-opacity duration-300"
        style={{
          opacity: open ? 1 : 0,
          pointerEvents: open ? 'auto' : 'none',
        }}
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-[32px] font-medium text-white"
            onClick={closeMenu}
          >
            {link.label}
          </a>
        ))}
        <a
          href="/Jinix_Chacko_Resume.pdf"
          download
          className="text-[32px] font-medium text-white border border-white/20 bg-white/5 rounded-full px-6 py-2"
          onClick={closeMenu}
        >
          Download Résumé
        </a>
        <a
          href="#contact"
          className="text-[32px] font-medium text-white underline underline-offset-2"
          onClick={closeMenu}
        >
          Get in touch
        </a>
      </div>
    </>
  );
}
