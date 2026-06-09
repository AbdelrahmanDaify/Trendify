import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Select from '../../../components/ui/Select';

const ProductInfo = ({ product, onAddToCart, onAddToWishlist }) => {
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState(product?.colors?.[0]);
  const [quantity, setQuantity] = useState(1);

  const sizeOptions = product?.sizes?.map(size => ({
    value: size?.value,
    label: size?.label,
    disabled: !size?.available
  }));

  const handleQuantityChange = (change) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1 && newQuantity <= 10) {
      setQuantity(newQuantity);
    }
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size');
      return;
    }
    onAddToCart({
      size: selectedSize,
      color: selectedColor,
      quantity
    });
  };

  return (
    <div className="space-y-6">
      {/* Product Title & Price */}
      <div className="space-y-2">
        <div className="flex items-start justify-between">
          <h1 className="text-2xl lg:text-3xl font-medium text-primary leading-tight">
            {product?.name}
          </h1>
          <button
            onClick={onAddToWishlist}
            className="p-2 hover:bg-muted rounded-full transition-colors"
          >
            <Icon name="Heart" size={24} />
          </button>
        </div>
        
        <div className="flex items-center space-x-3">
          <span className="text-2xl font-semibold text-primary">
            ${product?.price}
          </span>
          {product?.originalPrice && (
            <span className="text-lg text-text-secondary line-through">
              ${product?.originalPrice}
            </span>
          )}
          {product?.discount && (
            <span className="bg-cta text-cta-foreground px-2 py-1 rounded text-sm font-medium">
              {product?.discount}% OFF
            </span>
          )}
        </div>
      </div>
      {/* Rating & Reviews */}
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-1">
          {[...Array(5)]?.map((_, i) => (
            <Icon
              key={i}
              name="Star"
              size={16}
              className={i < Math.floor(product?.rating) ? 'text-accent fill-current' : 'text-border'}
            />
          ))}
          <span className="text-sm font-medium ml-2">{product?.rating}</span>
        </div>
        <span className="text-sm text-text-secondary">
          ({product?.reviewCount} reviews)
        </span>
        <button className="text-sm text-accent hover:underline">
          Read Reviews
        </button>
      </div>
      {/* Product Description */}
      <div className="space-y-2">
        <p className="text-text-secondary leading-relaxed">
          {product?.description}
        </p>
      </div>
      {/* Color Selection */}
      <div className="space-y-3">
        <h3 className="font-medium text-primary">
          Color: <span className="font-normal">{selectedColor?.name}</span>
        </h3>
        <div className="flex items-center space-x-3">
          {product?.colors?.map((color) => (
            <button
              key={color?.value}
              onClick={() => setSelectedColor(color)}
              className={`w-10 h-10 rounded-full border-2 transition-all ${
                selectedColor?.value === color?.value
                  ? 'border-primary shadow-md scale-110'
                  : 'border-border hover:border-accent'
              }`}
              style={{ backgroundColor: color?.hex }}
              title={color?.name}
            />
          ))}
        </div>
      </div>
      {/* Size Selection */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="font-medium text-primary">Size</h3>
          <button className="text-sm text-accent hover:underline flex items-center space-x-1">
            <Icon name="Ruler" size={14} />
            <span>Size Guide</span>
          </button>
        </div>
        <Select
          options={sizeOptions}
          value={selectedSize}
          onChange={setSelectedSize}
          placeholder="Select size"
          className="w-full"
        />
      </div>
      {/* Size Fit Predictor */}
      <div className="bg-muted p-4 rounded-lg">
        <div className="flex items-center space-x-2 mb-2">
          <Icon name="Target" size={16} className="text-accent" />
          <span className="font-medium text-sm">Size Fit Predictor</span>
        </div>
        <p className="text-sm text-text-secondary mb-3">
          Based on your measurements, we recommend size <strong>M</strong> for the best fit.
        </p>
        <button className="text-sm text-accent hover:underline">
          Update my measurements
        </button>
      </div>
      {/* Quantity & Add to Cart */}
      <div className="space-y-4">
        <div className="flex items-center space-x-4">
          <span className="font-medium text-primary">Quantity:</span>
          <div className="flex items-center border border-border rounded-lg">
            <button
              onClick={() => handleQuantityChange(-1)}
              className="p-2 hover:bg-muted transition-colors"
              disabled={quantity <= 1}
            >
              <Icon name="Minus" size={16} />
            </button>
            <span className="px-4 py-2 font-medium min-w-[3rem] text-center">
              {quantity}
            </span>
            <button
              onClick={() => handleQuantityChange(1)}
              className="p-2 hover:bg-muted transition-colors"
              disabled={quantity >= 10}
            >
              <Icon name="Plus" size={16} />
            </button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <Button
            onClick={handleAddToCart}
            className="flex-1"
            iconName="ShoppingBag"
            iconPosition="left"
          >
            Add to Cart
          </Button>
          <Button
            variant="outline"
            className="flex-1"
            iconName="Zap"
            iconPosition="left"
          >
            Buy Now
          </Button>
        </div>
      </div>
      {/* Stock Status */}
      <div className="flex items-center space-x-2 text-sm">
        <Icon name="Package" size={16} className="text-success" />
        <span className="text-success font-medium">In Stock</span>
        <span className="text-text-secondary">- Only 3 left!</span>
      </div>
      {/* Delivery Info */}
      <div className="space-y-3 pt-4 border-t border-border">
        <div className="flex items-center space-x-3">
          <Icon name="Truck" size={16} className="text-text-secondary" />
          <div>
            <p className="text-sm font-medium">Free delivery on orders over $50</p>
            <p className="text-xs text-text-secondary">Estimated delivery: 3-5 business days</p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <Icon name="RotateCcw" size={16} className="text-text-secondary" />
          <div>
            <p className="text-sm font-medium">30-day return policy</p>
            <p className="text-xs text-text-secondary">Free returns on all orders</p>
          </div>
        </div>
      </div>
      {/* Availability Notifications */}
      <div className="bg-secondary p-4 rounded-lg">
        <div className="flex items-center space-x-2 mb-2">
          <Icon name="Bell" size={16} className="text-accent" />
          <span className="font-medium text-sm">Get notified</span>
        </div>
        <p className="text-sm text-text-secondary mb-3">
          Want to know when this item is back in stock or goes on sale?
        </p>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            Restock Alert
          </Button>
          <Button variant="outline" size="sm">
            Price Drop Alert
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;