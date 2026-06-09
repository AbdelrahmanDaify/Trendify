import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import { Checkbox } from '../../../components/ui/Checkbox';

const FilterSidebar = ({ 
  filters, 
  onFilterChange, 
  onClearFilters, 
  onSaveFilters,
  isOpen,
  onToggle 
}) => {
  const [expandedSections, setExpandedSections] = useState({
    category: true,
    price: true,
    size: true,
    color: true,
    brand: false,
    rating: false
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev?.[section]
    }));
  };

  const priceRanges = [
    { id: 'under-25', label: 'Under $25', min: 0, max: 25 },
    { id: '25-50', label: '$25 - $50', min: 25, max: 50 },
    { id: '50-100', label: '$50 - $100', min: 50, max: 100 },
    { id: '100-200', label: '$100 - $200', min: 100, max: 200 },
    { id: 'over-200', label: 'Over $200', min: 200, max: null }
  ];

  const categories = [
    { id: 'women', label: 'Women', count: 1247 },
    { id: 'men', label: 'Men', count: 892 },
    { id: 'accessories', label: 'Accessories', count: 456 },
    { id: 'shoes', label: 'Shoes', count: 324 },
    { id: 'bags', label: 'Bags', count: 189 }
  ];

  const sizes = [
    { id: 'xs', label: 'XS' },
    { id: 's', label: 'S' },
    { id: 'm', label: 'M' },
    { id: 'l', label: 'L' },
    { id: 'xl', label: 'XL' },
    { id: 'xxl', label: 'XXL' }
  ];

  const colors = [
    { id: 'black', label: 'Black', hex: '#000000' },
    { id: 'white', label: 'White', hex: '#FFFFFF' },
    { id: 'red', label: 'Red', hex: '#DC2626' },
    { id: 'blue', label: 'Blue', hex: '#2563EB' },
    { id: 'green', label: 'Green', hex: '#16A34A' },
    { id: 'pink', label: 'Pink', hex: '#EC4899' },
    { id: 'brown', label: 'Brown', hex: '#A16207' },
    { id: 'gray', label: 'Gray', hex: '#6B7280' }
  ];

  const brands = [
    { id: 'trendify', label: 'Trendify', count: 234 },
    { id: 'style-co', label: 'Style & Co', count: 189 },
    { id: 'urban-chic', label: 'Urban Chic', count: 156 },
    { id: 'classic-wear', label: 'Classic Wear', count: 134 },
    { id: 'modern-fit', label: 'Modern Fit', count: 98 }
  ];

  const ratings = [
    { id: '4-plus', label: '4+ Stars', stars: 4 },
    { id: '3-plus', label: '3+ Stars', stars: 3 },
    { id: '2-plus', label: '2+ Stars', stars: 2 },
    { id: '1-plus', label: '1+ Stars', stars: 1 }
  ];

  const FilterSection = ({ title, sectionKey, children }) => (
    <div className="border-b border-border pb-4 mb-4">
      <button
        onClick={() => toggleSection(sectionKey)}
        className="flex items-center justify-between w-full py-2 text-left"
      >
        <h3 className="font-medium text-primary">{title}</h3>
        <Icon
          name={expandedSections?.[sectionKey] ? "ChevronUp" : "ChevronDown"}
          size={16}
          className="text-text-secondary"
        />
      </button>
      {expandedSections?.[sectionKey] && (
        <div className="mt-3 space-y-2">
          {children}
        </div>
      )}
    </div>
  );

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onToggle}
        />
      )}
      {/* Sidebar */}
      <div className={`
        fixed lg:sticky top-16 left-0 h-screen lg:h-auto w-80 lg:w-64 
        bg-background border-r border-border z-50 lg:z-auto
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        overflow-y-auto
      `}>
        <div className="p-4">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-primary">Filters</h2>
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={onSaveFilters}
                className="text-xs"
              >
                <Icon name="Bookmark" size={14} className="mr-1" />
                Save
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={onClearFilters}
                className="text-xs text-text-secondary"
              >
                Clear All
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={onToggle}
                className="lg:hidden"
              >
                <Icon name="X" size={16} />
              </Button>
            </div>
          </div>

          {/* Category Filter */}
          <FilterSection title="Category" sectionKey="category">
            {categories?.map(category => (
              <div key={category?.id} className="flex items-center justify-between">
                <Checkbox
                  label={category?.label}
                  checked={filters?.categories?.includes(category?.id) || false}
                  onChange={(e) => onFilterChange('categories', category?.id, e?.target?.checked)}
                />
                <span className="text-xs text-text-secondary">({category?.count})</span>
              </div>
            ))}
          </FilterSection>

          {/* Price Filter */}
          <FilterSection title="Price Range" sectionKey="price">
            {priceRanges?.map(range => (
              <Checkbox
                key={range?.id}
                label={range?.label}
                checked={filters?.priceRanges?.includes(range?.id) || false}
                onChange={(e) => onFilterChange('priceRanges', range?.id, e?.target?.checked)}
              />
            ))}
          </FilterSection>

          {/* Size Filter */}
          <FilterSection title="Size" sectionKey="size">
            <div className="grid grid-cols-3 gap-2">
              {sizes?.map(size => (
                <button
                  key={size?.id}
                  onClick={() => onFilterChange('sizes', size?.id, !filters?.sizes?.includes(size?.id))}
                  className={`
                    px-3 py-2 text-sm border rounded-md transition-colors
                    ${filters?.sizes?.includes(size?.id)
                      ? 'border-accent bg-accent text-accent-foreground'
                      : 'border-border text-text-secondary hover:border-accent'
                    }
                  `}
                >
                  {size?.label}
                </button>
              ))}
            </div>
          </FilterSection>

          {/* Color Filter */}
          <FilterSection title="Color" sectionKey="color">
            <div className="grid grid-cols-4 gap-2">
              {colors?.map(color => (
                <button
                  key={color?.id}
                  onClick={() => onFilterChange('colors', color?.id, !filters?.colors?.includes(color?.id))}
                  className={`
                    relative w-10 h-10 rounded-full border-2 transition-all
                    ${filters?.colors?.includes(color?.id)
                      ? 'border-accent scale-110' :'border-border hover:border-accent'
                    }
                  `}
                  style={{ backgroundColor: color?.hex }}
                  title={color?.label}
                >
                  {color?.hex === '#FFFFFF' && (
                    <div className="absolute inset-1 border border-gray-200 rounded-full" />
                  )}
                  {filters?.colors?.includes(color?.id) && (
                    <Icon
                      name="Check"
                      size={14}
                      className={`absolute inset-0 m-auto ${
                        color?.hex === '#FFFFFF' || color?.hex === '#FFFF00' ? 'text-gray-800' : 'text-white'
                      }`}
                    />
                  )}
                </button>
              ))}
            </div>
          </FilterSection>

          {/* Brand Filter */}
          <FilterSection title="Brand" sectionKey="brand">
            {brands?.map(brand => (
              <div key={brand?.id} className="flex items-center justify-between">
                <Checkbox
                  label={brand?.label}
                  checked={filters?.brands?.includes(brand?.id) || false}
                  onChange={(e) => onFilterChange('brands', brand?.id, e?.target?.checked)}
                />
                <span className="text-xs text-text-secondary">({brand?.count})</span>
              </div>
            ))}
          </FilterSection>

          {/* Rating Filter */}
          <FilterSection title="Customer Rating" sectionKey="rating">
            {ratings?.map(rating => (
              <div key={rating?.id} className="flex items-center space-x-2">
                <Checkbox
                  checked={filters?.ratings?.includes(rating?.id) || false}
                  onChange={(e) => onFilterChange('ratings', rating?.id, e?.target?.checked)}
                />
                <div className="flex items-center space-x-1">
                  {[...Array(5)]?.map((_, i) => (
                    <Icon
                      key={i}
                      name="Star"
                      size={12}
                      className={i < rating?.stars ? 'text-yellow-400 fill-current' : 'text-gray-300'}
                    />
                  ))}
                  <span className="text-sm text-text-secondary ml-1">{rating?.label}</span>
                </div>
              </div>
            ))}
          </FilterSection>
        </div>
      </div>
    </>
  );
};

export default FilterSidebar;