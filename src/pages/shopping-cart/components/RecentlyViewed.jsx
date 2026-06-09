import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const RecentlyViewed = ({ items, onAddToCart }) => {
  if (!items || items?.length === 0) return null;

  return (
    <div className="bg-card border border-border rounded-lg p-6 shadow-soft">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-primary">Recently Viewed</h2>
        <Link to="/search-results" className="text-accent hover:text-accent/80 text-sm font-medium">
          View All
        </Link>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {items?.slice(0, 4)?.map((item) => (
          <div key={item?.id} className="group">
            <Link to={`/product-detail?id=${item?.id}`} className="block">
              <div className="aspect-square overflow-hidden rounded-lg bg-muted mb-2">
                <Image
                  src={item?.image}
                  alt={item?.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <h3 className="text-sm font-medium text-primary line-clamp-2 mb-1 group-hover:text-accent transition-colors">
                {item?.name}
              </h3>
              
              <div className="flex items-center gap-2 mb-2">
                {item?.originalPrice && item?.originalPrice > item?.price && (
                  <span className="text-xs text-text-secondary line-through">
                    ${item?.originalPrice?.toFixed(2)}
                  </span>
                )}
                <span className="text-sm font-semibold text-primary">
                  ${item?.price?.toFixed(2)}
                </span>
              </div>
            </Link>

            <Button
              variant="outline"
              size="sm"
              fullWidth
              onClick={() => onAddToCart(item)}
              className="text-xs"
            >
              <Icon name="Plus" size={14} className="mr-1" />
              Add to Cart
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentlyViewed;