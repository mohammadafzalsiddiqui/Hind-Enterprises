
import Layout from '../components/layout/Layout';
import { Link } from 'react-router-dom';
import { ArrowRight, CalendarCheck, Clock, Award, ThumbsUp } from 'lucide-react';

// Sample services data
const services = [
  {
    id: 'banner-printing',
    name: 'Banner Printing',
    description: 'High-quality custom banners for indoor and outdoor use, perfect for events, promotions, and advertising.',
    image: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334',
    features: [
      'Durable materials for long-lasting use',
      'Vibrant colors and sharp images',
      'Multiple size options available',
      'Quick turnaround time'
    ]
  },
  {
    id: 'business-cards',
    name: 'Business Cards',
    description: 'Professional business cards printed on premium cardstock with various finishing options.',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5',
    features: [
      'Premium cardstock options',
      'Spot UV, foil stamping, and embossing available',
      'Standard and custom sizes',
      'Fast delivery options'
    ]
  },
  {
    id: 'hoarding-printing',
    name: 'Hoarding Printing',
    description: 'Large-format outdoor advertising solutions with durable materials for maximum visibility.',
    image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7',
    features: [
      'Weather-resistant materials',
      'High-resolution printing',
      'Various size options',
      'Installation services available'
    ]
  },
  {
    id: 'pamphlet-printing',
    name: 'Pamphlet Printing',
    description: 'Informative and attractive pamphlets to effectively communicate your message.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
    features: [
      'Multiple paper types and finishes',
      'Single or double-sided printing',
      'Various folding options',
      'Bulk order discounts'
    ]
  },
  {
    id: 'diary-printing',
    name: 'Diary Printing',
    description: 'Custom printed diaries and notebooks with your branding, available in various sizes and bindings.',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    features: [
      'Hardcover and softcover options',
      'Multiple binding styles available',
      'Customizable internal pages',
      'Embossing and debossing options'
    ]
  },
  {
    id: 'letterhead-printing',
    name: 'Letterhead Printing',
    description: 'Professional letterheads that enhance your brand identity and communication.',
    image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22',
    features: [
      'Premium quality paper options',
      'Consistent branding elements',
      'Full-color or spot color printing',
      'Matching envelopes available'
    ]
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero Banner */}
      <div className="bg-hind-lightblue py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="heading-xl mb-6">Printing Services</h1>
          <p className="text-xl max-w-3xl mx-auto">
            From business essentials to large format advertising, our expert team delivers high-quality printing solutions tailored to your specific needs.
          </p>
        </div>
      </div>

      {/* Benefits Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">Why Choose Our Printing Services?</h2>
            <p className="text-body max-w-3xl mx-auto">
              When you choose Hind Enterprises for your printing needs, you're choosing quality, reliability, and expertise.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-hind-lightblue p-6 rounded-lg text-center">
              <div className="bg-hind-navy text-white rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4">
                <Award size={24} />
              </div>
              <h3 className="font-semibold text-lg mb-2">Quality Assurance</h3>
              <p className="text-gray-600">
                We use premium materials and state-of-the-art printing technology for exceptional results.
              </p>
            </div>
            
            <div className="bg-hind-lightorange p-6 rounded-lg text-center">
              <div className="bg-hind-orange text-white rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4">
                <Clock size={24} />
              </div>
              <h3 className="font-semibold text-lg mb-2">Quick Turnaround</h3>
              <p className="text-gray-600">
                We understand the importance of deadlines and ensure timely delivery of your orders.
              </p>
            </div>
            
            <div className="bg-hind-lightblue p-6 rounded-lg text-center">
              <div className="bg-hind-navy text-white rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4">
                <CalendarCheck size={24} />
              </div>
              <h3 className="font-semibold text-lg mb-2">Customization</h3>
              <p className="text-gray-600">
                We offer tailored solutions to meet your specific requirements and brand guidelines.
              </p>
            </div>
            
            <div className="bg-hind-lightorange p-6 rounded-lg text-center">
              <div className="bg-hind-orange text-white rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4">
                <ThumbsUp size={24} />
              </div>
              <h3 className="font-semibold text-lg mb-2">Customer Support</h3>
              <p className="text-gray-600">
                Our dedicated team is always ready to assist you with any queries or concerns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="container-section">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4">Our Printing Services</h2>
          <p className="text-body max-w-3xl mx-auto">
            Explore our comprehensive range of printing services designed to meet your diverse needs.
          </p>
        </div>
        
        <div className="space-y-12">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 animate-fade-in`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="lg:w-1/2">
                <img 
                  src={service.image} 
                  alt={service.name} 
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                />
              </div>
              
              <div className="lg:w-1/2">
                <h3 className="heading-md mb-3">{service.name}</h3>
                <p className="text-body mb-5">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-hind-orange mr-2">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex gap-4">
                  <Link 
                    to={`/services/${service.id}`} 
                    className="btn-primary inline-flex items-center gap-1"
                  >
                    Learn More <ArrowRight size={16} />
                  </Link>
                  <Link 
                    to="/quote" 
                    className="border border-hind-navy text-hind-navy hover:bg-hind-navy hover:text-white px-6 py-2 rounded-md transition-colors duration-300 inline-flex items-center gap-1"
                  >
                    Get a Quote <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-hind-navy to-hind-blue text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Next Printing Project?</h2>
          <p className="text-lg md:text-xl mb-8 text-gray-200 max-w-3xl mx-auto">
            Contact us today to discuss your requirements and get a customized quote for your printing needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/quote" className="btn-secondary">
              Request a Quote
            </Link>
            <Link to="/contact" className="bg-white text-hind-navy hover:bg-gray-100 px-6 py-2 rounded-md transition-colors duration-300">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="container-section">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4">What Our Clients Say</h2>
          <p className="text-body max-w-3xl mx-auto">
            Don't just take our word for it. See what our satisfied clients have to say about our printing services.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="text-hind-orange">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-lg">★</span>
                ))}
              </div>
            </div>
            <p className="italic mb-4">
              "The quality of the banner prints exceeded our expectations. The colors were vibrant, and the material was durable. Will definitely use their services again!"
            </p>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
              <div>
                <p className="font-semibold">Rajiv Sharma</p>
                <p className="text-sm text-gray-600">Marketing Director, Apex Solutions</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="text-hind-orange">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-lg">★</span>
                ))}
              </div>
            </div>
            <p className="italic mb-4">
              "We've been using Hind Enterprises for our business cards and letterheads for years. Their attention to detail and consistent quality has helped us maintain our professional image."
            </p>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
              <div>
                <p className="font-semibold">Priya Patel</p>
                <p className="text-sm text-gray-600">CEO, Innovate Tech</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="text-hind-orange">
                {[...Array(4)].map((_, i) => (
                  <span key={i} className="text-lg">★</span>
                ))}
                <span className="text-lg text-gray-300">★</span>
              </div>
            </div>
            <p className="italic mb-4">
              "The team was extremely helpful in guiding us through the process of designing and printing our promotional materials. The end result was perfect for our event."
            </p>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
              <div>
                <p className="font-semibold">Amit Singh</p>
                <p className="text-sm text-gray-600">Event Manager, Celebration Co.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
