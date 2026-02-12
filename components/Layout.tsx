import React, { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Facebook } from 'lucide-react';

import logoImg from '../logo.png';

const LogoIcon = ({ className = '', size = 'md' }: { className?: string; size?: 'md' | 'sm' }) => (
  <img src={logoImg} alt="Mazerolle Builders" className={`w-auto object-contain ${size === 'sm' ? 'h-8' : 'h-12 md:h-14'} ${className}`} />
);

const Layout: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About Us', path: '/about' },
    { name: 'Projects', path: '/projects' },
  ];

  return (
    <div className="flex flex-col min-h-screen font-sans">
      {/* Navigation */}
      <header
        className={`fixed w-full z-50 transition-all duration-300 border-b ${
          scrolled ? 'bg-white/95 backdrop-blur-md border-stone-200 py-2 shadow-sm' : 'bg-white/95 border-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-3 group" onClick={closeMenu}>
             <LogoIcon className="text-brand-700" />
            <div className="flex flex-col justify-center">
              <span className="text-xl md:text-2xl font-serif font-bold text-brand-700 leading-none tracking-tight">Mazerolle Builders Ltd.</span>
              <span className="text-[0.6rem] md:text-[0.65rem] text-stone-600 font-medium tracking-wider uppercase mt-1">
                General Contracting • New Builds • Renovations
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors duration-200 relative group ${
                  location.pathname === link.path ? 'text-brand-700' : 'text-stone-600 hover:text-brand-700'
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-brand-700 transform origin-left transition-transform duration-300 ${location.pathname === link.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
              </Link>
            ))}
            <Link
              to="/contact"
              className="ml-4 bg-brand-700 hover:bg-brand-800 text-white px-6 py-2.5 rounded-sm font-medium transition-all duration-300 shadow-md hover:shadow-lg text-sm tracking-wide"
            >
              Free Estimate
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-brand-700 p-2 hover:bg-brand-50 rounded-md transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav */}
        <div
          className={`lg:hidden absolute top-full left-0 w-full bg-white border-b border-stone-200 shadow-lg overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-4 py-6 space-y-4 flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-lg font-medium px-4 py-3 border-l-4 ${
                  location.pathname === link.path
                    ? 'border-brand-700 text-brand-700 bg-brand-50'
                    : 'border-transparent text-stone-600 hover:bg-stone-50 hover:text-stone-900'
                }`}
                onClick={closeMenu}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="text-lg font-medium px-4 py-3 border-l-4 border-transparent text-stone-600 hover:bg-stone-50 hover:text-stone-900"
              onClick={closeMenu}
            >
              Contact / Free Estimate
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-24 lg:pt-28">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-300 border-t border-brand-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            
            {/* Brand Column */}
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                 {/* Logo for Footer */}
                 <LogoIcon size="sm" className="brightness-0 invert opacity-90" />
                <div>
                  <h3 className="text-lg font-serif font-bold text-white leading-none">MAZEROLLE</h3>
                  <p className="text-[0.6rem] text-brand-400 font-medium tracking-widest uppercase">Builders Ltd.</p>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-stone-400">
                A family-run, father-and-son general contracting team. We treat every project like it's our own home. Quality craftsmanship, personal accountability, and zero shortcuts.
              </p>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/mazerollebuilders" target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-white transition-colors"><Instagram size={20} /></a>
                <a href="https://www.facebook.com/mazerollebuildersltd" target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-white transition-colors"><Facebook size={20} /></a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-serif font-medium text-lg mb-6">Explore</h4>
              <ul className="space-y-3">
                {navLinks.map(link => (
                  <li key={link.path}>
                    <Link to={link.path} className="text-sm hover:text-brand-400 transition-colors flex items-center">
                      <span className="w-1.5 h-1.5 bg-brand-600 rounded-full mr-2"></span>
                      {link.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link to="/contact" className="text-sm hover:text-brand-400 transition-colors flex items-center">
                    <span className="w-1.5 h-1.5 bg-brand-600 rounded-full mr-2"></span>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white font-serif font-medium text-lg mb-6">Services</h4>
              <ul className="space-y-3 text-sm">
                <li><Link to="/services#new-builds" className="hover:text-brand-400 transition-colors">New Builds</Link></li>
                <li><Link to="/services#renovations" className="hover:text-brand-400 transition-colors">Renovations</Link></li>
                <li><Link to="/services#general-contracting" className="hover:text-brand-400 transition-colors">General Contracting</Link></li>
                <li><Link to="/services#log-structures" className="hover:text-brand-400 transition-colors">Log Structures</Link></li>
                <li><Link to="/services#outdoor-living" className="hover:text-brand-400 transition-colors">Outdoor Living</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-serif font-medium text-lg mb-6">Contact Us</h4>
              <ul className="space-y-4 text-sm">
                 <li className="flex items-start">
                  <span className="text-brand-500 mr-3 mt-1 font-bold text-xs w-6">ON</span>
                  <a href="tel:5195911034" className="hover:text-white transition-colors">519-591-1034</a>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-500 mr-3 mt-1 font-bold text-xs w-6">NB</span>
                  <a href="tel:5068629497" className="hover:text-white transition-colors">506-862-9497</a>
                </li>
                <li className="flex items-start">
                   <div className="flex-1">
                     <p className="text-stone-400">PO Box 23032 Springbank</p>
                     <p className="text-stone-400">Woodstock, ON N4T 1R9</p>
                   </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-stone-800 bg-stone-950 py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-stone-500">© {new Date().getFullYear()} Mazerolle Builders Ltd. All rights reserved.</p>
            <a href="https://www.meridianadvertisinggroup.com/" target="_blank" rel="noopener noreferrer" className="text-xs text-stone-600 hover:text-brand-400 transition-colors mt-2 md:mt-0">Designed by Nitish Panesar</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;