
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-hind-navy to-hind-blue text-white">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
      <div className="container-section relative z-10 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 animate-fade-in">
              Hind Enterprises
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl font-light mb-6 animate-fade-in animate-delay-100">
              Your One-Stop Shop for Printing Supplies & Custom Printing
            </p>
            <p className="text-gray-200 text-lg mb-8 max-w-lg animate-fade-in animate-delay-200">
              We offer a wide range of high-quality printing materials and professional custom printing services for businesses and individuals.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in animate-delay-300">
              <Link to="/products" className="btn-secondary flex items-center gap-2">
                Shop Supplies <ArrowRight size={16} />
              </Link>
              <Link to="/quote" className="border-2 border-white hover:bg-white hover:text-hind-navy text-white px-6 py-2 rounded-md transition-colors duration-300 flex items-center gap-2">
                Get a Printing Quote <ArrowRight size={16} />
              </Link>
            </div>
          </div>
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-full max-w-md">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20 shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81" 
                  alt="Hind Enterprises Printing Services" 
                  className="rounded-md w-full h-auto shadow-lg"
                />
                <div className="mt-4 text-center">
                  <p className="text-xl font-semibold">Professional Printing Solutions</p>
                  <p className="text-sm opacity-75">Trusted by businesses across India</p>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-hind-orange rounded-full flex items-center justify-center text-center font-bold text-sm rotate-12">
                <span>Quality<br />Guaranteed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
