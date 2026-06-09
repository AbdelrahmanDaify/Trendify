import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const ProductImageGallery = ({ images, productName }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });

  const handleThumbnailClick = (index) => {
    setSelectedImageIndex(index);
    setIsZoomed(false);
  };

  const handleMouseMove = (e) => {
    if (!isZoomed) return;
    
    const rect = e?.currentTarget?.getBoundingClientRect();
    const x = ((e?.clientX - rect?.left) / rect?.width) * 100;
    const y = ((e?.clientY - rect?.top) / rect?.height) * 100;
    setZoomPosition({ x, y });
  };

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  const navigateImage = (direction) => {
    if (direction === 'prev') {
      setSelectedImageIndex(selectedImageIndex === 0 ? images?.length - 1 : selectedImageIndex - 1);
    } else {
      setSelectedImageIndex(selectedImageIndex === images?.length - 1 ? 0 : selectedImageIndex + 1);
    }
  };

  return (
    <div className="space-y-4">
      {/* Main Image Display */}
      <div className="relative bg-muted rounded-lg overflow-hidden aspect-square">
        <div 
          className="relative w-full h-full cursor-zoom-in"
          onMouseMove={handleMouseMove}
          onClick={toggleZoom}
        >
          <Image
            src={images?.[selectedImageIndex]?.url}
            alt={images?.[selectedImageIndex]?.alt}
            className={`w-full h-full object-cover transition-transform duration-300 ${
              isZoomed ? 'scale-150' : 'scale-100'
            }`}
            style={
              isZoomed
                ? {
                    transformOrigin: `${zoomPosition?.x}% ${zoomPosition?.y}%`,
                  }
                : {}
            }
          />
          
          {/* 360 View Badge */}
          <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full">
            <div className="flex items-center space-x-2">
              <Icon name="RotateCcw" size={14} />
              <span className="text-xs font-medium">360° View</span>
            </div>
          </div>

          {/* Zoom Indicator */}
          {!isZoomed && (
            <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm p-2 rounded-full">
              <Icon name="ZoomIn" size={16} />
            </div>
          )}

          {/* Navigation Arrows */}
          <button
            onClick={(e) => {
              e?.stopPropagation();
              navigateImage('prev');
            }}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-background/90 backdrop-blur-sm p-2 rounded-full hover:bg-background transition-colors"
          >
            <Icon name="ChevronLeft" size={20} />
          </button>
          
          <button
            onClick={(e) => {
              e?.stopPropagation();
              navigateImage('next');
            }}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-background/90 backdrop-blur-sm p-2 rounded-full hover:bg-background transition-colors"
          >
            <Icon name="ChevronRight" size={20} />
          </button>
        </div>

        {/* Image Counter */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full">
          <span className="text-xs font-medium">
            {selectedImageIndex + 1} / {images?.length}
          </span>
        </div>
      </div>
      {/* Thumbnail Gallery */}
      <div className="flex space-x-2 overflow-x-auto pb-2">
        {images?.map((image, index) => (
          <button
            key={index}
            onClick={() => handleThumbnailClick(index)}
            className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
              selectedImageIndex === index
                ? 'border-primary shadow-md'
                : 'border-border hover:border-accent'
            }`}
          >
            <Image
              src={image?.url}
              alt={image?.alt}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
      {/* View Options */}
      <div className="flex items-center justify-center space-x-4 pt-2">
        <button className="flex items-center space-x-2 text-sm text-text-secondary hover:text-primary transition-colors">
          <Icon name="RotateCcw" size={16} />
          <span>360° View</span>
        </button>
        <button className="flex items-center space-x-2 text-sm text-text-secondary hover:text-primary transition-colors">
          <Icon name="Maximize" size={16} />
          <span>Full Screen</span>
        </button>
        <button className="flex items-center space-x-2 text-sm text-text-secondary hover:text-primary transition-colors">
          <Icon name="Share2" size={16} />
          <span>Share</span>
        </button>
      </div>
    </div>
  );
};

export default ProductImageGallery;