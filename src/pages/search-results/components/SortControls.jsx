import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SortControls = ({ 
  sortBy, 
  onSortChange, 
  viewMode, 
  onViewModeChange, 
  onToggleFilters,
  activeFiltersCount 
}) => {
  const [isSortOpen, setIsSortOpen] = useState(false);

  const sortOptions = [
    { value: 'relevance', label: 'Best Match', icon: 'Target' },
    { value: 'popularity', label: 'Most Popular', icon: 'TrendingUp' },
    { value: 'price-low', label: 'Price: Low to High', icon: 'ArrowUp' },
    { value: 'price-high', label: 'Price: High to Low', icon: 'ArrowDown' },
    { value: 'newest', label: 'Newest Arrivals', icon: 'Clock' },
    { value: 'rating', label: 'Customer Rating', icon: 'Star' },
    { value: 'discount', label: 'Biggest Discount', icon: 'Percent' }
  ];

  const currentSort = sortOptions?.find(option => option?.value === sortBy);

  return (
    <div className="bg-background border-b border-border py-3">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Left Side - Filter Toggle & Active Filters */}
          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={onToggleFilters}
              className="lg:hidden relative"
            >
              <Icon name="Filter" size={16} className="mr-2" />
              Filters
              {activeFiltersCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-cta text-cta-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                  {activeFiltersCount}
                </span>
              )}
            </Button>

            {activeFiltersCount > 0 && (
              <div className="hidden sm:flex items-center space-x-2">
                <span className="text-sm text-text-secondary">
                  {activeFiltersCount} filter{activeFiltersCount !== 1 ? 's' : ''} applied
                </span>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-xs text-accent hover:text-accent/80"
                >
                  Clear all
                </Button>
              </div>
            )}
          </div>

          {/* Right Side - Sort & View Controls */}
          <div className="flex items-center space-x-4">
            {/* Sort Dropdown */}
            <div className="relative">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsSortOpen(!isSortOpen)}
                className="min-w-[140px] justify-between"
              >
                <div className="flex items-center space-x-2">
                  <Icon name={currentSort?.icon || 'ArrowUpDown'} size={14} />
                  <span className="text-sm">{currentSort?.label || 'Sort by'}</span>
                </div>
                <Icon 
                  name={isSortOpen ? "ChevronUp" : "ChevronDown"} 
                  size={14} 
                  className="ml-2"
                />
              </Button>

              {isSortOpen && (
                <div className="absolute right-0 top-full mt-1 w-56 bg-background border border-border rounded-lg shadow-elevated z-50">
                  <div className="py-2">
                    {sortOptions?.map((option) => (
                      <button
                        key={option?.value}
                        onClick={() => {
                          onSortChange(option?.value);
                          setIsSortOpen(false);
                        }}
                        className={`
                          w-full px-4 py-2 text-left text-sm flex items-center space-x-3
                          transition-colors hover:bg-muted
                          ${sortBy === option?.value ? 'bg-accent/10 text-accent' : 'text-text-primary'}
                        `}
                      >
                        <Icon name={option?.icon} size={14} />
                        <span>{option?.label}</span>
                        {sortBy === option?.value && (
                          <Icon name="Check" size={14} className="ml-auto" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* View Mode Toggle */}
            <div className="hidden sm:flex items-center border border-border rounded-lg p-1">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => onViewModeChange('grid')}
                className="px-3 py-1"
              >
                <Icon name="Grid3X3" size={16} />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => onViewModeChange('list')}
                className="px-3 py-1"
              >
                <Icon name="List" size={16} />
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* Click outside to close sort dropdown */}
      {isSortOpen && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setIsSortOpen(false)}
        />
      )}
    </div>
  );
};

export default SortControls;