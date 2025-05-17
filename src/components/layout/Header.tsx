
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Menu, X, User, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-hind-navy">Hind Enterprises</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-hind-darkgray hover:text-hind-navy font-medium">Home</Link>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="text-hind-darkgray hover:text-hind-navy font-medium flex items-center">
                  Products <span className="ml-1">▾</span>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-white">
                <DropdownMenuItem asChild>
                  <Link to="/products/flex-rolls" className="w-full">Flex Rolls</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/products/printing-inks" className="w-full">Printing Inks</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/products/sunboard-sheets" className="w-full">Sunboard & Sheets</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/products/standees-display" className="w-full">Standees & Display</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/products/other-supplies" className="w-full">Other Supplies</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/products" className="w-full text-hind-blue">View All Products</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="text-hind-darkgray hover:text-hind-navy font-medium flex items-center">
                  Services <span className="ml-1">▾</span>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-white">
                <DropdownMenuItem asChild>
                  <Link to="/services/banner-printing" className="w-full">Banner Printing</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/services/business-cards" className="w-full">Business Cards</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/services/hoarding-printing" className="w-full">Hoarding Printing</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/services/pamphlet-printing" className="w-full">Pamphlet Printing</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/services/diary-printing" className="w-full">Diary Printing</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/services" className="w-full text-hind-blue">View All Services</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link to="/about" className="text-hind-darkgray hover:text-hind-navy font-medium">About Us</Link>
            <Link to="/contact" className="text-hind-darkgray hover:text-hind-navy font-medium">Contact</Link>
          </nav>

          {/* Right side icons */}
          <div className="hidden md:flex items-center space-x-5">
            <button className="text-hind-darkgray hover:text-hind-navy">
              <Search size={20} />
            </button>
            <Link to="/account" className="text-hind-darkgray hover:text-hind-navy">
              <User size={20} />
            </Link>
            <Link to="/cart" className="relative text-hind-darkgray hover:text-hind-navy">
              <ShoppingCart size={20} />
              <span className="absolute -top-1 -right-1 bg-hind-orange text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                0
              </span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="p-2 text-hind-darkgray"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-4 pt-2 pb-4 space-y-1">
            <Link to="/" className="block py-2 text-hind-darkgray hover:text-hind-navy font-medium" onClick={toggleMenu}>
              Home
            </Link>
            <div>
              <button
                className="flex justify-between w-full py-2 text-hind-darkgray hover:text-hind-navy font-medium"
                onClick={() => {
                  document.getElementById("mobile-products-menu")?.classList.toggle("hidden");
                }}
              >
                Products
                <span>▾</span>
              </button>
              <div id="mobile-products-menu" className="hidden pl-4 space-y-2">
                <Link to="/products/flex-rolls" className="block py-1 text-hind-darkgray" onClick={toggleMenu}>
                  Flex Rolls
                </Link>
                <Link to="/products/printing-inks" className="block py-1 text-hind-darkgray" onClick={toggleMenu}>
                  Printing Inks
                </Link>
                <Link to="/products/sunboard-sheets" className="block py-1 text-hind-darkgray" onClick={toggleMenu}>
                  Sunboard & Sheets
                </Link>
                <Link to="/products/standees-display" className="block py-1 text-hind-darkgray" onClick={toggleMenu}>
                  Standees & Display
                </Link>
                <Link to="/products/other-supplies" className="block py-1 text-hind-darkgray" onClick={toggleMenu}>
                  Other Supplies
                </Link>
                <Link to="/products" className="block py-1 text-hind-blue" onClick={toggleMenu}>
                  View All Products
                </Link>
              </div>
            </div>
            <div>
              <button
                className="flex justify-between w-full py-2 text-hind-darkgray hover:text-hind-navy font-medium"
                onClick={() => {
                  document.getElementById("mobile-services-menu")?.classList.toggle("hidden");
                }}
              >
                Services
                <span>▾</span>
              </button>
              <div id="mobile-services-menu" className="hidden pl-4 space-y-2">
                <Link to="/services/banner-printing" className="block py-1 text-hind-darkgray" onClick={toggleMenu}>
                  Banner Printing
                </Link>
                <Link to="/services/business-cards" className="block py-1 text-hind-darkgray" onClick={toggleMenu}>
                  Business Cards
                </Link>
                <Link to="/services/hoarding-printing" className="block py-1 text-hind-darkgray" onClick={toggleMenu}>
                  Hoarding Printing
                </Link>
                <Link to="/services/pamphlet-printing" className="block py-1 text-hind-darkgray" onClick={toggleMenu}>
                  Pamphlet Printing
                </Link>
                <Link to="/services/diary-printing" className="block py-1 text-hind-darkgray" onClick={toggleMenu}>
                  Diary Printing
                </Link>
                <Link to="/services" className="block py-1 text-hind-blue" onClick={toggleMenu}>
                  View All Services
                </Link>
              </div>
            </div>
            <Link to="/about" className="block py-2 text-hind-darkgray hover:text-hind-navy font-medium" onClick={toggleMenu}>
              About Us
            </Link>
            <Link to="/contact" className="block py-2 text-hind-darkgray hover:text-hind-navy font-medium" onClick={toggleMenu}>
              Contact
            </Link>
            
            <div className="flex items-center space-x-6 pt-2 border-t border-gray-200 mt-2">
              <Link to="/account" className="text-hind-darkgray py-2" onClick={toggleMenu}>
                <User size={20} />
              </Link>
              <Link to="/cart" className="relative text-hind-darkgray py-2" onClick={toggleMenu}>
                <ShoppingCart size={20} />
                <span className="absolute -top-1 -right-1 bg-hind-orange text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  0
                </span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
