import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Select from '../../../components/ui/Select';

const SortingControls = ({ 
  totalProducts, 
  currentPage, 
  itemsPerPage, 
  viewMode, 
  onViewModeChange, 
  sortBy, 
  onSortChange,
  onFilterToggle 
}) => {
  const sortOptions = [
    { value: 'featured', label: 'Featured' },
    { value: 'newest', label: 'Newest First' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'rating', label: 'Highest Rated' },
    { value: 'popularity', label: 'Most Popular' }
  ];

  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalProducts);

  return (
    <div className="bg-white border-b border-border py-4">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
        {/* Results Info & Mobile Filter */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={onFilterToggle}
              className="lg:hidden"
            >
              <Icon name="Filter" size={16} />
              <span>Filters</span>
            </Button>
            
            <div className="text-sm text-text-secondary">
              Showing {startItem}-{endItem} of {totalProducts} products
            </div>
          </div>
          
          {/* Mobile View Toggle */}
          <div className="flex items-center space-x-2 lg:hidden">
            <Button
              variant={viewMode === 'grid' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => onViewModeChange('grid')}
            >
              <Icon name="Grid3X3" size={16} />
            </Button>
            <Button
              variant={viewMode === 'list' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => onViewModeChange('list')}
            >
              <Icon name="List" size={16} />
            </Button>
          </div>
        </div>

        {/* Desktop Controls */}
        <div className="flex items-center space-x-6">
          {/* Sort Dropdown */}
          <div className="flex items-center space-x-2">
            <span className="text-sm text-text-secondary whitespace-nowrap">Sort by:</span>
            <Select
              options={sortOptions}
              value={sortBy}
              onChange={onSortChange}
              className="min-w-[160px]"
            />
          </div>

          {/* View Mode Toggle - Desktop */}
          <div className="hidden lg:flex items-center space-x-2 border border-border rounded-lg p-1">
            <Button
              variant={viewMode === 'grid' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => onViewModeChange('grid')}
              className="px-3"
            >
              <Icon name="Grid3X3" size={16} />
            </Button>
            <Button
              variant={viewMode === 'list' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => onViewModeChange('list')}
              className="px-3"
            >
              <Icon name="List" size={16} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SortingControls;