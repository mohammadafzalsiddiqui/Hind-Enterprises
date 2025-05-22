
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

// Sample product data
const featuredProducts = [
  {
    id: 1,
    name: 'Premium Flex Roll',
    description: 'High-quality flex material for durable outdoor banners and signage.',
    price: '₹3,500',
    image: 'https://images.unsplash.com/photo-1729551610640-e8adee1172e3?q=80&w=2129&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'flex-rolls',
  },
  {
    id: 2,
    name: 'Eco-Solvent Ink Set',
    description: 'Vibrant, fast-drying inks compatible with most wide-format printers.',
    price: '₹6,200',
    image: 'https://media.istockphoto.com/id/671580332/photo/color-ink-tank-and-large-printer-machine-in-factory-for-printing-business.jpg?s=2048x2048&w=is&k=20&c=tR1bJwddrlxYsLCBc6UeZB8Ow0P9Othy5v0Hf4zJvao=',
    category: 'printing-inks',
  },
  {
    id: 3,
    name: 'Deluxe Standee Kit',
    description: 'Complete roll-up banner stand with carrying case for easy transport.',
    price: '₹2,800',
    image: 'https://media.istockphoto.com/id/1166161232/photo/white-blank-empty-business-roll-up-and-standee-banner-display-mock-up-template-for-your.jpg?s=2048x2048&w=is&k=20&c=PNbQORkBL9cy_6QqQ0swjiWxEWx3XQCp-sUe3vESJ7Q=',
    category: 'standees-display',
  },
  {
    id: 4,
    name: 'PVC Sunboard Sheet',
    description: 'Durable 5mm PVC board for indoor and outdoor signage applications.',
    price: '₹450',
    image: 'https://media.istockphoto.com/id/1987702016/photo/stack-of-white-foam-board-sheets-of-various-thicknesses-displayed-on-a-shelf-in-a-stationery.jpg?s=2048x2048&w=is&k=20&c=qlreTVAneE0-DG-TT28sTp8WdhiFVn8-EcjYAUkbOhM=',
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
