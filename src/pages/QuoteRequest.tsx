
import { useState } from 'react';
import Layout from '../components/layout/Layout';
import { Upload, Check } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const QuoteRequest = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    quantity: '',
    size: '',
    material: '',
    additionalDetails: '',
  });
  
  const [file, setFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulating form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Quote Request Submitted",
        description: "We've received your request and will get back to you with a quote soon!",
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        quantity: '',
        size: '',
        material: '',
        additionalDetails: '',
      });
      setFile(null);
    }, 1500);
  };
  
  return (
    <Layout>
      {/* Hero Banner */}
      <div className="bg-hind-lightblue py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="heading-xl mb-6">Request a Quote</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Fill out the form below to get a customized quote for your printing needs.
          </p>
        </div>
      </div>

      <section className="container-section">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form Information */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="heading-md mb-6">How It Works</h2>
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="bg-hind-navy text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Fill the Form</h3>
                    <p className="text-gray-600">Provide all the necessary details about your printing project.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="bg-hind-navy text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Receive Quote</h3>
                    <p className="text-gray-600">Our team will review your request and send you a custom quote.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="bg-hind-navy text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Approve & Production</h3>
                    <p className="text-gray-600">Once you approve the quote, we'll start working on your order.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="bg-hind-navy text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Delivery</h3>
                    <p className="text-gray-600">Your completed order will be delivered or ready for pickup.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 bg-hind-navy/5 p-6 rounded-lg">
                <h3 className="font-semibold mb-3">Need Assistance?</h3>
                <p className="text-gray-600 mb-4">
                  Have questions about our services or need help with your quote? Contact our customer service team.
                </p>
                <p className="flex items-center">
                  <Phone className="mr-2" size={18} />
                  <span className="font-medium">+91 98765 43210</span>
                </p>
                <p className="flex items-center mt-2">
                  <Mail className="mr-2" size={18} />
                  <span className="font-medium">quotes@hindenterprises.com</span>
                </p>
              </div>
            </div>
          </div>
          
          {/* Quote Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="heading-md mb-6">Printing Quote Request</h2>
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  {/* Contact Information */}
                  <div className="md:col-span-2">
                    <h3 className="text-lg font-semibold mb-3">Contact Information</h3>
                  </div>
                  
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-hind-blue"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-hind-blue"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-hind-blue"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                      Company Name (Optional)
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-hind-blue"
                    />
                  </div>
                  
                  {/* Project Details */}
                  <div className="md:col-span-2 pt-4 border-t">
                    <h3 className="text-lg font-semibold mb-3">Project Details</h3>
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                      Service Required *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-hind-blue"
                    >
                      <option value="">Select a service</option>
                      <option value="Banner Printing">Banner Printing</option>
                      <option value="Business Cards">Business Cards</option>
                      <option value="Hoarding Printing">Hoarding Printing</option>
                      <option value="Pamphlet Printing">Pamphlet Printing</option>
                      <option value="Diary Printing">Diary Printing</option>
                      <option value="Other">Other (Please specify in details)</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">
                      Quantity *
                    </label>
                    <input
                      type="text"
                      id="quantity"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleChange}
                      required
                      placeholder="e.g., 100 pieces, 5 banners, etc."
                      className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-hind-blue"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="size" className="block text-sm font-medium text-gray-700 mb-1">
                      Size/Dimensions *
                    </label>
                    <input
                      type="text"
                      id="size"
                      name="size"
                      value={formData.size}
                      onChange={handleChange}
                      required
                      placeholder="e.g., 3ft x 6ft, A4, etc."
                      className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-hind-blue"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="material" className="block text-sm font-medium text-gray-700 mb-1">
                      Material Preference (Optional)
                    </label>
                    <input
                      type="text"
                      id="material"
                      name="material"
                      value={formData.material}
                      onChange={handleChange}
                      placeholder="e.g., Vinyl, Glossy paper, etc."
                      className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-hind-blue"
                    />
                  </div>
                  
                  <div className="md:col-span-2">
                    <label htmlFor="file" className="block text-sm font-medium text-gray-700 mb-1">
                      Upload Artwork (Optional)
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded-md p-4 text-center hover:bg-gray-50 transition-colors cursor-pointer" onClick={() => document.getElementById('file')?.click()}>
                      <input
                        type="file"
                        id="file"
                        name="file"
                        className="hidden"
                        onChange={handleFileChange}
                        accept=".jpg,.jpeg,.png,.pdf,.ai,.psd"
                      />
                      <Upload className="mx-auto text-gray-400 mb-2" size={28} />
                      {file ? (
                        <div className="text-hind-blue flex items-center justify-center gap-2">
                          <Check size={16} />
                          <span>{file.name}</span>
                        </div>
                      ) : (
                        <>
                          <p className="text-sm font-medium">
                            Click to upload or drag and drop
                          </p>
                          <p className="text-xs text-gray-500">
                            JPG, PNG, PDF, AI, or PSD (max 10MB)
                          </p>
                        </>
                      )}
                    </div>
                  </div>
                  
                  <div className="md:col-span-2">
                    <label htmlFor="additionalDetails" className="block text-sm font-medium text-gray-700 mb-1">
                      Additional Details
                    </label>
                    <textarea
                      id="additionalDetails"
                      name="additionalDetails"
                      value={formData.additionalDetails}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Please provide any other specific requirements or questions you have."
                      className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-hind-blue"
                    ></textarea>
                  </div>
                </div>
                
                <div className="border-t pt-6 mt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`btn-primary w-full md:w-auto ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Quote Request'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

const Phone = ({ className, size }: { className?: string; size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size || 24}
    height={size || 24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

const Mail = ({ className, size }: { className?: string; size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size || 24}
    height={size || 24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

export default QuoteRequest;
