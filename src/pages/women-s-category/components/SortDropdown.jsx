import React, { useState, useRef, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SortDropdown = ({ currentSort, onSortChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const sortOptions = [
    { value: 'featured', label: 'Featured' },
    { value: 'newest', label: 'Newest First' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'rating', label: 'Highest Rated' },
    { value: 'popularity', label: 'Most Popular' },
    { value: 'name-az', label: 'Name: A to Z' },
    { value: 'name-za', label: 'Name: Z to A' }
  ];

  const currentSortLabel = sortOptions?.find(option => option?.value === currentSort)?.label || 'Featured';

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef?.current && !dropdownRef?.current?.contains(event?.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSortSelect = (sortValue) => {
    onSortChange(sortValue);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <Button
        variant="outline"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 min-w-[160px] justify-between"
      >
        <span className="text-sm">Sort by: {currentSortLabel}</span>
        <Icon 
          name={isOpen ? "ChevronUp" : "ChevronDown"} 
          size={16}
          className="text-text-secondary"
        />
      </Button>
      {isOpen && (
        <div className="absolute top-full right-0 mt-1 w-56 bg-background border border-border rounded-lg shadow-elevated z-50">
          <div className="py-2">
            {sortOptions?.map((option) => (
              <button
                key={option?.value}
                onClick={() => handleSortSelect(option?.value)}
                className={`w-full px-4 py-2 text-left text-sm hover:bg-muted transition-colors ${
                  currentSort === option?.value 
                    ? 'text-accent font-medium bg-muted' :'text-primary'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span>{option?.label}</span>
                  {currentSort === option?.value && (
                    <Icon name="Check" size={14} className="text-accent" />
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SortDropdown;