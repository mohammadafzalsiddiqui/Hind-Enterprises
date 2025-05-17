
import { useState } from 'react';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';

// Sample testimonial data
const testimonials = [
  {
    id: 1,
    name: 'Rajiv Sharma',
    title: 'Marketing Director, Apex Solutions',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=120&h=120',
    text: 'Hind Enterprises has been our trusted printing partner for over 5 years. Their quality, reliability and exceptional service have been instrumental in our marketing success.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Priya Patel',
    title: 'Event Manager, Celebration Co.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?fit=crop&w=120&h=120',
    text: 'We regularly order banners and promotional materials for our events. The print quality is excellent, and their ability to meet tight deadlines is truly impressive.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Arun Kapoor',
    title: 'Owner, Quick Print Solutions',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fit=crop&w=120&h=120',
    text: 'As a smaller print shop, we rely on Hind Enterprises for our supply needs. Their product range is comprehensive, and their customer service is always helpful.',
    rating: 4,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="container-section">
      <div className="text-center mb-12">
        <h2 className="heading-lg mb-4">What Our Customers Say</h2>
        <p className="text-body max-w-3xl mx-auto">
          Don't just take our word for it. Here's what our satisfied customers have to say about their experience working with Hind Enterprises.
        </p>
      </div>
      
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-md p-8 mb-8 relative">
          <div className="absolute top-6 right-8">
            <div className="flex">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} size={20} fill="#ed8936" color="#ed8936" />
              ))}
              {[...Array(5 - testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} size={20} color="#e2e8f0" />
              ))}
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <img 
                src={testimonials[currentIndex].image} 
                alt={testimonials[currentIndex].name} 
                className="w-24 h-24 rounded-full object-cover"
              />
            </div>
            <div>
              <p className="text-lg mb-4 italic">"{testimonials[currentIndex].text}"</p>
              <div>
                <p className="font-bold text-lg">{testimonials[currentIndex].name}</p>
                <p className="text-gray-600">{testimonials[currentIndex].title}</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center gap-4">
          <button 
            onClick={prevTestimonial}
            className="p-2 rounded-full border border-gray-300 hover:bg-hind-navy hover:text-white hover:border-hind-navy transition-colors"
            aria-label="Previous testimonial"
          >
            <ArrowLeft size={16} />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  index === currentIndex ? 'bg-hind-orange' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              ></button>
            ))}
          </div>
          <button 
            onClick={nextTestimonial}
            className="p-2 rounded-full border border-gray-300 hover:bg-hind-navy hover:text-white hover:border-hind-navy transition-colors"
            aria-label="Next testimonial"
          >
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
