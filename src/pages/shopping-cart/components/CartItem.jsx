import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CartItem = ({ item, onUpdateQuantity, onRemove, onSaveForLater }) => {
  const [quantity, setQuantity] = useState(item?.quantity);
  const [isUpdating, setIsUpdating] = useState(false);

  const handleQuantityChange = async (newQuantity) => {
    if (newQuantity < 1) return;
    
    setIsUpdating(true);
    setQuantity(newQuantity);
    
    // Simulate API call delay
    setTimeout(() => {
      onUpdateQuantity(item?.id, newQuantity);
      setIsUpdating(false);
    }, 300);
  };

  const handleRemove = () => {
    onRemove(item?.id);
  };

  const handleSaveForLater = () => {
    onSaveForLater(item?.id);
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 p-4 bg-card border border-border rounded-lg shadow-subtle">
      {/* Product Image */}
      <div className="flex-shrink-0">
        <div className="w-24 h-24 sm:w-32 sm:h-32 overflow-hidden rounded-lg bg-muted">
          <Image
            src={item?.image}
            alt={item?.imageAlt}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
      {/* Product Details */}
      <div className="flex-1 min-w-0">
        <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
          <div className="flex-1">
            <h3 className="font-medium text-primary text-sm sm:text-base line-clamp-2">
              {item?.name}
            </h3>
            <p className="text-text-secondary text-sm mt-1">
              {item?.brand}
            </p>
            
            {/* Variant Details */}
            <div className="flex flex-wrap gap-3 mt-2 text-sm text-text-secondary">
              {item?.size && (
                <span>Size: <span className="font-medium text-primary">{item?.size}</span></span>
              )}
              {item?.color && (
                <span>Color: <span className="font-medium text-primary">{item?.color}</span></span>
              )}
            </div>

            {/* Stock Status */}
            {item?.stock <= 5 && item?.stock > 0 && (
              <p className="text-warning text-sm mt-2 flex items-center gap-1">
                <Icon name="AlertTriangle" size={14} />
                Only {item?.stock} left in stock
              </p>
            )}
            
            {item?.stock === 0 && (
              <p className="text-destructive text-sm mt-2 flex items-center gap-1">
                <Icon name="XCircle" size={14} />
                Out of stock
              </p>
            )}
          </div>

          {/* Price */}
          <div className="text-right">
            <div className="flex flex-col sm:items-end">
              {item?.originalPrice && item?.originalPrice > item?.price && (
                <span className="text-text-secondary text-sm line-through">
                  ${item?.originalPrice?.toFixed(2)}
                </span>
              )}
              <span className="text-primary font-semibold text-lg">
                ${item?.price?.toFixed(2)}
              </span>
              {item?.originalPrice && item?.originalPrice > item?.price && (
                <span className="text-success text-sm font-medium">
                  Save ${(item?.originalPrice - item?.price)?.toFixed(2)}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mt-4 pt-3 border-t border-border">
          {/* Quantity Controls */}
          <div className="flex items-center gap-2">
            <span className="text-sm text-text-secondary">Qty:</span>
            <div className="flex items-center border border-border rounded-lg">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleQuantityChange(quantity - 1)}
                disabled={quantity <= 1 || isUpdating || item?.stock === 0}
                className="h-8 w-8 p-0 rounded-r-none border-r border-border"
              >
                <Icon name="Minus" size={14} />
              </Button>
              
              <span className="px-3 py-1 text-sm font-medium min-w-[3rem] text-center">
                {isUpdating ? (
                  <Icon name="Loader2" size={14} className="animate-spin mx-auto" />
                ) : (
                  quantity
                )}
              </span>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleQuantityChange(quantity + 1)}
                disabled={quantity >= item?.stock || isUpdating || item?.stock === 0}
                className="h-8 w-8 p-0 rounded-l-none border-l border-border"
              >
                <Icon name="Plus" size={14} />
              </Button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleSaveForLater}
              className="text-text-secondary hover:text-primary"
            >
              <Icon name="Heart" size={16} className="mr-1" />
              Save for Later
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={handleRemove}
              className="text-text-secondary hover:text-destructive"
            >
              <Icon name="Trash2" size={16} className="mr-1" />
              Remove
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;