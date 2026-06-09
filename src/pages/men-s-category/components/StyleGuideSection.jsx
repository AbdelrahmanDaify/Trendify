import React from 'react';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const StyleGuideSection = () => {
  const styleGuides = [
  {
    id: 1,
    title: "Business Casual Essentials",
    description: "Master the art of professional yet relaxed dressing with our curated selection of business casual pieces.",
    image: "https://images.unsplash.com/photo-1619468610762-db5d88df3e9d",
    imageAlt: "Professional man in business casual attire with navy blazer and white shirt in modern office",
    tips: ["Tailored chinos", "Crisp button-downs", "Versatile blazers", "Quality leather shoes"]
  },
  {
    id: 2,
    title: "Weekend Comfort",
    description: "Discover the perfect balance of comfort and style for your off-duty moments.",
    image: "https://images.unsplash.com/photo-1513748566246-9cd9a6d57954",
    imageAlt: "Relaxed man in casual weekend wear with denim jacket and white t-shirt outdoors",
    tips: ["Premium denim", "Soft cotton tees", "Comfortable sneakers", "Casual jackets"]
  },
  {
    id: 3,
    title: "Formal Excellence",
    description: "Elevate your formal wardrobe with timeless pieces that command respect and confidence.",
    image: "https://images.unsplash.com/photo-1725618878320-755c50d02db1",
    imageAlt: "Elegant man in formal black suit with bow tie at upscale evening event",
    tips: ["Tailored suits", "Dress shirts", "Silk ties", "Oxford shoes"]
  }];


  const sizeGuide = [
  { size: 'XS', chest: '34-36"', waist: '28-30"', neck: '14-14.5"' },
  { size: 'S', chest: '36-38"', waist: '30-32"', neck: '15-15.5"' },
  { size: 'M', chest: '38-40"', waist: '32-34"', neck: '16-16.5"' },
  { size: 'L', chest: '40-42"', waist: '34-36"', neck: '17-17.5"' },
  { size: 'XL', chest: '42-44"', waist: '36-38"', neck: '18-18.5"' },
  { size: 'XXL', chest: '44-46"', waist: '38-40"', neck: '19-19.5"' }];


  return (
    <section className="bg-muted py-16">
      <div className="container mx-auto px-4">
        {/* Style Guides */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-serif font-medium text-primary mb-4">
              Style Inspiration
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Discover your signature style with our curated guides and expert styling tips
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {styleGuides?.map((guide) =>
            <div key={guide?.id} className="bg-white rounded-lg overflow-hidden shadow-soft hover:shadow-elevated transition-shadow duration-300">
                <div className="aspect-[4/3] overflow-hidden">
                  <Image
                  src={guide?.image}
                  alt={guide?.imageAlt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />

                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-primary mb-3">
                    {guide?.title}
                  </h3>
                  <p className="text-text-secondary mb-4 leading-relaxed">
                    {guide?.description}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    {guide?.tips?.map((tip, index) =>
                  <div key={index} className="flex items-center space-x-2">
                        <Icon name="Check" size={14} className="text-accent" />
                        <span className="text-sm text-text-secondary">{tip}</span>
                      </div>
                  )}
                  </div>
                  
                  <Button variant="outline" size="sm" fullWidth>
                    Explore Style
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Size Guide */}
        <div className="bg-white rounded-lg p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-serif font-medium text-primary mb-4">
              Men's Size Guide
            </h3>
            <p className="text-text-secondary">
              Find your perfect fit with our comprehensive sizing chart
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-semibold text-primary">Size</th>
                  <th className="text-left py-3 px-4 font-semibold text-primary">Chest</th>
                  <th className="text-left py-3 px-4 font-semibold text-primary">Waist</th>
                  <th className="text-left py-3 px-4 font-semibold text-primary">Neck</th>
                </tr>
              </thead>
              <tbody>
                {sizeGuide?.map((size, index) =>
                <tr key={size?.size} className={index % 2 === 0 ? 'bg-muted/50' : 'bg-white'}>
                    <td className="py-3 px-4 font-medium">{size?.size}</td>
                    <td className="py-3 px-4 text-text-secondary">{size?.chest}</td>
                    <td className="py-3 px-4 text-text-secondary">{size?.waist}</td>
                    <td className="py-3 px-4 text-text-secondary">{size?.neck}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <div className="mt-6 text-center">
            <Button variant="outline">
              <Icon name="Ruler" size={16} />
              <span>How to Measure</span>
            </Button>
          </div>
        </div>
      </div>
    </section>);

};

export default StyleGuideSection;