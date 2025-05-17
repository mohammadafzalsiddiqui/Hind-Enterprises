
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import { Search, Filter, ChevronDown, Grid, List } from 'lucide-react';
import { cn } from '@/lib/utils';

// Sample product categories
const categories = [
  { id: 'flex-rolls', name: 'Flex Rolls' },
  { id: 'printing-inks', name: 'Printing Inks' },
  { id: 'sunboard-sheets', name: 'Sunboard & Sheets' },
  { id: 'standees-display', name: 'Standees & Display' },
  { id: 'other-supplies', name: 'Other Supplies' },
];

// Sample products data
const products = [
  {
    id: 1,
    name: 'Premium Flex Roll',
    description: 'High-quality flex material for durable outdoor banners and signage.',
    price: '₹3,500',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475',
    category: 'flex-rolls',
    inStock: true,
  },
  {
    id: 2,
    name: 'Eco-Solvent Ink Set',
    description: 'Vibrant, fast-drying inks compatible with most wide-format printers.',
    price: '₹6,200',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
    category: 'printing-inks',
    inStock: true,
  },
  {
    id: 3,
    name: 'Deluxe Standee Kit',
    description: 'Complete roll-up banner stand with carrying case for easy transport.',
    price: '₹2,800',
    image: 'https://images.unsplash.com/photo-1487887235947-a955ef187fcc',
    category: 'standees-display',
    inStock: true,
  },
  {
    id: 4,
    name: 'PVC Sunboard Sheet',
    description: 'Durable 5mm PVC board for indoor and outdoor signage applications.',
    price: '₹450',
    image: 'https://images.unsplash.com/photo-1473091534298-04dcbce3278c',
    category: 'sunboard-sheets',
    inStock: false,
  },
  {
    id: 5,
    name: 'Star Flex Roll',
    description: 'Premium quality flex material with excellent print resolution.',
    price: '₹4,200',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5',
    category: 'flex-rolls',
    inStock: true,
  },
  {
    id: 6,
    name: 'Solvent Ink - Black',
    description: 'High-quality black solvent ink for outdoor applications.',
    price: '₹1,800',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
    category: 'printing-inks',
    inStock: true,
  },
  {
    id: 7,
    name: 'X-Banner Stand',
    description: 'Portable X-banner stand for trade shows and promotions.',
    price: '₹1,500',
    image: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334',
    category: 'standees-display',
    inStock: true,
  },
  {
    id: 8,
    name: 'Foam Board',
    description: 'Lightweight foam board for indoor displays and presentations.',
    price: '₹350',
    image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7',
    category: 'sunboard-sheets',
    inStock: true,
  },
];

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [view, setView] = useState<'grid' | 'list'>('grid');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  // Filter products based on search term, category, and price range
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = !selectedCategory || product.category === selectedCategory;
    
    const price = parseInt(product.price.replace(/[^0-9]/g, ''));
    const matchesPrice = price >= priceRange[0] && price <= priceRange[1];
    
    return matchesSearch && matchesCategory && matchesPrice;
  });
  
  return (
    <Layout>
      {/* Hero Banner */}
      <div className="bg-hind-lightblue py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="heading-xl mb-6">Printing Supplies</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Browse our wide range of high-quality printing supplies and materials.
          </p>
        </div>
      </div>

      <section className="container-section">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters - Desktop */}
          <div className="hidden md:block w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <h2 className="font-bold text-lg mb-4">Filters</h2>
              
              {/* Categories */}
              <div className="mb-6">
                <h3 className="font-semibold mb-3">Categories</h3>
                <ul className="space-y-2">
                  <li>
                    <button 
                      onClick={() => setSelectedCategory(null)}
                      className={cn(
                        "w-full text-left py-1 px-2 rounded hover:bg-gray-100 transition-colors",
                        !selectedCategory && "bg-hind-navy/10 font-medium text-hind-navy"
                      )}
                    >
                      All Products
                    </button>
                  </li>
                  {categories.map(category => (
                    <li key={category.id}>
                      <button
                        onClick={() => setSelectedCategory(category.id)}
                        className={cn(
                          "w-full text-left py-1 px-2 rounded hover:bg-gray-100 transition-colors",
                          selectedCategory === category.id && "bg-hind-navy/10 font-medium text-hind-navy"
                        )}
                      >
                        {category.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Price Range */}
              <div className="mb-6">
                <h3 className="font-semibold mb-3">Price Range</h3>
                <div className="px-2">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm">₹{priceRange[0]}</span>
                    <span className="text-sm">₹{priceRange[1]}</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="10000"
                    step="100"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full"
                  />
                </div>
              </div>
              
              {/* Availability */}
              <div>
                <h3 className="font-semibold mb-3">Availability</h3>
                <div className="space-y-2 px-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded text-hind-navy focus:ring-hind-navy mr-2" />
                    <span>In Stock Only</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
          
          {/* Product Listing */}
          <div className="flex-grow">
            {/* Search and Filter Controls */}
            <div className="mb-8">
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <div className="relative flex-grow">
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full border border-gray-300 rounded-md pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-hind-blue"
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                </div>
                
                <div className="flex gap-2">
                  <button
                    onClick={() => setIsFilterOpen(!isFilterOpen)}
                    className="md:hidden flex items-center gap-2 border border-gray-300 rounded-md px-4 py-2 bg-white"
                  >
                    <Filter size={18} />
                    <span>Filter</span>
                  </button>
                  
                  <div className="flex border border-gray-300 rounded-md overflow-hidden">
                    <button
                      onClick={() => setView('grid')}
                      className={cn(
                        "p-2",
                        view === 'grid' ? "bg-hind-navy text-white" : "bg-white"
                      )}
                      aria-label="Grid view"
                    >
                      <Grid size={18} />
                    </button>
                    <button
                      onClick={() => setView('list')}
                      className={cn(
                        "p-2",
                        view === 'list' ? "bg-hind-navy text-white" : "bg-white"
                      )}
                      aria-label="List view"
                    >
                      <List size={18} />
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Mobile Filters */}
              {isFilterOpen && (
                <div className="md:hidden bg-white rounded-lg shadow-md p-6 mb-6">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="font-bold text-lg">Filters</h2>
                    <button 
                      onClick={() => setIsFilterOpen(false)}
                      className="text-gray-500"
                    >
                      ✕
                    </button>
                  </div>
                  
                  {/* Categories */}
                  <div className="mb-6">
                    <h3 className="font-semibold mb-3">Categories</h3>
                    <ul className="space-y-2">
                      <li>
                        <button 
                          onClick={() => setSelectedCategory(null)}
                          className={cn(
                            "w-full text-left py-1 px-2 rounded hover:bg-gray-100 transition-colors",
                            !selectedCategory && "bg-hind-navy/10 font-medium text-hind-navy"
                          )}
                        >
                          All Products
                        </button>
                      </li>
                      {categories.map(category => (
                        <li key={category.id}>
                          <button
                            onClick={() => setSelectedCategory(category.id)}
                            className={cn(
                              "w-full text-left py-1 px-2 rounded hover:bg-gray-100 transition-colors",
                              selectedCategory === category.id && "bg-hind-navy/10 font-medium text-hind-navy"
                            )}
                          >
                            {category.name}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Price Range */}
                  <div className="mb-6">
                    <h3 className="font-semibold mb-3">Price Range</h3>
                    <div className="px-2">
                      <div className="flex justify-between mb-2">
                        <span className="text-sm">₹{priceRange[0]}</span>
                        <span className="text-sm">₹{priceRange[1]}</span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="10000"
                        step="100"
                        value={priceRange[1]}
                        onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                        className="w-full"
                      />
                    </div>
                  </div>
                  
                  {/* Availability */}
                  <div>
                    <h3 className="font-semibold mb-3">Availability</h3>
                    <div className="space-y-2 px-2">
                      <label className="flex items-center">
                        <input type="checkbox" className="rounded text-hind-navy focus:ring-hind-navy mr-2" />
                        <span>In Stock Only</span>
                      </label>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Results Info */}
              <div className="flex justify-between items-center">
                <p className="text-gray-600">
                  Showing {filteredProducts.length} products
                  {selectedCategory && ` in ${categories.find(c => c.id === selectedCategory)?.name}`}
                </p>
                <div className="flex items-center">
                  <span className="mr-2 text-sm">Sort by:</span>
                  <select className="border border-gray-300 rounded-md py-1 px-2 text-sm focus:outline-none focus:ring-2 focus:ring-hind-blue">
                    <option>Featured</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Newest</option>
                  </select>
                </div>
              </div>
            </div>
            
            {/* Products Display */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-lg text-gray-600">No products found matching your criteria.</p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory(null);
                    setPriceRange([0, 10000]);
                  }}
                  className="mt-4 text-hind-blue hover:text-hind-navy"
                >
                  Clear filters
                </button>
              </div>
            ) : view === 'grid' ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product, index) => (
                  <div key={product.id} className="card-product animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                    <Link to={`/products/${product.category}/${product.id}`}>
                      <div className="relative overflow-hidden">
                        <img 
                          src={product.image} 
                          alt={product.name} 
                          className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
                        />
                        {!product.inStock && (
                          <div className="absolute top-0 right-0 bg-red-500 text-white text-xs py-1 px-2">
                            Out of Stock
                          </div>
                        )}
                      </div>
                    </Link>
                    <div className="p-4">
                      <Link to={`/products/${product.category}/${product.id}`}>
                        <h3 className="font-semibold text-lg mb-2 hover:text-hind-blue transition-colors">{product.name}</h3>
                      </Link>
                      <p className="text-sm text-gray-600 mb-3 line-clamp-2">{product.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-hind-navy">{product.price}</span>
                        <button 
                          className={cn(
                            "text-sm px-3 py-1 rounded transition-colors",
                            product.inStock 
                              ? "bg-hind-orange text-white hover:bg-orange-600" 
                              : "bg-gray-300 text-gray-600 cursor-not-allowed"
                          )}
                          disabled={!product.inStock}
                        >
                          {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-6">
                {filteredProducts.map((product, index) => (
                  <div key={product.id} className="flex flex-col sm:flex-row bg-white rounded-lg shadow-md overflow-hidden animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                    <Link to={`/products/${product.category}/${product.id}`} className="sm:w-1/3">
                      <div className="relative h-48 sm:h-full">
                        <img 
                          src={product.image} 
                          alt={product.name} 
                          className="w-full h-full object-cover"
                        />
                        {!product.inStock && (
                          <div className="absolute top-0 right-0 bg-red-500 text-white text-xs py-1 px-2">
                            Out of Stock
                          </div>
                        )}
                      </div>
                    </Link>
                    <div className="p-6 sm:w-2/3">
                      <Link to={`/products/${product.category}/${product.id}`}>
                        <h3 className="font-semibold text-xl mb-2 hover:text-hind-blue transition-colors">{product.name}</h3>
                      </Link>
                      <p className="text-gray-600 mb-4">{product.description}</p>
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-auto">
                        <span className="font-bold text-xl text-hind-navy mb-4 sm:mb-0">{product.price}</span>
                        <button 
                          className={cn(
                            "px-4 py-2 rounded transition-colors",
                            product.inStock 
                              ? "bg-hind-orange text-white hover:bg-orange-600" 
                              : "bg-gray-300 text-gray-600 cursor-not-allowed"
                          )}
                          disabled={!product.inStock}
                        >
                          {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            
            {/* Pagination */}
            <div className="mt-12 flex justify-center">
              <nav className="flex items-center gap-1">
                <button className="px-3 py-1 border border-gray-300 rounded-l-md hover:bg-gray-100">
                  Previous
                </button>
                <button className="px-3 py-1 border border-gray-300 bg-hind-navy text-white">1</button>
                <button className="px-3 py-1 border border-gray-300 hover:bg-gray-100">2</button>
                <button className="px-3 py-1 border border-gray-300 hover:bg-gray-100">3</button>
                <span className="px-3 py-1 border-t border-b border-gray-300">...</span>
                <button className="px-3 py-1 border border-gray-300 hover:bg-gray-100">8</button>
                <button className="px-3 py-1 border border-gray-300 rounded-r-md hover:bg-gray-100">
                  Next
                </button>
              </nav>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
