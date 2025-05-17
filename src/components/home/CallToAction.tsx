
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="bg-gradient-to-r from-hind-navy to-hind-blue text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Next Printing Project?</h2>
          <p className="text-lg md:text-xl mb-8 text-gray-200">
            Whether you need printing supplies or custom printing services, we're here to help you achieve outstanding results.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/products" className="btn-secondary flex items-center gap-2">
              Shop Supplies <ArrowRight size={16} />
            </Link>
            <Link to="/quote" className="border-2 border-white hover:bg-white hover:text-hind-navy text-white px-6 py-2 rounded-md transition-colors duration-300 flex items-center gap-2">
              Get a Quote <ArrowRight size={16} />
            </Link>
            <Link to="/contact" className="bg-white text-hind-navy hover:bg-gray-100 px-6 py-2 rounded-md transition-colors duration-300 flex items-center gap-2">
              Contact Us <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
