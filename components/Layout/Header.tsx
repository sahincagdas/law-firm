
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: 'Anasayfa', path: '/' },
    { label: 'Blog', path: '/blog' },
    { label: 'İletişim', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-lg text-accent transition-transform group-hover:scale-110">
              <span className="material-symbols-outlined text-2xl">balance</span>
            </div>
            <div className="flex flex-col">
              <h1 className="text-primary text-xl font-serif font-bold leading-tight tracking-tight">Lexington Hukuk</h1>
              <span className="text-[10px] uppercase tracking-widest text-accent font-semibold leading-none">Avukatlık & Danışmanlık</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium tracking-wide transition-colors hover:text-accent ${
                  isActive(item.path) 
                    ? 'text-primary border-b-2 border-accent pb-1 font-bold' 
                    : 'text-secondary'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-6">
            <a href="tel:02125551234" className="text-primary font-bold text-sm hover:text-accent transition-colors">
              0 (212) 555 12 34
            </a>
            <Link 
              to="/contact" 
              className="bg-primary text-white px-6 py-2.5 rounded-lg text-sm font-bold shadow-lg shadow-primary/20 hover:bg-burgundy transition-all hover:-translate-y-0.5"
            >
              Danışmanlık Al
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden p-2 text-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="material-symbols-outlined text-3xl">
              {isMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 py-4 px-4 space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`block text-base font-medium py-2 ${
                isActive(item.path) ? 'text-accent font-bold' : 'text-secondary'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-4 border-t border-gray-100 flex flex-col gap-4">
            <a href="tel:02125551234" className="text-primary font-bold">0 (212) 555 12 34</a>
            <Link 
              to="/contact" 
              className="w-full bg-primary text-white text-center py-3 rounded-lg font-bold"
              onClick={() => setIsMenuOpen(false)}
            >
              Danışmanlık Al
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
