
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-hind-navy text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
          {/* Company Information */}
          <div>
            <h3 className="text-xl font-bold mb-4">Hind Enterprises</h3>
            <p className="mb-4 text-gray-300">Your One-Stop Shop for Printing Supplies & Custom Printing</p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <MapPin className="mt-1 mr-2 flex-shrink-0" size={18} />
                <span>123 Print Street, Industrial Area<br />New Delhi, India 110001</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 flex-shrink-0" size={18} />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 flex-shrink-0" size={18} />
                <span>info@hindenterprises.com</span>
              </li>
            </ul>
          </div>
          
          {/* Products */}
          <div>
            <h3 className="text-xl font-bold mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products/flex-rolls" className="hover:text-hind-orange transition-colors">
                  Flex Rolls
                </Link>
              </li>
              <li>
                <Link to="/products/printing-inks" className="hover:text-hind-orange transition-colors">
                  Printing Inks
                </Link>
              </li>
              <li>
                <Link to="/products/sunboard-sheets" className="hover:text-hind-orange transition-colors">
                  Sunboard & Sheets
                </Link>
              </li>
              <li>
                <Link to="/products/standees-display" className="hover:text-hind-orange transition-colors">
                  Standees & Display
                </Link>
              </li>
              <li>
                <Link to="/products/other-supplies" className="hover:text-hind-orange transition-colors">
                  Other Supplies
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-hind-orange transition-colors">
                  View All Products
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/banner-printing" className="hover:text-hind-orange transition-colors">
                  Banner Printing
                </Link>
              </li>
              <li>
                <Link to="/services/business-cards" className="hover:text-hind-orange transition-colors">
                  Business Cards
                </Link>
              </li>
              <li>
                <Link to="/services/hoarding-printing" className="hover:text-hind-orange transition-colors">
                  Hoarding Printing
                </Link>
              </li>
              <li>
                <Link to="/services/pamphlet-printing" className="hover:text-hind-orange transition-colors">
                  Pamphlet Printing
                </Link>
              </li>
              <li>
                <Link to="/services/diary-printing" className="hover:text-hind-orange transition-colors">
                  Diary Printing
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-hind-orange transition-colors">
                  View All Services
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="hover:text-hind-orange transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-hind-orange transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/quote" className="hover:text-hind-orange transition-colors">
                  Request a Quote
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-hind-orange transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="hover:text-hind-orange transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-and-conditions" className="hover:text-hind-orange transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-700 py-6 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-gray-300">
              © {currentYear} Hind Enterprises. All rights reserved.
            </p>
            <div className="mt-4 sm:mt-0 flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-hind-orange" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-hind-orange" aria-label="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-hind-orange" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-hind-orange" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
