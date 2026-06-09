import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';

const CategoryNavigation = ({ activeCategory, onCategoryChange }) => {
  const categories = [
    {
      id: 'all',
      name: 'All Items',
      count: 847,
      icon: 'Grid3X3'
    },
    {
      id: 'shirts',
      name: 'Shirts & Polos',
      count: 156,
      icon: 'Shirt'
    },
    {
      id: 'pants',
      name: 'Pants & Jeans',
      count: 134,
      icon: 'Package'
    },
    {
      id: 'jackets',
      name: 'Jackets & Coats',
      count: 89,
      icon: 'Coat'
    },
    {
      id: 'shoes',
      name: 'Shoes',
      count: 167,
      icon: 'Footprints'
    },
    {
      id: 'accessories',
      name: 'Accessories',
      count: 201,
      icon: 'Watch'
    },
    {
      id: 'activewear',
      name: 'Activewear',
      count: 100,
      icon: 'Activity'
    }
  ];

  return (
    <div className="bg-white border-b border-border sticky top-16 z-40">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-1 overflow-x-auto scrollbar-hide">
            {categories?.map((category) => (
              <button
                key={category?.id}
                onClick={() => onCategoryChange(category?.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                  activeCategory === category?.id
                    ? 'bg-primary text-primary-foreground'
                    : 'text-text-secondary hover:text-primary hover:bg-muted'
                }`}
              >
                <Icon name={category?.icon} size={16} />
                <span>{category?.name}</span>
                <span className="text-xs opacity-70">({category?.count})</span>
              </button>
            ))}
          </div>
          
          <div className="hidden lg:flex items-center space-x-4">
            <Link 
              to="/search-results"
              className="text-sm text-text-secondary hover:text-primary transition-colors"
            >
              Size Guide
            </Link>
            <Link 
              to="/search-results"
              className="text-sm text-text-secondary hover:text-primary transition-colors"
            >
              Style Tips
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryNavigation;