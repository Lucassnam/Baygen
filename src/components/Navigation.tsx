import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import Button from './Button';

export default function Navigation() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Theme', path: '/theme' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Jury', path: '/jury' },
    { name: 'About', path: '/about' },
    { name: 'FAQ', path: '/faq' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-neutral-50/95 backdrop-blur-sm border-b-2 border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold tracking-tight">
            BAY GEN AI
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`
                  text-sm font-medium transition-colors
                  ${
                    location.pathname === link.path
                      ? 'text-gray-900 underline decoration-2 decoration-lime-400 underline-offset-4'
                      : 'text-gray-600 hover:text-gray-900'
                  }
                `}
              >
                {link.name}
              </Link>
            ))}
            <Button variant="primary" to="/submit" className="text-sm">
              Submit
            </Button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`
                  block text-sm font-medium py-2
                  ${location.pathname === link.path ? 'text-gray-900' : 'text-gray-600'}
                `}
              >
                {link.name}
              </Link>
            ))}
            <Button variant="primary" to="/submit" className="text-sm w-full">
              Submit
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
