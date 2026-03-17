import { useState } from 'react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-5 left-0 right-0 mx-auto w-11/12 bg-black text-primary-text p-4 z-50 flex justify-between items-center rounded-lg">
      <div className="text-xl font-bold">JASWANTH</div>
      
      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-8">
        <li>
          <button 
            onClick={() => scrollToSection('hero')}
            className="hover:text-primary transition-colors cursor-pointer"
          >
            HOME
          </button>
        </li>
        <li>
          <button 
            onClick={() => scrollToSection('about')}
            className="hover:text-primary transition-colors cursor-pointer"
          >
            ABOUT
          </button>
        </li>
        <li>
          <button 
            onClick={() => scrollToSection('gallery')}
            className="hover:text-primary transition-colors cursor-pointer"
          >
            GALLERY
          </button>
        </li>
        <li>
          <button 
            onClick={() => scrollToSection('contact')}
            className="hover:text-primary transition-colors cursor-pointer"
          >
            CONTACT
          </button>
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <button 
        className="md:hidden flex flex-col gap-1"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span className={`w-6 h-0.5 bg-primary-text transition-all ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
        <span className={`w-6 h-0.5 bg-primary-text transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`w-6 h-0.5 bg-primary-text transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className="absolute top-full left-0 right-0 bg-black text-primary-text p-4 flex flex-col gap-4 rounded-lg mt-2 md:hidden">
          <li>
            <button 
              onClick={() => scrollToSection('hero')}
              className="hover:text-primary transition-colors cursor-pointer w-full text-left"
            >
              HOME
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('about')}
              className="hover:text-primary transition-colors cursor-pointer w-full text-left"
            >
              ABOUT
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('gallery')}
              className="hover:text-primary transition-colors cursor-pointer w-full text-left"
            >
              GALLERY
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('contact')}
              className="hover:text-primary transition-colors cursor-pointer w-full text-left"
            >
              CONTACT
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
