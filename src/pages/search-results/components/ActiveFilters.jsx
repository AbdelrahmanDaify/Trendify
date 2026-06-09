import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ActiveFilters = ({ filters, onRemoveFilter, onClearAll }) => {
  const getActiveFilters = () => {
    const active = [];

    // Categories
    if (filters?.categories?.length > 0) {
      filters?.categories?.forEach(category => {
        active?.push({
          type: 'categories',
          value: category,
          label: category?.charAt(0)?.toUpperCase() + category?.slice(1),
          displayLabel: `Category: ${category?.charAt(0)?.toUpperCase() + category?.slice(1)}`
        });
      });
    }

    // Price Ranges
    if (filters?.priceRanges?.length > 0) {
      const priceLabels = {
        'under-25': 'Under $25',
        '25-50': '$25 - $50',
        '50-100': '$50 - $100',
        '100-200': '$100 - $200',
        'over-200': 'Over $200'
      };
      
      filters?.priceRanges?.forEach(range => {
        active?.push({
          type: 'priceRanges',
          value: range,
          label: priceLabels?.[range],
          displayLabel: `Price: ${priceLabels?.[range]}`
        });
      });
    }

    // Sizes
    if (filters?.sizes?.length > 0) {
      filters?.sizes?.forEach(size => {
        active?.push({
          type: 'sizes',
          value: size,
          label: size?.toUpperCase(),
          displayLabel: `Size: ${size?.toUpperCase()}`
        });
      });
    }

    // Colors
    if (filters?.colors?.length > 0) {
      const colorLabels = {
        'black': 'Black',
        'white': 'White',
        'red': 'Red',
        'blue': 'Blue',
        'green': 'Green',
        'pink': 'Pink',
        'brown': 'Brown',
        'gray': 'Gray'
      };
      
      filters?.colors?.forEach(color => {
        active?.push({
          type: 'colors',
          value: color,
          label: colorLabels?.[color] || color,
          displayLabel: `Color: ${colorLabels?.[color] || color}`
        });
      });
    }

    // Brands
    if (filters?.brands?.length > 0) {
      const brandLabels = {
        'trendify': 'Trendify',
        'style-co': 'Style & Co',
        'urban-chic': 'Urban Chic',
        'classic-wear': 'Classic Wear',
        'modern-fit': 'Modern Fit'
      };
      
      filters?.brands?.forEach(brand => {
        active?.push({
          type: 'brands',
          value: brand,
          label: brandLabels?.[brand] || brand,
          displayLabel: `Brand: ${brandLabels?.[brand] || brand}`
        });
      });
    }

    // Ratings
    if (filters?.ratings?.length > 0) {
      const ratingLabels = {
        '4-plus': '4+ Stars',
        '3-plus': '3+ Stars',
        '2-plus': '2+ Stars',
        '1-plus': '1+ Stars'
      };
      
      filters?.ratings?.forEach(rating => {
        active?.push({
          type: 'ratings',
          value: rating,
          label: ratingLabels?.[rating],
          displayLabel: `Rating: ${ratingLabels?.[rating]}`
        });
      });
    }

    return active;
  };

  const activeFilters = getActiveFilters();

  if (activeFilters?.length === 0) {
    return null;
  }

  return (
    <div className="bg-muted/50 border-b border-border py-3">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 flex-wrap gap-2">
            <span className="text-sm font-medium text-primary">
              Active Filters:
            </span>
            
            <div className="flex items-center space-x-2 flex-wrap gap-2">
              {activeFilters?.map((filter, index) => (
                <div
                  key={`${filter?.type}-${filter?.value}-${index}`}
                  className="flex items-center bg-accent/10 text-accent border border-accent/20 rounded-full px-3 py-1 text-sm"
                >
                  <span>{filter?.displayLabel}</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => onRemoveFilter(filter?.type, filter?.value)}
                    className="ml-2 p-0 h-4 w-4 hover:bg-accent/20 rounded-full"
                  >
                    <Icon name="X" size={12} />
                  </Button>
                </div>
              ))}
            </div>
          </div>

          <Button
            variant="ghost"
            size="sm"
            onClick={onClearAll}
            className="text-text-secondary hover:text-primary flex-shrink-0"
          >
            <Icon name="X" size={14} className="mr-1" />
            Clear All
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ActiveFilters;