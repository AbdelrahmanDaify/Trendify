import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import { Checkbox } from '../../../components/ui/Checkbox';

const FilterSidebar = ({ isOpen, onClose, filters, onFilterChange }) => {
  const [expandedSections, setExpandedSections] = useState({
    size: true,
    color: true,
    price: true,
    brand: false,
    style: false
  });

  const filterSections = [
    {
      id: 'size',
      title: 'Size',
      options: [
        { id: 'xs', label: 'XS', count: 45 },
        { id: 's', label: 'S', count: 89 },
        { id: 'm', label: 'M', count: 156 },
        { id: 'l', label: 'L', count: 134 },
        { id: 'xl', label: 'XL', count: 98 },
        { id: 'xxl', label: 'XXL', count: 67 }
      ]
    },
    {
      id: 'color',
      title: 'Color',
      options: [
        { id: 'black', label: 'Black', count: 234, color: '#000000' },
        { id: 'white', label: 'White', count: 189, color: '#FFFFFF' },
        { id: 'navy', label: 'Navy', count: 156, color: '#1E3A8A' },
        { id: 'gray', label: 'Gray', count: 145, color: '#6B7280' },
        { id: 'blue', label: 'Blue', count: 123, color: '#3B82F6' },
        { id: 'brown', label: 'Brown', count: 89, color: '#A16207' }
      ]
    },
    {
      id: 'price',
      title: 'Price Range',
      options: [
        { id: 'under-50', label: 'Under $50', count: 167 },
        { id: '50-100', label: '$50 - $100', count: 234 },
        { id: '100-200', label: '$100 - $200', count: 189 },
        { id: '200-300', label: '$200 - $300', count: 123 },
        { id: 'over-300', label: 'Over $300', count: 89 }
      ]
    },
    {
      id: 'brand',
      title: 'Brand',
      options: [
        { id: 'trendify', label: 'Trendify', count: 234 },
        { id: 'urban-style', label: 'Urban Style', count: 156 },
        { id: 'classic-fit', label: 'Classic Fit', count: 134 },
        { id: 'modern-man', label: 'Modern Man', count: 98 }
      ]
    },
    {
      id: 'style',
      title: 'Style',
      options: [
        { id: 'casual', label: 'Casual', count: 289 },
        { id: 'formal', label: 'Formal', count: 167 },
        { id: 'business', label: 'Business', count: 145 },
        { id: 'sporty', label: 'Sporty', count: 123 },
        { id: 'vintage', label: 'Vintage', count: 89 }
      ]
    }
  ];

  const toggleSection = (sectionId) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev?.[sectionId]
    }));
  };

  const handleFilterChange = (sectionId, optionId, checked) => {
    onFilterChange(sectionId, optionId, checked);
  };

  const clearAllFilters = () => {
    onFilterChange('clear-all');
  };

  const activeFiltersCount = Object.values(filters)?.flat()?.length;

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      {/* Sidebar */}
      <div className={`
        fixed lg:sticky top-0 left-0 h-full lg:h-auto w-80 lg:w-64 bg-white border-r border-border z-50 lg:z-auto
        transform transition-transform duration-300 ease-in-out lg:transform-none
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        overflow-y-auto
      `}>
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-2">
              <Icon name="Filter" size={20} />
              <h3 className="text-lg font-semibold">Filters</h3>
              {activeFiltersCount > 0 && (
                <span className="bg-accent text-accent-foreground text-xs px-2 py-1 rounded-full">
                  {activeFiltersCount}
                </span>
              )}
            </div>
            <div className="flex items-center space-x-2">
              {activeFiltersCount > 0 && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={clearAllFilters}
                  className="text-xs"
                >
                  Clear All
                </Button>
              )}
              <Button
                variant="ghost"
                size="sm"
                onClick={onClose}
                className="lg:hidden"
              >
                <Icon name="X" size={18} />
              </Button>
            </div>
          </div>

          {/* Filter Sections */}
          <div className="space-y-6">
            {filterSections?.map((section) => (
              <div key={section?.id} className="border-b border-border pb-6 last:border-b-0">
                <button
                  onClick={() => toggleSection(section?.id)}
                  className="flex items-center justify-between w-full text-left mb-4"
                >
                  <h4 className="font-medium text-primary">{section?.title}</h4>
                  <Icon 
                    name={expandedSections?.[section?.id] ? "ChevronUp" : "ChevronDown"} 
                    size={16} 
                  />
                </button>
                
                {expandedSections?.[section?.id] && (
                  <div className="space-y-3">
                    {section?.options?.map((option) => (
                      <div key={option?.id} className="flex items-center space-x-3">
                        {section?.id === 'color' ? (
                          <div className="flex items-center space-x-3">
                            <div 
                              className="w-4 h-4 rounded-full border border-border"
                              style={{ backgroundColor: option?.color }}
                            />
                            <Checkbox
                              checked={filters?.[section?.id]?.includes(option?.id) || false}
                              onChange={(e) => handleFilterChange(section?.id, option?.id, e?.target?.checked)}
                            />
                            <label className="text-sm text-text-secondary flex-1 cursor-pointer">
                              {option?.label} ({option?.count})
                            </label>
                          </div>
                        ) : (
                          <>
                            <Checkbox
                              checked={filters?.[section?.id]?.includes(option?.id) || false}
                              onChange={(e) => handleFilterChange(section?.id, option?.id, e?.target?.checked)}
                            />
                            <label className="text-sm text-text-secondary flex-1 cursor-pointer">
                              {option?.label} ({option?.count})
                            </label>
                          </>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterSidebar;