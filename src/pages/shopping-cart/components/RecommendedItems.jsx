import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const RecommendedItems = ({ items, onAddToCart }) => {
  if (!items || items?.length === 0) return null;

  return (
    <div className="bg-card border border-border rounded-lg p-6 shadow-soft">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-primary">You Might Also Like</h2>
        <Link to="/search-results" className="text-accent hover:text-accent/80 text-sm font-medium">
          View All
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items?.slice(0, 3)?.map((item) => (
          <div key={item?.id} className="group border border-border rounded-lg p-4 hover:shadow-soft transition-shadow">
            <Link to={`/product-detail?id=${item?.id}`} className="block">
              <div className="aspect-square overflow-hidden rounded-lg bg-muted mb-3">
                <Image
                  src={item?.image}
                  alt={item?.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <h3 className="font-medium text-primary line-clamp-2 mb-2 group-hover:text-accent transition-colors">
                {item?.name}
              </h3>
              
              <p className="text-sm text-text-secondary mb-2">{item?.brand}</p>
              
              <div className="flex items-center gap-2 mb-3">
                {item?.originalPrice && item?.originalPrice > item?.price && (
                  <span className="text-sm text-text-secondary line-through">
                    ${item?.originalPrice?.toFixed(2)}
                  </span>
                )}
                <span className="font-semibold text-primary">
                  ${item?.price?.toFixed(2)}
                </span>
                {item?.originalPrice && item?.originalPrice > item?.price && (
                  <span className="text-xs bg-success text-success-foreground px-2 py-1 rounded">
                    {Math.round(((item?.originalPrice - item?.price) / item?.originalPrice) * 100)}% OFF
                  </span>
                )}
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-3">
                <div className="flex items-center">
                  {[...Array(5)]?.map((_, i) => (
                    <Icon
                      key={i}
                      name="Star"
                      size={12}
                      className={i < Math.floor(item?.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}
                    />
                  ))}
                </div>
                <span className="text-xs text-text-secondary">({item?.reviews})</span>
              </div>
            </Link>

            <Button
              variant="outline"
              size="sm"
              fullWidth
              onClick={() => onAddToCart(item)}
              className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
            >
              <Icon name="ShoppingCart" size={14} className="mr-2" />
              Add to Cart
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendedItems;