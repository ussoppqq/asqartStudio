import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <motion.header 
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' 
          : 'bg-transparent py-4'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container-custom flex justify-between items-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <NavLink to="/" className="flex items-center group">
            <img 
              src={scrolled ? "src/assets/LOGO_ASQART_panjang_hijau.png" : "src/assets/LOGO_ASQART_ panjang_putih.png"}
              alt="asqart logo" 
              className="h-16 w-auto transition-all duration-300 group-hover:brightness-110"
            />
          </NavLink>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `relative px-4 py-2 text-sm font-medium tracking-wide transition-all duration-300 rounded-full group ${
                    isActive 
                      ? 'text-asq-green bg-asq-pink/30' 
                      : scrolled 
                        ? 'text-asq-dark-grey hover:text-asq-green hover:bg-asq-pink/20' 
                        : 'text-white hover:text-asq-pink hover:bg-white/10'
                  }`
                }
              >
                <span className="relative z-10">{link.name}</span>
                <motion.div
                  className="absolute inset-0 bg-asq-green/10 rounded-full"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </NavLink>
            </motion.div>
          ))}
        </nav>

        {/* CTA Button */}
        <motion.div 
          className="hidden lg:block"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <NavLink 
            to="/contact" 
            className="bg-asq-green text-white px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-300 hover:bg-asq-green/90 hover:shadow-lg hover:scale-105 active:scale-95"
          >
            Get Started
          </NavLink>
        </motion.div>

        {/* Mobile Navigation Toggle */}
        <motion.button
          className="lg:hidden relative z-50 p-2 rounded-full transition-all duration-300 hover:bg-asq-pink/20"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
          whileTap={{ scale: 0.95 }}
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X size={24} className="text-asq-green" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu size={24} className={scrolled ? "text-asq-green" : "text-white"} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-white/95 backdrop-blur-md shadow-xl border-t border-asq-pink/20"
          >
            <div className="container-custom py-6">
              <div className="flex flex-col space-y-1">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <NavLink
                      to={link.path}
                      className={({ isActive }) =>
                        `block px-4 py-3 text-lg font-medium rounded-xl transition-all duration-300 ${
                          isActive 
                            ? 'text-asq-green bg-asq-pink/30 shadow-sm' 
                            : 'text-asq-dark-grey hover:text-asq-green hover:bg-asq-pink/20'
                        }`
                      }
                    >
                      {link.name}
                    </NavLink>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: navLinks.length * 0.1 }}
                  className="pt-4"
                >
                  <NavLink 
                    to="/contact" 
                    className="block w-full bg-asq-green text-white px-4 py-3 rounded-xl font-medium text-center transition-all duration-300 hover:bg-asq-green/90 hover:shadow-lg"
                  >
                    Get Started
                  </NavLink>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;