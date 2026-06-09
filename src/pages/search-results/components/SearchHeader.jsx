import React, { useState, useRef } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SearchHeader = ({ 
  searchQuery, 
  onSearchChange, 
  onVoiceSearch, 
  onImageSearch, 
  isVoiceActive,
  totalResults 
}) => {
  const [isImageUploadOpen, setIsImageUploadOpen] = useState(false);
  const fileInputRef = useRef(null);

  const handleImageUpload = (event) => {
    const file = event?.target?.files?.[0];
    if (file) {
      onImageSearch(file);
      setIsImageUploadOpen(false);
    }
  };

  const handleImageSearchClick = () => {
    fileInputRef?.current?.click();
  };

  return (
    <div className="bg-background border-b border-border sticky top-16 z-40">
      <div className="container mx-auto px-4 py-4">
        {/* Search Bar */}
        <div className="flex items-center space-x-4 mb-4">
          <div className="flex-1 relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e?.target?.value)}
              placeholder="Search for products, brands, or styles..."
              className="w-full px-4 py-3 pl-12 pr-20 text-sm border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent bg-background"
            />
            <Icon
              name="Search"
              size={20}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-text-secondary"
            />
            
            {/* Voice and Image Search */}
            <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center space-x-1">
              <Button
                variant="ghost"
                size="sm"
                onClick={onVoiceSearch}
                className={`p-2 ${isVoiceActive ? 'text-cta bg-cta/10' : 'text-text-secondary hover:text-primary'}`}
              >
                <Icon name="Mic" size={16} />
              </Button>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={handleImageSearchClick}
                className="p-2 text-text-secondary hover:text-primary"
              >
                <Icon name="Camera" size={16} />
              </Button>
            </div>
          </div>
        </div>

        {/* Results Count and Quick Actions */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <p className="text-sm text-text-secondary">
              {totalResults > 0 ? (
                <>
                  <span className="font-medium text-primary">{totalResults?.toLocaleString()}</span> results
                  {searchQuery && (
                    <span> for "<span className="font-medium text-primary">{searchQuery}</span>"</span>
                  )}
                </>
              ) : (
                'No results found'
              )}
            </p>
          </div>

          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              className="text-xs text-text-secondary hover:text-primary"
            >
              <Icon name="History" size={14} className="mr-1" />
              Recent Searches
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              className="text-xs text-text-secondary hover:text-primary"
            >
              <Icon name="Bookmark" size={14} className="mr-1" />
              Saved Filters
            </Button>
          </div>
        </div>

        {/* Hidden file input for image upload */}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="hidden"
        />
      </div>
    </div>
  );
};

export default SearchHeader;