import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const QuickViewModal = ({ product, isOpen, onClose, onAddToCart, onWishlistToggle }) => {
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState(product?.colors?.[0] || null);
  const [quantity, setQuantity] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!isOpen || !product) return null;

  const images = [
    product?.image,
    product?.hoverImage,
    ...(product?.additionalImages || [])
  ]?.filter(Boolean);

  const discountPercentage = product?.originalPrice 
    ? Math.round(((product?.originalPrice - product?.price) / product?.originalPrice) * 100)
    : 0;

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size');
      return;
    }
    onAddToCart({
      ...product,
      selectedSize,
      selectedColor,
      quantity
    });
    onClose();
  };

  const handleQuantityChange = (change) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1 && newQuantity <= 10) {
      setQuantity(newQuantity);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      {/* Modal */}
      <div className="relative bg-background rounded-lg shadow-elevated max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          <h2 className="text-lg font-semibold text-primary">Quick View</h2>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="p-2"
          >
            <Icon name="X" size={20} />
          </Button>
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row max-h-[calc(90vh-80px)] overflow-y-auto">
          {/* Image Section */}
          <div className="lg:w-1/2 p-4">
            <div className="relative aspect-square bg-muted rounded-lg overflow-hidden mb-4">
              <Image
                src={images?.[currentImageIndex]}
                alt={`${product?.name} - Image ${currentImageIndex + 1}`}
                className="w-full h-full object-cover"
              />

              {/* Image Navigation */}
              {images?.length > 1 && (
                <>
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => setCurrentImageIndex(Math.max(0, currentImageIndex - 1))}
                    disabled={currentImageIndex === 0}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 w-8 h-8 p-0 rounded-full"
                  >
                    <Icon name="ChevronLeft" size={16} />
                  </Button>
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => setCurrentImageIndex(Math.min(images?.length - 1, currentImageIndex + 1))}
                    disabled={currentImageIndex === images?.length - 1}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 p-0 rounded-full"
                  >
                    <Icon name="ChevronRight" size={16} />
                  </Button>
                </>
              )}

              {/* Badges */}
              <div className="absolute top-2 left-2 flex flex-col space-y-1">
                {product?.isNew && (
                  <span className="bg-success text-success-foreground text-xs font-medium px-2 py-1 rounded">
                    New
                  </span>
                )}
                {discountPercentage > 0 && (
                  <span className="bg-cta text-cta-foreground text-xs font-medium px-2 py-1 rounded">
                    -{discountPercentage}%
                  </span>
                )}
              </div>
            </div>

            {/* Thumbnail Images */}
            {images?.length > 1 && (
              <div className="flex space-x-2 overflow-x-auto">
                {images?.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`
                      flex-shrink-0 w-16 h-16 rounded border-2 overflow-hidden
                      ${currentImageIndex === index ? 'border-accent' : 'border-border'}
                    `}
                  >
                    <Image
                      src={image}
                      alt={`${product?.name} thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Details */}
          <div className="lg:w-1/2 p-4 lg:pl-0">
            <div className="space-y-4">
              {/* Brand & Title */}
              <div>
                <p className="text-sm text-text-secondary uppercase tracking-wide mb-1">
                  {product?.brand}
                </p>
                <h1 className="text-xl font-semibold text-primary mb-2">
                  {product?.name}
                </h1>
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-2">
                <div className="flex items-center">
                  {[...Array(5)]?.map((_, i) => (
                    <Icon
                      key={i}
                      name="Star"
                      size={16}
                      className={
                        i < Math.floor(product?.rating)
                          ? 'text-yellow-400 fill-current' :'text-gray-300'
                      }
                    />
                  ))}
                </div>
                <span className="text-sm text-text-secondary">
                  {product?.rating} ({product?.reviewCount} reviews)
                </span>
              </div>

              {/* Price */}
              <div className="flex items-center space-x-3">
                <span className="text-2xl font-bold text-primary">
                  ${product?.price}
                </span>
                {product?.originalPrice && product?.originalPrice > product?.price && (
                  <span className="text-lg text-text-secondary line-through">
                    ${product?.originalPrice}
                  </span>
                )}
                {discountPercentage > 0 && (
                  <span className="text-sm font-medium text-success">
                    Save {discountPercentage}%
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="text-text-secondary">
                {product?.description}
              </p>

              {/* Color Selection */}
              {product?.colors && product?.colors?.length > 0 && (
                <div>
                  <h3 className="font-medium text-primary mb-2">
                    Color: {selectedColor?.name}
                  </h3>
                  <div className="flex space-x-2">
                    {product?.colors?.map((color) => (
                      <button
                        key={color?.id}
                        onClick={() => setSelectedColor(color)}
                        className={`
                          w-8 h-8 rounded-full border-2 transition-all
                          ${selectedColor?.id === color?.id
                            ? 'border-accent scale-110' :'border-border hover:border-accent'
                          }
                        `}
                        style={{ backgroundColor: color?.hex }}
                        title={color?.name}
                      >
                        {color?.hex === '#FFFFFF' && (
                          <div className="w-full h-full border border-gray-200 rounded-full" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Size Selection */}
              {product?.sizes && product?.sizes?.length > 0 && (
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium text-primary">Size</h3>
                    <Button variant="ghost" size="sm" className="text-xs text-accent">
                      Size Guide
                    </Button>
                  </div>
                  <div className="grid grid-cols-4 gap-2">
                    {product?.sizes?.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`
                          px-3 py-2 text-sm border rounded-md transition-colors
                          ${selectedSize === size
                            ? 'border-accent bg-accent text-accent-foreground'
                            : 'border-border text-text-secondary hover:border-accent'
                          }
                        `}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity */}
              <div>
                <h3 className="font-medium text-primary mb-2">Quantity</h3>
                <div className="flex items-center space-x-3">
                  <div className="flex items-center border border-border rounded-lg">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleQuantityChange(-1)}
                      disabled={quantity <= 1}
                      className="px-3 py-2"
                    >
                      <Icon name="Minus" size={14} />
                    </Button>
                    <span className="px-4 py-2 text-center min-w-[3rem]">
                      {quantity}
                    </span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleQuantityChange(1)}
                      disabled={quantity >= 10}
                      className="px-3 py-2"
                    >
                      <Icon name="Plus" size={14} />
                    </Button>
                  </div>
                  <span className="text-sm text-text-secondary">
                    {product?.stock > 10 ? 'In Stock' : `Only ${product?.stock} left`}
                  </span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex space-x-3 pt-4">
                <Button
                  variant="default"
                  onClick={handleAddToCart}
                  className="flex-1"
                  disabled={!selectedSize}
                >
                  <Icon name="ShoppingBag" size={16} className="mr-2" />
                  Add to Cart
                </Button>
                <Button
                  variant="outline"
                  onClick={() => onWishlistToggle(product?.id)}
                  className="px-4"
                >
                  <Icon 
                    name="Heart" 
                    size={16} 
                    className={product?.isWishlisted ? 'fill-current text-cta' : ''} 
                  />
                </Button>
              </div>

              {/* Additional Info */}
              <div className="text-sm text-text-secondary space-y-1 pt-4 border-t border-border">
                <div className="flex items-center space-x-2">
                  <Icon name="Truck" size={14} />
                  <span>Free shipping on orders over $50</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="RotateCcw" size={14} />
                  <span>30-day return policy</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Shield" size={14} />
                  <span>Secure payment</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickViewModal;