import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SavedForLater = ({ items, onMoveToCart, onRemove }) => {
  if (!items || items?.length === 0) return null;

  return (
    <div className="bg-card border border-border rounded-lg p-6 shadow-soft">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-primary">
          Saved for Later ({items?.length})
        </h2>
      </div>
      <div className="space-y-4">
        {items?.map((item) => (
          <div key={item?.id} className="flex flex-col sm:flex-row gap-4 p-4 border border-border rounded-lg">
            {/* Product Image */}
            <div className="flex-shrink-0">
              <Link to={`/product-detail?id=${item?.id}`}>
                <div className="w-20 h-20 overflow-hidden rounded-lg bg-muted">
                  <Image
                    src={item?.image}
                    alt={item?.imageAlt}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </Link>
            </div>

            {/* Product Details */}
            <div className="flex-1 min-w-0">
              <Link to={`/product-detail?id=${item?.id}`}>
                <h3 className="font-medium text-primary text-sm line-clamp-2 hover:text-accent transition-colors">
                  {item?.name}
                </h3>
              </Link>
              <p className="text-text-secondary text-sm mt-1">{item?.brand}</p>
              
              {/* Variant Details */}
              <div className="flex flex-wrap gap-3 mt-1 text-xs text-text-secondary">
                {item?.size && <span>Size: {item?.size}</span>}
                {item?.color && <span>Color: {item?.color}</span>}
              </div>

              {/* Price */}
              <div className="flex items-center gap-2 mt-2">
                {item?.originalPrice && item?.originalPrice > item?.price && (
                  <span className="text-text-secondary text-sm line-through">
                    ${item?.originalPrice?.toFixed(2)}
                  </span>
                )}
                <span className="text-primary font-semibold">
                  ${item?.price?.toFixed(2)}
                </span>
              </div>

              {/* Stock Status */}
              {item?.stock <= 5 && item?.stock > 0 && (
                <p className="text-warning text-xs mt-1 flex items-center gap-1">
                  <Icon name="AlertTriangle" size={12} />
                  Only {item?.stock} left
                </p>
              )}
              
              {item?.stock === 0 && (
                <p className="text-destructive text-xs mt-1 flex items-center gap-1">
                  <Icon name="XCircle" size={12} />
                  Out of stock
                </p>
              )}
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-2 sm:w-32">
              <Button
                variant="outline"
                size="sm"
                fullWidth
                onClick={() => onMoveToCart(item)}
                disabled={item?.stock === 0}
              >
                <Icon name="ShoppingCart" size={14} className="mr-1" />
                Move to Cart
              </Button>
              
              <Button
                variant="ghost"
                size="sm"
                fullWidth
                onClick={() => onRemove(item?.id)}
                className="text-text-secondary hover:text-destructive"
              >
                <Icon name="Trash2" size={14} className="mr-1" />
                Remove
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SavedForLater;