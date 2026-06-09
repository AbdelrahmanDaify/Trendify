import React from 'react';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const CategoryHero = () => {
  return (
    <section className="relative h-96 lg:h-[500px] overflow-hidden bg-gradient-to-r from-gray-900 to-gray-700">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1611943574626-91c9be96abc6"
          alt="Confident man in tailored navy suit walking through modern city street"
          className="w-full h-full object-cover opacity-80" />

        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl lg:text-6xl font-serif font-medium mb-4 leading-tight">
            Men's Collection
          </h1>
          <p className="text-lg lg:text-xl mb-8 text-gray-200 leading-relaxed">
            Discover contemporary style that speaks to your confidence. From sharp tailoring to casual essentials, find pieces that define your unique aesthetic.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              variant="default"
              size="lg"
              className="bg-white text-gray-900 hover:bg-gray-100">

              Shop New Arrivals
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-gray-900">

              View Style Guide
            </Button>
          </div>
        </div>
      </div>
    </section>);

};

export default CategoryHero;