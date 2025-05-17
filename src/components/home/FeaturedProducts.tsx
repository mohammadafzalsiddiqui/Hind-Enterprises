
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

// Sample product data
const featuredProducts = [
  {
    id: 1,
    name: 'Premium Flex Roll',
    description: 'High-quality flex material for durable outdoor banners and signage.',
    price: '₹3,500',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475',
    category: 'flex-rolls',
  },
  {
    id: 2,
    name: 'Eco-Solvent Ink Set',
    description: 'Vibrant, fast-drying inks compatible with most wide-format printers.',
    price: '₹6,200',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
    category: 'printing-inks',
  },
  {
    id: 3,
    name: 'Deluxe Standee Kit',
    description: 'Complete roll-up banner stand with carrying case for easy transport.',
    price: '₹2,800',
    image: 'https://images.unsplash.com/photo-1487887235947-a955ef187fcc',
    category: 'standees-display',
  },
  {
    id: 4,
    name: 'PVC Sunboard Sheet',
    description: 'Durable 5mm PVC board for indoor and outdoor signage applications.',
    price: '₹450',
    image: 'https://images.unsplash.com/photo-1473091534298-04dcbce3278c',
    category: 'sunboard-sheets',
  },
];

const FeaturedProducts = () => {
  return (
    <section className="container-section">
      <div className="text-center mb-12">
        <h2 className="heading-lg mb-4">Featured Products</h2>
        <p className="text-body max-w-3xl mx-auto">
          Discover our top-quality printing supplies, curated to meet all your printing needs with exceptional quality and competitive pricing.
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {featuredProducts.map((product, index) => (
          <div key={product.id} className="card-product animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
            <div className="overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
              <p className="text-sm text-gray-600 mb-3 line-clamp-2">{product.description}</p>
              <div className="flex justify-between items-center">
                <span className="font-bold text-hind-navy">{product.price}</span>
                <Link 
                  to={`/products/${product.category}/${product.id}`}
                  className="text-sm text-hind-blue hover:text-hind-orange flex items-center gap-1 transition-colors"
                >
                  View Details <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center">
        <Link to="/products" className="btn-primary inline-flex items-center gap-2">
          Browse All Products <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
};

export default FeaturedProducts;
