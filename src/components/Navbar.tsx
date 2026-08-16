import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, ArrowRight } from 'lucide-react';
import { EducationLogo } from './EducationLogo';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ darkMode, setDarkMode, onOpenBooking }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['home', 'curriculum', 'test-prep', 'uk-admissions', 'admissions', 'how-it-works', 'tutors', 'blogs', 'about'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'Curriculum', href: '#curriculum', id: 'curriculum' },
    { name: 'Test Prep', href: '#test-prep', id: 'test-prep' },
    { name: 'UK Admissions', href: '#uk-admissions', id: 'uk-admissions' },
    { name: 'How It Works', href: '#how-it-works', id: 'how-it-works' },
    { name: 'Tutors', href: '#tutors', id: 'tutors' },
    { name: 'Blogs', href: '#blogs', id: 'blogs', isPill: true },
    { name: 'About', href: '#about', id: 'about' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? darkMode
            ? 'bg-[#121418]/95 backdrop-blur-md border-b border-zinc-800 shadow-lg'
            : 'bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs'
          : darkMode
          ? 'bg-transparent'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 sm:h-24">
          {/* Brand Logo: Clean Centered Novera Education Wordmark */}
          <a href="#home" className="group focus:outline-none" id="brand-logo-link">
            <EducationLogo darkMode={darkMode} />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;

              if (link.isPill) {
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    className={`px-3.5 py-1 text-sm font-semibold transition-all rounded-lg ${
                      darkMode
                        ? 'text-zinc-200 hover:text-white hover:bg-white/10'
                        : 'text-slate-700 hover:text-[#6C7EB7] hover:bg-slate-100/80'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              }

              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`text-sm font-medium transition-all tracking-normal relative py-1 ${
                    isActive
                      ? darkMode
                        ? 'text-[#8B9DC3] font-bold after:content-[""] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#6C7EB7]'
                        : 'text-slate-900 font-bold after:content-[""] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#6C7EB7]'
                      : darkMode
                      ? 'text-zinc-300 hover:text-white'
                      : 'text-slate-600 hover:text-[#6C7EB7]'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Actions: Consultation Button FIRST, then Theme Switcher shifted to right */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Book a Consultation Button */}
            <button
              onClick={onOpenBooking}
              className="px-5 py-2.5 text-xs xl:text-sm font-bold rounded-xl transition-all duration-200 shadow-sm flex items-center gap-2 bg-[#6C7EB7] hover:bg-[#5B6EA7] text-white focus:outline-none cursor-pointer hover:shadow-md active:scale-98"
            >
              <span>Book a Consultation</span>
            </button>

            {/* Dark / Light Toggle Switch */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2.5 rounded-xl border transition-all duration-200 focus:outline-none cursor-pointer ${
                darkMode
                  ? 'bg-[#181B20] border-zinc-800 text-[#8B9DC3] hover:border-[#6C7EB7]'
                  : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50 shadow-xs'
              }`}
              title={darkMode ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg border focus:outline-none ${
                darkMode ? 'bg-[#181B20] border-zinc-800 text-[#8B9DC3]' : 'bg-white border-slate-200 text-slate-700'
              }`}
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg border focus:outline-none ${
                darkMode ? 'bg-[#181B20] border-zinc-800 text-zinc-200' : 'bg-white border-slate-200 text-slate-700'
              }`}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className={`sm:hidden border-b px-4 py-6 transition-all ${
            darkMode ? 'bg-[#121418] border-zinc-800 text-zinc-200' : 'bg-white border-slate-200 text-slate-800'
          }`}
        >
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-2.5 text-sm font-medium tracking-wide rounded-md ${
                  activeSection === link.id
                    ? darkMode
                      ? 'bg-[#6C7EB7]/20 text-[#8B9DC3] font-bold'
                      : 'bg-slate-100 text-slate-900 font-bold'
                    : 'hover:bg-slate-50 dark:hover:bg-zinc-800'
                }`}
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="mt-4 w-full py-3 text-sm font-bold rounded-xl bg-[#6C7EB7] hover:bg-[#5B6EA7] text-white transition-all text-center"
            >
              Book a Consultation
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
