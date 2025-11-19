import { Link } from 'react-router-dom';
import { Palette, Mail, Phone, MapPin, Instagram, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-asq-green text-white pt-12 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Studio Info */}
          <div>
            <div className="flex items-center mb-4">
              <Link to="/" className="flex items-center">
                <img 
                  src="src\assets\LOGO_ASQART_ panjang_putih.png" 
                  alt="asqart logo" 
                  className="h-20 w-auto"
                />
              </Link>
            </div>
            <p className="mb-4 text-asq-light-grey">
              Creating beautiful, functional design solutions that elevate your brand and engage your audience.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-asq-pink transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-asq-pink transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-asq-pink transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-asq-light-grey hover:text-asq-pink transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-asq-light-grey hover:text-asq-pink transition-colors">About</Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-asq-light-grey hover:text-asq-pink transition-colors">Portfolio</Link>
              </li>
              <li>
                <Link to="/services" className="text-asq-light-grey hover:text-asq-pink transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/contact" className="text-asq-light-grey hover:text-asq-pink transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Services</h3>
            <ul className="space-y-2">
              <li className="text-asq-light-grey">Wedding</li>
              <li className="text-asq-light-grey">Maternity</li>
              <li className="text-asq-light-grey">Newborn</li>
              <li className="text-asq-light-grey">Family</li>
              <li className="text-asq-light-grey">Graduation</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 text-asq-pink" />
                <span className="text-asq-light-grey">RT10, RW.02, Mulya Jaya,<br /> Kec. Tulang Bawang Tengah,<br />
                  Kab. Tulang Bawang Barat,<br /> Lampung 34793</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-asq-pink" />
                <span className="text-asq-light-grey">0856-6940-4960<br />
                  0895-4282-38484</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-asq-pink" />
                <span className="text-asq-light-grey">mburhanudin316@gmail.com<br />
                  asqartvideofoto@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 mt-6 text-center text-asq-light-grey">
          <p>&copy; {currentYear} asqart studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;