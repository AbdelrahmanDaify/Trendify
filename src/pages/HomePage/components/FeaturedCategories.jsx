import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../../../components/AppImage';

const FeaturedCategories = () => {
  const categories = [
  {
    id: 1,
    name: "Women\'s Fashion",
    description: "Discover your signature style",
    link: "/women-s-category",
    image: "https://images.unsplash.com/photo-1591345117822-89ebb91ed013",
    imageAlt: "Elegant woman in flowing white dress posing gracefully against neutral background"
  },
  {
    id: 2,
    name: "Men\'s Collection",
    description: "Contemporary essentials for modern men",
    link: "/men-s-category",
    image: "https://images.unsplash.com/photo-1593032527598-55649fe534ac",
    imageAlt: "Confident man in tailored navy suit and white shirt in professional setting"
  },
  {
    id: 3,
    name: "New Arrivals",
    description: "Fresh styles just landed",
    link: "/homepage",
    image: "https://images.unsplash.com/photo-1605722787192-d529b2c499ee",
    imageAlt: "Stylish young woman in trendy autumn outfit with colorful scarf and jacket"
  }];


  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-primary mb-4">
            Shop by Category
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Explore our curated collections designed for every style and occasion
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories?.map((category) =>
          <Link
            key={category?.id}
            to={category?.link}
            className="group relative overflow-hidden rounded-lg shadow-soft hover:shadow-elevated transition-all duration-300">

              <div className="aspect-[4/5] overflow-hidden">
                <Image
                src={category?.image}
                alt={category?.imageAlt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />

              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-medium mb-2 group-hover:text-accent transition-colors duration-200">
                  {category?.name}
                </h3>
                <p className="text-sm opacity-90">
                  {category?.description}
                </p>
              </div>
            </Link>
          )}
        </div>
      </div>
    </section>);

};

export default FeaturedCategories;