
import Layout from '../components/layout/Layout';
import Hero from '../components/home/Hero';
import FeaturedProducts from '../components/home/FeaturedProducts';
import FeaturedServices from '../components/home/FeaturedServices';
import WhyChooseUs from '../components/home/WhyChooseUs';
import Testimonials from '../components/home/Testimonials';
import CallToAction from '../components/home/CallToAction';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <FeaturedProducts />
      <FeaturedServices />
      <WhyChooseUs />
      <Testimonials />
      <CallToAction />
    </Layout>
  );
};

export default Index;
