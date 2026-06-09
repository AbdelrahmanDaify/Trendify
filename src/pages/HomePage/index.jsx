import React from 'react';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import FeaturedCategories from './components/FeaturedCategories';
import TrendingProducts from './components/TrendingProducts';
import StyleInspiration from './components/StyleInspiration';
import TrustSignals from './components/TrustSignals';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

const Homepage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        <HeroSection />
        <FeaturedCategories />
        <TrendingProducts />
        <StyleInspiration />
        <TrustSignals />
        <Newsletter />
      </main>
      
      <Footer />
    </div>
  );
};

export default Homepage;