
import { Check, Award, Timer, TrendingUp, ThumbsUp } from 'lucide-react';

const features = [
  {
    icon: Award,
    title: 'Quality Assurance',
    description: 'We use only premium materials and state-of-the-art printing technology to ensure the highest quality for all your printing needs.'
  },
  {
    icon: Timer,
    title: 'Timely Delivery',
    description: 'We understand the importance of deadlines and guarantee on-time delivery for all our products and services.'
  },
  {
    icon: TrendingUp,
    title: 'Competitive Pricing',
    description: 'Get the best value for your money with our competitive pricing structure without compromising on quality.'
  },
  {
    icon: ThumbsUp,
    title: 'Customer Satisfaction',
    description: 'Our dedicated team provides personalized service and support to ensure complete customer satisfaction.'
  }
];

const WhyChooseUs = () => {
  return (
    <section className="container-section">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h2 className="heading-lg mb-4">Why Choose Hind Enterprises?</h2>
          <p className="text-body mb-8">
            For over 15 years, we've been the trusted partner for businesses across India, providing excellent printing supplies and services that meet and exceed expectations.
          </p>
          
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
                <div className="flex-shrink-0 bg-hind-orange/10 p-3 rounded-full mr-4">
                  <feature.icon size={24} className="text-hind-orange" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-10 bg-hind-navy/5 p-6 rounded-lg border border-hind-navy/10">
            <p className="italic text-hind-darkgray mb-4">
              "Hind Enterprises has been our trusted printing partner for over 5 years. Their quality, reliability and exceptional service have been instrumental in our marketing success."
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
              <div>
                <p className="font-bold">Rajiv Sharma</p>
                <p className="text-sm text-gray-600">Marketing Director, Apex Solutions</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex items-center">
          <div className="relative w-full">
            <img 
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
              alt="Printing workshop" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <div className="absolute -bottom-5 -right-5 bg-white p-4 rounded-lg shadow-lg max-w-xs">
              <div className="flex items-start">
                <div className="bg-green-500 rounded-full p-1 mr-3 mt-1">
                  <Check className="text-white" size={16} />
                </div>
                <p className="text-sm">
                  <span className="font-bold">100% Quality Guaranteed</span><br />
                  <span className="text-gray-600">We stand behind every product and service we deliver.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
