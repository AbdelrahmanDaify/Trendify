import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
  {
    id: 1,
    title: "New Season Arrivals",
    subtitle: "Discover the latest trends that define your style",
    ctaText: "Shop Women",
    ctaLink: "/women-s-category",
    image: "https://images.unsplash.com/photo-1652705334308-78bc1c9ab361",
    imageAlt: "Modern fashion store interior with clothing racks displaying colorful garments and natural lighting"
  },
  {
    id: 2,
    title: "Men\'s Collection",
    subtitle: "Elevate your wardrobe with contemporary essentials",
    ctaText: "Shop Men",
    ctaLink: "/men-s-category",
    image: "https://images.unsplash.com/photo-1708946696908-a2eec94d9163",
    imageAlt: "Stylish man in dark casual outfit walking confidently in urban setting"
  },
  {
    id: 3,
    title: "Sale Up to 50% Off",
    subtitle: "Fashion-forward pieces at wallet-friendly prices",
    ctaText: "Shop Sale",
    ctaLink: "/search-results",
    image: "https://images.unsplash.com/photo-1713693210377-d37b232bf30c",
    imageAlt: "Happy woman in white sweater holding shopping bags with excited expression"
  }];


  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides?.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides?.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides?.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides?.length) % heroSlides?.length);
  };

  return (
    <section className="relative h-[70vh] min-h-[500px] overflow-hidden bg-muted">
      <div className="relative w-full h-full">
        {heroSlides?.map((slide, index) =>
        <div
          key={slide?.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
          index === currentSlide ? 'opacity-100' : 'opacity-0'}`
          }>

            <div className="relative w-full h-full">
              <Image
              src={slide?.image}
              alt={slide?.imageAlt}
              className="w-full h-full object-cover" />

              <div className="absolute inset-0 bg-black/30" />
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white max-w-2xl px-4">
                  <h1 className="text-4xl md:text-6xl font-serif font-medium mb-4 animate-slide-up">
                    {slide?.title}
                  </h1>
                  <p className="text-lg md:text-xl mb-8 opacity-90 animate-slide-up">
                    {slide?.subtitle}
                  </p>
                  <Link to={slide?.ctaLink}>
                    <Button
                    variant="default"
                    size="lg"
                    className="bg-white text-primary hover:bg-gray-100 animate-slide-up">

                      {slide?.ctaText}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-200"
          aria-label="Previous slide">

          <Icon name="ChevronLeft" size={24} />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-200"
          aria-label="Next slide">

          <Icon name="ChevronRight" size={24} />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
          {heroSlides?.map((_, index) =>
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-200 ${
            index === currentSlide ? 'bg-white' : 'bg-white/50'}`
            }
            aria-label={`Go to slide ${index + 1}`} />

          )}
        </div>
      </div>
    </section>);

};

export default HeroSection;