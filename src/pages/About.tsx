
import Layout from '../components/layout/Layout';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <Layout>
      {/* Hero Banner */}
      <div className="bg-hind-lightblue py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="heading-xl mb-6">About Hind Enterprises</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Your trusted partner in printing supplies and custom printing solutions since 2008.
          </p>
        </div>
      </div>

      {/* Our Story */}
      <section className="container-section">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="heading-lg mb-6">Our Story</h2>
            <p className="text-body mb-4">
              Founded in 2008, Hind Enterprises began as a small printing supply shop in New Delhi with a vision to provide high-quality printing supplies to local businesses.
            </p>
            <p className="text-body mb-4">
              As we grew, we recognized the need for reliable custom printing services in the market. In 2012, we expanded our operations to include a full range of printing services, equipped with state-of-the-art printing technology.
            </p>
            <p className="text-body mb-4">
              Today, Hind Enterprises has established itself as a leading provider of printing supplies and services across India, serving a diverse clientele ranging from small businesses to large corporations, marketing agencies, and individual consumers.
            </p>
            <p className="text-body">
              Our commitment to quality, customer satisfaction, and continuous innovation has been the cornerstone of our growth and success over the years.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <img 
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb" 
              alt="Hind Enterprises Journey" 
              className="rounded-lg shadow-xl max-w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Our Mission & Values */}
      <section className="bg-hind-gray py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">Our Mission & Values</h2>
            <p className="text-body max-w-3xl mx-auto">
              We are guided by a strong set of values that shape everything we do.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="heading-sm mb-4">Our Mission</h3>
              <p className="text-body">
                To provide high-quality printing supplies and services that exceed customer expectations, foster creativity, and help businesses communicate their message effectively.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="heading-sm mb-4">Our Vision</h3>
              <p className="text-body">
                To be the most trusted and preferred printing partner in India, recognized for our superior quality, excellent customer service, and innovative solutions.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="heading-sm mb-4">Our Values</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Check size={16} className="text-green-600 mr-2" /> 
                  <span>Quality Excellence</span>
                </li>
                <li className="flex items-center">
                  <Check size={16} className="text-green-600 mr-2" /> 
                  <span>Customer Satisfaction</span>
                </li>
                <li className="flex items-center">
                  <Check size={16} className="text-green-600 mr-2" /> 
                  <span>Integrity & Reliability</span>
                </li>
                <li className="flex items-center">
                  <Check size={16} className="text-green-600 mr-2" /> 
                  <span>Innovation</span>
                </li>
                <li className="flex items-center">
                  <Check size={16} className="text-green-600 mr-2" /> 
                  <span>Environmental Responsibility</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Expertise */}
      <section className="container-section">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4">Our Expertise</h2>
          <p className="text-body max-w-3xl mx-auto">
            With over 15 years in the industry, we've developed extensive expertise in printing supplies and services.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="bg-hind-lightblue p-8 rounded-lg">
            <h3 className="heading-sm mb-4">Printing Supplies</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Check size={18} className="text-green-600 mr-2 mt-1" />
                <p className="text-body">
                  <span className="font-semibold">Premium Materials:</span> We source high-quality printing supplies from trusted manufacturers to ensure optimal performance.
                </p>
              </li>
              <li className="flex items-start">
                <Check size={18} className="text-green-600 mr-2 mt-1" />
                <p className="text-body">
                  <span className="font-semibold">Comprehensive Range:</span> Our extensive product catalog covers all printing needs, from flex rolls and inks to display materials.
                </p>
              </li>
              <li className="flex items-start">
                <Check size={18} className="text-green-600 mr-2 mt-1" />
                <p className="text-body">
                  <span className="font-semibold">Expert Guidance:</span> Our knowledgeable team provides expert advice on the right supplies for your specific requirements.
                </p>
              </li>
            </ul>
          </div>
          
          <div className="bg-hind-lightorange p-8 rounded-lg">
            <h3 className="heading-sm mb-4">Printing Services</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Check size={18} className="text-green-600 mr-2 mt-1" />
                <p className="text-body">
                  <span className="font-semibold">Advanced Technology:</span> We utilize state-of-the-art printing equipment to deliver superior quality prints.
                </p>
              </li>
              <li className="flex items-start">
                <Check size={18} className="text-green-600 mr-2 mt-1" />
                <p className="text-body">
                  <span className="font-semibold">Versatile Capabilities:</span> From business cards to large format banners, we handle a wide range of printing projects.
                </p>
              </li>
              <li className="flex items-start">
                <Check size={18} className="text-green-600 mr-2 mt-1" />
                <p className="text-body">
                  <span className="font-semibold">Customization:</span> We work closely with clients to tailor printing solutions that meet their unique requirements and vision.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-hind-navy text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience the Hind Enterprises Difference</h2>
          <p className="text-lg max-w-3xl mx-auto mb-8">
            Whether you need printing supplies or custom printing services, our team is ready to deliver exceptional quality and service.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/products" className="btn-secondary">
              Shop Our Products
            </Link>
            <Link to="/services" className="bg-white text-hind-navy hover:bg-gray-100 px-6 py-2 rounded-md transition-colors duration-300">
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
