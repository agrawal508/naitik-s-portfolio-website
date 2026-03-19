import React, { useState, useEffect } from 'react';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');
  const [menuOpen, setMenuOpen] = useState(false);

  // Scroll-triggered background
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // ── Scroll-spy: auto-highlight active section via IntersectionObserver ──
  useEffect(() => {
    const sectionIds = NAV_LINKS.map(({ href }) => href.replace('#', ''));
    const observers = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            const matched = NAV_LINKS.find((l) => l.href === `#${id}`);
            if (matched) setActiveLink(matched.label);
          }
        },
        // Fire when the section occupies ≥30% of the viewport
        { threshold: 0.3, rootMargin: '-80px 0px 0px 0px' }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  const handleNav = (label, href) => {
    setActiveLink(label);
    setMenuOpen(false);
    // Smooth scroll
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav
        className={`
          fixed top-0 w-full z-50
          transition-all duration-300
          ${scrolled
            ? 'bg-white/80 backdrop-blur-md border-b border-black/8 shadow-[0_1px_0_0_rgba(0,0,0,0.05)]'
            : 'bg-transparent border-b border-transparent'}
        `}
      >
        <div className="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between">

          {/* ── Logo ── */}
          <a
            href="#home"
            onClick={() => handleNav('Home', '#home')}
            className="font-bold text-xl tracking-tight text-black select-none"
          >
            Naitik.
          </a>

          {/* ── Center links (desktop) ── */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(({ label, href }) => {
              const isActive = activeLink === label;
              return (
                <a
                  key={label}
                  href={href}
                  onClick={(e) => { e.preventDefault(); handleNav(label, href); }}
                  className={`
                    relative text-base transition-colors duration-200 pb-[2px]
                    ${isActive
                      ? 'text-black font-medium'
                      : 'text-gray-400 hover:text-black'}
                  `}
                >
                  {label}
                  {/* Active underline */}
                  {isActive && (
                    <span className="absolute bottom-[-2px] left-0 right-0 h-[1.5px] bg-black rounded-full" />
                  )}
                </a>
              );
            })}
          </div>

          {/* ── Right: availability + hamburger ── */}
          <div className="flex items-center gap-4">
            {/* Availability (desktop) */}
            <div className="hidden md:flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm text-gray-500 font-mono">Available for work</span>
            </div>

            {/* Hamburger (mobile) */}
            <button
              className="md:hidden flex flex-col justify-center items-center gap-[5px] w-8 h-8 group"
              onClick={() => setMenuOpen(prev => !prev)}
              aria-label="Toggle menu"
            >
              <span className={`block h-[1.5px] bg-black rounded-full transition-all duration-300 ${menuOpen ? 'w-5 translate-y-[6.5px] rotate-45' : 'w-5'}`} />
              <span className={`block h-[1.5px] bg-black rounded-full transition-all duration-300 ${menuOpen ? 'w-0 opacity-0' : 'w-4'}`} />
              <span className={`block h-[1.5px] bg-black rounded-full transition-all duration-300 ${menuOpen ? 'w-5 -translate-y-[6.5px] -rotate-45' : 'w-5'}`} />
            </button>
          </div>

        </div>

        {/* ── Mobile dropdown ── */}
        <div
          className={`
            md:hidden overflow-hidden transition-all duration-300 ease-in-out
            bg-white/95 backdrop-blur-md border-t border-black/5
            ${menuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}
          `}
        >
          <div className="max-w-5xl mx-auto px-6 py-4 flex flex-col gap-1">
            {NAV_LINKS.map(({ label, href }) => {
              const isActive = activeLink === label;
              return (
                <a
                  key={label}
                  href={href}
                  onClick={(e) => { e.preventDefault(); handleNav(label, href); }}
                  className={`
                    py-3 text-base font-medium border-b border-gray-50 transition-colors duration-150
                    ${isActive ? 'text-black' : 'text-gray-400 hover:text-black'}
                  `}
                >
                  {label}
                </a>
              );
            })}
            {/* Availability in mobile dropdown */}
            <div className="flex items-center gap-2 pt-3">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm text-gray-500 font-mono">Available for work</span>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;