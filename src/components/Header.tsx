import React, { useState, useEffect } from 'react';
import { Menu, X, Code } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <a href="#" className="flex items-center space-x-2">
            <Code className="h-8 w-8 text-indigo-600" />
            <span className="text-xl font-bold text-gray-900">Baasith's Portfolio</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-indigo-600 font-medium">Home</a>
            <a href="#about" className="text-gray-700 hover:text-indigo-600 font-medium">About</a>
            <a href="#skills" className="text-gray-700 hover:text-indigo-600 font-medium">Skills</a>
            <a href="#projects" className="text-gray-700 hover:text-indigo-600 font-medium">Projects</a>
            <a href="#contact" className="text-gray-700 hover:text-indigo-600 font-medium">Contact</a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700 focus:outline-none" 
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pt-4 pb-2 space-y-3">
            <a href="#home" className="block text-gray-700 hover:text-indigo-600 font-medium" onClick={toggleMenu}>Home</a>
            <a href="#about" className="block text-gray-700 hover:text-indigo-600 font-medium" onClick={toggleMenu}>About</a>
            <a href="#skills" className="block text-gray-700 hover:text-indigo-600 font-medium" onClick={toggleMenu}>Skills</a>
            <a href="#projects" className="block text-gray-700 hover:text-indigo-600 font-medium" onClick={toggleMenu}>Projects</a>
            <a href="#contact" className="block text-gray-700 hover:text-indigo-600 font-medium" onClick={toggleMenu}>Contact</a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;