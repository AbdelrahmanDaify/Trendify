import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import { Checkbox } from '../../../components/ui/Checkbox';

const FilterSidebar = ({ isOpen, onClose, filters, onFilterChange, onClearFilters }) => {
  const [expandedSections, setExpandedSections] = useState({
    category: true,
    size: false,
    color: false,
    price: false,
    brand: false,
    style: false,
    occasion: false
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev?.[section]
    }));
  };

  const handleFilterChange = (filterType, value, checked) => {
    onFilterChange(filterType, value, checked);
  };

  const filterSections = [
    {
      id: 'category',
      title: 'Category',
      options: [
        { value: 'dresses', label: 'Dresses', count: 245 },
        { value: 'tops', label: 'Tops & Blouses', count: 189 },
        { value: 'bottoms', label: 'Bottoms', count: 156 },
        { value: 'outerwear', label: 'Outerwear', count: 98 },
        { value: 'activewear', label: 'Activewear', count: 87 },
        { value: 'lingerie', label: 'Lingerie', count: 76 },
        { value: 'shoes', label: 'Shoes', count: 134 },
        { value: 'accessories', label: 'Accessories', count: 92 }
      ]
    },
    {
      id: 'size',
      title: 'Size',
      options: [
        { value: 'xs', label: 'XS', count: 45 },
        { value: 's', label: 'S', count: 78 },
        { value: 'm', label: 'M', count: 92 },
        { value: 'l', label: 'L', count: 87 },
        { value: 'xl', label: 'XL', count: 65 },
        { value: 'xxl', label: 'XXL', count: 34 }
      ]
    },
    {
      id: 'color',
      title: 'Color',
      options: [
        { value: 'black', label: 'Black', count: 156, color: '#000000' },
        { value: 'white', label: 'White', count: 134, color: '#FFFFFF' },
        { value: 'navy', label: 'Navy', count: 89, color: '#1E3A8A' },
        { value: 'beige', label: 'Beige', count: 67, color: '#F5F5DC' },
        { value: 'red', label: 'Red', count: 45, color: '#DC2626' },
        { value: 'pink', label: 'Pink', count: 56, color: '#EC4899' },
        { value: 'green', label: 'Green', count: 34, color: '#059669' },
        { value: 'blue', label: 'Blue', count: 78, color: '#2563EB' }
      ]
    },
    {
      id: 'price',
      title: 'Price Range',
      options: [
        { value: '0-25', label: 'Under $25', count: 89 },
        { value: '25-50', label: '$25 - $50', count: 156 },
        { value: '50-100', label: '$50 - $100', count: 234 },
        { value: '100-200', label: '$100 - $200', count: 178 },
        { value: '200+', label: 'Over $200', count: 67 }
      ]
    },
    {
      id: 'brand',
      title: 'Brand',
      options: [
        { value: 'trendify', label: 'Trendify', count: 234 },
        { value: 'urban-chic', label: 'Urban Chic', count: 156 },
        { value: 'modern-muse', label: 'Modern Muse', count: 123 },
        { value: 'classic-co', label: 'Classic & Co', count: 98 },
        { value: 'style-studio', label: 'Style Studio', count: 87 }
      ]
    },
    {
      id: 'style',
      title: 'Style',
      options: [
        { value: 'casual', label: 'Casual', count: 189 },
        { value: 'formal', label: 'Formal', count: 134 },
        { value: 'bohemian', label: 'Bohemian', count: 78 },
        { value: 'minimalist', label: 'Minimalist', count: 92 },
        { value: 'vintage', label: 'Vintage', count: 56 },
        { value: 'edgy', label: 'Edgy', count: 45 }
      ]
    },
    {
      id: 'occasion',
      title: 'Occasion',
      options: [
        { value: 'work', label: 'Work', count: 167 },
        { value: 'party', label: 'Party', count: 123 },
        { value: 'casual', label: 'Casual', count: 234 },
        { value: 'date-night', label: 'Date Night', count: 89 },
        { value: 'vacation', label: 'Vacation', count: 76 },
        { value: 'wedding', label: 'Wedding', count: 45 }
      ]
    }
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      {/* Filter Sidebar */}
      <div className={`
        fixed lg:static top-0 left-0 h-full w-80 bg-background border-r border-border z-50
        transform transition-transform duration-300 ease-in-out lg:transform-none
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        overflow-y-auto
      `}>
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border lg:hidden">
          <h2 className="text-lg font-semibold text-primary">Filters</h2>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
          >
            <Icon name="X" size={20} />
          </Button>
        </div>

        {/* Desktop Header */}
        <div className="hidden lg:flex items-center justify-between p-6 border-b border-border">
          <h2 className="text-lg font-semibold text-primary">Filters</h2>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClearFilters}
            className="text-text-secondary hover:text-primary"
          >
            Clear All
          </Button>
        </div>

        {/* Filter Sections */}
        <div className="p-6 space-y-6">
          {filterSections?.map((section) => (
            <div key={section?.id} className="border-b border-border pb-6 last:border-b-0">
              <button
                onClick={() => toggleSection(section?.id)}
                className="flex items-center justify-between w-full text-left mb-4 group"
              >
                <h3 className="font-medium text-primary group-hover:text-accent transition-colors">
                  {section?.title}
                </h3>
                <Icon 
                  name={expandedSections?.[section?.id] ? "ChevronUp" : "ChevronDown"} 
                  size={16}
                  className="text-text-secondary group-hover:text-accent transition-colors"
                />
              </button>

              {expandedSections?.[section?.id] && (
                <div className="space-y-3">
                  {section?.options?.map((option) => (
                    <div key={option?.value} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3 flex-1">
                        {section?.id === 'color' && option?.color && (
                          <div 
                            className="w-4 h-4 rounded-full border border-border flex-shrink-0"
                            style={{ backgroundColor: option?.color }}
                          />
                        )}
                        <Checkbox
                          label={option?.label}
                          checked={filters?.[section?.id]?.includes(option?.value) || false}
                          onChange={(e) => handleFilterChange(section?.id, option?.value, e?.target?.checked)}
                          className="flex-1"
                        />
                      </div>
                      <span className="text-xs text-text-secondary ml-2">
                        ({option?.count})
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Apply Button */}
        <div className="p-6 border-t border-border lg:hidden">
          <Button
            variant="default"
            fullWidth
            onClick={onClose}
          >
            Apply Filters
          </Button>
        </div>
      </div>
    </>
  );
};

export default FilterSidebar;