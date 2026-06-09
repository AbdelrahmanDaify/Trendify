import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ProductGrid = ({ products, viewMode = 'grid' }) => {
  const [wishlistItems, setWishlistItems] = useState(new Set());

  const toggleWishlist = (productId) => {
    setWishlistItems(prev => {
      const newSet = new Set(prev);
      if (newSet?.has(productId)) {
        newSet?.delete(productId);
      } else {
        newSet?.add(productId);
      }
      return newSet;
    });
  };

  const formatPrice = (price, originalPrice) => {
    const isOnSale = originalPrice && originalPrice > price;
    return (
      <div className="flex items-center space-x-2">
        <span className="text-lg font-semibold text-primary">${price}</span>
        {isOnSale && (
          <>
            <span className="text-sm text-text-secondary line-through">${originalPrice}</span>
            <span className="text-xs bg-destructive text-destructive-foreground px-2 py-1 rounded">
              -{Math.round(((originalPrice - price) / originalPrice) * 100)}%
            </span>
          </>
        )}
      </div>
    );
  };

  const renderStars = (rating) => {
    return (
      <div className="flex items-center space-x-1">
        {[1, 2, 3, 4, 5]?.map((star) => (
          <Icon
            key={star}
            name="Star"
            size={12}
            className={star <= rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}
          />
        ))}
      </div>
    );
  };

  if (viewMode === 'list') {
    return (
      <div className="space-y-4">
        {products?.map((product) => (
          <div key={product?.id} className="bg-white border border-border rounded-lg p-4 hover:shadow-soft transition-shadow duration-200">
            <div className="flex space-x-4">
              <div className="relative w-32 h-32 flex-shrink-0">
                <Link to="/product-detail">
                  <Image
                    src={product?.image}
                    alt={product?.imageAlt}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </Link>
                {product?.isNew && (
                  <span className="absolute top-2 left-2 bg-accent text-accent-foreground text-xs px-2 py-1 rounded">
                    New
                  </span>
                )}
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <Link to="/product-detail">
                      <h3 className="text-lg font-medium text-primary hover:text-accent transition-colors duration-200 line-clamp-1">
                        {product?.name}
                      </h3>
                    </Link>
                    <p className="text-sm text-text-secondary mt-1">{product?.brand}</p>
                    <p className="text-sm text-text-secondary mt-2 line-clamp-2">{product?.description}</p>
                    
                    <div className="flex items-center space-x-4 mt-3">
                      {formatPrice(product?.price, product?.originalPrice)}
                      <div className="flex items-center space-x-2">
                        {renderStars(product?.rating)}
                        <span className="text-sm text-text-secondary">({product?.reviews})</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2 mt-3">
                      <span className="text-sm text-text-secondary">Colors:</span>
                      <div className="flex space-x-1">
                        {product?.colors?.map((color, index) => (
                          <div
                            key={index}
                            className="w-4 h-4 rounded-full border border-border"
                            style={{ backgroundColor: color }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-end space-y-2 ml-4">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleWishlist(product?.id)}
                      className="text-text-secondary hover:text-destructive"
                    >
                      <Icon 
                        name="Heart" 
                        size={18} 
                        className={wishlistItems?.has(product?.id) ? 'fill-current text-destructive' : ''} 
                      />
                    </Button>
                    <Button variant="outline" size="sm">
                      Quick Add
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products?.map((product) => (
        <div key={product?.id} className="group bg-white rounded-lg overflow-hidden hover:shadow-soft transition-all duration-300">
          <div className="relative aspect-[3/4] overflow-hidden">
            <Link to="/product-detail">
              <Image
                src={product?.image}
                alt={product?.imageAlt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </Link>
            
            {/* Badges */}
            <div className="absolute top-3 left-3 flex flex-col space-y-2">
              {product?.isNew && (
                <span className="bg-accent text-accent-foreground text-xs px-2 py-1 rounded">
                  New
                </span>
              )}
              {product?.originalPrice && product?.originalPrice > product?.price && (
                <span className="bg-destructive text-destructive-foreground text-xs px-2 py-1 rounded">
                  Sale
                </span>
              )}
            </div>
            
            {/* Wishlist Button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => toggleWishlist(product?.id)}
              className="absolute top-3 right-3 bg-white/80 hover:bg-white text-text-secondary hover:text-destructive backdrop-blur-sm"
            >
              <Icon 
                name="Heart" 
                size={16} 
                className={wishlistItems?.has(product?.id) ? 'fill-current text-destructive' : ''} 
              />
            </Button>
            
            {/* Quick Actions */}
            <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Button variant="default" size="sm" fullWidth>
                Quick Add
              </Button>
            </div>
          </div>
          
          <div className="p-4">
            <Link to="/product-detail">
              <h3 className="font-medium text-primary hover:text-accent transition-colors duration-200 line-clamp-2 mb-1">
                {product?.name}
              </h3>
            </Link>
            <p className="text-sm text-text-secondary mb-2">{product?.brand}</p>
            
            <div className="flex items-center justify-between mb-2">
              {formatPrice(product?.price, product?.originalPrice)}
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-1">
                {renderStars(product?.rating)}
                <span className="text-xs text-text-secondary">({product?.reviews})</span>
              </div>
              
              <div className="flex space-x-1">
                {product?.colors?.slice(0, 3)?.map((color, index) => (
                  <div
                    key={index}
                    className="w-3 h-3 rounded-full border border-border"
                    style={{ backgroundColor: color }}
                  />
                ))}
                {product?.colors?.length > 3 && (
                  <span className="text-xs text-text-secondary">+{product?.colors?.length - 3}</span>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;