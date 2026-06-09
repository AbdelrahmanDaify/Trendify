import React, { useState, useEffect } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const QuickViewModal = ({ product, isOpen, onClose, onAddToCart, onAddToWishlist }) => {
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (product) {
      setSelectedColor(product?.colors?.[0] || '');
      setSelectedSize(product?.sizes?.[0] || '');
      setCurrentImageIndex(0);
      setQuantity(1);
    }
  }, [product]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e?.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !product) return null;

  const productImages = [
    product?.image,
    product?.hoverImage,
    ...(product?.additionalImages || [])
  ]?.filter(Boolean);

  const handleAddToCart = () => {
    onAddToCart({
      ...product,
      selectedColor,
      selectedSize,
      quantity
    });
    onClose();
  };

  const renderStars = (rating) => {
    return (
      <div className="flex items-center space-x-1">
        {[1, 2, 3, 4, 5]?.map((star) => (
          <Icon
            key={star}
            name="Star"
            size={14}
            className={star <= rating ? "text-accent fill-current" : "text-border"}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      {/* Modal */}
      <div className="relative bg-background rounded-lg shadow-elevated max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Close Button */}
        <Button
          variant="ghost"
          size="sm"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-background/80 backdrop-blur-sm"
        >
          <Icon name="X" size={20} />
        </Button>

        <div className="flex flex-col lg:flex-row max-h-[90vh]">
          {/* Product Images */}
          <div className="lg:w-1/2 relative">
            <div className="aspect-square relative">
              <Image
                src={productImages?.[currentImageIndex]}
                alt={product?.imageAlt}
                className="w-full h-full object-cover"
              />
              
              {/* Image Navigation */}
              {productImages?.length > 1 && (
                <>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setCurrentImageIndex(prev => 
                      prev === 0 ? productImages?.length - 1 : prev - 1
                    )}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-background/80 backdrop-blur-sm"
                  >
                    <Icon name="ChevronLeft" size={20} />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setCurrentImageIndex(prev => 
                      prev === productImages?.length - 1 ? 0 : prev + 1
                    )}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-background/80 backdrop-blur-sm"
                  >
                    <Icon name="ChevronRight" size={20} />
                  </Button>
                </>
              )}

              {/* Badges */}
              <div className="absolute top-4 left-4 flex flex-col space-y-2">
                {product?.isNew && (
                  <span className="bg-accent text-accent-foreground text-xs px-2 py-1 rounded">
                    New
                  </span>
                )}
                {product?.discount && (
                  <span className="bg-cta text-cta-foreground text-xs px-2 py-1 rounded">
                    -{product?.discount}%
                  </span>
                )}
              </div>
            </div>

            {/* Thumbnail Navigation */}
            {productImages?.length > 1 && (
              <div className="flex space-x-2 p-4 overflow-x-auto">
                {productImages?.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`flex-shrink-0 w-16 h-16 rounded border-2 overflow-hidden ${
                      currentImageIndex === index ? 'border-accent' : 'border-border'
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`Product view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Details */}
          <div className="lg:w-1/2 p-6 overflow-y-auto">
            <div className="space-y-6">
              {/* Product Info */}
              <div>
                <p className="text-sm text-text-secondary mb-1">{product?.brand}</p>
                <h2 className="text-2xl font-medium text-primary mb-2">{product?.name}</h2>
                
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-semibold text-primary">${product?.price}</span>
                    {product?.originalPrice && product?.originalPrice > product?.price && (
                      <span className="text-lg text-text-secondary line-through">
                        ${product?.originalPrice}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex items-center space-x-4 mb-4">
                  {renderStars(product?.rating)}
                  <span className="text-sm text-text-secondary">
                    ({product?.reviewCount} reviews)
                  </span>
                </div>

                <p className="text-text-secondary mb-6">{product?.description}</p>
              </div>

              {/* Color Selection */}
              {product?.colors && product?.colors?.length > 0 && (
                <div>
                  <h4 className="font-medium text-primary mb-3">Color</h4>
                  <div className="flex flex-wrap gap-2">
                    {product?.colors?.map((color, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedColor(color)}
                        className={`w-8 h-8 rounded-full border-2 ${
                          selectedColor === color ? 'border-accent' : 'border-border'
                        }`}
                        style={{ backgroundColor: color }}
                        title={color}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Size Selection */}
              {product?.sizes && product?.sizes?.length > 0 && (
                <div>
                  <h4 className="font-medium text-primary mb-3">Size</h4>
                  <div className="flex flex-wrap gap-2">
                    {product?.sizes?.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-4 py-2 border rounded text-sm font-medium transition-colors ${
                          selectedSize === size
                            ? 'border-accent bg-accent text-accent-foreground'
                            : 'border-border text-primary hover:border-accent'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity */}
              <div>
                <h4 className="font-medium text-primary mb-3">Quantity</h4>
                <div className="flex items-center space-x-3">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    disabled={quantity <= 1}
                  >
                    <Icon name="Minus" size={16} />
                  </Button>
                  <span className="w-12 text-center font-medium">{quantity}</span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    <Icon name="Plus" size={16} />
                  </Button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <Button
                  variant="default"
                  fullWidth
                  onClick={handleAddToCart}
                  disabled={!selectedSize || !selectedColor}
                >
                  <Icon name="ShoppingBag" size={18} className="mr-2" />
                  Add to Cart - ${(product?.price * quantity)?.toFixed(2)}
                </Button>
                
                <Button
                  variant="outline"
                  fullWidth
                  onClick={() => onAddToWishlist(product?.id)}
                >
                  <Icon name="Heart" size={18} className="mr-2" />
                  Add to Wishlist
                </Button>
              </div>

              {/* Product Features */}
              <div className="border-t border-border pt-6">
                <div className="space-y-3 text-sm">
                  <div className="flex items-center space-x-2">
                    <Icon name="Truck" size={16} className="text-text-secondary" />
                    <span className="text-text-secondary">Free shipping on orders over $75</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="RotateCcw" size={16} className="text-text-secondary" />
                    <span className="text-text-secondary">30-day return policy</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Shield" size={16} className="text-text-secondary" />
                    <span className="text-text-secondary">Secure checkout</span>
                  </div>
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