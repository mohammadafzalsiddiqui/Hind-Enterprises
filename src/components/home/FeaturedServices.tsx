
import { Link } from 'react-router-dom';
import { ArrowRight, Book, Flag, CreditCard } from 'lucide-react';

// Sample services data
const featuredServices = [
  {
    id: 1,
    name: 'Banner Printing',
    description: 'High-quality custom banners for indoor and outdoor use, perfect for events, promotions, and advertising.',
    icon: Flag,
    url: '/services/banner-printing',
    image: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334'
  },
  {
    id: 2,
    name: 'Business Cards',
    description: 'Professional business cards printed on premium cardstock with various finishing options.',
    icon: CreditCard,
    url: '/services/business-cards',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5'
  },
  {
    id: 3,
    name: 'Diary Printing',
    description: 'Custom printed diaries and notebooks with your branding, available in various sizes and bindings.',
    icon: Book,
    url: '/services/diary-printing',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085'
  },
];

const FeaturedServices = () => {
  return (
    <section className="bg-hind-gray py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4">Our Printing Services</h2>
          <p className="text-body max-w-3xl mx-auto">
            From business essentials to large format advertising, our expert team delivers high-quality printing services tailored to your specific needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredServices.map((service, index) => (
            <div key={service.id} className="card-service flex flex-col h-full animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                  <h3 className="font-semibold text-xl text-white">
                    {service.name}
                  </h3>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <p className="text-gray-600 mb-4 flex-grow">{service.description}</p>
                <Link 
                  to={service.url} 
                  className="text-hind-blue hover:text-hind-orange transition-colors inline-flex items-center gap-1 mt-auto"
                >
                  Learn More <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/services" className="btn-primary inline-flex items-center gap-2">
            Explore All Services <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;
