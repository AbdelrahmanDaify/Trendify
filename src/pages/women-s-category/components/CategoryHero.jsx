import React from 'react';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const CategoryHero = () => {
  return (
    <div className="relative h-64 lg:h-80 mb-8 rounded-lg overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1677131899529-77c90631757e"
        alt="Elegant woman in flowing dress walking through modern fashion boutique with natural lighting"
        className="w-full h-full object-cover" />

      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
      
      {/* Content */}
      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-lg text-white">
            <h1 className="text-3xl lg:text-4xl font-serif font-medium mb-4">
              Women's Collection
            </h1>
            <p className="text-lg mb-6 text-white/90">
              Discover the latest trends and timeless pieces that define your unique style. From everyday essentials to statement pieces.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button variant="secondary" size="lg">
                Shop New Arrivals
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                View Lookbook
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>);

};

export default CategoryHero;